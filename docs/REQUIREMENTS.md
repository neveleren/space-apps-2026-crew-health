# NASA requirements: traceability matrix

Crew Health Console, team Just For Fun, NASA Space Apps Challenge 2026, challenge "Create Health Monitoring Software for Astronauts on Space Missions".

This page shows in one place which NASA requirements the program touches, how far it meets each one, and the file or test that shows it. It is written for a NASA engineer who wants to check the claims.

- **Checked:** 15 Nov 2026, against commit `b922945` of branch `main`. `npm test`: 226 tests, 224 pass, 0 fail, 2 live checks skipped unless `JFF_LIVE=1`.
- **What this is:** a hackathon prototype. No NASA office, flight surgeon or security assessor has reviewed it. NASA appears here as the source of standards and data. NASA has not endorsed, approved or used this program.
- **Limits that run through every table:**
  - every threshold is a draft: the team and the flight surgeons decide;
  - no AI model is connected;
  - the four example crew members and all their readings are made up; the Inspiration4 blood tests are real (NASA OSDR, OSD-575 and OSD-569);
  - nothing is transmitted: messages wait in an outbox for a downlink that this program does not have.
- **Who wrote it:** Claude (Anthropic), an AI system (SI in Space Apps wording), for team Just For Fun. The idea, the structure and every decision belong to the human member of team Just For Fun.
- **Related:** [docs/SECURITY.md](SECURITY.md) (what is protected and what is not), [docs/INTEGRATIONS.md](INTEGRATIONS.md) (every connection and its status), [docs/MIND_SUPPORT.md](MIND_SUPPORT.md) (the mind support tools and their sources).

## How to read the tables

| Status | Meaning |
|---|---|
| **Met** | The prototype does what the requirement asks, as far as software on one computer can. The evidence column names the code or the test. Not verified by NASA. |
| **Partly** | Part of it is built. The last column says what is missing. |
| **Not yet** | Not built. |
| **Not applicable** | The requirement belongs to the vehicle, the program or the medical team, not to this software. The row says why it is listed. |

- **IDs:** [V1 nnnn] is NASA-STD-3001 Volume 1 Rev C, crew health (approved 2023-09-15). [V2 nnnn] is Volume 2 Rev F, human factors (approved 2026-07-14). F.n.n is the Display Standard, Volume 2 Appendix F. SWE-nnn is NPR 7150.2D. Each ID links to its source.
- **Evidence:** paths start at the repository root. A function name is in the file named before it. Test names are quoted from the test files; `npm test` runs them all.
- **Levels:** the program's own words, and how they map onto NASA's alert classes, are in section 2.2.

## At a glance

- **Strongest:**
  - the crew display follows Volume 2 Appendix F closely: colour meanings, never colour alone (an icon with every level colour, and a word on chips and rows), a status line with the GMT clock, procedures as numbered magenta steps, text contrast of 6:1 or more;
  - vital signs are assessed, recorded and trended [V1 3004 h];
  - a reading past a published red limit alerts the person by plain automation, never through the AI, and at the urgent level every crewmate gets an alarm line;
  - records are plain files, one per person, that replay exactly; the program runs with no internet.
- **Weakest:**
  - nothing has been tested with people: no usability score, workload rating or error rate [V2 10001, 5007, 10002];
  - no NASA operational system is connected (NASA's public ISSLive feed is only an Earth demo), and nothing is transmitted;
  - the server has no sign-in, and records at rest are plain text;
  - nobody has approved a hazard analysis; the list on this page is a first draft;
  - alarm tones follow Table 10.3-1 in pitch and wave shape, but play twice instead of repeating until acknowledged;
  - a crewmate's alarm line reaches another screen only when that screen next loads its records.

## 1. NASA-STD-3001 Volume 1 Rev C: crew health

| Requirement | What it asks | Status | How the app meets it (evidence) | What is missing |
|---|---|---|---|---|
| [[V1 3003]][v1] In-mission preventive health care | Means to monitor physiological and psychosocial well-being: general health, fitness, sleep, environment, hearing, psychosocial factors, SANS and more | Partly | 38 cells in `src/config.js` `CELLS`, among them: vital signs, sleep, fluid, body mass, aerobic capacity, strength, bone (on Earth only), hearing, eye pressure, SANS self-check and OCT change, radiation dose, exercise minutes, symptoms, medicines, mood, energy, sleep quality, reaction time, cabin air. Test `tests/cells.test.js` `the cells the NASA reviews found missing exist, each with label, unit, kind, effort, a sourced norm or record, and where it is available` | Nutrition intake, vitamin D, immune function, vein checks, flexibility and balance, a team cohesion item. All norms are drafts. |
| [[V1 3004 a]][v1] Medical system architecture | Electronic medical records "including data encryption/protection"; inventory monitoring | Partly | One append-only file per person, every event checked (`serve.mjs` `postEvent`, `src/security.js` `eventProblem`); each message to a doctor sealed for the flight surgeon's public key (`serve.mjs` `seal`). Test `tests/serve.test.js` `a message to a doctor is queued in data/outbox, sealed so that only the flight surgeon's key opens it` | Records at rest are plain text. No sign-in. The key pair in `demo-keys/` is a public demo key. No count of the medical kit stock. |
| [[V1 3004 d, e]][v1] Medical encounters, physical exam | Record the history of medical encounters; perform and record the physical exam | Partly | Symptom log (one symptom, 0 to 10, a note) and medicine log, private by default (`src/quicklog.js`, tests in `tests/quicklog.test.js`); messages to the doctor kept as `report` events; weekly conference summary (`src/crew.js` `pmcSummary`) | No encounter or exam record. Replies from a doctor cannot be stored. |
| [[V1 3004 h]][v1] Vital signs and behavioral signs | Assess, record, monitor and trend vital signs and other physiological and behavioral signs | Met (prototype) | Each reading is checked against its norm and red limits and kept per person (`src/engine.js` `receive`, `checkNorm`, `redLimitOf`); today's levels (`src/state-levels.js` `assess`); charts for 7 days, 30 days, whole flight, before flight, all and custom dates, plus a table view (`src/history-view.js` `drawHistory`, `drawTable`); a straight-line forecast (`src/trend.js`). Tests in `tests/engine.test.js`, `tests/state.test.js`, `tests/history.test.js` | Norms are drafts, not validated in flight. The forecast is a straight line, not a medical model, and the page says so. |
| [[V1 3004 i]][v1] Ancillary tests | Imaging, laboratory analyses, electrocardiography | Partly | Real Inspiration4 blood panels, each value against the lab's own range (`src/inspiration4.js`, `src/engine.js` `checkPanel`; test `blood panel: real Inspiration4 data, each value against its own lab range`); OCT retinal thickness change as a number against NASA's two published levels, 20 and 55 micrometres, both drafts here; the chart draws the 20 line, and 55 or more is a red limit that raises "needs action" without the AI (`src/config.js` `octChange`) | X-ray, ECG, ultrasound and OCT images are "complex" cells only: no file intake, nobody to read them. |
| [[V1 3004 l, m]][v1] Treatment plans, medications | Record treatment plans; administer and manage all medications | Partly | Medicine log in two taps from a short list taken from NASA's ISS medical kit list of 2015 (a FOIA release), with strength and unit; private by default (`src/config.js` `medicines`, `src/quicklog.js`; test `medicine log: two taps, the medicine and then how much, save it with the time now`) | No treatment plan record. No kit stock. No dosing advice, by design. |
| [[V1 3004 p]][v1] Work and rest | Monitor and balance the work/rest schedule | Partly | Hours of sleep and a 1 to 7 sleep rating every morning; exercise minutes recorded, not judged (`src/config.js` `sleep`, `sleepQuality`, `exercise`) | No work hours, no schedule. |
| [[V1 3004 q]][v1] Behavioral health on devices | Treat neurobehavioral disorders with evidence-based asynchronous protocols on electronic devices | Partly | Offline mind support with a source on every card: five-step problem solving (`src/support.js` `STEPS`), a plan for hard days, a private journal, coping cards, a 3-minute Earth break (`src/earth-break.js`), a reaction test (`src/reaction-test.js`); see [docs/MIND_SUPPORT.md](MIND_SUPPORT.md) | Not a validated treatment protocol. No psychologist has reviewed the content. The questionnaire is the team's open decision. |
| [[V1 3004 r]][v1] Private two-way communication | Private communication with ground medical and psychological support, family and crew support | Partly | Message the doctor (`src/crew.js` `openDoctor`), the weekly conference summary (`openPmc`), a private letter to the psychologist and a request for a private call, each sealed in `data/outbox` (`serve.mjs` `queueMessage`). The screen says what really happened: "Sealed in the outbox for the next downlink", "Waiting for the link" or "Saved on this computer only" (`renderAlerts`, `sentText`) | One way only: no replies, no delivery or read receipt, no downlink. |
| [[V1 3004 s]][v1] Private transmission of medical data | Private transmission of medical data, imaging included, to the ground | Partly | HL7 FHIR R4 export file (`src/fhir.js` `fhirBundle`); outbox text sealed with ECDH P-256, HKDF-SHA-256 and AES-256-GCM (`serve.mjs` `seal`) | Nothing is transmitted. Demo key. No images. |
| [[V1 3004 t]][v1] Autonomous medical care | Means of providing autonomous medical care | Partly | Levels and red limits are worked out on board, with no link and no AI. A reading past a red limit alerts the person by automation alone, and at the urgent level every crewmate gets an alarm line; the machine's route then goes to the doctor on board or on Earth, or marks the doctor's message as waiting for the link (routing steps only: no message is written to the outbox by itself) (`src/engine.js` `redAlarm`, `crewAlarm`; test `red limit: the automation alone, never the AI and never "undecided"; the doctor step follows the situation`). The Help key (section 2.2). Urgent steps name the crew medical officer (`src/crew.js` `procedureFor`) | Procedures are placeholders, not written by flight surgeons. With the AI off, a reading outside the norm but inside its red limits has no destination in the machine ("undecided", the team's open question 4), although the screen still shows its level. |
| [[V1 3006]][v1] Crew medical officers | At least two crewmembers per vehicle trained as CMOs | Not applicable | Training is the program's. The app names the crew medical officer in urgent steps and in the banner that carries the crew alarm lines (`procedureFor`; `src/crew.js` `renderBar`, `crewAlerts`) | None for software. |
| [[V1 4001, 4002, 4003]][v1] Aerobic capacity | VO2max at least 32.9 (microgravity EVA) and 36.5 (surface EVA) mL/min/kg; at least 80% of pre-mission | Partly | 80% of the person's own pre-flight level is the norm (`src/config.js` `vo2max`, `baseline-percent` 80; test `fitness and strength: NASA rule of at least 80% of the person's own pre-flight level`); the forecast shows when the line will cross it (test `example flight: Elly's last endurance test is in the norm, and the line passes NASA's 80% limit after today but before landing`) | 32.9 is shown as text only; 36.5 is not used. The mission profile does not set the EVA floor. |
| [[V1 4024]][v1] Muscle strength | At least 80% of baseline | Met | `src/config.js` `strength`, `baseline-percent` 80; same test as above | None for software. |
| [[V1 4027]][v1] Bone mineral density | At least 95% of pre-mission (hip, spine) and 90% (femoral neck) | Met | `src/config.js` `bone`, both sites, `onlyOnEarth`; test `bone density: both sites must reach their NASA minimum` | Measured on Earth only, before and after flight, as on the ISS today. |
| [[V1 4029]][v1] ALARA | Minimize radiation exposure, "as low as reasonably achievable" | Partly | Career dose against its limit; NOAA space weather (the S-scale from the GOES proton flux) on request, display only, off by default (`src/spaceweather.js` `readSpaceWeather`) | No dose rate, no shelter procedure. Shelter calls belong to NASA's radiation team. |
| [[V1 4030]][v1] Career radiation limit | Career effective dose below 600 mSv | Met | `src/config.js` `radiation`, 600 `maxExclusive`; test `sleep has only a lower limit; radiation limit is strictly below 600` | The cell cites the Rev B (2022) copy of Volume 1; Rev C sets the same 600 mSv limit. |
| [[V1 4011]][v1] Behavioral health and cognition | Within clinically accepted values, as determined by behavioral health evaluations | Partly | Daily check-in of mood, energy and sleep quality; a 3-minute reaction test modelled on NASA's Reaction Self Test with PVT-B rules (a lapse at 355 ms or more, a false start under 100 ms), compared only with the person's own earlier runs (`src/reaction-test.js` `RT_RULES`, `scoreRun`, `compareToOwn`; tests in `tests/support.test.js`) | No validated questionnaire (the team's open decision). WinSCAT is not part of the app, and the monthly thinking test result cannot be entered on the crew screen (it comes only from the example data or the technical view's buttons). The mind rule is a placeholder. |
| [[V1 6002]][v1] Scheduled private medical communications | Routine private medical communications, at a frequency the flight surgeon sets | Partly | "Coming up" on Today: the weekly private medical conference with "Prepare" (a 7-day summary the person edits and sends), a private talk with the psychologist every 2 weeks (`src/crew.js` `renderComingUp`, `openPmc`) | An example schedule, shown only with the example flight. The real schedule is the flight surgeon's and comes from the crew plan. |
| [[V1 6003]][v1] Private medical communications stay private | Medical communications to and from the ground are private | Partly | Message text sealed for the flight surgeon's key; the crew screen reads only the signed-in person (section 4) | Plain text at rest in `data/<id>.jsonl`. Demo key. |
| [[V1 6004]][v1] Behavioral health support programs | Psychological and behavioral support for crew, ground personnel and families | Partly | Mind support tools (11 cards of small things that help, `src/support.js` `MIND_TIPS`); an example mission calendar; the AI support offer in the team's own words, with the choice to tell the doctor (`src/crew.js` `mindChoice`) | The program itself, and family support, are NASA's. |
| [[V1 7001]][v1] Permanent retrievable records | Results of all crew health monitoring kept in a permanent retrievable format, for trend analysis | Partly | Append-only JSON lines per person, replayed in time order on open (`src/store.js` `openStore`, `src/crew.js` `rebuild`); damaged lines are skipped (`serve.mjs` `readEvents`); "Save a copy of my data" and "Bring back a copy" (`exportMine`, `restoreMine`). Test `saved events come back, in time order, and live in one plain file per person named by id` | On the static copy (GitHub Pages) records live in one browser only. Which alerts were read is kept in the browser only. No automatic backup. |
| [[V1 7002]][v1] Transmission meets operational needs | Medical data transmission meets the program's medical operational needs | Partly | FHIR R4 file with LOINC and UCUM for 10 measures (`src/fhir.js` `MEASURES`); the number measures left out are listed with the reason (`NOT_EXPORTED`) | No transport. The operational needs are the program's to set. |
| [[V1 7003]][v1] Secured medical records | Handling, storing and transmitting medical records secured | Partly | Server rules with their sources (`src/security.js` `SECURITY_RULES`): known host names only, JSON only, same origin only, every event checked, private folders never served, security headers; tests in `tests/serve.test.js`; see [docs/SECURITY.md](SECURITY.md) | No sign-in, no roles, plain text at rest, plain http beyond this computer. |

## 2. NASA-STD-3001 Volume 2 Rev F: human factors and displays

The source is [NASA-STD-3001 Volume 2 Rev F][v2]; its cover says "Revision F, Approved: 2026-07-14".

### 2.1 Information and usability

| Requirement | What it asks | Status | How the app meets it (evidence) | What is missing |
|---|---|---|---|---|
| [[V2 10001, 10002, 5007]][v2] Usability, errors, workload | NASA Modified System Usability Scale of 85 or higher; error rates within Table 5.1-1; Bedford workload of 3 or less (6 or less when degraded) | Not yet | None measured | Tests with people. |
| [[V2 3101]][v2] Human-in-the-loop testing | Iterative human-in-the-loop testing through design | Not yet | Checks by software only (`npm test`, headless-browser walks) | Tests with crew-like users. |
| [[V2 7045]][v2] Usable by non-physicians | Medical equipment usable by crewmembers who are not physicians | Partly | Plain words; one dated sentence (`src/state-levels.js` `headline`); numbered steps (`src/crew.js` `procedureFor`); "?" explanations on rows, cards and tags (`src/explain.js`, `src/tips.js`) | Not tested with non-physicians. |
| [[V2 10006]][v2] Standard nomenclature | Operational nomenclature standardized throughout a system | Partly | One set of words throughout: fine, attention, needs action, urgent | NASA's words are advisory, caution, warning and emergency. The mapping is in section 2.2 of this page, not on the screen. Nomenclature approval is a NASA step. |
| [[V2 10020]][v2] Stale and missing data | Visual indication when data are stale, missing, unavailable or unknown | Partly | Cyan "Old data, n days" (`src/crew.js` `measureRow`; `src/state-levels.js` `EXPECTED_EVERY_DAYS`, `RULES.staleAfter`); "No readings yet"; "Not measured in flight"; with no fresh data the message says "there is not enough fresh data to judge" instead of "excellent" (`headline`; test `no fresh data: silence is never "excellent"`); ISS feed values are saved with their own old time | Measures without a set cadence (for example blood oxygen, glucose, eye pressure, hearing, strength) are never marked stale. Cadences are drafts. |
| [[V2 10113]][v2] No mental computation | Critical data in a form that needs no mental transposition, computation or memory | Partly | "n days ago" after readings 3 or more days old, and "before flight" (`src/crew.js` `stamp`); alerts state the crossed limit in words (`itemText`) | Times are GMT day of year (319/08:00), which needs converting; recent readings carry no relative time. |
| [[V2 10115]][v2] Parameters out of tolerance | Notify when selected parameters are outside tolerance | Met | Levels and Messages (`src/state-levels.js` `assess`; `src/crew.js` `alertsFor`, `renderAlerts`) | None. |
| [[V2 10120]][v2] Data management tools | Input, store, display, update and dispose of mission data | Partly | Typing a reading in with plausibility limits (`src/crew.js` `logReadingForm`, `PLAUSIBLE`), Bluetooth devices, CSV import, the daily check-in | No way to correct a wrong entry or mark it "entered in error". |
| [[V2 10125]][v2] Sensitive and private data | Protection of private data, transmission, secure viewing, sender verification | Partly | The crew screen reads one person plus the ship (test `the crew screen gets one person plus the ship; everyone only with ?all=1`); an optional PIN (`src/privacy.js`); the sealed outbox | No sign-in on the server. No sender verification: the seal hides the text but does not prove who wrote it (`SECURITY_RULES`, outbox). `?all=1` is open as the engineering view. The PIN is a privacy screen, not a lock. |
| [[V2 10126]][v2] Ground access | Ground can perform onboard database functions without crew intervention | Not yet | `data/outbox` is the hand-over folder; `tools/read-outbox.mjs` opens it as the ground would | No ground access, no sync. |
| [[V2 10129]][v2] Backup and restore | Automatic backup; crew-started backup and restore | Partly | Crew-started "Save a copy of my data" and "Bring back a copy", own events and the ship's (`src/crew.js` `exportMine`, `restoreMine`) | No automatic backup. |
| [[V2 10130]][v2] Another information source | Alternative information sources if the information system is lost | Not yet | None | For example a printed card of the urgent steps. |
| [[V2 10131]][v2] Rapid recovery after a crash | Rapidly recoverable from a software crash | Partly | On open, every event is replayed (`src/crew.js` `rebuild`); damaged lines are skipped (`serve.mjs` `readEvents`); an outbox file is written whole, then renamed (`queueMessage`) | Recovery time not measured. The program sets no limit; the standard leaves it to the program. |
| [[V2 10153]][v2] Simulation and operation | An explicit command to change between simulation, test and operational mode | Partly | A separate "Simulation, for the demonstration" card in Settings (`src/crew.js` `renderSetup`); an "Example data" tag in the status line; "No link to Earth" and "AI off" tags (`renderBar`) | No separate simulation mode. The "Doctor on board" switch shows no tag of its own, only a line in the Systems card. |

### 2.2 Alerts and tones (section 10.3, Table 10.3-1)

How the program's levels map onto NASA's alert classes. The mapping is a design draft for the team to decide: neither volume defines medical alerts for in-cabin health monitoring.

| Program level | Colour, icon, word | NASA class | Sound in this program |
|---|---|---|---|
| Fine | none | none | none |
| Attention | blue, circle "i" | Advisory | none (the advisory tone is optional) |
| Needs action | yellow, triangle | Caution | 512 Hz triangle wave, 1 s on, 1 s off |
| Urgent | red, octagon | Warning | 400 Hz and 1,024 Hz alternating square wave, with the spoken word "Warning" and the title |
| (none) | | Emergency | none: the ship's own caution and warning system owns fire, depressurization and toxic atmosphere; an urgent cabin value shows "Ship emergency: follow ship procedures" |
| Old data | cyan, clock | stale data (F.5.10) | none |

| Requirement | What it asks | Status | How the app meets it (evidence) | What is missing |
|---|---|---|---|---|
| [[V2 10114]][v2] Visual and audio annunciation | Distinct visual and audio annunciation for emergency, warning and caution; audio optional for advisories | Partly | Each level has its own colour, icon and word (`src/crew.js` `LEVEL_ICON`); needs action and urgent sound as in the table above (`playLevel`); attention stays silent | No emergency level. The urgent burst plays each tone for 0.2 s, where the table's text gives 0.4 s (the app reads "2.5 Hz" as the pair rate), and three pairs per burst where the table gives two. Tones play twice, not "until terminated". Sound comes only from an open page. |
| [[V2 10175]][v2] Alert priority | Alerts prioritized per Table 10.3-1 | Partly | Messages sorted by level, then time (`alertsFor`); the Messages key takes the colour of the highest active level (`renderBar`); the sound plays the highest new level (`soundAlerts`) | The highest alert is not annunciated continuously until acknowledged. |
| [[V2 10176]][v2] Pre-alert | The first annunciation 10 dB below the final level | Met | First burst at gain 0.10, the repeat at 0.32, which is 10 dB higher (`playLevel`) | The calibrated level on real speakers is not measured. |
| [[V2 10116]][v2] Manual silencing | Manual silencing of active audio | Met | "Silence all sounds" on Messages stops the tones and the voice now; a new alert sounds again (`silenceNow`) | None. |
| [[V2 10177]][v2] Suppression | Suppress the audio and visual annunciation | Partly | "Mark as read" keeps that alert from sounding again and dims its card; the alert stays listed (`renderAlerts`) | No per-alert suppress. "Mark all as read" also takes urgent alerts. |
| [[V2 10154, 10155, 10156]][v2] Enable, inhibit, inhibit audit | Enable and inhibit alert functions; remind the crew of what is inhibited | Partly | The Settings switch "Sound and voice" turns all sound off and on; while it is off, a "Sound off" tag stays in the status line (`renderBar`) | No per-alert inhibit. The off setting is saved on the device and comes back at the next start (`savePrefs`). |
| [[V2 10117]][v2] Crew test of annunciators | Test for a failure of the visual and auditory annunciators on crew request | Partly | Settings, "Test the alert sounds": the needs-action tone, then the urgent tone and voice (`renderSetup`) | No visual test. The program cannot detect a failed speaker: the crew listens. |
| [[V2 10178]][v2] Manual emergency activation | Manual activation of emergency responses, independent of display function | Partly | The Help key in the status line, held for 2 s (`setupHelpKey`, `HELP_HOLD_MS`), raises an urgent alarm without the AI, through the same path as answering "I need help" to the camera; crewmates get the alarm line when their screens next load (`shareCrewAlarm`) | It is part of the display. The standard asks for independence from display function, "such as a fixed button on a panel", which is the vehicle's. |
| [[V2 6022]][v2] Atmosphere alerts | Alert the crew locally and remotely when pressure, humidity, temperature, ppO2 or ppCO2 are outside safe limits | Partly | Cabin values past the ship's own limits reach every person's message as "Ship emergency: follow ship procedures" or "Ship caution: follow ship procedures" (`src/state-levels.js` `assessShip`, `headline`; test `ship: a cabin value past the ship's own limit reaches every person's message as a ship alarm`). Draft limits: pressure below 34.5 kPa and inspired O2 below 122 mmHg are urgent; inspired O2 above 356 mmHg and CO2 above 7.5 mmHg need action | This screen only mirrors the ship: the ship's caution and warning system is the real control. No humidity. No remote alert. Noise and cabin temperature have no ship limit. |
| [[V2 6004]][v2] CO2 limit | One-hour average ppCO2 of 3 mmHg or less in the habitable volume | Not applicable | A limit on the vehicle. The app uses it as the cabin CO2 norm (`src/config.js` `co2`) | See OCHMO-TB-004 in section 3. |

### 2.3 Automation and decision aids (section 10.6)

| Requirement | What it asks | Status | How the app meets it (evidence) | What is missing |
|---|---|---|---|---|
| [[V2 10161]][v2] Automation status | State, projected state and mode, health and configuration of the automation | Partly | The Systems tag in the status line opens a card: automation on, the AI route (no model connected), mission and signal delay, link to Earth, doctor, where data are saved, sound (`src/crew.js` `systemsTip`); tags appear when something is off (`renderBar`) | No projected state of the automation itself. The rule values live in `src/config.js` and `src/state-levels.js`; the screen shows the norms and their sources on each measure page. |
| [[V2 10162]][v2] Mode change notice | Notify mode changes of safety-critical operations | Partly | A tag appears in the status line when the link drops or the AI is off | No notice at the moment of change. |
| [[V2 10163]][v2] Automation data | Record operational and performance data; make it available to crew and ground | Partly | Every saved reading and message keeps the position of the switches (`state`); the technical view shows each reading's steps, who acted and where it went (`src/ui.js` `renderLog`) | Not on the crew screen. Nothing reaches the ground. |
| [[V2 10164]][v2] Who acts | Show whether the human or the system performs an operation | Partly | Steps for a body reading past a red limit start with "Automation:", "You:" or "Crew medical officer:" (`src/crew.js` `procedureFor`) | The other procedures do not say who acts. |
| [[V2 10165]][v2] Override and shut down | Safely override and shut down automated systems | Partly | The "AI is working" switch (the plain automation keeps working); the camera on and off, with its own one-hour limit (`toggleCamera`); "I am okay: false alarm" on camera alerts; "I am exercising": heart rate recorded, not judged against the resting range, off by itself after 2 hours (`EXERCISE_HOURS`, a draft) | Consequences are stated only in each switch's fixed line (for example "With the AI off, only the automation works."); no message appears when an override is attempted (F.6.2 h). The rule engine cannot be switched off, by design. |
| [[V2 10166]][v2] Configuration | Modify the configuration within safety limits | Partly | Mission profile (ISS, Moon, Mars), sound, display, camera, the exercise switch (`renderSetup`) | Thresholds change only in the code. No flight surgeon role. |
| [[V2 10168, 10172, 10173]][v2] Failure and safe defaults | Safe takeover after a failure; protective action; safe operation when the operator does not take over | Partly | With the AI off, the automation still grades every reading; a red limit never waits for the AI; with no doctor and no link the machine routes the alarm to the crew on board and marks the doctor's message as waiting for the link (a draft default and a routing step: no message is written by itself, `src/engine.js` `callDoctor`); no answer to "Are you okay?" within 20 s raises the alarm (`src/crew.js` `ASK_SECONDS`) | With the AI off, a reading outside the norm but inside its red limits has no destination (open question 4). |
| [[V2 10169]][v2] Operator decides | The operator decides when to use a decision aid | Partly | "Analyse with AI" and the AI support session open only on request (`openAi`, `openSupport`) | The machine marks every out-of-norm reading that is not past a red limit for the AI route by itself; no model is connected, so nothing happens yet. |
| [[V2 10170]][v2] Explanations | Explanations, rationale and consequences of potential actions | Partly | A "Because:" line and numbered steps in What to do (`openProcedure`); every norm the program compares with, and every red limit, names its source; the forecast says it is a straight line, not a medical model | Consequences are stated for some buttons only, for example "Nothing is sent unless you press Send". |
| [[V2 10171]][v2] Beyond capability | Say when a problem is beyond the aid's capability | Partly | "No AI is connected to this version yet" (`openAi`); complex data "cannot be compared with a number"; the camera card quotes the model makers' limitation | With the AI off, nothing tells the person that a reading has no destination. |

### 2.4 Display Standard, Appendix F, as used

[[V2 10150]][v2] asks every system to meet Appendix F. Appendix F applies to crew displays on fixed units and on "portable computers, including laptops and tablets" (F.2). This section is the team's first self-assessment against the parts the program uses.

| Requirement | What it asks | Status | How the app meets it (evidence) | What is missing |
|---|---|---|---|---|
| [F.4.2 e][v2] Navigation | The main navigation at the top or bottom | Met | Four keys under the status line on screens 1,024 px wide or more, a bar at the bottom below that (phones and tablets) (`index.html`, `.keys`) | None. |
| [F.4.2 f][v2] Status area | A dedicated area always visible for time, system messages, alerts and communication status | Met | A sticky status line: flight day, GMT clock, the Messages annunciator, tags for no link to Earth, AI off, sound off and camera on, the Systems tag, the Help key (`index.html` `.status-line`; `src/crew.js` `renderBar`) | None. |
| [F.4.2 g][v2] Title | A unique title in a consistent location, visible at all times | Partly | Each screen has a heading at the top (on Today it is the dated message, under the label "Your health today"); the current key is marked | The title in the status line is for screen readers only, and on screens 640 px wide or less it is left out (`#screen-name`, `.sl-title`); the heading scrolls away. |
| [F.4.2 j][v2] Modes | Displays for different modes visually distinct | Partly | See [V2 10153] | See [V2 10153]. |
| [F.4.3.1 b, d][v2] Limit violations | Show limit violations; a yellow or red up or down arrow after a value past a caution or warning threshold | Met | An up or down arrow after a value outside the norm, in its level colour (`src/crew.js` `measureRow`) | None. |
| [F.4.3.1 c][v2] Stale data | An indication when data are stale | Partly | See [V2 10020] | See [V2 10020]. |
| [F.5.1][v2] Text | Sans serif; similar characters told apart; fixed-width numbers; mixed case; characters at least 0.25 degrees high | Partly | Atkinson Hyperlegible Next and Mono, bundled in `fonts/`; checked on screen: l, 1 and I, and O and 0, look different in both faces; numbers in the mono face with tabular figures; mixed case on the crew screen | Character height not measured on the target laptop. The smallest crew-screen text is 13 CSS px (for example the status tags on phones). The technical view uses upper-case labels of 11.5 and 12 px and some text of 11 px. |
| [F.5.6][v2] Numbers | Units for every value or group; leading zeros | Partly | A unit next to every value on rows and measure pages | The table view's column headers carry no units (`src/history-view.js` `drawTable`). |
| [F.5.8][v2] Graphs | Title above; history told from live; axis labels and units; legend; tick labels; out-of-range values highlighted; rescaling | Partly | A title above each chart, the unit on the value axis, a legend, the normal band, rings on readings outside it, limit lines, a "Latest" label, period choice and custom dates, a table alternative (`drawHistory`) | The time axis shows local dates with no time-system label. |
| [F.5.10][v2] Colour | Table F.5-1 meanings; an extra cue where colour carries meaning; contrast of 6:1 or more; reverse video only for immediate attention | Met (crew screen) | Red urgent, yellow needs action, blue attention, grey unavailable, cyan stale, magenta procedures, green controls and focus (tokens in `index.html`); every level has an icon and a word; on the seven crew screens measured (sign-in, Today, All measures, a measure page, Messages, Settings, the AI support panel; dark and light, 1366 and 375 px wide) every visible text is at 6.07:1 or more against its background, the lowest being the green "See all measures" link on the light page background, and the highest 18.16:1; reverse video (text on a solid red field) marks urgent chips and the urgent Messages key | Many pairs are below the preferred 10:1. The technical view (`machine.html`, for engineers) does not meet 6:1: some of its text measured 5.13:1 (light) and 5.49:1 (dark). |
| [F.5.11][v2] Flashing; [F.4.3.2][v2] Commanding | Flash coding rules; rules for commands that change vehicle state | Not applicable | Nothing flashes (there is no emergency level). The program does not command the vehicle. | None. |
| [F.6.1][v2] Time | The standard time format always shown; MET available; every time labelled with its time system; dddd/hh:mm:ss | Partly | The GMT clock, for example "GMT 319/01:54:13", always in the status line, no leading zeros in the day (`src/crew.js` `clock`); readings stamped "GMT ddd/hh:mm" (`stamp`); flight day "FD 167" | No MET clock, only the flight day. The headline date and the chart's time axis use local dates without a label. |
| [F.6.2][v2] Automation | Level and status of automation; who acts; history; no anthropomorphic phrasing; check the configuration; rationale; consequences before an override; say when beyond capability | Partly | See section 2.3. The automation's own text speaks of "the automation" | e: the AI support offer keeps the team's own first-person words (`Hey <name>, I noticed ...`, `src/support.js` `offerText`), shown under "AI support (not a psychologist) · not connected yet". The wording is the team's decision. |
| [F.6.3][v2] Electronic procedures | Current and completed steps; mark steps by hand; prompt to return; notes | Partly | Numbered magenta steps, the current step marked, steps ticked by hand (`src/crew.js` `openProcedure`) | Ticks are not saved. No notes. No reminder to return. |
| [F.6.4][v2] Alerts display | Counts per level and of new events; search; per-event ID and states; sorting; procedure link; acknowledge, suppress, inhibit, enable; silence all in one action | Partly | Counts for urgent, needs action and attention, "n new", a queue with New tags; each alert with its level, title, GMT time, system (Body, Mind, Camera, Ship) and a "What to do" link; "Mark as read"; "Silence all sounds" (`renderAlerts`) | No emergency count, no search, no event ID on screen, no per-event suppress or inhibit, no choice of sort order. Cleared alerts disappear, because the list is worked out from today's state. |

## 3. OCHMO standards and technical briefs used

The briefs are reference documents derived from NASA-STD-3001: each says it is "for reference only". The technical briefs (TB) add that they do not "supersede or waive existing Agency, Program, or Contract requirements"; the medical technical briefs (MTB) add that they do not "deliver direct medical care recommendations or guidance for individuals". OCHMO-STD-100.1A is NASA's standard for medical selection, recertification and mission evaluation.

| Document | What it says, as used here | Status | How the app uses it (evidence) | What is missing |
|---|---|---|---|---|
| [OCHMO-STD-100.1A Rev A, [6039] Sleep assessment][ochmo100] | A daily assessment of sleep quality and quantity, weekly in flight through the private medical conference; a suggested scale from 1 (very poor) to 7 (excellent) | Partly | A 1 to 7 sleep rating in the morning check-in (`src/config.js` `sleepQuality`) and hours of sleep (`sleep`, also from an Actiware CSV export); the weekly conference summary lists the hours (`src/crew.js` `pmcSummary`) | The summary leaves out the 1 to 7 ratings. No actimetry device is connected. |
| [OCHMO-STD-100.1A Rev A, cardiac criteria][ochmo100] | Sustained (over 1 hour) resting sinus tachycardia above 130 beats/min needs medical board review | Not applicable | A selection and recertification criterion. It is cited as context next to the draft urgent limit of 131 beats/min at rest, which comes from NEWS2 (`src/config.js` `pulse`) | None for software. |
| [OCHMO-TB-004 Rev D, carbon dioxide][tb004] | The one-hour average limit of 3 mmHg; headaches reported at 2.8 to 4.5 mmHg (anecdotal); previous requirements accepted 3.8 to 7.5 mmHg | Partly | Cabin CO2 norm of 3 mmHg; a draft ship caution above 7.5 mmHg (`src/config.js` `co2`); the cabin CO2 "?" card says that in ISS data higher CO2 went with more headaches (`src/tips.js` `PROVENANCE`) | Single readings are compared with a one-hour average limit. No 7-day average. |
| [OCHMO-TB-016 Rev B, behavioral health][tb016] | Cognition checked by a monthly WinSCAT test against the person's own pre-flight baseline | Partly | "Thinking test (monthly)" in Coming up; the reaction test compares only with the person's own runs, before-flight runs first (`src/reaction-test.js` `compareToOwn`) | WinSCAT itself is not part of the app, its results are not imported, and the monthly result cannot be entered on the crew screen. |
| [OCHMO-MTB-004 Rev A, space adaptation sickness][mtb004] | Headaches in up to 90% of astronauts in the first days, back pain in 52%, motion sickness in up to 73% | Partly | With NASA's 2017 evidence report, it shapes the symptom list; each symptom keeps its fact and source as data (`src/config.js` `symptoms`); the example flight's early symptoms follow it (`src/demo-crew.js`) | The facts are not shown on the screen yet. |
| [OCHMO-TB-044, medical operations][tb044] | On the ISS, the Multilateral Medical Operations Panel has "control of all technical requirements" | Not applicable | Governance. Every threshold is marked as a draft for the flight surgeons (tests `red limits in the config: complete, sourced, drafts, and always outside the norm` and `every threshold added here is marked as a draft`) | None for software. |

Also used as second sources: [OCHMO-TB-003, habitable atmosphere][tb003] (cabin pressure norm) and [NASA's brief on bone loss][tb030] (bone density norm). The code cites the bone brief as OCHMO-TB-030; the file at that address now says OCHMO-MTB-013 Rev D on its cover.

## 4. Data, privacy and records

| Requirement | What it asks | Status | How the app meets it (evidence) | What is missing |
|---|---|---|---|---|
| [14 CFR 1214.403][cfr], ISS Crew Code of Conduct, section V | Other crewmembers may not use or disclose a crewmember's medical information without consent, "except as required for the immediate safety of ISS crewmembers"; medical data, biomedical telemetry included, "transmitted in a private and secure fashion" | Partly | The crew screen loads only the signed-in person's records, the ship's cabin readings and crewmates' alarm lines (`src/store.js` `openStore`, `serve.mjs` `getEvents`); a crewmate sees one line, `<name> needs help now: ...`, and nothing else of the record (`src/crew.js` `crewAlerts`, `shareCrewAlarm`; test `crew alarms reach every crewmate, without the rest of the record`); the optional PIN; cycle, symptoms, medicines and "What is weighing on you" are private by default; the journal and the plan stay in this browser | No sign-in on the server: anyone at the computer can open `?all=1` or the files in `data/`. Plain text at rest. |
| [HL7 FHIR R4][fhir] export | A standard format for medical records | Met (prototype) | A Bundle of type collection: a Patient with an id only, Observations with LOINC codes and UCUM units for 10 measures (13 codes), Device and Provenance; made-up and simulated values carry the HTEST "test health data" label (`src/fhir.js` `fhirBundle`, `MEASURES`, `HTEST`; tests `FHIR: a well-formed collection, every reference resolves, unique urn:uuid entries` and `FHIR: HTEST on example and simulated values, and on everything with the example switch on`). On 15 Nov 2026 the bundles of all four example crew members passed HL7's R4 JSON schema ([fhir.schema.json][fhirschema], checked with ajv 8.20.0) | The official HL7 validator was not run. 13 number measures are not exported (`NOT_EXPORTED`). No FHIR server, no push. |
| Example data marked as such | Made-up data must not pass for a real record | Met | An "Example data" tag in the status line while the example flight is on (`renderBar`); "Example crew member" on the sign-in cards; "Made-up example data" in each value's "?" (`thisValue`); HTEST in FHIR; the real Inspiration4 participants appear only as C001 to C004 and are never mixed with the example crew (`src/config.js` `realPeople`) | None. |
| [ISS research software rules][roi]: internet and installers | No internet access on the ISS; installer packages contain all dependencies and need no internet | Met | The folder holds everything the pages need: fonts, icons and camera models (`fonts/`, `src/icons.js`, `vendor/`); only Node.js 18 or newer must be installed, no packages (`package.json` has no dependencies); the two live feeds, NASA ISSLive and NOAA space weather, are Earth demos, off by default | None. |
| [ISS research software rules][roi]: a simple server | A web app for the station's SSC server; a simple server that reads its configuration once and saves only when the user submits | Partly | `serve.mjs` serves the pages and appends one event per save; the crew screen loads its records once, at sign-in | Bluetooth streams save one reading a minute, the ISSLive Earth demo saves new cabin values every 5 minutes while it is on, and alarm lines are saved by the program itself. Never run on an SSC. |
| [ISS research software rules][roi]: files | Flat files rather than database tools; "File names shall not contain PII" | Met | `data/<id>.jsonl` per person; outbox files named by time and a random number (`serve.mjs` `queueMessage`) | None. |
| [ISS research software rules][roi]: file structure | A key to the data file and folder structure for archiving | Partly | The event shape is fixed in `src/security.js` `eventProblem`; the folders are described in [docs/SECURITY.md](SECURITY.md) | No formal data key. |
| [ISS research software rules][roi]: configuration | Variables in a text-editable file; the data location as a variable | Partly | `PORT`, `HOST`, `HOSTS`, `DATA_DIR` and `OUTBOX_KEY_FILE` as environment variables (`serve.mjs`) | No configuration file. Thresholds live in code (`src/config.js`). |
| [ISS research software rules][roi]: logs and version | Error log files after a crash; the version number on the main screen (a best practice) | Not yet | Errors go to the console only, never with the request body (`serve.mjs`) | A log file. A version on screen. |

The ISS research software rules are NASA JSC's Research Operations and Integration (ROI) software requirements page. The live site could not be reached from here, so the link is the archived copy of 12 Mar 2026.

## 5. Software engineering

### Classification, stated honestly

- **Today: Class E** (design concept, research, technology). NPR 7150.2D Appendix D says Class E "can include prototypes of flight and ground systems, developed at minimal cost, in the spirit of 'exploring a design concept'". This prototype supports no operational decision. Class E "cannot be safety-critical software".
- **If NASA flew it:** Appendix D says that once a program agrees to use such a prototype for operations, the software "should be upgraded to its appropriate classification". Our reading: **Class C**, "software for space flight operations not covered by Class A or B". NASA's ISS research office states: "All ROI flown software is assumed to be Class C". Class A would apply if the program made the software, for example, "required to sustain a safe, habitable environment for the crew"; it is designed to mirror the ship's own systems, not to replace them.
- **Who decides:** NASA's project manager sets the class (SWE-020) and decides with Safety and Mission Assurance whether the software is safety-critical (SWE-205).
- **What changes:** in the Requirements Mapping Matrix (Appendix C, Table 2), Class E is marked for 12 of the 100 requirements and Class C for 92 (our count). If a hazard analysis finds the software safety-critical, it must be Class D or higher, and SWE-134, SWE-219 and SWE-220 apply. Our reading: that is likely, because criterion e of NASA-STD-8739.8B, section 4.2, covers software that "detects, reports, and takes corrective action if the system reaches a potentially hazardous state".

Sources: [NPR 7150.2D Appendix D][npr7150d], [Appendix C][npr7150c], [Chapter 3][npr7150ch3], [NASA-STD-8739.8B][std87398], [ISS research software rules][roi].

| Requirement | What it asks | Status | How the app meets it (evidence) | What is missing |
|---|---|---|---|---|
| [SWE-020, SWE-176][npr7150c] Classification and records | Classify the software; keep records of the determination | Partly | The statement above | No formal record, no requirements mapping matrix (SWE-125). The class is NASA's to set. |
| [SWE-205][npr7150c] with [NASA-STD-8739.8B 4.2][std87398] | Decide through a hazard analysis whether the software is safety-critical | Not yet | The hazard list below is a first draft by the developer | A hazard analysis with NASA's Safety and Mission Assurance. |
| [SWE-134][npr7150c] Safety-critical items | If safety-critical or mission-critical: a known safe state at start; two operator actions for an override; integrity checks on inputs; a timely response; error handling | Not applicable today | In place: every event checked (`src/security.js` `eventProblem`); an unreadable value never becomes 0 (`src/engine.js` `checkNorm`; test `unreadable numbers are not guessed and never become 0`); save failures shown (`src/crew.js` `keep`); restart by replay | If it applies: one action turns all sound off or the AI route off; a saved "sound off" comes back at the next start; response time not measured. |
| [SWE-219, SWE-220][npr7150c] Coverage and complexity | If safety-critical: 100% MC/DC coverage; cyclomatic complexity of 15 or lower | Not yet | Node's built-in coverage of the modules the tests load: 87.5% of lines, 86.6% of branches (`node --test --experimental-test-coverage`) | MC/DC and complexity not measured. The figure leaves out the two screens (`src/crew.js`, `src/ui.js`), the chart drawing, the camera module, the reaction test module (tested, but its name ends in `-test.js`, which Node's coverage skips by default) and the server process (tested over HTTP). |
| [SWE-062, SWE-186][npr7150c] Unit tests | Unit test the code; repeatable results | Met (not required at Class E) | `npm test`: 226 tests in 14 files, no packages, offline; the server tests start the server with a throwaway data folder (`tests/serve.test.js`, `tests/store.test.js`) | No end-to-end browser test inside `npm test`. |
| [SWE-052][npr7150c] Traceability | Two-way traceability between requirements, design, code and tests | Partly | This page traces NASA requirements to code and tests | No software requirements document; tests are not tagged with requirement IDs. |
| [SWE-022][npr7150c] with [NASA-STD-8739.8B][std87398] | Software assurance and software safety per the standard | Not yet | None | An assurance plan for the class NASA sets. |
| [SWE-027][npr7150c] Open-source components | Requirements, documentation, licences, verification and a watch on defects for each component | Partly | `SBOM.json` (CycloneDX 1.6) lists the 6 third-party components (MediaPipe tasks-vision 1.1.1 and its two models, lucide-static 1.66.0, Atkinson Hyperlegible Next and Mono 2.001) with supplier, version, licence and hash, after the [NTIA minimum elements][ntia]; `SHA256SUMS` holds 15 file hashes; `npm test` checks both (`tests/supply.test.js`) | The components are not verified for their use. No watch on reported defects. |
| [SWE-042][npr7150c] Source code | NASA gets the source code in a modifiable form | Met | The repository is public on GitHub under Apache-2.0 (`LICENSE`) | None. |
| [SWE-146][npr7150c] Generated code | An approach for automatically generated source code: verify the tool, keep its inputs and outputs under configuration management, set the limits of its use | Partly | Our reading applies this to AI-generated code: every program file (`src/`, `serve.mjs`, `tools/`, `tests/`, the two pages and `support.css`) names Claude (Anthropic) in its header comment, and the generated code meets the same tests as any code | No defined approach. The tool is not verified. Its inputs are not under configuration management with the code. |
| [SWE-156, SWE-154, SWE-159][npr7150c] Cybersecurity | Assess cybersecurity; list risks and mitigations; test the mitigations | Partly | [docs/SECURITY.md](SECURITY.md) lists what is protected and what is not; each server protection has a test (`tests/serve.test.js`) | No assessment under NASA's security policies. NASA-STD-1006 protections (SWE-157) not applied. |
| [SWE-135, SWE-185][npr7150c] Static analysis | Static analysis for defects, security, coverage and complexity | Not yet | None | A static analysis tool, with recorded results. |
| [SWE-079 to SWE-085, SWE-201, SWE-202][npr7150c] Configuration and defects | A configuration management plan; tracked non-conformances with severity levels | Partly | Git history on branch `main` | No configuration management plan, no defect list with severity levels. |

## 6. Accessibility: Section 508 and WCAG 2.1 AA

[Section 508][s508] asks for WCAG 2.0 Level A and AA (E205.4, E207.2). The checks below used the WCAG 2.0 and [WCAG 2.1][wcag21] A and AA rules, which include the 2.0 ones.

| Requirement | What it asks | Status | How the app meets it (evidence) | What is missing |
|---|---|---|---|---|
| [WCAG 2.1][wcag21] A and AA, automated rules | The success criteria a tool can check | Met (automated rules) | axe-core 4.10.2 in headless Chromium, rule tags `wcag2a`, `wcag2aa`, `wcag21a` and `wcag21aa`: no violations on 8 screens (sign-in, Today, All measures, a measure page, Messages, Settings, the AI support panel, the technical view) in 4 set-ups (dark and light, each at 1366 and 375 px wide), 15 Nov 2026; no console errors | Automated rules cover only part of WCAG. |
| [WCAG 2.1][wcag21] A and AA, the rest | Keyboard, screen reader, zoom, timing | Partly | Controls are buttons or labelled fields; a focus outline (`index.html` `:focus-visible`); the Help key also works by holding Enter or Space (`setupHelpKey`); charts have a table alternative (`drawTable`); the crew alarm line is `role="alert"`; reduced motion is respected (`index.html`, `src/earth-break.js`) | No manual check with a screen reader, keyboard only or 200% zoom. The 20-second "Are you okay?" timer is not assessed against success criterion 2.2.1. |
| [Section 508][s508] conformance report | A documented conformance statement | Not yet | This row | A conformance report after the manual checks. |

## Hazards and controls

A first hazard list by the developer, not an approved hazard analysis (SWE-205). In this design the program is a second look, not the primary control: the ship's caution and warning system, the crew, the crew medical officer and the flight surgeons are. The screen says so for cabin alarms: "Follow the ship's own procedure for this alarm; this screen only mirrors the ship." (`src/crew.js` `procedureFor`).

| Hazard | How it could happen | Controls in the app (evidence) | Residual risk |
|---|---|---|---|
| H1 A missed urgent reading | A dangerous value arrives and nobody acts | One reading past a red limit acts at once, by automation alone, never through the AI and never "undecided" (`src/engine.js` `redLimitOf`, `redAlarm`; test `red limit: the automation alone, never the AI and never "undecided"; the doctor step follows the situation`); two or more vital signs outside the norm within 24 h count at once (`src/state-levels.js` `RULES.vitalsTogether`; test `two or more vital signs outside the norm at the same time count at once (NEWS2), other measures do not`); the urgent tone and voice (`playLevel`); an alarm line for every crewmate (`shareCrewAlarm`); the Help key for what no device sees | Thresholds are drafts; NEWS2 is a hospital score for adults, not tested in flight. A daily measure just outside the norm waits for 3 readings in a row, unless two or more vital signs are out together. Sound comes only from an open page, and "Sound off" stays off on that device until switched on. A crewmate's screen shows the alarm line only when it next loads its records: there is no live push. |
| H2 A false alarm | Exercise, a loose sensor or a gesture raises an alarm, and real alarms lose trust | A daily vital just outside the norm needs 3 readings in a row (`RULES.outStreakForAttention`); changes common in flight are information, and a fever never counts as one (`EXPECTED`; test `temperature: the in-flight rise is common only within its band, and a fever never is`); "I am exercising" (capped at 2 hours); "Are you okay?" before any camera alarm; the Help key needs a 2-second hold; "I am okay: false alarm"; a strap without skin contact saves nothing (test `a heart rate strap without skin contact saves nothing`) | One reading past a red limit still alarms at once. A pulse oximeter can read 2 to 4% off; the step says to repeat the reading. |
| H3 A stale reading | An old value is read as current, or silence is read as health | "Old data, n days" in cyan; "n days ago" stamps; "not enough fresh data to judge" instead of "excellent" (test `no fresh data: silence is never "excellent"`); ISS feed values saved with their own old time | Measures without a set cadence are never marked stale. Cadences are drafts. |
| H4 A wrong person | A reading or a message is filed under another crewmember | Sign-in per person and an optional PIN (`src/crew.js` `choosePerson`, `askPin`); every reading must carry a known person (test `every reading must be signed with a known person`); the server checks the id and files by id; a restored copy leaves out other people's events (`restoreMine`); device and file readings go to the signed-in person | The program cannot tell who is at the keyboard. A device left connected under the wrong sign-in saves to that person. How people are told apart is the team's open decision. |
| H5 A lost message | A message to the doctor is believed sent but never arrives | The screen says what really happened (`sentText`, `renderAlerts`); the server seals and queues a message before it keeps the event, and refuses a message to Earth when it has no key, so the screen can say so (test `without a key the message is not queued and not kept, so the screen can say so and send it again`); outbox files are written whole, then renamed | No downlink exists. No delivery or read receipt, no retry, no expiry. On the static copy, messages stay in one browser. |
| H6 Private data seen by a crewmate | A crewmate opens another person's mind, cycle or messages | One person's records per sign-in; alarm lines only, for crewmates; the optional PIN; private logs; the journal and the plan only in this browser; what is typed in the AI support session is never saved (`src/crew.js` `openSupport`) | No sign-in on the server: `?all=1` and the files in `data/` are open to anyone at the computer. Plain text at rest. The PIN is a privacy screen, not a lock. |
| H7 A broken device reading | A faulty or misplaced sensor gives a wrong value | Unreadable values are refused and never become 0, and so are negative values, except where a measure can be below zero (hearing in dB HL, OCT change, cabin temperature) (`checkNorm`); the server checks every value (`eventProblem`); hand entry and CSV import use plausibility limits (`PLAUSIBLE`, `src/csv-import.js` `importCsv`); Bluetooth values are read as the specifications define them, and the device's own flags are honoured: demonstration data refused, no skin contact saves nothing (`src/ble.js`; tests in `tests/integrations.test.js`) | A plausible but wrong value passes and may raise or hide an alarm. No cross-check between sensors. No test with real Bluetooth hardware is on record. |
| H8 The camera misreading | A gesture is read as a hand on the chest, or a real event is missed | A hand held on the chest for 1.5 s only starts the question "Are you okay?" (`src/camera-rules.js` `RULES`); only "I need help" or no answer within 20 s raises the alarm; a sleeping person is ignored; no feelings are read from face or voice; the camera turns itself off after an hour and is not for crew quarters (`toggleCamera`); video is never stored or sent; tests in `tests/camera.test.js` | The models are not meant for decisions a human life depends on (Google's model cards, quoted on the page). A person out of frame or in poor light is missed. A person who answers "I am okay" when not okay stops the alarm. |

## Technology readiness

**Our estimate: TRL 4 for the software as a whole, with some parts at TRL 3.** Self-assessed against NASA's definitions, which give a software description for each level ([NPR 7123.1D Appendix E][trl]; overview: [NASA, Technology Readiness Levels][trlpage]). NASA has not assessed it. No AI model is part of the estimate, because none is connected.

| Level | NASA's software description (quoted) | This prototype |
|---|---|---|
| TRL 3 | "Development of limited functionality to validate critical properties and predictions using non-integrated software components." | Passed for every part. |
| TRL 4 | "Key, functionality critical software components are integrated and functionally validated to establish interoperability and begin architecture development. Relevant environments defined and performance in the environment predicted." | Mostly reached. The machine, the levels, the store, the server, both screens and the FHIR export work together on one computer, with made-up data and real NASA OSDR data, under 226 automatic tests. The relevant environment, a web app on the station's SSC server with no internet, is defined from NASA's ISS research software rules. Not done: performance in that environment is not predicted or measured. Parts at TRL 3: the Bluetooth thermometer, cuff, pulse oximeter and heart rate profiles, tested only against the byte formats of the Bluetooth specifications, with no test on a real device on record; the CSV formats, tested only with files written from their documents. |
| TRL 5 | "End-to-end software elements implemented and interfaced with existing systems/simulations conforming to target environment. End-to-end software system tested in relevant environment, meeting predicted performance." | Not reached: no run on flight-like hardware, no link to a NASA system or to a simulated downlink, no test with people. |

What would move it towards TRL 5:

- run it on flight-like hardware under the station's network rules, for example in an SSC lab;
- connect real devices and record what happens;
- send the outbox through a simulated delay-tolerant downlink;
- test it with people, with the NASA usability score and the Bedford workload scale;
- carry out a hazard analysis with NASA's Safety and Mission Assurance.

## Open decisions

These stay with the human member of team Just For Fun. This page lists them and decides none of them.

- Which questionnaire to use for the mind.
- Whether to use a NEWS2 total score, or only its single red values as now.
- The crisis floor rule: what happens in immediate danger during an AI support session.
- The AI's name.
- "Anonymous" or "private" as the word for the AI support session.
- The level thresholds, including the mind rule (attention at 6 low days of the last 14, needs action at 8) and the 3-in-a-row watch rule.
- Names for crew members 3 and 4.
- Who gives advice: the automation or the AI.
- How the program tells people apart.
- Whether the steps before "Message the doctor" are anonymous.
- Who analyses X-rays and other images.
- The default when there is no doctor on board and no link to Earth.
- Whether to convert the ISS cabin O2 value into the inspired O2 value.
- An upper heart-rate limit during exercise.
- A resting pulse of 40 for athletes.
- How long a red reading of a rarely taken measure stays.
- An ISS-specific cabin pressure limit.

## Sources

All links were opened on 15 Nov 2026.

- [NASA-STD-3001 Volume 1 Rev C, Crew Health][v1]
- [NASA-STD-3001 Volume 2 Rev F, Human Factors, Habitability, and Environmental Health][v2]
- [OCHMO-STD-100.1A Rev A, NASA Space Flight Medical Selection, Recertification and Mission Evaluation Standards][ochmo100]
- [OCHMO-TB-004 Rev D, Carbon Dioxide][tb004]
- [OCHMO-TB-016 Rev B, Behavioral Health and Performance][tb016]
- [OCHMO-MTB-004 Rev A, Space Adaptation Sickness (SAS) and Space Readaptation Syndrome][mtb004]
- [OCHMO-TB-044, Medical Operations Spaceflight Considerations][tb044]
- [OCHMO-TB-003 Rev A, Habitable Atmosphere][tb003]; [Bone Loss, OCHMO-MTB-013 Rev D (cited in the code as OCHMO-TB-030)][tb030]
- [14 CFR 1214.403, ISS Crew Code of Conduct (CFR 2026)][cfr]
- [HL7 FHIR R4][fhir]; [the R4 JSON schema][fhirschema]
- [NASA JSC ROI software requirements, archived 12 Mar 2026][roi]
- [NPR 7150.2D Appendix D, software classifications][npr7150d]; [Appendix C, requirements mapping matrix][npr7150c]; [Chapter 3][npr7150ch3]
- [NASA-STD-8739.8B, Software Assurance and Software Safety][std87398] (the file at this address says "Approved: 2022-09-08" and also still carries the line "This official draft has not been approved")
- [NPR 7123.1D Appendix E, Technology Readiness Levels][trl]; [NASA, Technology Readiness Levels][trlpage]
- [Section 508, ICT standards and guidelines][s508]; [WCAG 2.1][wcag21]
- [NTIA, The Minimum Elements for a Software Bill of Materials][ntia]
- [RCP, NEWS2 report, the source of the single red values][news2]

## How this was checked

- `npm test` on the commit named at the top.
- Node's own test coverage: `node --test --experimental-test-coverage` with the files of `npm test`.
- Accessibility: axe-core 4.10.2 in headless Chromium against the local server, without pressing Send, Save or any switch.
- Contrast: worked out from the colour tokens in `index.html`, both themes, and measured on the rendered pages: every visible text against its background, in the same set-ups as axe-core.
- FHIR: the bundles of the four example crew members against HL7's R4 JSON schema.
- Every function and test named on this page was searched for in the code.
- The browser, contrast and schema checks ran from scripts outside this repository; they are not part of `npm test`.

[v1]: https://www.nasa.gov/wp-content/uploads/2023/11/nasa-std-3001-vol-1-rev-c-with-signature.pdf
[v2]: https://www.nasa.gov/wp-content/uploads/2025/05/nasa-std-3001-vol-2.pdf
[ochmo100]: https://www.nasa.gov/wp-content/uploads/2023/04/ochmo-std-100.1a.pdf
[tb004]: https://www.nasa.gov/wp-content/uploads/2023/12/ochmo-tb-004-carbon-dioxide.pdf
[tb016]: https://www.nasa.gov/wp-content/uploads/2023/12/ochmo-tb-016-behavioral-health.pdf
[mtb004]: https://www.nasa.gov/wp-content/uploads/2025/09/ochmo-mtb-004-space-adaptation-sickness-sas.pdf
[tb044]: https://www.nasa.gov/wp-content/uploads/2025/08/ochmo-tb-044-medical-operations.pdf
[tb003]: https://www.nasa.gov/wp-content/uploads/2023/12/ochmo-tb-003-habitable-atmosphere.pdf
[tb030]: https://www.nasa.gov/wp-content/uploads/2023/12/ochmo-tb-030-bone-loss.pdf
[cfr]: https://www.govinfo.gov/content/pkg/CFR-2026-title14-vol5/pdf/CFR-2026-title14-vol5-sec1214-403.pdf
[fhir]: https://hl7.org/fhir/R4/
[fhirschema]: https://hl7.org/fhir/R4/fhir.schema.json.zip
[roi]: https://web.archive.org/web/20260312221613/https://tsc.jsc.nasa.gov/roi-swprocess/sw_reqs.html
[npr7150d]: https://nodis3.gsfc.nasa.gov/displayDir.cfm?Internal_ID=N_PR_7150_002D_&page_name=AppendixD
[npr7150c]: https://nodis3.gsfc.nasa.gov/displayDir.cfm?Internal_ID=N_PR_7150_002D_&page_name=AppendixC
[npr7150ch3]: https://nodis3.gsfc.nasa.gov/displayDir.cfm?Internal_ID=N_PR_7150_002D_&page_name=Chapter3
[std87398]: https://standards.nasa.gov/sites/default/files/standards/NASA/B/0/NASA-STD-87398-Revision-B_0.pdf
[trl]: https://nodis3.gsfc.nasa.gov/displayDir.cfm?Internal_ID=N_PR_7123_001D_&page_name=AppendixE
[trlpage]: https://www.nasa.gov/directorates/somd/space-communications-navigation-program/technology-readiness-levels/
[s508]: https://www.access-board.gov/ict/
[wcag21]: https://www.w3.org/TR/WCAG21/
[ntia]: https://www.ntia.gov/report/2021/minimum-elements-software-bill-materials-sbom
[news2]: https://www.rcp.ac.uk/media/a4ibkkbf/news2-final-report_0_0.pdf
