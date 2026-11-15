// Short explanations for the crew screen, shown by the "?" buttons and on hover (see explain.js).
// Plain English, one idea per line. Written by Claude (Anthropic), an AI system, at the team's request.

export const TIPS = {
  aisession: { title: 'Anonymous session with AI', lines: ['A private talk with an AI program on this laptop: not a person and not a psychologist. Nothing you write is saved or sent.', 'It opens with the AI off too: then only the chat with the AI is missing, while Help now, coping steps and your plan work. No AI model is connected in this version.'] },
  helpnow: { title: 'Help now', lines: ['Fixed steps to a person, not AI: talk to a crewmate now, request a private call with the ground (you see the line before it goes), open your plan for hard days. In immediate danger, hold the Help key.', 'Also shown by a simple word rule, even when the AI is off: in the session, the journal and its letter, the five steps and the plan. Nothing is sent by itself.'] },
  noemotion: { title: 'No emotion reading', lines: ['The camera only looks for physical events: a hand held on the chest, sleep.', 'It never guesses feelings from a face or a voice (the EU AI Act bans emotion reading at work since February 2025).'] },
  pmc: { title: 'Prepare', lines: ['Opens a summary of your last 7 days for the weekly private medical conference: your numbers, check-ins, exercise, reaction tests, eye checks and what the program flagged, then your private symptom and medicine logs under a heading of their own.', 'You edit it and decide whether to send it: delete any line you want to keep to yourself.'] },
  symptomlog: { title: 'Log a symptom', lines: ['Most problems in flight are symptoms, not numbers: a stuffy nose, back pain, motion sickness, trouble sleeping, headache (NASA, 2017).', 'Pick one and how bad it is, in about ten seconds. Private: nothing is sent unless you choose.'] },
  privatelog: { title: 'Your private log', lines: ['Symptoms and medicines you logged in the last 14 days, newest first.', 'Kept for you: nothing here is sent to anyone unless you choose, for example by copying it into a message to the doctor or bringing it to your weekly private medical conference.'] },
  medicinelog: { title: 'I took a medicine', lines: ['Two taps from the ISS medical kit list. On the ISS, medicine use was recorded far less often than crews really took medicines (NASA Dose Tracker).', 'Private: nothing is sent unless you choose.'] },
  mindsupport: { title: 'Mind support', lines: ['Small things that help, a private journal, a plan for hard days, five steps to work a problem through, a 3-minute Earth break and a reaction test.', 'All from NASA research or proven methods, all working with no AI and no link to Earth.'] },
  comingup: { title: 'Coming up', lines: ['What the medical routine of an ISS flight brings next: a private medical conference every week, a private talk with the psychologist every two weeks, a thinking test every month, eye checks on flight days 30 and 90 and 30 days before return.', 'The dates here are an example schedule; on a real flight they come from the crew timeline.'] },
  falsealarm: { title: 'False alarm', lines: ['If the camera or the Help key raised an alarm by mistake, say so here: the alarm clears on your screen and on every crew screen, the doctor who was called gets a short note, and your record keeps both.', 'NASA-STD-3001 Vol 2 asks that the crew can safely override automation (10165).'] },
  help: { title: 'Help key', lines: ['Hold it for 2 seconds to call for help by hand, at any time, from any screen, also at sign-in when nobody is signed in.', 'Every crew screen then shows "<your name> pressed the Help key", and a message goes to the doctor, the same way as answering "I need help" to the camera question (NASA-STD-3001 Vol 2, 10178).', 'With a screen reader, a switch or voice control, a plain press asks "Call for help now?" first.', 'If the station computer does not take the call, the banner says so and this screen tries again every 5 seconds (a draft).'] },
  mission: { title: 'Mission profile', lines: ['Where the crew is decides how far help is: on the ISS a doctor answers within minutes and a return to Earth takes hours; on Mars a message takes up to about 22 minutes one way and there is no return for months (NASA HRP-48021).', 'The program works the same everywhere: it checks on board and does not need the link.'] },
  mydata: { title: 'Your data', lines: ['A copy of everything you entered or that was measured for you, as one file you keep.', 'The made-up example flight is not part of your data.'] },
  flightday: { title: 'Flight day (FD)', lines: ['FD 167 means flight day 167: days since launch, launch day is day 1. Mission elapsed time (MET) counts the same way in days, hours and minutes.', 'Here it counts the made-up example flight, which always runs up to today: flight day 167, landing in 26 days.'] },
  gmt: { title: 'GMT clock', lines: ['The ISS runs on GMT (Greenwich Mean Time).', '319/00:04 means day 319 of the year, 00:04. Every time in this app is GMT.'] },
  example: { title: 'Example data', lines: ['Made-up readings for four people, shaped like published flight studies.', 'For real NASA data choose an Inspiration4 person at sign-in. Switch the example off in Settings.'] },
  messages: { title: 'Messages', lines: ['Everything the program flagged, the most important first, each with what to do.', 'The colour is the highest level right now: blue attention, yellow needs action, red urgent.'] },
  crewalarm: { title: 'Crew alarm', lines: ['The screen of a crewmate raised an urgent alarm. Only the name and the sign are shared, never the rest of the record (14 CFR 1214.403).', 'Every crew screen where someone is signed in asks the station computer for new lines every 15 seconds (a draft); the tone repeats until someone presses Silence or the Messages key. The sign-in screen shows no crew lines.', 'A line stays until the person clears it ("I am okay: false alarm", or a reading back inside the limit), and at most 24 hours (a draft).'] },
  exercising: { title: 'Exercising', lines: ['"I am exercising" is on in Settings: heart rate from a strap or a cuff is recorded, not judged against the resting range. Low limits still count.', 'It turns itself off after 2 hours (a draft), and when you sign out.'] },
  who: { title: 'Signed-in person', lines: ['You see only your own readings and the shared cabin air.', 'Press to switch person.'] },
  nolink: { title: 'No link to Earth', lines: ['The program keeps working on board.', 'Messages to Earth wait and go out when the link is back.'] },
  aioff: { title: 'AI off', lines: ['Only the plain automation rules work.', 'Buttons that need the AI say so.'] },
  soundoff: { title: 'Sound off', lines: ['The needs-action tone and the spoken question are off.', 'Urgent alarms still sound. Sound is on again at the next sign-in, or in Settings.'] },
  camon: { title: 'Camera on', lines: ['It watches for a hand held to the chest.', 'Video stays on this computer and is never stored.'] },
  today: { title: 'Your health today', lines: ['The automation compares every new reading with its normal range and the team\'s rules, then writes this one sentence about body and mind.', 'Levels: fine, attention (blue), needs action (yellow), urgent (red). The levels and thresholds are drafts; the team decides.'] },
  level: { title: 'Levels', lines: ['Attention (blue, circle i): look at it when you can.', 'Needs action (yellow, triangle): do something today.', 'Urgent (red, octagon): act now. For the body, every crew screen shows it and a message goes to the doctor; with no link it waits in the outbox, and Messages says what really happened.', 'Each level has its own icon and word, so colour is never the only cue.'] },
  details: { title: 'Details', lines: ['Opens the first reason: its chart, its normal range, its history and what to do.'] },
  ai: { title: 'Analyse with AI', lines: ['Sends a summary of these readings to an AI on board that works without internet.', 'No AI is connected in this version; the team decides which one.'] },
  doctor: { title: 'Message the doctor', lines: ['Drafts a message with these readings for the doctor on board, or on Earth when the link is up; from Today it also holds your last 7 days of exercise, reaction tests, eye checks and your private symptom and medicine logs.', 'You can change the text before sending, and delete what you want to keep to yourself.'] },
  tellDoctor: { title: 'Tell the doctor on Earth', lines: ['Sends your recent check-ins to the doctor on Earth, only if you choose to. You see and can change the message first.', 'It always goes to Earth, also when a doctor is on board.'] },
  advice: { title: 'Small things that help', lines: ['Things that help astronauts, each with its source, chosen by plain rules from your check-ins: no AI, no internet.', 'Below them, checked reading for people who prefer to read without the AI: NASA health briefs, NASA evidence reports, MedlinePlus.'] },
  checkin: { title: 'Daily check-in', lines: ['Three quick questions each day: mood, energy and last night\'s sleep.', 'Your answers build up for a planned review. One bad day never raises an alarm.'] },
  keynums: { title: 'Key numbers', lines: ['Your everyday measures. A value turns blue, yellow or red only when it is outside its normal range; the arrow shows which way.', 'Press a row for its history, or its ? for where it comes from.'] },
  measures: { title: 'All measures', lines: ['Every measure, always in the same place. Find one by name or with an everyday word ("pulse", "sugar", "oxygen").', 'Each row\'s ? tells where the value comes from.'] },
  chart: { title: 'How to read the chart', lines: ['The line joins your readings; the shaded band is the normal range; rings mark readings outside it.', 'Dashed lines mark launch, today and landing. The dotted line is a straight-line forecast to landing, not a medical model.'] },
  display: { title: 'Display', lines: ['Dark suits a dim cabin, light a bright one.', 'NASA\'s Human Integration Design Handbook reports that dark or light text did not change reading speed.'] },
  camera: { title: 'Camera', lines: ['Google MediaPipe models run on this computer and find body and face points; nothing goes online.', 'A hand on the chest for 1.5 s asks "Are you okay?"; only "I need help" or no answer in 20 s raises the alarm: every crew screen shows it, and a message goes to the doctor (with no link it waits in the outbox).', 'Eyes closed and still for 5 s means asleep: no alarm.'] },
  connections: { title: 'Connections', lines: ['How data get in and out of the program.', 'Working now: Bluetooth heart rate, the export for medical records (HL7 FHIR), NASA OSDR data. Each row\'s ? says more.'] },
  onboard: { title: 'Simulation', lines: ['These switches simulate situations for the demonstration: AI working or not, a doctor on board or not, a link to Earth or not, and the made-up example flight.', 'Each change shows in the status line, so a simulated situation is never mistaken for a real one.'] },
  bluetooth: { title: 'Bluetooth heart rate', lines: ['Works now with any chest strap or watch that speaks the standard Bluetooth Heart Rate profile (Chrome or Edge on a computer).', 'One reading a minute is saved for the signed-in person.'] },
  fhir: { title: 'Export for the doctor', lines: ['Works now: the last 30 days as an HL7 FHIR file with LOINC codes, the format medical record systems read.', 'Example data carry FHIR\'s official "test data" label.'] },
  osdr: { title: 'NASA OSDR', lines: ['Works now: real, de-identified Inspiration4 blood tests from NASA\'s Open Science Data Repository (OSD-575 and OSD-569).'] },
  cycle: { title: 'Menstrual cycle', lines: ['Logged by you, day by day: how much you bled and your symptoms, for today or one of the 89 days before it (the last 90 days, a draft limit), never a day still to come.', 'Private: nothing is sent unless you choose to. Crewmates never see it; the doctor\'s summaries and the FHIR export leave it out. Your own "Save a copy of my data" file holds it.', 'The next date is a plain average of your last cycles, not a medical model. There are no fertility or ovulation features.'] },
  record: { title: "Medical record", lines: ["Everything this program holds about you, in one place: today's levels, your measures, lab results, eye checks, medicines and symptoms, alarms and what happened to them, messages to the doctor, mind check-ins, the cycle, and the files you can make.", "Read only: it shows what was saved and where each item came from. Press an item to open its page.", "Its sections follow the patient medical card of Ukraine's national e-health system, as apps like Helsi show it, and the HL7 International Patient Summary.", "Medicines, symptoms, the mind and the cycle are private: not sent to anyone unless you choose. A crewmate's screen only ever gets the one alarm line, never this record (14 CFR 1214.403)."] },
  recordmissing: { title: "Not in this prototype", lines: ["A full medical card also holds allergies, vaccinations, diagnoses, prescriptions, procedures, visits and referrals. This program does not hold them: they come from a medical record system, which is not connected.", "They are listed with that reason instead of being left out. The HL7 International Patient Summary asks this of its required sections (allergies, problems, medicines) when they hold no data; the others follow the same rule here.", "The planned connection is the row \"NASA crew medical record\" in Settings, Connections: today a ground prototype with no public data format, so it needs NASA."] },
};

// Where each measure comes from. Filled from cited research: what it is, what measures it on the ISS,
// what else could, how the value reaches this program. Links point to the source of each claim.
export const PROVENANCE = {
  "pulse": {
    "what": "Heartbeats per minute; NASA checks it in the in-flight fitness test and watches it live on spacewalks.",
    "iss": [
      {
        "name": "Bio-Monitor smart shirt, headband and tablet app",
        "maker": "Carré Technologies, for the Canadian Space Agency",
        "url": "https://www.asc-csa.gc.ca/eng/sciences/bio-monitor.asp"
      },
      {
        "name": "Bluetooth heart rate monitor during treadmill exercise",
        "maker": "",
        "url": "https://www.nasa.gov/blogs/spacestation/2026/07/08/crew-works-health-checks-cubesat-maintenance-and-soyuz-seat-checks/"
      }
    ],
    "could": [
      {
        "name": "Polar H10 chest strap",
        "maker": "Polar",
        "url": "https://www.polar.com/en/sensors/h10-heart-rate-sensor"
      },
      {
        "name": "Hexoskin smart shirt",
        "maker": "Carré Technologies",
        "url": "https://www.hexoskin.com/"
      }
    ],
    "how": "Electrodes in a chest strap or smart shirt catch each heartbeat (a watch uses light through the skin), and the beats are counted per minute.",
    "path": "Working now: any strap or watch with the standard Bluetooth Heart Rate profile connects in Settings, Connect (Web Bluetooth, Chrome or Edge)"
  },
  "bp": {
    "what": "Pressure in the arteries; on the ISS the 24-hour average fell about 8/9 mmHg as body fluids shift toward the head.",
    "iss": [
      {
        "name": "Arm, wrist and finger cuffs",
        "maker": "models not named by NASA",
        "url": "https://www.nasa.gov/blogs/spacestation/2026/07/08/crew-works-health-checks-cubesat-maintenance-and-soyuz-seat-checks/"
      },
      {
        "name": "Bio-Monitor smart shirt",
        "maker": "Carré Technologies, for the Canadian Space Agency",
        "url": "https://www.asc-csa.gc.ca/eng/sciences/bio-monitor.asp"
      }
    ],
    "could": [
      {
        "name": "Evolv wireless upper-arm monitor",
        "maker": "Omron",
        "url": "https://omronhealthcare.com/products/evolv-wireless-upper-arm-blood-pressure-monitor-bp7000"
      },
      {
        "name": "Index BPM upper-arm cuff",
        "maker": "Garmin",
        "url": "https://www.garmin.com/en-CA/blog/?p=32723"
      }
    ],
    "how": "An inflatable cuff on the arm (or a wrist or finger unit) squeezes and reads the top (systolic) and bottom (diastolic) pressure.",
    "path": "Planned: the standard Bluetooth Blood Pressure profile, or typed in from the cuff screen."
  },
  "spo2": {
    "what": "Share of the blood that carries oxygen; normal is 95 to 100%, and at 92% or lower a doctor should be called.",
    "iss": [
      {
        "name": "Pulse oximeter in the medical kit",
        "maker": "",
        "url": "https://ntrs.nasa.gov/api/citations/20110022379/downloads/20110022379.pdf"
      },
      {
        "name": "Bio-Monitor smart shirt",
        "maker": "Carré Technologies, for the Canadian Space Agency",
        "url": "https://www.asc-csa.gc.ca/eng/sciences/bio-monitor.asp"
      }
    ],
    "could": [
      {
        "name": "Model 3230 Bluetooth LE fingertip oximeter",
        "maker": "Nonin",
        "url": "https://www.nonin.com/products/3230/"
      },
      {
        "name": "Bluetooth Pulse Oximeter Profile",
        "maker": "Bluetooth SIG standard",
        "url": "https://www.bluetooth.com/specifications/specs/pulse-oximeter-profile-1-0-1/"
      }
    ],
    "how": "A finger clip shines red and infrared light through the fingertip and works out the oxygen share from the light that passes.",
    "path": "Planned: the standard Bluetooth Pulse Oximeter profile from a fingertip oximeter, or typed in."
  },
  "temp": {
    "what": "Core body temperature; on the ISS it rose about 1 °C at rest over about 2.5 months and went higher during exercise.",
    "iss": [
      {
        "name": "Double Sensor on the forehead",
        "maker": "Dräger, studies led by Charité Berlin",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC5701078/"
      },
      {
        "name": "Thermo-Mini headband",
        "maker": "DLR / ESA study",
        "url": "https://www.nasa.gov/missions/station/iss-research/wearable-tech-for-space-station-research/"
      }
    ],
    "could": [
      {
        "name": "CORE 2 core-temperature sensor",
        "maker": "greenteg",
        "url": "https://www.nordicsemi.com/Nordic-news/2025/09/CORE-2-integrates-Nordic-nRF52840-to-deliver-real-time-performance-insights-to-athletes"
      },
      {
        "name": "Bluetooth Health Thermometer Profile",
        "maker": "Bluetooth SIG standard",
        "url": "https://www.bluetooth.com/specifications/specs/health-thermometer-profile-1-0/"
      }
    ],
    "how": "An oral thermometer, or a forehead sensor that measures skin temperature and heat flow and calculates core temperature (heat-flux method).",
    "path": "Planned: the Bluetooth Health Thermometer profile, or typed in"
  },
  "resp": {
    "what": "Breaths per minute at rest; NASA's medical standard lists it among the vital signs of its health checks, and doctors use it to spot illness early.",
    "iss": [
      {
        "name": "Bio-Monitor smart shirt",
        "maker": "Carré Technologies, for the Canadian Space Agency",
        "url": "https://www.asc-csa.gc.ca/eng/sciences/bio-monitor.asp"
      },
      {
        "name": "PhysioTool chest and belly breathing sensors",
        "maker": "CNES",
        "url": "https://cnes.fr/en/node/2822"
      }
    ],
    "could": [
      {
        "name": "Hexoskin smart shirt",
        "maker": "Carré Technologies",
        "url": "https://www.hexoskin.com/"
      },
      {
        "name": "Garmin watches",
        "maker": "Garmin",
        "url": "https://developer.garmin.com/gc-developer-program/enterprise/health-api/"
      }
    ],
    "how": "Stretch (breathing) bands in a snug shirt count each rise and fall of the chest and belly.",
    "path": "Planned: Hexoskin's Bluetooth stream (it includes breathing rate) or its CSV export, or typed in"
  },
  "glucose": {
    "what": "Blood sugar after a night without food; part of NASA's pre-flight blood tests, with no public in-flight figures yet.",
    "iss": [
      {
        "name": "i-STAT handheld blood analyzer",
        "maker": "Abbott",
        "url": "https://publications.spaceops.org/2025/download_by_id.php?id=0092"
      },
      {
        "name": "Digital glucose meters",
        "maker": "",
        "url": "https://publications.spaceops.org/2025/download_by_id.php?id=0092"
      }
    ],
    "could": [
      {
        "name": "Dexcom G7 continuous glucose sensor",
        "maker": "Dexcom",
        "url": "https://www.dexcom.com/en-us/g7-cgm-system"
      },
      {
        "name": "i-STAT 1 analyzer with G cartridge",
        "maker": "Abbott",
        "url": "https://www.accessdata.fda.gov/cdrh_docs/pdf22/K223755.pdf"
      }
    ],
    "how": "A drop of finger blood on a test strip or in a cartridge (i-STAT gives a result in about 2 minutes), or a small sensor under the skin that reads continuously.",
    "path": "Planned: the standard Bluetooth Glucose profile from a meter, or typed in"
  },
  "sleep": {
    "what": "Hours asleep per night; ISS crews averaged about 6, below the 7 or more advised for adults, and NASA requires a daily sleep log.",
    "iss": [
      {
        "name": "Actiwatch Spectrum wrist actigraph",
        "maker": "Philips Respironics",
        "url": "https://www.nasa.gov/missions/station/iss-research/wearable-tech-for-space-station-research/"
      },
      {
        "name": "Actiwatch-L",
        "maker": "MiniMitter / Philips Respironics",
        "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC4188436/"
      }
    ],
    "could": [
      {
        "name": "Oura Ring",
        "maker": "Oura",
        "url": "https://cloud.ouraring.com/v2/docs"
      },
      {
        "name": "Garmin watches",
        "maker": "Garmin",
        "url": "https://developer.garmin.com/gc-developer-program/enterprise/health-api/"
      }
    ],
    "how": "A wrist tracker (actigraph) senses movement and light through the night and estimates sleep; a morning questionnaire adds sleep quality and quantity.",
    "path": "Planned: synced from the tracker"
  },
  "fluid": {
    "what": "Water from drinks and food per day; NASA asks at least 2,500 mL for men and 2,100 mL for women, to prevent dehydration and kidney stones, which are more likely in flight.",
    "iss": [
      {
        "name": "ISS Food Intake Tracker iPad app",
        "maker": "NASA",
        "url": "https://www.nasa.gov/directorates/esdmd/hhp/nutritional-biochemistry/"
      },
      {
        "name": "EveryWear iPad app food diary",
        "maker": "CNES and MEDES, for ESA",
        "url": "https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Astronauts/Diet_tracker_in_space"
      }
    ],
    "could": [
      {
        "name": "HidrateSpark smart bottle",
        "maker": "HidrateSpark",
        "url": "https://hidratespark.com/"
      },
      {
        "name": "Apple Health dietaryWater",
        "maker": "Apple",
        "url": "https://developer.apple.com/documentation/healthkit/hkquantitytypeidentifier/dietarywater"
      }
    ],
    "how": "Each drink and food item is logged by tap, barcode, photo or voice and the app adds up the water; a smart bottle can sense sips.",
    "path": "Planned: a drink log in this app, or import from Apple Health (dietaryWater) or Android Health Connect (HydrationRecord), both stored on the device..."
  },
  "bodyMass": {
    "what": "Body mass as a share of your own pre-flight mass; ISS crews lose 2 to 5% in the first month, and ordinary scales do not work in weightlessness. NASA's nutrition report calls a loss of more than 5% worthy of concern and a loss of 10% clinically significant (drafts here: attention and needs action).",
    "iss": [
      {
        "name": "SLAMMD",
        "maker": "NASA",
        "url": "https://www.nasa.gov/image-detail/gmt147_12_51_michael-barratt_a-few-crew-shots/"
      },
      {
        "name": "BMMD",
        "maker": "Russian segment",
        "url": "https://ntrs.nasa.gov/api/citations/20150000512/downloads/20150000512.pdf"
      }
    ],
    "could": [
      {
        "name": "UC-352BLE Bluetooth scale",
        "maker": "A&D",
        "url": "https://asia.aandd.jp/product/uc-352ble"
      },
      {
        "name": "Bluetooth Weight Scale Profile",
        "maker": "Bluetooth SIG standard",
        "url": "https://www.bluetooth.com/specifications/specs/weight-scale-profile-1-0-1/"
      }
    ],
    "how": "SLAMMD pushes the person with a known spring force and measures the acceleration (force = mass x acceleration); Russia's BMMD uses a spring's oscillation.",
    "path": "Planned: typed in from the SLAMMD or BMMD reading after each session (the app divides by the pre-flight mass)"
  },
  "mood": {
    "what": "How you feel today (bad, fair or good); on long missions low mood can build up slowly, and NASA's ISS diary study found morale fell in the third quarter of missions.",
    "iss": [
      {
        "name": "Spaceflight Standard Measures pre-sleep questionnaire",
        "maker": "NASA Human Research Program",
        "url": "https://www.nasa.gov/humans-in-space/spaceflight-standard-measures-characterizing-how-humans-adapt-in-space/"
      },
      {
        "name": "EveryWear app on iPad",
        "maker": "MEDES and CNES, with ESA and NASA",
        "url": "https://blogs.esa.int/orion/2026/04/06/everywear-from-earth-orbit-to-the-moon/"
      }
    ],
    "could": [
      {
        "name": "Apple Health: State of Mind",
        "maker": "Apple",
        "url": "https://support.apple.com/guide/iphone/log-your-state-of-mind-iph6a6decb13/ios"
      },
      {
        "name": "PHQ-2 and PHQ-9 depression questionnaires",
        "maker": "public clinical questionnaires",
        "url": "https://clinicaltables.nlm.nih.gov/api/loinc_items/v3/search?terms=44249-1&df=LOINC_NUM,LONG_COMMON_NAME&sf=LOINC_NUM"
      }
    ],
    "how": "Self-report: one tap a day in the morning check-in. On the ISS the same kind of answer is collected by a questionnaire before sleep (mood, team cohesion, performance) in the EveryWear app on iPad, and mood is a set topic of the private video call with a NASA psychiatrist or psychologist every two weeks.",
    "path": "Manual entry on the morning check-in, stored on this computer and looked at in the planned review."
  },
  "attitude": {
    "what": "How tired you feel right now, at the daily check-in, on the Samn-Perelli fatigue scale: one of seven statements, from 1 fully alert to 7 completely exhausted; a day at 5 or more counts as a low-energy day for the mind rule (a draft). On the ISS, nights under 6 hours of sleep went with slower reactions and higher stress and workload, so fatigue is worth catching early.",
    "iss": [
      {
        "name": "Reaction Self Test",
        "maker": "NASA research; University of Pennsylvania with Pulsar Informatics",
        "url": "https://ntrs.nasa.gov/api/citations/20090029851/downloads/20090029851.pdf"
      },
      {
        "name": "Private Psychological Conference",
        "maker": "NASA JSC Behavioral Health and Performance",
        "url": "https://ntrs.nasa.gov/api/citations/20170003866/downloads/20170003866.pdf"
      }
    ],
    "could": [
      {
        "name": "Garmin Body Battery",
        "maker": "Garmin",
        "url": "https://www.garmin.com/en-CA/blog/?p=32426"
      }
    ],
    "how": "Self-report: one tap a day in the morning check-in, on the Samn-Perelli seven-point fatigue scale (USAF School of Aerospace Medicine, 1982; the statements in the words of the UK Civil Aviation Authority, 2007). NASA's Reaction Self Test asked astronauts to rate stress, mental fatigue, physical exhaustion, tiredness and sleepiness on 11-point scales, then timed a 3-minute reaction test and gave feedback against astronaut norms. Fatigue level is also a set topic of the private psychologist call every two weeks.",
    "path": "Manual entry on the morning check-in. A wearable energy estimate is not connected in this version."
  },
  "sleepQuality": {
    "what": "Your own rating of last night's sleep, 1 (very poor) to 7 (excellent); ISS crews averaged about 6 hours of sleep a night, and NASA's medical standard asks every crew member for a daily sleep rating.",
    "iss": [
      {
        "name": "Daily sleep assessment, NASA medical standard OCHMO-STD-100.1A Rev A, requirement 6039",
        "maker": "NASA OCHMO",
        "url": "https://www.nasa.gov/wp-content/uploads/2023/04/ochmo-std-100.1a.pdf"
      },
      {
        "name": "Standard Measures post-wake questionnaire",
        "maker": "NASA Human Research Program",
        "url": "https://www.nasa.gov/humans-in-space/spaceflight-standard-measures-characterizing-how-humans-adapt-in-space/"
      }
    ],
    "could": [
      {
        "name": "Actiwatch Spectrum Plus",
        "maker": "Philips Respironics",
        "url": "https://www.philips.com/c-dam/b2bhc/master/sites/actigraphy/resources/newcase/actiwatch_device_comparison.pdf"
      },
      {
        "name": "Oura Ring",
        "maker": "Oura",
        "url": "https://issnationallab.org/?p=48894"
      }
    ],
    "how": "Self-report each morning on the 1 to 7 scale that NASA's medical standard suggests (OCHMO-STD-100.1A, requirement 6039), reported weekly at the private medical conference. A wrist actigraph (motion and light) can add an objective measure; the NASA standard names actimetry as another method.",
    "path": "Manual entry on the morning check-in, the same 1 to 7 scale as NASA's standard."
  },
  "exercise": {
    "what": "Minutes a day on the station's exercise devices; long-flight crews exercise about two hours a day to protect heart, muscles and bones.",
    "iss": [
      {
        "name": "ARED weight machine, T2 treadmill and CEVIS cycle",
        "maker": "NASA",
        "url": "https://www.nasa.gov/missions/station/iss-research/astronaut-exercise/"
      }
    ],
    "could": [],
    "how": "The devices record loads, speeds and minutes of each session; NASA follows each crew member's exercise prescription and reports to the flight surgeon every other week.",
    "path": "Simulated now: a button on the technical view. Planned: the station's exercise logs, which need NASA."
  },
  "visionCheck": {
    "what": "Your own answer to a quick vision check with an Amsler grid; a change in sight can be a sign of SANS, the eye changes of long flights.",
    "iss": [
      {
        "name": "Eye chart, Amsler grid and questionnaire at the eye exams on flight days 30 and 90",
        "maker": "NASA",
        "url": "https://ntrs.nasa.gov/api/citations/20180004916/downloads/20180004916.pdf"
      }
    ],
    "could": [
      {
        "name": "Amsler grid self-test",
        "maker": "MedlinePlus (NIH)",
        "url": "https://medlineplus.gov/ency/article/003446.htm"
      }
    ],
    "how": "Cover one eye, look at the dot in the centre of the grid from about 35 cm, and check that all lines look straight and unbroken; then the other eye.",
    "path": "Working now: All measures, Eyes, Answer now; one tap saves your answer."
  },
  "octChange": {
    "what": "How much thicker the retina around the optic nerve is than in your own scan before flight; 20 micrometres or more is NASA's earliest sign of SANS, 55 or more counts as clinically concerning.",
    "iss": [
      {
        "name": "OCT eye scanner of the US segment",
        "maker": "NASA",
        "url": "https://ntrs.nasa.gov/api/citations/20180004916/downloads/20180004916.pdf"
      }
    ],
    "could": [],
    "how": "An OCT scanner measures the layers of the retina with light; the change is the difference from the person's own OCT before flight.",
    "path": "Simulated now: a button on the technical view. Planned: the OCT results from NASA's eye specialists on the ground."
  },
  "octScan": {
    "what": "The OCT image of the eye itself; a picture cannot be judged by a number, so it goes to an eye specialist.",
    "iss": [
      {
        "name": "OCT eye scanner of the US segment, reported working in 2022",
        "maker": "NASA",
        "url": "https://ntrs.nasa.gov/api/citations/20220014606/downloads/Brunstetter%20-%20IWS%202023%20SANS%20Clinical%20Update%20-%20Abstract%20-%2023Sep22.pdf"
      }
    ],
    "could": [],
    "how": "The scanner takes cross-section images of the retina and the optic nerve head on flight days 30 and 90 and 30 days before return.",
    "path": "Simulated now: a button on the technical view marks that a scan came in. Planned: the images themselves (DICOM), with NASA."
  },
  "symptoms": {
    "what": "A symptom you log yourself, with its strength from 0 to 10; most medical problems in flight are symptoms such as a stuffy nose, back pain or headache, not numbers.",
    "iss": [
      {
        "name": "The weekly private medical conference with the flight surgeon",
        "maker": "NASA",
        "url": "https://www.nasa.gov/podcasts/houston-we-have-a-podcast/mission-control-crew-health-consoles"
      }
    ],
    "could": [],
    "how": "You pick what you feel and how strong it is, in about ten seconds, and add a few words if you like. A headache shows the cabin CO2 before it, on Today and on this page: on the ISS, more CO2 went with more reported headaches (Law et al., 2014).",
    "path": "Working now: Today, Log a symptom. Private: sent to no one unless you choose."
  },
  "medicines": {
    "what": "A medicine you took, from the ISS medical kit list, with the amount and the time.",
    "iss": [
      {
        "name": "ISS medical kit list (2015)",
        "maker": "NASA",
        "url": "https://www.governmentattic.org/19docs/NASA-ISSmedicalEmergManual_2016.pdf"
      },
      {
        "name": "EveryWear app, used daily by ISS crews, logs medicine intake",
        "maker": "MEDES and CNES, with ESA",
        "url": "https://blogs.esa.int/orion/2026/04/06/everywear-from-earth-orbit-to-the-moon/"
      }
    ],
    "could": [],
    "how": "Two taps: the medicine, then the amount; choose when if it was earlier. NASA relies on crew self-reports to keep track of the kit.",
    "path": "Working now: Today, I took a medicine. Private: sent to no one unless you choose."
  },
  "weighing": {
    "what": "Optional topics you pick at the morning check-in, such as missing home or workload; private, used only to choose which help to offer.",
    "iss": [
      {
        "name": "The topics NASA psychologists cover in private talks",
        "maker": "NASA (Picano and Holland, 2024)",
        "url": "https://ntrs.nasa.gov/citations/20240000994"
      }
    ],
    "could": [],
    "how": "Tap the topics that weigh on you, or Nothing in particular; only the last check-in of each day counts.",
    "path": "Working now: Today, How are you today? Private."
  },
  "reaction": {
    "what": "How fast you react, as the median of a 3-minute test; compared only with your own earlier runs, because fatigue and too little sleep slow it down.",
    "iss": [
      {
        "name": "Reaction Self Test (a 3-minute psychomotor vigilance test on the station laptops)",
        "maker": "NASA and the University of Pennsylvania",
        "url": "https://ntrs.nasa.gov/citations/20090029851"
      }
    ],
    "could": [],
    "how": "A counter appears in a box at random moments, every 1 to 4 seconds; you press Space or tap as fast as you can. Presses under 100 ms count as too early, 355 ms or more as slow (the PVT-B rules).",
    "path": "Working now: All measures, Reaction time, Start the 3-minute test, or Mind support. The result is saved for you."
  },
  "cognition": {
    "what": "A short computer test of attention, memory and reaction, compared with your own pre-flight result; NASA runs it monthly on long missions so a change after illness, injury or fatigue can be judged against your own baseline.",
    "iss": [
      {
        "name": "WinSCAT",
        "maker": "NASA",
        "url": "https://www.nasa.gov/wp-content/uploads/2023/12/ochmo-tb-016-behavioral-health.pdf"
      },
      {
        "name": "Cognition test battery",
        "maker": "University of Pennsylvania for NASA",
        "url": "https://www.med.upenn.edu/uep/cognition.html"
      }
    ],
    "could": [
      {
        "name": "Cognition, iPad version",
        "maker": "Pulsar Informatics",
        "url": "https://www.med.upenn.edu/uep/cognition.html"
      }
    ],
    "how": "A self-administered computer test (about 16 to 30 minutes) taken monthly in flight and compared with the person's own pre-flight baseline. WinSCAT uses tests derived from the military ANAM battery (code substitution, continuous processing, mathematics, matching to sample, delayed recall); the newer NASA Cognition battery has 10 tests, from memory to risk decision making.",
    "path": "Not connected yet. The test software (WinSCAT or Cognition) would hand over its result file, or the flight surgeon would enter the comparison"
  },
  "cycle": {
    "what": "Your period days with the flow of each day, spotting and symptoms, logged privately; doctors use the cycle as a health sign, and how spaceflight affects it is still barely studied (one 157-day flight found normal cycles).",
    "iss": [
      {
        "name": "No dedicated ISS cycle tracker found",
        "maker": "",
        "url": "https://www.nature.com/articles/s41526-024-00413-4"
      },
      {
        "name": "Menstrual suppression chosen with the flight surgeon",
        "maker": "NASA medical operations",
        "url": "https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13395041/fullTextXML"
      }
    ],
    "could": [
      {
        "name": "Flo, a period tracker: one flow a day, spotting apart, past periods edited in the calendar",
        "maker": "Flo Health",
        "url": "https://help.flo.health/hc/en-us/articles/360054540452-How-do-I-log-my-menstrual-flow"
      },
      {
        "name": "Apple Health Cycle Tracking",
        "maker": "Apple",
        "url": "https://support.apple.com/en-us/120356"
      },
      {
        "name": "Natural Cycles",
        "maker": "Natural Cycles Nordic AB",
        "url": "https://www.accessdata.fda.gov/cdrh_docs/reviews/DEN170052.pdf"
      }
    ],
    "how": "The person presses a day on the cycle card's calendar and logs its bleeding (no bleeding, spotting, light, medium or heavy) and symptoms, for today or one of the 89 days before it (the last 90 days); the app finds the periods, counts cycle and period length, and gives a plain-average next date (not a medical model). While periods are suppressed it counts the days of breakthrough bleeding over the last 90 days. Days marked with the old buttons 'Period started today' and 'Period ended today' still count.",
    "path": "Manual, private entry on the cycle card; nothing leaves unless the person chooses."
  },
  "camera": {
    "what": "This computer's camera watching for two signs only: a hand held to the chest (it asks 'Are you okay?' and calls the doctor if you need help or do not answer) and eyes closed while still (asleep, no alarm).",
    "iss": [
      {
        "name": "No camera that watches crew health on the ISS found",
        "maker": "",
        "url": "https://www.nasa.gov/wp-content/uploads/2023/07/jsc-hhp-hera.pdf"
      },
      {
        "name": "CIMON assistant",
        "maker": "DLR, Airbus, IBM",
        "url": "https://www.dlr.de/content/en/articles/news/2018/1/20180302_cimon-the-intelligent-astronaut-assistant_26307.html"
      }
    ],
    "could": [
      {
        "name": "MediaPipe Pose Landmarker and Face Landmarker on any webcam",
        "maker": "Google",
        "url": "https://developers.google.com/edge/mediapipe/solutions/vision/pose_landmarker"
      },
      {
        "name": "Oxehealth Vital Signs",
        "maker": "Oxehealth",
        "url": "https://www.accessdata.fda.gov/cdrh_docs/reviews/DEN200019.pdf"
      }
    ],
    "how": "Google MediaPipe models analyse the picture many times a second on this computer: the Pose Landmarker (lite) finds 33 body points and the Face Landmarker gives 52 face scores, including eye blinks. Simple rules turn them into events: a wrist or finger inside the chest area for 1.5 seconds, or both eyes closed with almost no head movement for 5 seconds. No video is stored.",
    "path": "The app's own camera models, run in the browser from files on this computer (no internet needed)"
  },
  "co2": {
    "what": "Carbon dioxide breathed out by the crew builds up in a closed cabin; in ISS data higher CO2 went with more headaches, so NASA limits the one-hour average to 3 mmHg. Its page shows the 7-day average, and a logged headache shows the cabin CO2 before it.",
    "iss": [
      {
        "name": "Vaisala GMP252 CO2 probes",
        "maker": "Vaisala",
        "url": "https://ntrs.nasa.gov/api/citations/20260003280/downloads/ISS%20ECLSS%20Testbed%202026_final_A.pdf"
      },
      {
        "name": "Major Constituent Analyzer",
        "maker": "",
        "url": "https://ntrs.nasa.gov/api/citations/20170005402/downloads/20170005402.pdf"
      }
    ],
    "could": [
      {
        "name": "Vaisala GMP252",
        "maker": "Vaisala",
        "url": "https://www.vaisala.com/en/products/instruments-sensors-and-other-measurement-devices/instruments-industrial-measurements/gmp252"
      },
      {
        "name": "Aranet4 HOME",
        "maker": "Aranet",
        "url": "https://aranet.com/en/home/shop/aranet4-home"
      }
    ],
    "how": "Infrared (NDIR) sensors measure how much infrared light the CO2 in the air absorbs. On the ISS fixed Vaisala GMP252 probes sit in the US Lab, Node 2, Node 3 and the Airlock; portable Anomaly Gas Analyzers and crew-worn Personal CO2 Monitors check spots and people.",
    "path": "In flight: a copy of the station's own CO2 readings"
  },
  "cabinO2": {
    "what": "The oxygen pressure you actually breathe in (inspired O2 pressure); too little causes hypoxia and too much feeds fires, so NASA sets a target of 145 to 155 mmHg.",
    "iss": [
      {
        "name": "PyroScience FDO2 optical oxygen sensors",
        "maker": "PyroScience",
        "url": "https://ntrs.nasa.gov/api/citations/20260003280/downloads/ISS%20ECLSS%20Testbed%202026_final_A.pdf"
      },
      {
        "name": "Major Constituent Analyzer",
        "maker": "",
        "url": "https://ntrs.nasa.gov/api/citations/20170005402/downloads/20170005402.pdf"
      }
    ],
    "could": [
      {
        "name": "PyroScience FDO2-G2",
        "maker": "PyroScience",
        "url": "https://www.pyroscience.com/en/products/all-meters/fdo2-g2"
      }
    ],
    "how": "An optical sensor's dye glows less when oxygen touches it; the glow gives the oxygen partial pressure. NASA's formula then gives the inspired pressure: total cabin pressure minus water vapour pressure, times the oxygen fraction.",
    "path": "In flight: the station's oxygen and total pressure readings, combined by NASA's formula (no public on-board feed for outside apps found)."
  },
  "cabinPressure": {
    "what": "The total air pressure in the cabin; the ISS keeps sea-level pressure (about 101.3 kPa), and a falling value is the first sign of a leak.",
    "iss": [
      {
        "name": "Pressure Control Assemblies",
        "maker": "",
        "url": "https://ntrs.nasa.gov/api/citations/20250003954/downloads/ICES-2025-126_Final_Rev%20A.pdf"
      },
      {
        "name": "Manovacuumeter and hatch depress indicator",
        "maker": "",
        "url": "https://ntrs.nasa.gov/api/citations/20250003954/downloads/ICES-2025-126_Final_Rev%20A.pdf"
      }
    ],
    "could": [
      {
        "name": "Aranet4 HOME",
        "maker": "Aranet",
        "url": "https://aranet.com/en/home/shop/aranet4-home"
      },
      {
        "name": "Bluetooth Environmental Sensing Service, Pressure characteristic",
        "maker": "Bluetooth SIG standard",
        "url": "https://www.bluetooth.com/wp-content/uploads/Files/Specification/HTML/Assigned_Numbers/out/en/index-en.html"
      }
    ],
    "how": "Pressure sensors in the station's Pressure Control Assemblies read total cabin pressure continuously; on-board computers compute how long until pressure would fall too low. In a fast leak the crew also use a hand-held gauge (manovacuumeter) and a hatch depress indicator.",
    "path": "In flight: the station's own pressure readings"
  },
  "noise": {
    "what": "The average sound level over your 16-hour work period; long exposure to loud noise can harm hearing, and ISS flight rules call for hearing protection above 72 dBA.",
    "iss": [
      {
        "name": "SV 102A+ Class 1 dual-channel noise dosimeter",
        "maker": "Svantek",
        "url": "https://ntrs.nasa.gov/api/citations/20210016305/downloads/Inter-Noise2021_Paper2219_FINAL%20Manuscript.pdf"
      },
      {
        "name": "Wireless Acoustics",
        "maker": "ESA",
        "url": "https://www.esa.int/Science_Exploration/Human_and_Robotic_Exploration/Ignis_science"
      }
    ],
    "could": [
      {
        "name": "Svantek SV 102A+",
        "maker": "Svantek",
        "url": "https://svantek.com/products/sv-102a-dual-channel-noise-dosimeter"
      },
      {
        "name": "Apple Watch Noise app",
        "maker": "Apple",
        "url": "https://support.apple.com/en-us/102315"
      }
    ],
    "how": "A crew member wears a noise dosimeter for 24 hours, microphone at the collar; it averages A-weighted sound over the 16-hour work period (LEQ16) and the 8-hour sleep period. Then the dosimeters are placed at fixed spots in the station.",
    "path": "File: the dosimeter is connected to a station computer by USB and the data go to an ISS server, then to Mission Control and the JSC Acoustics Office"
  },
  "cabinTemp": {
    "what": "The air temperature in the cabin; NASA's health limits are about 18 to 27 °C depending on humidity, and about 20 to 25 °C supports comfort and work.",
    "iss": [
      {
        "name": "Common Cabin Air Assembly temperature sensors",
        "maker": "",
        "url": "https://ntrs.nasa.gov/api/citations/20130000766/downloads/20130000766.pdf"
      },
      {
        "name": "Vaisala HMP113",
        "maker": "Vaisala",
        "url": "https://ntrs.nasa.gov/api/citations/20260003280/downloads/ISS%20ECLSS%20Testbed%202026_final_A.pdf"
      }
    ],
    "could": [
      {
        "name": "Vaisala HMP113",
        "maker": "Vaisala",
        "url": "https://www.vaisala.com/en/products/instruments-sensors-and-other-measurement-devices/instruments-industrial-measurements/hmp113"
      },
      {
        "name": "Aranet4 HOME",
        "maker": "Aranet",
        "url": "https://aranet.com/en/home/shop/aranet4-home"
      }
    ],
    "how": "Temperature sensors in the Common Cabin Air Assembly read the air it moves; the assembly's heat exchanger cools the air and removes moisture to hold the set temperature and humidity.",
    "path": "In flight: the station's own temperature readings"
  },
  "eyePressure": {
    "what": "Pressure of the fluid inside the eye (normal 10 to 21 mmHg); weightlessness can change pressure around the eyes and the shape of the eyeball and affect vision, so long-stay crews get regular eye checks.",
    "iss": [
      {
        "name": "Handheld tonometer exam",
        "maker": "",
        "url": "https://www.nasa.gov/blogs/spacestation/2026/04/08/nasas-northrop-grumman-crs-24-mission-targets-april-11/"
      },
      {
        "name": "Tonopen handheld tonometer, in the Ambulatory Medical Pack",
        "maker": "Tono-Pen is a Reichert brand today",
        "url": "https://ntrs.nasa.gov/api/citations/20110022379/downloads/20110022379.pdf"
      }
    ],
    "could": [
      {
        "name": "Tono-Pen AVIA handheld tonometer",
        "maker": "Reichert",
        "url": "https://www.reichert.com/products/tono-pen-avia"
      },
      {
        "name": "iCare HOME2 self-tonometer",
        "maker": "Icare",
        "url": "https://www.icare-world.com/the-new-icare-home2-tonometer/"
      }
    ],
    "how": "After numbing eye drops, a crewmate (the crew medical officer) lightly taps the cornea with a pen-shaped tonometer, which shows the pressure in mmHg on its small screen. Research studies also measure it before and after flight on Earth with other tonometers.",
    "path": "On the ISS the reading is shown on the tonometer screen and the device has no data link (NASA catalog, 2011), so it would be typed in by the crew..."
  },
  "hearing": {
    "what": "The quietest tones a person can hear, in decibels (dB HL; lower is better); station fans and machines are loud, so NASA tests the hearing of everyone who stays on orbit longer than 30 days. Judged by the change from your own pre-flight test: NASA counts an average shift of 10 dB or more at 2000, 3000 and 4000 Hz (a draft rule here).",
    "iss": [
      {
        "name": "On-Orbit Hearing Assessment: OOHA headset and KUDUwave software",
        "maker": "eMoyo; the Kuduwave is now sold by GeoAxon",
        "url": "https://www.nasa.gov/blogs/stationreport/2024/03/21/iss-daily-summary-report-3-21-2024/"
      },
      {
        "name": "EarQ",
        "maker": "",
        "url": "https://ntrs.nasa.gov/citations/20240009887"
      }
    ],
    "could": [
      {
        "name": "Kuduwave Pro / Ultra boothless audiometers",
        "maker": "GeoAxon",
        "url": "https://geoaxon.com/kuduwave-pro-tmp/"
      },
      {
        "name": "Hearing Test with AirPods Pro 2 or 3",
        "maker": "Apple",
        "url": "https://support.apple.com/120991"
      }
    ],
    "how": "In a quiet module the person wears the audiometer headset, does an ear pressure check, then presses a key whenever a tone is heard; the software finds the quietest level heard at each pitch (an audiogram). This app shows one number: the average at 2000, 3000 and 4000 Hz, compared with your latest test before launch. WHO's 20 dB (an average at 500 to 4000 Hz) is only a second reference, used for tests before launch and while no pre-flight test is on record.",
    "path": "On the ISS the KUDUwave software runs on a station laptop and its results go to secure NASA servers and the JSC audiology clinic."
  },
  "radiation": {
    "what": "All the radiation a person has received over their career, in millisieverts; the ISS adds about 0.2 to 0.5 mSv a day, and NASA's career limit is 600 mSv for everyone.",
    "iss": [
      {
        "name": "Crew Active Dosimeter",
        "maker": "Mirion, developed with NASA JSC Space Radiation Analysis Group",
        "url": "https://srag.jsc.nasa.gov/spaceradiation/how/how.cfm"
      },
      {
        "name": "Crew Passive Dosimeter",
        "maker": "NASA",
        "url": "https://ntrs.nasa.gov/api/citations/20110022379/downloads/20110022379.pdf"
      }
    ],
    "could": [
      {
        "name": "Instadose VUE / Instadose+ wireless dosimeters",
        "maker": "Mirion",
        "url": "https://www.instadose.com/instadosevue"
      },
      {
        "name": "NASA OSDR RadLab API",
        "maker": "NASA",
        "url": "https://visualization.osdr.nasa.gov/radlab/gui/data-api/"
      }
    ],
    "how": "Each astronaut carries a Crew Active Dosimeter that measures and logs dose all the time; NASA's Space Radiation Analysis Group combines dosimeter data, station detectors and models to compute each person's career dose.",
    "path": "The Crew Active Dosimeter sends timestamped readings by Bluetooth to laptops on the ISS, which downlink them to NASA's radiation team"
  },
  "vo2max": {
    "what": "The most oxygen the body can use at full effort, per kilogram per minute: the core measure of fitness; on the ISS it falls by about 17% early in flight, and NASA requires at least 80% of the person's own pre-flight level (and 32.9 mL/kg/min for spacewalk missions).",
    "iss": [
      {
        "name": "CEVIS, Max CEVIS fitness test",
        "maker": "NASA",
        "url": "https://www.nasa.gov/blogs/stationreport/2024/03/21/iss-daily-summary-report-3-21-2024/"
      },
      {
        "name": "Portable Pulmonary Function System",
        "maker": "Danish Aerospace Company",
        "url": "https://ntrs.nasa.gov/api/citations/20180006615/downloads/20180006615.pdf"
      }
    ],
    "could": [
      {
        "name": "Garmin watches: VO2 max estimate",
        "maker": "Garmin",
        "url": "https://www8.garmin.com/manuals/webhelp/GUID-9D99A9D4-467A-4F1A-A0EA-023184FEA3DD/EN-US/GUID-3E971364-A756-4057-B22D-C41250B2A82B.html"
      },
      {
        "name": "Apple Watch cardio fitness",
        "maker": "Apple",
        "url": "https://support.apple.com/en-us/108790"
      }
    ],
    "how": "On the CEVIS exercise bike the workload rises step by step; in NASA's VO2max study a gas analyser (Portable Pulmonary Function System) measured the oxygen breathed in and out, while the routine ISS fitness test is submaximal and judges aerobic capacity from heart rate at set workloads.",
    "path": "CEVIS and analyser data are files on the station network"
  },
  "strength": {
    "what": "The most force the muscles can produce; ISS crews lost 8 to 17% of knee, ankle and trunk strength over about 5-month flights, and NASA requires at least 80% of the person's own pre-flight level.",
    "iss": [
      {
        "name": "Isokinetic dynamometer before and after flight",
        "maker": "Biodex",
        "url": "https://ntrs.nasa.gov/api/citations/20140003281/downloads/20140003281.pdf"
      },
      {
        "name": "ARED",
        "maker": "NASA",
        "url": "https://www.nasa.gov/missions/station/iss-research/astronaut-exercise/"
      }
    ],
    "could": [
      {
        "name": "Jamar Smart hand dynamometer",
        "maker": "Performance Health",
        "url": "https://www.performancehealth.com/jamar-smart-hand-dynamometer"
      }
    ],
    "how": "On Earth before and after flight the person pushes and pulls as hard as possible against a motorised isokinetic dynamometer that measures torque; NASA does not test strength in flight, but the ARED weight machine records every set's load and repetitions.",
    "path": "Pre- and post-flight results come from the lab on Earth as a report (typed in, or as a medical record)."
  },
  "bone": {
    "what": "How much mineral is in the hip and spine bones; without gravity bone thins (average losses of 2 to 9% after 4 to 6 months), and NASA requires at least 95% (hip, spine) and 90% (femoral neck) of the person's own pre-flight level.",
    "iss": [
      {
        "name": "Hologic DXA densitometers",
        "maker": "Hologic",
        "url": "https://ntrs.nasa.gov/api/citations/20140002854/downloads/20140002854.pdf"
      },
      {
        "name": "QCT scans and hip strength models",
        "maker": "",
        "url": "https://ntrs.nasa.gov/api/citations/20140002854/downloads/20140002854.pdf"
      }
    ],
    "could": [
      {
        "name": "Horizon DXA System",
        "maker": "Hologic",
        "url": "https://www.hologic.com/horizondxa"
      }
    ],
    "how": "A low-dose X-ray scan called DXA while lying on a table, on Earth before and after flight; each result is compared with the person's own pre-flight scan made on the same machine.",
    "path": "Comes from the clinic on Earth: the DXA scanner's report (Hologic publishes a DICOM conformance statement for its scanners) or a medical record in..."
  },
  "blood": {
    "what": "Lab tests of blood cells and blood chemistry (for example red and white cells, glucose, kidney and liver markers); on the ISS blood can be drawn but is tested on Earth after it returns, so results come late.",
    "iss": [
      {
        "name": "In-flight blood draw, centrifuge and science freezer",
        "maker": "MELFI built for ESA",
        "url": "https://www.nasa.gov/blogs/spacestation/2026/11/13/botany-biomedicine-and-cargo-ops-wrap-up-week-aboard-station/"
      },
      {
        "name": "i-STAT",
        "maker": "Abbott",
        "url": "https://ntrs.nasa.gov/api/citations/20100011008/downloads/20100011008.pdf"
      }
    ],
    "could": [
      {
        "name": "i-STAT 1 hand-held blood analyser",
        "maker": "Abbott",
        "url": "https://www.globalpointofcare.abbott/ww/en/product-details/apoc/i-stat-system.html"
      },
      {
        "name": "HemoCue WBC DIFF System",
        "maker": "HemoCue",
        "url": "https://hemocue.com/en/products/hematology/hemocue-wbc-diff-system/"
      }
    ],
    "how": "Blood is drawn from a vein; on the ISS the tube is spun in a centrifuge and frozen, then flown home and tested in a lab. Inspiration4 blood was drawn on Earth before and after its 3-day flight and tested by Quest Diagnostics (complete blood count and metabolic panel).",
    "path": "Lab results arrive as a file or a medical record (HL7 FHIR Observations with LOINC codes)"
  },
  "xray": {
    "what": "A picture of bones or lungs made with X-rays, used to find fractures and chest problems; there has never been an X-ray machine for people on the ISS.",
    "iss": [
      {
        "name": "None for people on the ISS",
        "maker": "",
        "url": "https://spinoff.nasa.gov/node/10591"
      },
      {
        "name": "NASA Glenn mini X-ray program: MinXray, Remedi and Fujifilm tested; one system recommended for a flight demonstration",
        "maker": "NASA Glenn",
        "url": "https://ntrs.nasa.gov/citations/20260002492"
      }
    ],
    "could": [
      {
        "name": "Impact Ultraportable Wireless DR System",
        "maker": "MinXray",
        "url": "https://www.minxray.com/products"
      },
      {
        "name": "Reveal 35C dual-energy detector",
        "maker": "KA Imaging",
        "url": "https://kaimaging.com/reveal-35c/"
      }
    ],
    "how": "A battery-powered X-ray generator sends a short pulse through the body onto a flat digital detector; a doctor or an AI reads the image.",
    "path": "As an image file in DICOM, the standard format of medical images (portable kits such as the MinXray Impact include DICOM software)"
  },
  "ecg": {
    "what": "A recording of the heart's electrical signal as wavy lines; it shows how fast the heart beats and whether the rhythm is normal, and NASA requires it in the ISS fitness tests.",
    "iss": [
      {
        "name": "Bio-Monitor",
        "maker": "CSA; developed by Carré Technologies",
        "url": "https://www.asc-csa.gc.ca/eng/sciences/bio-monitor.asp"
      },
      {
        "name": "ECG during Max CEVIS fitness tests",
        "maker": "NASA",
        "url": "https://www.nasa.gov/blogs/stationreport/2024/03/21/iss-daily-summary-report-3-21-2024/"
      }
    ],
    "could": [
      {
        "name": "Polar H10 chest strap",
        "maker": "Polar",
        "url": "https://www.polar.com/en/sensors/h10-heart-rate-sensor"
      },
      {
        "name": "Hexoskin smart shirt",
        "maker": "Hexoskin",
        "url": "https://hexoskin.com/pages/developers"
      }
    ],
    "how": "Sticky electrodes on the chest (or a smart shirt with built-in sensors) pick up the heart's electrical signal and record it as a waveform; on the ISS this is done during fitness tests, in research with Holter recorders and with the Bio-Monitor shirt.",
    "path": "As a recorded waveform: a file from a Holter recorder or smart shirt"
  },
  "ultrasound": {
    "what": "Live pictures of organs, veins and the heart made with sound waves; for decades the only reliable way to image the body in spaceflight, used for routine vein, heart and eye checks and in emergencies.",
    "iss": [
      {
        "name": "Ultrasound 3, launched Sept 2025",
        "maker": "GE HealthCare",
        "url": "https://www.gehealthcare.com/en-us/about/newsroom/press-releases/taking-innovative-technology-to-the-final-frontier-ge-healthcares-vivid-iq-ultrasound-system-launches-to-the-international-space-station"
      },
      {
        "name": "Ultrasound 2, since 2011",
        "maker": "GE",
        "url": "https://www.nasa.gov/blogs/spacestation/2025/05/30/week-ends-with-vein-scans-brain-research-and-3d-microscope-test/"
      }
    ],
    "could": [
      {
        "name": "Butterfly iQ3",
        "maker": "Butterfly Network",
        "url": "https://www.butterflynetwork.com/iq3"
      }
    ],
    "how": "A crewmate moves a probe with gel over the skin while doctors on Earth guide by live video, or on-screen guidance (NASA's AMOS software, the EchoFinder study with AI) shows where to place it.",
    "path": "As image or video files in DICOM"
  }
};
