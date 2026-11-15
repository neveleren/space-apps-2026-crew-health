# Security and privacy: what is protected, and what is not

This is a hackathon demonstration, not a certified medical system. No security assessor, no flight surgeon and no NASA office has reviewed it. It shows how the program would meet NASA's asks for crew medical data: secured handling, storing and transmission of medical records [V1 7003], protection of private data and secure transmission [V2 10125], and the ISS crew code of conduct, under which other crewmembers may not use or disclose a crewmember's medical information without consent (14 CFR 1214.403). The rules, with their sources and which numbers are drafts, are data in `src/security.js` (`SECURITY_RULES`) and `src/privacy.js` (`PIN_RULES`).

## Protected in this version

| What | How | Checked by |
|---|---|---|
| Private files | `data`, `.git`, `tests`, `tools`, `node_modules`, `brainstorm`, `demo-keys` and every name that starts with a dot are never served. Names are compared without letter case and without trailing dots or spaces, as Windows reads them; back slashes, colons and stream names are refused; each path is checked again under the name the disk itself uses; the data folder is refused wherever `DATA_DIR` puts it. | `tests/serve.test.js` |
| Host names | Only `127.0.0.1`, `localhost`, `[::1]`, the exact `HOST` address and the names in `HOSTS` are answered. This stops DNS rebinding. | `tests/serve.test.js` |
| Writes | Only `Content-Type: application/json` (a form or `text/plain` from another site is refused); only from this program's own pages (`Origin`, `Sec-Fetch-Site`); no CORS preflight is ever granted. | `tests/serve.test.js` |
| Event contents | Allow-list check of every event: kind, person id, switches, a measure of `src/config.js` with a value the machine can read (a symptom or a medicine by the quick logs' own rules), the context "exercise" for a strap reading during a workout, a message topic as a short id (the conference summary, the letter to the psychologist, the call request), messages of up to 6,000 characters, no time more than 5 minutes ahead (draft), size limits (drafts); a step of the alert log only as an alert id, its step, level and system and, where the step has them, how it was acknowledged or a Bedford rating from 1 to 10, never the alert's text; a drill mark only as the ISO time the drill started, never after the event. Only the checked fields are stored. | `tests/serve.test.js`, `tests/analog.test.js` |
| Who reads what | The crew screen can ask for one person plus the ship's cabin readings: `/api/events?person=<id>`. The whole list, `/api/events?all=1`, is the engineering view for the technical page. The Medical record screen asks for nothing more: it shows only what the crew screen already holds of the signed-in person. The alert log (what was shown, acknowledged, read, cleared or rated) stays in the person's own file: a crewmate gets only alarm lines, never these steps. | `tests/serve.test.js`, `tests/store.test.js`, `tests/analog.test.js` |
| The study export | For an analog test, `tools/study-export.mjs` and the technical view's "Study export" write the alert steps and a summary per subject as CSV, by id only: no names, measures, values or texts, and no alert about the mind, the cycle, symptoms or medicines. A cell that starts with `=`, `+`, `-` or `@` gets a leading apostrophe, so a spreadsheet never runs it. The command line writes into `data/study/`, which is never served. | `tests/analog.test.js` |
| Messages to a doctor | Each message is also written to `data/outbox/` (one file per message, the hand-over point for the station's downlink). Without a key on this computer, a message to the doctor on board is still kept and one to Earth is refused, so the screen can say so. Who it is for, from whom and when stay readable for routing; the text is sealed for the flight surgeon's public key: ECDH on P-256 with a fresh key per message, HKDF-SHA-256, AES-256-GCM with a random 96-bit IV; the readable fields are bound to the seal. The station never needs the private key. This version uses a DEMO key pair (`demo-keys/`). | `tests/serve.test.js`, `node tools/read-outbox.mjs` |
| An optional PIN | Per person, for the crew screen: only a PBKDF2-HMAC-SHA256 hash (600,000 iterations, a random 16-byte salt) is kept; 4 to 12 digits; locked after 10 wrong tries in a row (drafts after NIST SP 800-63B-4 and OWASP). | `tests/privacy.test.js` |
| The pages | Every response carries a Content-Security-Policy (scripts only from this program and the hash of the one inline script; WebAssembly allowed for the camera models; no plugins; no framing), `Referrer-Policy: no-referrer`, `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Permissions-Policy` (camera and Bluetooth for this program only) and `Cross-Origin-Resource-Policy: same-origin`. Tried in Chromium on 15 Nov 2026: an injected inline script, `eval`, `new Function` and framing were refused; the camera models still ran on both screens. | `tests/serve.test.js` |
| Nothing leaves the computer | The camera runtime (MediaPipe 1.1.1) has a built-in usage log that posts to Google (`https://odml.pa.googleapis.com/v1/log`) every minute and when a model closes. The policy blocks it, so the browser shows a blocked request in its console when the camera stops. No video was ever in that log, and now nothing is sent at all. | Chromium, 15 Nov 2026 |
| Third-party files | `SBOM.json` (CycloneDX 1.6: supplier, name, version, identifier, licence, hash, dependency, author, time, after the NTIA minimum elements) and `SHA256SUMS`. On 15 Nov 2026 the MediaPipe files were byte for byte those of the npm package, the models matched Google's published objects, and the icons matched lucide-static 1.66.0. `.gitattributes` keeps these files byte for byte on every computer. | `tests/supply.test.js`, `sha256sum -c SHA256SUMS` |

## Not protected (honestly)

- **No sign-in and no roles.** The server cannot tell who sends a request. Anyone at this computer, or on the network when `HOSTS` opens it, can read every person's data through `?all=1` or in the files of `data/`.
- **Data at rest are plain text.** `data/<id>.jsonl` holds the readings, mood, cycle and the text of the messages to the doctor, so the screen can show them. Only the outbox copy is encrypted. The computer's own disk encryption is the only protection of these files today.
- **The PIN is a privacy screen, not a lock.** Its hash lives in one browser on one computer, under one address (`127.0.0.1` and `localhost` are two addresses, each with its own storage); the browser's developer tools can delete it, and a short PIN can be found from a copied hash by trying every number. It does not encrypt anything.
- **No sender verification.** The seal hides the text, but anyone with the public key could seal a message in someone else's name; NASA-STD-3001 [V2 10125] also asks for sender verification, which needs a signature by a key of the sender (not built).
- **The demo key is public.** Anyone can open what it sealed. A real deployment makes its own key pair on the ground and gives the station only the public key (`OUTBOX_KEY_FILE`).
- **The downlink itself is not built.** Messages wait in `data/outbox/` with status `queued`; nothing sends them or marks them sent.
- **Plain http.** Fine on the same computer (loopback); across a network it needs a TLS proxy in front.
- **No rate limit and no audit log.** A local program can fill the disk; changes of the switches are kept in the events but not shown as an audit list.
- **The static copy (GitHub Pages) has none of the server's protections.** Data stay in each visitor's own browser storage, no security headers are sent, and the camera runtime's usage log is not blocked there.
- **Not tested from outside.** No penetration test, no threat model approved by anyone; the thresholds marked draft wait for the team and the flight surgeons.

## How to check

```
npm test                         all automatic checks
node tools/sbom.mjs --check      the SBOM and the checksums against the files
sha256sum -c SHA256SUMS          the same with standard tools
node tools/read-outbox.mjs       open the queued messages with the DEMO private key, as the ground would
```

Written by Claude (Anthropic), an AI system, for team Just For Fun; the team decides what is enough.
