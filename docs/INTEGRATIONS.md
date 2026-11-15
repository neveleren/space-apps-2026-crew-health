# Connections: what the program links to, and how honest each link is

Night of 14 to 15 November 2026. Written by Claude (Anthropic), an AI system, for team Just For Fun; the team decides.

**No NASA system is connected.** NASA's own crew health systems (EveryWear, the Bio-Monitor, the Crew Active Dosimeter, Chiron and CHP-IDSP, ISS FIT, the crew plan) have no public interface, so they are rows marked Planned that name who must agree. The only live links are to public services on Earth (NASA's ISSLive feed through Lightstreamer, NOAA's space weather service); both are off by default, and the program works the same without the internet. The other working links are open standards: Bluetooth health devices, HL7 FHIR, iCalendar and CSV files.

Three words, one per row, shown as a chip in Settings:

- **Working**: it runs in the program now. A working row that has not been tried with a real device or a real file says so on the row itself, not only behind its "?": both Bluetooth rows and the CSV import.
- **Simulated**: the program imitates it.
- **Planned**: designed, needs the partner named in the row.

Code: `src/integrations.js` (the list and the Settings drawing), `src/ble.js`, `src/csv-import.js`, `src/isslive.js`, `src/spaceweather.js`, `src/fhir.js`, `src/ical.js`. Tests: `tests/integrations.test.js` (offline, with tonight's saved answers in `tests/fixtures/`; `JFF_LIVE=1` adds the two live checks).

## The list

| Connection | Status | Standard or format | Tested tonight | Sources |
|---|---|---|---|---|
| Bluetooth heart rate monitor | Working | Bluetooth Heart Rate Profile; Web Bluetooth `heart_rate`, `heart_rate_measurement` (Chrome or Edge) | Byte format checked against the GATT Specification Supplement 3.126; no strap connected tonight | [HRP](https://www.bluetooth.com/specifications/specs/heart-rate-profile-1-0/), [GSS](https://btprodspecificationrefs.blob.core.windows.net/gatt-specification-supplement/GATT_Specification_Supplement.pdf), [Web Bluetooth names](https://github.com/WebBluetoothCG/registries), [MDN browser data](https://github.com/mdn/browser-compat-data/blob/main/api/Bluetooth.json) |
| Bluetooth thermometer, blood pressure cuff, pulse oximeter | Working (not yet tried with a real device) | Health Thermometer, Blood Pressure and Pulse Oximeter profiles: `temperature_measurement` (FLOAT), `blood_pressure_measurement` (SFLOAT, mmHg or kPa), `plx_continuous_measurement`, `plx_spot_check_measurement` (SFLOAT) | Unit tests with the specifications' own byte examples (36.4 °C = FLOAT 0xFF00016C, 114 mmHg = SFLOAT 0x0072) and each flag of each measurement at least once | [HTP](https://www.bluetooth.com/specifications/specs/health-thermometer-profile-1-0/), [BLP](https://www.bluetooth.com/specifications/specs/blood-pressure-profile-1-0-1/), [PLXP](https://www.bluetooth.com/specifications/specs/pulse-oximeter-profile-1-0-1/), [PLXS 1.0.1](https://www.bluetooth.com/wp-content/uploads/Files/Specification/HTML/PLXS_v1.0.1/out/en/index-en.html), [PHD transcoding (FLOAT, SFLOAT)](https://www.bluetooth.com/wp-content/uploads/2019/03/PHD_Transcoding_WP_v16.pdf) |
| Export for medical records | Working | HL7 FHIR R4 Bundle (collection), LOINC, UCUM, Device and Provenance, HTEST on made-up data | 13 LOINC codes looked up in NLM's table; a generated file passed the official R4 JSON schema | [Bundle](https://hl7.org/fhir/R4/bundle.html), [vital signs](https://hl7.org/fhir/R4/observation-vitalsigns.html), [categories](https://hl7.org/fhir/R4/codesystem-observation-category.html), [Provenance](https://hl7.org/fhir/R4/provenance.html), [HTEST](https://terminology.hl7.org/CodeSystem-v3-ActReason.json), [CSA C2M2 uses FHIR](https://publications.spaceops.org/2025/download_by_id.php?id=0092) |
| NASA OSDR: Inspiration4 blood tests | Working (saved copy, offline) | OSDR files of OSD-575 and OSD-569, built into `src/inspiration4.js` | Files API answered; both files public (below) | [OSD-575](https://osdr.nasa.gov/bio/repo/data/studies/OSD-575), [OSD-569](https://osdr.nasa.gov/bio/repo/data/studies/OSD-569), [files API](https://osdr.nasa.gov/osdr/data/osd/files/575) |
| ISS cabin air, live (NASA ISSLive) | Working, Earth demo, off by default | Lightstreamer TLCP 2.4.0 over HTTPS, adapter set ISSLIVE, MERGE subscription | Real values read from Node and from a browser page (below) | [ISS Live!](https://ntrs.nasa.gov/citations/20130013825), [Lightstreamer example](https://github.com/Lightstreamer/Lightstreamer-example-ISSLive-client-javascript), [TLCP 2.4.0](https://lightstreamer.com/sdks/ls-generic-client/2.4.0/TLCP%20Specifications.pdf), [ISS Mimic](https://github.com/ISS-Mimic/Mimic) |
| Space weather (NOAA) | Working, Earth demo, off by default | NOAA SWPC JSON, no key; NOAA S-scale from the 10 MeV proton flux | Real values read from Node and from a browser page (below) | [protons](https://services.swpc.noaa.gov/json/goes/primary/integral-protons-1-day.json), [alerts](https://services.swpc.noaa.gov/products/alerts.json), [NOAA scales](https://www.swpc.noaa.gov/noaa-scales-explanation), [NASA SRAG](https://srag.jsc.nasa.gov/spaceradiation/how/how.cfm) |
| Import readings from a file | Working | CSV; Hexoskin, Astroskin, Philips Actiware (documented), Svantek (guessed) | Unit tests with small files written from the documents | [Hexoskin CSV](https://support.hexoskin.com/understanding-my-data-in-the-csv-file), [Hexoskin time](https://support.hexoskin.com/understand-and-convert-hexoskin-timestamps), [Astroskin CSV](https://support.hexoskin.com/en/astroskin/understanding-my-data-in-the-csv-file-astroskin), [Actiware guide](https://www.philips.com/c-dam/b2bhc/master/sites/actigraphy/solutions/Actiware/actiware-user-guide.pdf), [pyActigraphy](https://github.com/ghammad/pyActigraphy/blob/master/pyActigraphy/io/rpx/multilang.py), [SvanPC++](https://svantek.com/products/svanpc-software/) |
| Add to plan (calendar file) | Working | iCalendar, IETF RFC 5545, times in GMT | Unit tests: CRLF, folding at 75 octets, escaping, required properties | [RFC 5545](https://www.rfc-editor.org/rfc/rfc5545) |
| Link to Earth | Simulated | Store and forward inside the program (the switch imitates the link) | Not changed tonight | [NASA DTN](https://www.nasa.gov/communicating-with-missions/delay-disruption-tolerant-networking/) |
| Other devices on the technical view | Simulated | Buttons send made-up readings with the device's source id (`config.js` SOURCES) | Not changed tonight | [CSA Bio-Monitor](https://www.asc-csa.gc.ca/eng/sciences/bio-monitor.asp) |
| Station server and downlink folder | Planned, needs NASA | Web app on the station (SSC) server; one dated FHIR file per person a day | Not testable | [NASA ROI rules (archived)](http://web.archive.org/web/20260312221613/https://tsc.jsc.nasa.gov/roi-swprocess/sw_reqs.html), [CHP-IDSP 2025](https://ntrs.nasa.gov/api/citations/20250000330/downloads/CHP-IDSP%20Project%20Updates_IWS%202025.pdf) |
| Delay-tolerant networking (NASA HDTN) | Planned, needs NASA | Bundle Protocol 7 (RFC 9171) through HDTN, for example BPSendFile | Not testable | [HDTN](https://github.com/nasa/HDTN), [HDTN on the ISS](https://ntrs.nasa.gov/api/citations/20240007078/downloads/HDTN_ISS_Testing_2024.pdf), [RFC 9171](https://www.rfc-editor.org/rfc/rfc9171) |
| EveryWear | Planned, needs ESA, CNES and MEDES | No public interface or format found | Not testable | [ESA 2026](https://blogs.esa.int/orion/2026/04/06/everywear-from-earth-orbit-to-the-moon/), [ESA Artemis II](https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/European_eyes_on_Artemis), [MEDES](https://www.medes.fr/en/project/everywear-app/) |
| NASA crew medical record (Chiron, ExMC Medical Data Architecture) | Planned, needs NASA | Ground prototypes; no public format; our FHIR file is the offer; the Medical record screen points here for allergies, vaccinations, diagnoses, prescriptions, procedures and visits, which it does not hold | Not testable | [xEHR](https://ntrs.nasa.gov/api/citations/20230003216/downloads/xEHR%20Techport_FinalFY23.pdf), [CHP-IDSP and Chiron](https://ntrs.nasa.gov/api/citations/20250004859/downloads/CHP-IDSP_AsMA%202025.pdf), [Chiron TechPort](https://techport.nasa.gov/api/projects/145030), [MDA 2017](https://ntrs.nasa.gov/api/citations/20170009788/downloads/20170009788.pdf) |
| Crew plan, live (Score, OPTIMIS Viewer) | Planned, needs NASA | No public interface; the calendar file above is what works today | Not testable | [OPTIMIS 2019](https://ntrs.nasa.gov/api/citations/20190027148/downloads/20190027148.pdf), [Playbook 2023](https://ntrs.nasa.gov/api/citations/20230008619/downloads/Spacechi2023v5.pdf) |
| Food and drink (ISS FIT) | Planned, needs NASA | Weekly downlink; flown interface not public | Not testable | [NASA nutrition](https://www.nasa.gov/directorates/esdmd/hhp/nutritional-biochemistry/), [open-source beta](https://github.com/george419/NTL-ISS-Food-Intake-Tracker) |
| Crew Active Dosimeter | Planned, needs NASA (SRAG) | Bluetooth to station laptops; format not public | Not testable | [CAD paper](https://read.qxmd.com/read/37945094/the-importance-of-time-resolved-personal-dosimetry-in-space-the-iss-crew-active-dosimeter), [NASA SRAG](https://srag.jsc.nasa.gov/spaceradiation/how/how.cfm) |
| Blood analyzers on board | Planned, needs the makers and agencies (for example Abbott, CSA) | Each device's own data manager | Not testable | [i-STAT](https://www.globalpointofcare.abbott/en/product-details/apoc/istat-wireless.html), [CSA ACTIS](https://www.asc-csa.gc.ca/eng/news/articles/2026/2026-10-13-canadian-technology-launches-to-station.asp), [CSA Bio-Analyzer](https://asc-csa.gc.ca/eng/iss/bio-analyzer.asp) |
| Medical images (DICOM) | Planned, needs NASA and the ground medical team | DICOM; the program would show only date, type and body part | Not testable | [DICOM](https://www.dicomstandard.org/about), [AMOS](https://ntrs.nasa.gov/api/citations/20240012964/downloads/Amos%20Paper%20with%20Figures%20and%20Legends.pdf) |
| Watch data before flight | Planned, needs each maker's terms and consent | Garmin FIT files; Apple HealthKit only in a native app | Not testable | [Garmin FIT SDK](https://developer.garmin.com/fit/overview/), [HealthKit](https://developer.apple.com/documentation/healthkit/setting-up-healthkit) |
| NASA astronaut archives (LSDA, LSAH) | Planned, needs NASA approval | Formal data request through the NASA Life Sciences Portal | Not testable | [NLSP data requests](https://nlsp.nasa.gov/data-request-guidelines) |

## Tested tonight against the real services (15 Nov 2026, GMT)

From this laptop, with Node's built-in `fetch` (Node 24) and, for the browser path, a page served on `http://127.0.0.1:18493` in headless Chrome 157. No library.

### NASA ISSLive through Lightstreamer

Requests, all `POST` with a form body to `https://push.lightstreamer.com/lightstreamer/<name>.txt?LS_protocol=TLCP-2.4.0`:

1. `create_session.txt`: `LS_adapter_set=ISSLIVE&LS_cid=mgQkwtwdysogQz2BJ4Ji%20kOj2Bg&LS_polling=true&LS_polling_millis=0&LS_idle_millis=0`. Answer: `CONOK,<session id>,50000,0,*`, `SERVNAME,Lightstreamer HTTPS Server`, `LOOP,0`. Server header: `Lightstreamer-Server/8.0.0 b2 build 5185`. Without `LS_cid` the answer is `CONERR,67,LS_cid parameter missing`.
2. `control.txt`: `LS_op=add&LS_subId=1&LS_mode=MERGE&LS_group=TIME_000001 USLAB000058 USLAB000059 USLAB000055 USLAB000053 NODE3000003 NODE3000001&LS_schema=TimeStamp Value Status.Class CalibratedData&LS_snapshot=true`. Answer: `REQOK,1`.
3. `bind_session.txt`: `LS_polling=true&LS_polling_millis=0&LS_idle_millis=3000`. Answer at 00:56:24, exactly (saved in `tests/fixtures/isslive-bind.txt`):

```
SUBOK,1,7,4
CONF,1,unlimited,filtered
U,1,1,7656.938877222206|27564979958|24|318/00:56:19
U,1,3,7656.932110277746|23.260463714599609375|24|23.3
U,1,2,7656.914610277746|757.94677734375|24|757.95
U,1,4,7359.018889999986|2.43509767988890413192848427570424973964691162109375|24|2.44
U,1,5,7358.857501111097|165.848984880285257759169326163828372955322265625|24|165.85
U,1,6,7372.5666677777635|2.94987174471259105956733037601225078105926513671875|24|2.95
U,1,7,7358.857223333319|150.667058321218490846149506978690624237060546875|24|150.67
U,1,1,7656.938894444439|27564980020|24|318/00:56:20
LOOP,0
```

4. `control.txt` with `LS_op=destroy`. Answer: `REQOK,2`.

What the program made of it:

| Item | Name | Raw value | Time of the value | Saved as |
|---|---|---|---|---|
| USLAB000058 | US Lab cabin pressure | 757.95 torr | 2026-11-15 00:54:52 | cabinPressure 101.05 kPa (x 0.133322) |
| USLAB000059 | US Lab cabin temperature | 23.26 °C | 2026-11-15 00:55:55 | cabinTemp 23.3 °C |
| USLAB000055 | US Lab ppCO2 (Major Constituent Analyzer) | 2.435 torr | 2026-11-02 15:01:08 (12.4 days old) | co2 2.44 mmHg, marked stale |
| USLAB000053 | US Lab ppO2 (Major Constituent Analyzer) | 165.85 torr | 2026-11-02 14:51:27 (12.4 days old) | cabinO2 155.6 mmHg as inspired O2, marked stale |
| NODE3000003 | Node 3 ppCO2 | 2.95 torr | 2026-11-03 04:34:00 | shown, not saved |
| NODE3000001 | Node 3 ppO2 | 150.67 torr | 2026-11-02 14:51:26 | shown, not saved |
| TIME_000001 | Station clock | Status.Class 24 | 2026-11-15 00:56:20 | signal acquired |

Earlier at 00:36:16 the same items read 758.05 torr, 23.57 °C and the same CO2 and O2 values; the crewlock pressure (AIRLOCK000049) read 757.00 torr. The live check at 01:08 (Node) and the browser page at 01:09 (Chrome, origin 127.0.0.1) read the same pressure, still stamped 00:54:52, and 23.2 °C.

Notes from the test:

- **Time.** TimeStamp is hours counted as day of the year times 24 plus the GMT hour: 7656.9389 is day 319 (15 November) at 00:56:20. The item's own text says `318/00:56:20`, one day behind the GMT day number the ISS uses for 15 November; the TimeStamp and the Value of TIME_000001 (milliseconds, 319.04 days) agree with day 319, so the program uses TimeStamp.
- **Units.** The 2011 item list says PSI or PSIA, but 758 only fits torr (sea-level pressure); ISS Mimic labels them torr. 1 torr = 0.1333224 kPa (NIST SP 811).
- **Oxygen.** The program's cabin oxygen cell is the inspired O2 pressure of NASA-STD-3001 Vol 2 [V2 6003]: PIO2 = (PB - 47) x FIO2. From the Lab ppO2 that is (757.95 - 47) x 165.85 / 757.95 = 155.6 mmHg, just above the 145 to 155 target, so the screen will flag it; the Node 3 ppO2 of 150.67 would give 141.3. Both values are 12 days old and come from the analyzer the station replaced as its main air monitor in January 2026 ([NASA ICES-2026-379](https://ntrs.nasa.gov/api/citations/20260003280/downloads/ISS%20ECLSS%20Testbed%202026_final_A.pdf)); the newer sensors are not in the public list.
- **CORS.** With `Origin: http://127.0.0.1:8080` the server answered `Access-Control-Allow-Origin: http://127.0.0.1:8080` (it echoes any origin; `Origin: null` got `*`). The browser page read the feed without any proxy.

### NOAA Space Weather Prediction Center

At 00:56 to 00:57 (Node), every answer HTTP 200 with `Access-Control-Allow-Origin: *`:

- `integral-protons-1-day.json`: 2,288 rows, GOES-18 only, energies of at least 1, 5, 10, 30, 50, 60, 100 and 500 MeV every 5 minutes. Newest at least 10 MeV: **0.2438 pfu at 00:45**. S level 0: no solar radiation storm (S1 starts at 10 pfu).
- `alerts.json`: 71 messages; newest **14 Nov 22:49:43 UTC, `ALTTP2`, "ALERT: Type II Radio Emission"**, begin 21:27 UTC, estimated velocity 1972 km/s. No proton alert among the 71.
- `noaa-scales.json`: NOAA's own current S level 0 ("none") at 00:55, the same as the program's; 5% chance of a radiation storm on each of the next days; G1 (minor geomagnetic storm) forecast for 17 November.
- Again at 01:08 (Node): 0.2387 pfu at 01:00, S0. The browser page at 01:09 read the same.

### NASA OSDR

`https://osdr.nasa.gov/osdr/data/osd/files/575`: HTTP 200, 9 files, `LSDS-8_Comprehensive_Metabolic_Panel_CMP.upload_SUBMITTED.csv` not restricted (25,275 bytes). `.../files/569`: 11 files, `LSDS-7_Complete_Blood_Count_CBC.upload_SUBMITTED.csv` not restricted (26,138 bytes). Its CORS answer names only `osdr.nasa.gov`, so a page of ours cannot read OSDR directly: refreshing the saved copy stays a developer tool on Earth (`tools/build_inspiration4.py`).

### LOINC codes (NLM Clinical Tables)

Each code the FHIR file uses was looked up at `https://clinicaltables.nlm.nih.gov/api/loinc_items/v3/search?terms=<code>` and found with this name: 8867-4 Heart rate; 9279-1 Respiratory rate; 8310-5 Body temperature; 2708-6 Oxygen saturation in Arterial blood; 59408-5 Oxygen saturation in Arterial blood by Pulse oximetry; 85354-9 Blood pressure panel with all children optional; 8480-6 Systolic blood pressure; 8462-4 Diastolic blood pressure; 1556-0 Fasting glucose [Mass/volume] in Capillary blood; 93832-4 Sleep duration; 9108-2 Fluid intake total 24 hour; 56844-4 Intraocular pressure of Eye; 94122-9 Oxygen consumption (VO2)/Body weight [Volume Rate Content] --peak during exercise. Also found, not used: 1558-6 (fasting glucose, serum or plasma), 41653-7 (glucose, capillary, by glucometer), 8478-0 (mean blood pressure), 29463-7 (body weight).

### FHIR file against the official schema

A file built from the example flight (187 readings of the last 30 days, 6 devices, 7 provenance records) was checked with the HL7 FHIR R4 JSON schema (`https://hl7.org/fhir/R4/fhir.schema.json.zip`) and ajv 8.17.1, once with and once without the example switch: valid both times. The schema checks structure, not terminology or FHIR's invariants; the official HL7 validator (Java) was not run, as Java is not installed here.

### Not tested

No Bluetooth thermometer, cuff, oximeter or heart rate strap was connected tonight. The CSV formats were tested only with files written from the documents (next section).

### Checked again by an independent review (15 Nov 2026, 01:26 to 01:36 GMT)

- **ISSLive**, with curl and the same TLCP requests: `CONOK`, `SUBOK,1,8,4`; USLAB000058 757.94677734375 torr at TimeStamp 7657.3974 (01:23:50), USLAB000059 23.449 °C (01:26:25); the CO2 and O2 items unchanged since 2 Nov 15:01 and 14:51; AIRLOCK000049 756.36 torr; TIME_000001 at 7657.4453, that is 01:26:43, against a wall clock of 01:26:47, with the text `318/01:26:43`. `Origin: http://127.0.0.1:8080` was echoed, `Origin: null` got `*`; without `LS_cid`: `CONERR,67,LS_cid parameter missing`. The two live tests (`JFF_LIVE=1`) passed at 01:26.
- **NOAA**: HTTP 200 with `Access-Control-Allow-Origin: *`; 2,288 rows, GOES-18 only; newest at least 10 MeV 0.2244 pfu at 01:15 (S0); 71 alerts, newest `ALTTP2` at 22:49:43 UTC on 14 Nov; no proton alert; NOAA's own S level 0 at 01:25.
- **OSDR**: 9 and 11 files; the metabolic panel and blood count files not restricted; CORS names only `osdr.nasa.gov`.
- **LOINC**: all 13 codes found in NLM's table with the names the file uses (9108-2 is a volume rate, so `mL/(24.h)` fits).
- **FHIR**: files for each of the four example crew members (181 observations each) and one with every kind of source passed the R4 JSON schema with ajv 8.17.1.
- **Bluetooth**: the field layouts, flags and special values were compared with the GATT Specification Supplement of 2026-09-09 (sections 3.34, 3.80, 3.126, 3.239, 3.242, Table 2.1) and PLXS 1.0.1 (Tables 3.3, 3.4, 3.5, 3.7); the four service and five characteristic names are in the Web Bluetooth registry and none is on its blocklist.
- **No internet**: with a name that does not resolve and an address that never answers, both Earth demos returned `{ ok: false }` (in 0.1 s, or after the 3 s timeout given), never an exception.

## CSV files: documented or guessed

| Export | Recognised by | Becomes | What is documented | What is guessed |
|---|---|---|---|---|
| Hexoskin shirt | first column with `s/256`; heart rate and breathing rate columns | pulse and resp, one reading a minute (the mean of the minute) | time in 256ths of a second since 1970 GMT (divide by 256), one row a second, the column list | the exact header spelling (matched loosely) |
| Astroskin shirt | first column `time [s/1000]` | pulse, resp and spo2, one a minute | `time [s/1000]` and the column names as written by Hexoskin | quoting of the commas inside the column names |
| Philips Actiware, statistics | a row with Interval Type, Sleep Time and Start or End Date | sleep, one per sleep interval (Sleep Time in minutes, stamped at its end) | the column names (Actiware user guide, Statistics Tab) | the layout of the sections in the file |
| Philips Actiware, epoch by epoch | a row with Date, Time, Sleep/Wake and Interval Status | sleep per rest interval: sleep epochs (0) x epoch length | column names (Actiware guide, Data List Tab; pyActigraphy) | how rest intervals are labelled (REST, REST-S) |
| Svantek sound dosimeter | a column named LAeq and a date or time column | noise for the ship, one per GMT day (energy average) | only that SvanPC++ exports CSV | the whole layout |
| Any other CSV | nothing | the person picks the time column, value column, measure and unit | | |

Every imported value passes the same plausibility limits as typing it in by hand; values outside them are listed, not saved. Times without a zone are read as GMT. The order of day and month is decided once for the whole column (`guessDayFirst`): a first number above 12 means day first, a second number above 12 means month first, dates with dots are day first, otherwise month first. A semicolon file with decimal commas keeps that setting on its `rows`, so the column picker path reads 64,5 as 64.5. Cabin measures (noise) are saved for the ship, as the crew screen shows them.

## Using the modules on the crew screen

Every connector gives readings in one shape, `{ source, indicator, value, time, unit, person? }`, which `toEvents(readings, { person, state })` (integrations.js) turns into the program's saved events, each with its own time; `onlyNew(readings, storedEvents)` leaves out what is already saved.

| Connector | Call | Saved as (cell, source id, person) |
|---|---|---|
| Settings list | `renderConnections(host, { state, onToggle(id, on), onImport(file), onConnect(kind) })`; the "?" keys are `c:<id>`, answered by `connectionTip(id)` | |
| Bluetooth | `connectHealthDevice(kind, onReading, { onLive, onDisconnect })` from a button press; kind `thermometer`, `blood-pressure`, `pulse-oximeter` or `heart-rate`; returns `null` if the chooser is closed, else `{ kind, name, characteristics, disconnect() }` | thermometer: `temp` °C, `ble-thermometer`; cuff: `bp` {sys, dia} mmHg and `pulse`, `ble-bp`; oximeter: `spo2` % and `pulse`, `ble-oximeter`; strap: `pulse`, `ble-heart-rate`; the signed-in person |
| ISSLive | `readCabinAir({ skip })` resolves to `{ ok, signal, items, readings, credit }` or `{ ok: false, error }` | `cabinPressure` kPa, `cabinTemp` °C, `co2` mmHg, `cabinO2` mmHg; `isslive`; `ship`; each with the time of the value |
| Space weather | `readSpaceWeather()` resolves to `{ ok, level, name, flux, time, latestAlert, latestProtonAlert, noaa }` | nothing saved: shown only |
| CSV | `importCsv(text, { person })` gives `{ format, readings, rejected, notes }`, or `needsColumns` with `columns` and `rows`; then `columnPicker(columns, { onPick })` and `mapReadings(rows, { timeColumn, valueColumn, indicator, unit })` | `pulse`, `resp`, `spo2`, `sleep` for the person, `noise` for the ship; `csv-hexoskin`, `csv-astroskin`, `csv-actiware`, `csv-svantek` or `csv-import` |
| FHIR | `fhirBundle({ machine, person, days: 30, example, now })` gives `{ bundle, count, skipped, period }`; `checkBundle(bundle)` lists problems; file type `FHIR_TYPE`, name `fhirFileName(id)` | |
| Calendar | `toICalendar(planDrafts({ from, until }))`; file type `ICAL_TYPE`, name `icalFileName(id)` | |
| "?" of a value | `sourceInfo(source, { example })` gives `{ origin, label, text, thisValue }`; the person's own answers (`mood-report`, `sleep-rating`, the reaction test and any source marked `self: true`) give origin `self` ("Your own answer"), the camera gives `device` | |

## Decisions left to the team

1. **Cabin oxygen from ISSLive**: the feed gives the cabin's O2 partial pressure; the program converts it to the inspired pressure its norm uses. Keep, show the raw value instead, or leave oxygen out.
2. **Stale ISS values**: save the 12-day-old CO2 and O2 with their own old times (the screen then shows them as stale, as the research suggested), or show them only in the row.
3. **Glucose code**: 1556-0 (fasting, capillary) is used because the program's source is a fasting glucose meter; 1558-6 (lab draw) or 41653-7 (meter, fasting not stated) are the other choices.
4. **HTEST on simulated values**: values from the technical view's buttons are labelled test data in the FHIR file, like the example flight. The old export labelled only the example flight.
5. **Imported heart rates**: a shirt worn during exercise gives readings far above the resting norm of 60 to 100; the import keeps one a minute, as the Bluetooth strap does.
6. **Sound levels**: the daily energy average of a dosimeter file is not the 16-hour work period of the noise norm.
