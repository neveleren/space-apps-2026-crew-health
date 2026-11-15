# Crew Health Console

Crew Health Console gathers an astronaut's health readings in one program that runs with no internet, judges them by plain automation against cited norms and red limits, and tells the astronaut in one dated sentence how body and mind are doing, why, and what to do.

Team Just For Fun (Kyiv), NASA Space Apps Challenge 2026, challenge "Create Health Monitoring Software for Astronauts on Space Missions".
This is a hackathon prototype. It is not a medical device, and NASA has not reviewed, approved, endorsed or used it. NASA appears here only as a source of standards and data.

## Links

| What | Where |
|---|---|
| Crew screen (public copy) | https://neveleren.github.io/space-apps-2026-crew-health/ |
| Technical view | https://neveleren.github.io/space-apps-2026-crew-health/machine.html |
| Code | https://github.com/neveleren/space-apps-2026-crew-health |
| Demo video | [presentation/demo.mp4](presentation/demo.mp4) |
| Slides (7) | [presentation/index.html](presentation/index.html), shown at https://neveleren.github.io/space-apps-2026-crew-health/presentation/; also as [presentation/slides.pdf](presentation/slides.pdf) |

- The public copy runs without our server: what you enter stays in your own browser, and the server's protections do not apply there.
- The four example crew members and all their readings are made up and marked as example data. The four Inspiration4 participants are real: their de-identified blood tests come from NASA OSDR.
- The demo video shows the app with English captions and a visible SI mark that names Claude.

## The problem, in NASA's own words

> "On long missions, astronauts carry much of the responsibility for spotting these changes in themselves."

The challenge statement, [NASA Space Apps Challenge 2026](https://www.spaceappschallenge.org/2026/challenges/health-monitoring-software/).

> "Currently data is spread across many systems and often requires cumbersome transfer and packaging; crew often cannot access this data."
>
> "Exploration mission communication delays necessitate a paradigm shift from ground to onboard."

NASA's Crew Health and Performance Integrated Data System Platform project (CHP-IDSP), Aerospace Medical Association meeting 2025, slide "Background" ([NTRS PDF](https://ntrs.nasa.gov/api/citations/20250004859/downloads/CHP-IDSP_AsMA%202025.pdf)).

> "h. Assessing, recording, monitoring, and trending vital signs and additional physiological and behavioral health signs."
>
> "t. Means of providing autonomous medical care and advanced life support."

Two of the in-mission capabilities that every program must provide under NASA-STD-3001 Volume 1 Rev C, requirement [V1 3004] ([PDF](https://www.nasa.gov/wp-content/uploads/2023/11/nasa-std-3001-vol-1-rev-c-with-signature.pdf)).

Our answer: one place for the crew's readings that the crew can see themselves; judgement on board by automation that needs no link and no AI; a message for the doctor that waits, sealed, in an outbox for the downlink (the downlink itself is not part of this prototype).

## What the astronaut sees

These screenshots show the crew screen with the made-up example flight. The app's code was generated with SI (Claude) from the team's design.

**1. Today.** Sign in as one of four made-up crew members (each can set a PIN) or one of four real Inspiration4 participants.

![Today on a calm day: the dated sentence, the check-in, the quick logs and Coming up](presentation/img/today.png)

- One dated sentence about body and mind, for example "As of 15 Nov 2026, your physical condition needs attention, your mental condition is excellent." When something needs the person, level chips, the reasons and the buttons Details, Analyse with AI and Message the doctor appear under it.
- A daily check-in (mood; energy as one of seven statements of the Samn-Perelli fatigue scale, from "fully alert" to "completely exhausted"; sleep quality; and an optional private "What is weighing on you?"), a quick symptom log and a two-tap medicine log from an ISS kit list.
- Coming up (an example schedule, shown with the example flight) lists the next three of: the weekly private medical conference (with "Prepare", a drafted 7-day summary the person edits), the talk with the psychologist every two weeks, the monthly thinking test and the next eye check. The card also names the next event of the example mission calendar.
- A status line that never scrolls away: flight day, GMT clock, a Systems tag (automation, AI, mission, link, doctor, saving, sound), Messages, and a Help key you hold for 2 s (a single press from a screen reader or a switch asks "Call for help now?"). A crewmate's alarm line appears in it.

**2. A "?" on cards, rows and tags.**

- For every measure: what it is, which device measures it on the ISS (with links), how the value reaches the program, and how this value was measured.
- Each measure has its own page: the level, "What to do" steps with check boxes when there is an alert, a chart with periods and custom dates, the normal band, a forecast to landing where one applies, a table view, the norm and the red limits with their sources, and a form to log a reading by hand (with plausibility limits).
- Eyes: a self-check with an Amsler grid and one-tap answers; OCT retinal thickness charted against NASA's 20 micrometre line for the earliest sign of SANS, with 55 micrometres or more as a red limit at "needs action" (both drafts).

**3. Mind support.**

![The team's AI support offer after hard days, with the choice: an anonymous session with AI, telling the doctor on Earth, or small things that help](presentation/img/mind.png)

- The AI support offer in the team's own words. It can name a topic the person marked on 3 or more of the last 7 days (a placeholder rule). The choice: "Start an anonymous session with AI" or "Tell the doctor on Earth".
- No AI model is connected in this version. The session panel still opens: a privacy card, then "Help now", short coping steps by topic, a write-it-out box that is not saved, and "Tell the doctor on Earth".
- "Help now" leads to a person: talk to a crewmate now, request a private call with the ground (the request is shown before it is sent), or open my plan. It also opens by itself when risk words are typed in any box of the mind tools. The word list is a plain draft list, not AI, and nothing is sent by itself.
- Tools that work with the AI off: small things that help (each with its source), a private journal with a letter to the psychologist, my plan for hard days, five-step problem solving, a 3-minute Earth break with NASA photos from the ISS, a 3-minute reaction test.

**4. Settings and connections.**

![Settings: the Connections list, each row marked Working, Simulated or Planned](presentation/img/connections.png)

- Every connection says Working, Simulated or Planned, with its sources.
- Sound and display (a sound test; dark, light or follow the device), mission profile (ISS, Moon, Mars: the signal delay), camera, "I am exercising" (turns itself off after 2 hours, draft), save a copy of your data and bring it back, the PIN, and the simulation switches.

**5. An analog test, for example in NASA's HERA.** The program measures itself (drafts for the team):

- An alert log: when an alert shows, is acknowledged (Mark as read, Mark all as read, the Messages key, Silence, Silence all sounds), clears or is called off as a false alarm, that step is saved in the person's own record, one entry per alert and step and no text. With the station server, every screen where the person is signed in then shows the same read state, and an acknowledged alarm stops sounding on the others at their next look (15 s). Each message says when it was acknowledged, how, and how many seconds after it showed.
- A Drill switch in Settings: the screen says DRILL, everything new is marked as the drill's, alarms sound and reach the crew and the doctor as usual with the word DRILL, and drill readings never count in the levels, the charts, the summaries for the doctor or the FHIR file. It is off at every sign-in and ends by itself after 60 minutes (a draft).
- After an urgent alarm is acknowledged, an optional workload rating on the Bedford scale, which NASA-STD-3001 Vol 2 names for crew interfaces [V2 5007], in the words of NASA's own figure.
- A study export of all subjects, by id only, with no alert about the mind, the cycle, symptoms or medicines: `node tools/study-export.mjs`, or "Study export" on the technical view.

## Working now, simulated, planned

| Part | Status | Note |
|---|---|---|
| Crew screen: sign-in, Today, check-in, quick logs, all measures, charts, forecast, hand entry, messages | Working | Runs offline |
| Levels, red limits, crew alarm lines, alarm tones, Help key | Working | Every threshold is a draft for flight surgeons |
| Mind support tools | Working | Journal and plan stay in this browser, not encrypted |
| Alert log, drill, Bedford rating, study export (analog test) | Working, not yet used in a test with people | Drafts: the drill's 60 minutes, which alarms ask for a rating |
| Camera: a hand on the chest asks "Are you okay?", a sleeping person is ignored | Working, as a demonstration | Google's models run on the computer; no video stored or sent; off after an hour |
| Server: one file per person, per-person reads, checked events, sealed outbox | Working | Uses a public DEMO key |
| Bluetooth heart rate strap, thermometer, blood pressure cuff, pulse oximeter | Working, not yet tried with a real device | Standard Bluetooth profiles; Chrome or Edge |
| CSV import: Hexoskin, Astroskin, Actiware, Svantek, or chosen columns | Working, not yet tried with a real export | Tested with small files written from the makers' documents; the Svantek layout is a guess |
| FHIR R4 export, calendar file (iCalendar) | Working | The FHIR file marks example data with the HTEST test label |
| NASA OSDR Inspiration4 blood tests | Working | A saved copy, offline |
| ISS cabin air (NASA ISSLive), space weather (NOAA) | Working, Earth demos, off by default | Need internet; cabin O2 and space weather are shown, not saved |
| Example flight; device buttons on the technical view | Simulated | Made-up readings, marked as such |
| Link to Earth, doctor on board, AI working | Simulated | Switches in Settings. The downlink is not built: messages wait in `data/outbox/` |
| An AI model for analysis and support talks | Planned | Not connected; which AI is the team's decision |
| NASA: station server and downlink, HDTN, Chiron medical record, live crew plan, ISS FIT, Crew Active Dosimeter, astronaut archives. ESA: EveryWear. Others: blood analyzers, DICOM images, watch data | Planned | Each needs the partner named in its row |
| Sign-in with roles, encryption at rest, sender verification, TLS | Not built | Listed under "Not protected" in [docs/SECURITY.md](docs/SECURITY.md) |

## How it decides

- **Automation first.** Every reading goes through one machine (`src/engine.js`) and its cell in `src/config.js`, which holds the norm, any red limits and their public sources. Judging a reading or raising an alarm needs no AI.
- **Levels.** Fine, attention (blue), needs action (yellow), urgent (red), and stale data (cyan). The colours mean what NASA-STD-3001 Volume 2 says they mean, and every level also has an icon and a word: colour is never the only cue.
- **Red limits.** One reading past a published limit counts at once. Examples: SpO2 88% or lower is urgent (MedlinePlus); systolic pressure above 180 is urgent (NHLBI); glucose below 54 mg/dL is urgent (ADA), and its first step is ADA's 15-15 rule; 38.0 °C or more needs action (CDC); 35.0 °C or less is urgent (MedlinePlus, NEWS2); cabin pressure below 34.5 kPa is urgent (NASA-STD-3001 Vol 2). All are drafts.
- **Crew alarm.** An urgent red limit, a camera alarm or the Help key alerts the person and the crew on board, and writes a message to the doctor by itself: to the doctor on board, or sealed in the outbox for Earth, where it waits while there is no link.
  - Every crew screen where someone is signed in asks the station computer for new alarm lines every 15 s (a draft), so the line reaches a crewmate's open screen within seconds.
  - An urgent alarm repeats its tone every 4 s and its spoken line every 16 s until someone acknowledges it (drafts). "Sound off" never mutes it.
  - A crewmate sees one line, for example "Tom needs help now: Blood oxygen (SpO2) 85 %.", and nothing else from that record.
  - "I am okay: false alarm" writes an all clear that takes the line away on every screen, and tells the doctor.
  - Under the ISS crew code of conduct (14 CFR 1214.403), other crewmembers may not use or disclose a crewmember's medical information without consent, "except as required for the immediate safety of ISS crewmembers".
- **Analog test.** Each alert's steps (shown, acknowledged, read, cleared, false alarm, workload) are events of the person's own record, never shared with crewmates. A drill's readings go into a second machine used only for the drill's alarms; the machine that judges the person never sees them. A crew line is never marked as a drill while a real urgent sign from before the drill is present, and "I am okay: false alarm" on a real alarm during a drill is a real answer: the alarm is called off in the record and its all clear stays real.
- **Expected changes are information.** Changes that flight studies call common show on the measure's page and never raise the headline: a resting temperature up to about 1 °C above the usual range, built up over the first months of flight (Stahn 2017) and always below 38.0 °C; sleep of 5 hours or more (Barger 2014).
- **Watch rule.** A daily vital sign just outside its normal range (inside its red limits) is watched first: attention after 3 readings in a row outside, needs action after 7. Two or more vital signs outside within 24 hours count at once as attention (after NEWS2). Heart rate and breathing rate readings marked as exercise are recorded, not judged against the resting range; their low red limits still count.
- **Forecast.** A straight line to landing. It raises an alert only for slow measures (VO2max, strength, body mass, radiation, hearing) or a line that clearly outruns the daily scatter. It is not a validated medical model, and the page says so.
- **No fresh data.** Then the sentence says "not enough fresh data to judge" instead of "excellent".
- **Mind check-ins.** Low mood or low energy on 6 or more of the last 14 days gives attention, on 8 or more needs action. Low energy is a fatigue answer of 5 ("moderately tired") or more of 7; the scale has no formal cut-off, so this is a draft. Placeholders until the team chooses a questionnaire.
- **Ship.** Cabin CO2, oxygen, pressure, temperature and noise are compared with NASA limits. A ship alarm reaches every crew screen and points to the ship's procedures.

## Privacy and security

Full detail, including what is not protected: [docs/SECURITY.md](docs/SECURITY.md).

- The crew screen asks the server for one person's records only, plus the ship's cabin readings and crewmates' alarm lines.
- An optional PIN per person: only a PBKDF2-HMAC-SHA256 hash (600,000 iterations, random 16-byte salt) is kept, in this browser. It is a privacy screen, not a lock.
- The server answers only known host names, saves only JSON from its own pages, checks every event against `src/config.js`, never serves `data/`, `tests/`, `tools/`, `demo-keys/` or dot files, and sends security headers with a Content Security Policy. The pages carry the same policy as a meta tag for the static copy.
- Each message to a doctor is sealed in `data/outbox/` for the flight surgeon's public key (ECDH P-256, HKDF-SHA-256, AES-256-GCM). The key pair in `demo-keys/` is a public DEMO key, never a real one.
- Not protected yet: the server has no sign-in or roles (the technical view reads everyone); `data/<id>.jsonl` is plain text; there is no sender verification and no TLS.
- The alert log is the person's own: a crewmate gets only alarm lines, never these steps. The study export names people only by id and leaves out every alert about the mind, the cycle, symptoms or medicines; the command line writes it into `data/study/`, which the server never serves.
- `SBOM.json` (CycloneDX 1.6) lists the 6 third-party components (the camera runtime and its two models, the Lucide icons, two fonts) with their hashes, and `SHA256SUMS` holds the hashes of their 15 files; `npm test` checks both. The NASA photos and data are credited below.

## Connections

Full list with sources and the tests run against the real services: [docs/INTEGRATIONS.md](docs/INTEGRATIONS.md).

- No NASA crew health system is connected. NASA's crew health systems have no public interface, so they are Planned rows that name who must agree.
- The two live links are public services on Earth, NASA ISSLive and NOAA's Space Weather Prediction Center. Both are off by default, and the program works the same without them.
- The other working links use open standards: Bluetooth health profiles, HL7 FHIR R4 (LOINC codes, UCUM units, Device and Provenance), iCalendar and CSV. The Inspiration4 blood tests are a saved copy of NASA OSDR data.

## Mind support

Why each tool is there, with its sources and guardrails: [docs/MIND_SUPPORT.md](docs/MIND_SUPPORT.md).

- Built on NASA studies of recent years and on studies of support with AI. Each card names its source and a badge: "used on the ISS", "NASA research" or "study on Earth".
- Private by default, and a person first: "Talk to a person now" sits at the top of the plan for hard days, and the AI session offers "Help now" and "Tell the doctor on Earth". It says plainly that it is a program, never reads emotion from the camera or voice, keeps its signals calm and works offline.
- No questionnaire was added: which one is the team's decision.

## NASA requirements

The full traceability matrix, with the evidence for each row: [docs/REQUIREMENTS.md](docs/REQUIREMENTS.md).

- **Display, met in part:** the crew screen follows the Display Standard of NASA-STD-3001 Vol 2 Rev F, Appendix F [V2 10150], in its colour meanings, an icon and a word on every level, a status line that is always visible, units on values and numbered procedure steps. Gaps, such as no units in the table view's column headers, are listed in the matrix.
- **Alerts, met in part:** a colour, icon and word for every level, and tones after Table 10.3-1 for needs action and urgent [V2 10114]: an urgent alarm repeats until someone acknowledges it, the needs-action tone plays once; the first burst 10 dB below the repeat [V2 10176]; a sound test, but no light test [V2 10117]; stale data marked for measures with an expected cadence [V2 10020]; a Help key held for 2 s, which is on the screen and so not yet independent of the display, as [V2 10178] asks.
- **Records and privacy:** secured handling of medical records [V1 7003] and protection of private data [V2 10125] are met only in part (see SECURITY.md).
- **ISS research software rules** (NASA JSC, [archived page](https://web.archive.org/web/20260312221613/https://tsc.jsc.nasa.gov/roi-swprocess/sw_reqs.html)): "Experiment software does not have internet access on ISS"; installer packages "should contain all dependencies"; "File names shall not contain PII". The program runs with no internet and keeps personal information out of its file names (a person's file is named by id, an outbox message by time and a random number). It has no installer package: the folder holds everything the pages need, but Node.js 18 or newer must be installed.
- **Built for an analog test, not yet used with people:** the alert log with the time to acknowledge, a drill mode [V2 10153], a Bedford workload rating [V2 5007] and a study export by id only ([V2 10163]).
- **Not done:** tests with real people (human-in-the-loop testing, [V2 3101]), the NASA usability score [V2 10001], error rates [V2 10002], a hazard analysis.
- **Software class:** we read it as NPR 7150.2D Class E, which "can include prototypes of flight and ground systems ... in the spirit of 'exploring a design concept'" ([Appendix D](https://nodis3.gsfc.nasa.gov/displayDir.cfm?Internal_ID=N_PR_7150_002D_&page_name=AppendixD)). The same ISS page says "All ROI flown software is assumed to be Class C". NASA sets the class.

## Run it

```
npm start
```

- Then open http://127.0.0.1:8080/ (crew screen) or http://127.0.0.1:8080/machine.html (technical view).
- Needs only Node.js 18 or newer. No packages to install, no build step, no internet. `node serve.mjs` does the same without npm.
- Optional settings: `PORT`, `HOST`, `HOSTS` (more host names to answer), `DATA_DIR`, `OUTBOX_KEY_FILE` (the flight surgeon's public key).
- Saved data: `data/<person id>.jsonl`, one plain file per person, with no personal information in file names. `npm run outbox` opens the queued messages with the DEMO key, as the ground would.
- Study export of an analog test: `node tools/study-export.mjs` writes `data/study/study-alerts.csv` and `data/study/study-subjects.csv` (options: `--data`, `--out`, `--real-only`).
- Everything the pages need is in the folder: fonts, icons, camera models and photos.

## Test it

```
npm test
node tools/sbom.mjs --check
```

- `npm test` runs Node's own test runner over 17 test files: the machine, history, camera rules, levels, cycle, server, store, PIN, supply chain, mind tools, quick logs, cells, connections, pages, crew alarm, screens and the fatigue scale. The server tests start the real server on a throwaway data folder.
- On 15 Nov 2026 (version 1.2.0): 275 tests, 273 pass, 0 fail, 2 skipped, with Node 24.13.0. The 2 skipped tests call the real ISSLive and NOAA services.
- We also walk the pages in headless Chromium with Playwright. These scripts are kept outside this repository and are not part of `npm test`. Last run, 15 Nov 2026, against commit `09e93ae` (the merged review fixes), each on a fresh data folder:

| Browser check | Steps | Result |
|---|---|---|
| The main flows of the crew screen, at 1366 px and at 375 px | 66 | 66 passed |
| Check-in topics, quick logs, mind tools, reaction test, eye check, OCT page (desktop) | 29 | 29 passed |
| PIN, crew alarm line, live feeds, CSV import, calendar and FHIR files | 15 | 15 passed |
| A copy without the server: page policy, fonts, NOAA feed, an Earth photo, technical view | 7 | 7 passed, on the final files served as plain files |
| The review's own alarm checks: false alarm, signs that change, retries, refused messages, saves, sign-out, sound, Help key paths, keys, CSV import, repeats, PIN screen | 15 scripts | all passed; one script was changed to press the new "Send the request" step |

The first three checks showed no page errors. What each test file covers, and how to run the browser checks: [docs/TESTS.md](docs/TESTS.md).

## Architecture

Full detail: [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md).

1. Two pages in plain JavaScript modules, no framework, no build: the crew screen (`index.html`, `src/crew.js`) and the technical view (`machine.html`, `src/ui.js`).
2. The machine (`src/engine.js`) puts each reading in its cell (`src/config.js`), checks it against the norm and red limits, and records who gets it. The levels (`src/state-levels.js`) turn one person's history into today's sentence. The crew alarm's rules and words (`src/crew-alarm.js`), the search of the measures (`src/find.js`) and the crew's own mission dates (`src/mission.js`) are kept apart from the screen, so they can be tested without a browser.
3. Every reading, answer and message is an event. `src/store.js` keeps events on our server or, without it, in the browser; the machine is rebuilt from them each time a page opens.
4. The server (`serve.mjs`, `src/security.js`, Node built-ins only) serves the pages, checks each event, appends it to the person's file and seals messages to a doctor. It never judges a reading.
5. Bluetooth devices (`src/ble.js`), CSV files (`src/csv-import.js`), ISSLive (`src/isslive.js`), the reaction test (`src/reaction-test.js`), the camera (`src/camera.js`, `src/camera-rules.js`) and a letter to the psychologist add events the same way. The FHIR and calendar exports (`src/fhir.js`, `src/ical.js`) read them. The journal, the plan for hard days, the five steps and the Earth break (`src/support.js`, `src/earth-break.js`) stay in the browser.
6. The analog test: the alert log and the study tables (`src/alert-log.js`), the drill (`src/drill.js`), their parts of the crew screen (`src/analog-view.js`) and the export (`tools/study-export.mjs`).

## Open decisions of the team

These stay with the team. The thresholds in the program are marked as drafts on screen.

- Which questionnaire for the mind; the level thresholds, including the mind rule (6 and 8 low days in 14), the fatigue step that counts as a low-energy day (5 of 7) and the 3-in-a-row watch rule; whether to use a NEWS2 total score.
- The crisis floor: what the program does in immediate danger. The crew screen says this is the team's decision and that nothing is sent by itself; a draft wording (`crisisNotice()` in `src/support.js`) is not shown on the crew screen.
- The AI's name; "anonymous" or "private" as the word for the session; who gives advice, the automation or the AI.
- Anonymity before "Message the doctor"; how the program tells people apart; names for crew members 3 and 4.
- Who analyses X-rays; the default with no doctor on board and no link to Earth.
- Converting the ISS oxygen value to the inspired value; an ISS-specific cabin pressure limit.
- An upper heart-rate limit during exercise; a resting pulse of 40 for athletes; how long a red reading of a rarely taken measure stays.
- The alarm timings (a look for new crew lines every 15 s, a repeat every 4 s, the spoken line every 16 s, a call for help tried again every 5 s); whether an eye self-check answer other than "no change" is attention or needs action; the symptom score (8 of 10 in 24 hours) that asks to tell the crew medical officer; the 12 hours for two sleep medicines.
- On the public copy, which has no station server, the urgent sentence still says "a doctor has been called", while the message panel says the message is saved on this computer only. The sentence is the team's own wording.
- Who can clear the line "Help was pressed at this computer" (it stays for 24 hours); how a forecast works when no mission is set (it then uses the example dates).
- For an analog test: how long a drill may run (60 minutes now, with no public source) and whether one screen's drill should reach every crew screen; which alarms ask for a workload rating (urgent ones now) and whether the Bedford limit for answering an alarm is 3 or 6; what counts as acknowledging an alert (now also opening Messages with its key).

## Use of SI

Space Apps calls AI tools Super Intelligence (SI). Its [Project Submission Guide](https://www.spaceappschallenge.org/resources/project-submission-guide/) permits SI as a tool, but says SI "should not be used to (come up with your idea of how to solve the challenge)".

- **The idea, the structure and every decision** belong to the human member of team Just For Fun. The team's notes hold the human member's own sketch of 14 Nov 2026.
- **Claude (Anthropic), an AI system,** generated the program's own code (everything except the third-party files under Credits), the tests and the documents, this README included, drafted the slides and made the demo video. The demo video and the slides carry a visible SI mark.
- Claude also looked up norms, limits and studies in public sources (cited in the code and on screen), made up the example readings and the crew's pre-flight levels (`src/demo-crew.js`, `src/config.js`; the names Tom and Elly and their resting pulse come from the team's own example), drafted the thresholds and rules (marked "draft" on screen), and chose and prepared the NASA photos for the Earth break.
- Every code file (`src/`, `serve.mjs`, `tools/`, `tests/`) says so in its header, and both app pages in a generator meta tag. The open decisions above were not made by SI.

## Credits and licences

| Files | What | Licence or terms |
|---|---|---|
| `fonts/*.woff2` | Atkinson Hyperlegible Next and Mono 2.001 (Braille Institute of America), Latin subset from Google Fonts | SIL Open Font License 1.1: `fonts/OFL-Atkinson-Hyperlegible-Next.txt`, `fonts/OFL-Atkinson-Hyperlegible-Mono.txt` |
| `src/icons.js`, the extra icons in `src/support.js` | Lucide icons (lucide-static 1.66.0), path data copied unchanged | ISC License, with the MIT License for the icons Lucide derived from Feather: `vendor/lucide/LICENSE` |
| `vendor/mediapipe/` | Google MediaPipe Tasks Vision 1.1.1, the pose landmarker lite and face landmarker models | Apache License 2.0: `vendor/mediapipe/LICENSE-Apache-2.0.txt`, `vendor/mediapipe/NOTICE.md` |
| `assets/earth/*.jpg` | Six photos taken from the ISS, NASA Image and Video Library; resized, two cropped | NASA media guidelines; credited "Photo: NASA" with title and image id; no NASA logo: `assets/earth/CREDITS.md` |
| `src/inspiration4.js` | Inspiration4 blood tests from NASA OSDR: [OSD-575](https://osdr.nasa.gov/bio/repo/data/studies/OSD-575) (metabolic panel) and [OSD-569](https://osdr.nasa.gov/bio/repo/data/studies/OSD-569) (complete blood count), built by `tools/build_inspiration4.py` | Data "provided under NASA's open access policy"; OSDR asks users to cite the data ([OSDR terms](https://science.nasa.gov/reference/osdr-help-terms-and-conditions)) |
| `src/fhir.js` | 13 LOINC codes for the FHIR export, each checked in NLM's LOINC table | This material contains content from LOINC (http://loinc.org). LOINC is copyright © Regenstrief Institute, Inc. and the Logical Observation Identifiers Names and Codes (LOINC) Committee and is available at no cost under the license at http://loinc.org/license. LOINC® is a registered United States trademark of Regenstrief Institute, Inc. |
| `tests/fixtures/` | Saved answers of NASA ISSLive and NOAA SWPC (15 Nov 2026); small CSV files, written from the makers' documents where there are any (the Svantek one is a guessed layout) | Public feeds; the CSV files are made up |

- Live feeds, off by default: NASA ISSLive (through push.lightstreamer.com) and NOAA SWPC JSON. Only the saved test answers above are in the repository.
- Standards and studies are cited by link in the code, on screen and in `docs/`; none of their files is copied here.
- Google's model cards say the camera models are "not intended for human life-critical decisions", so the camera part is a demonstration, not a medical device.

## Licence of the code

Apache License 2.0: see [LICENSE](LICENSE) (also in `package.json`).
