// Short explanations for the crew screen, shown by the "?" buttons and on hover (see explain.js).
// Plain English, one idea per line. Written by Claude (Anthropic), an AI system, at the team's request.

export const TIPS = {
  mydata: { title: 'Your data', lines: ['A copy of everything you entered or that was measured for you, as one file you keep.', 'The made-up example flight is not part of your data.'] },
  flightday: { title: 'Flight day', lines: ['Days since launch; launch day is day 1. Mission elapsed time (MET) counts the same way in days, hours and minutes.', 'Here it counts the made-up example flight, which always runs up to today: flight day 167, landing in 26 days.'] },
  gmt: { title: 'GMT clock', lines: ['The ISS runs on GMT (Greenwich Mean Time).', '319/00:04 means day 319 of the year, 00:04. Every time in this app is GMT.'] },
  example: { title: 'Example data', lines: ['Made-up readings for four people, shaped like published flight studies.', 'For real NASA data choose an Inspiration4 person at sign-in. Switch the example off in Settings.'] },
  messages: { title: 'Messages', lines: ['Everything the program flagged, the most important first, each with what to do.', 'The colour is the highest level right now: blue attention, yellow needs action, red urgent.'] },
  who: { title: 'Signed-in person', lines: ['You see only your own readings and the shared cabin air.', 'Press to switch person.'] },
  nolink: { title: 'No link to Earth', lines: ['The program keeps working on board.', 'Messages to Earth wait and go out when the link is back.'] },
  aioff: { title: 'AI off', lines: ['Only the plain automation rules work.', 'Buttons that need the AI say so.'] },
  soundoff: { title: 'Sound off', lines: ['No tones and no spoken question.', 'Turn it back on in Settings.'] },
  camon: { title: 'Camera on', lines: ['It watches for a hand held to the chest.', 'Video stays on this computer and is never stored.'] },
  today: { title: 'Your health today', lines: ['The automation compares every new reading with its normal range and the team\'s rules, then writes this one sentence about body and mind.', 'Levels: fine, attention (blue), needs action (yellow), urgent (red). The levels and thresholds are drafts; the team decides.'] },
  level: { title: 'Levels', lines: ['Attention (blue, circle i): look at it when you can.', 'Needs action (yellow, triangle): do something today.', 'Urgent (red, octagon): the doctor has been called.', 'Each level has its own icon and word, so colour is never the only cue.'] },
  details: { title: 'Details', lines: ['Opens the first reason: its chart, its normal range, its history and what to do.'] },
  ai: { title: 'Analyse with AI', lines: ['Sends a summary of these readings to an AI on board that works without internet.', 'No AI is connected in this version; the team decides which one.'] },
  doctor: { title: 'Message the doctor', lines: ['Drafts a message with these readings for the doctor on board, or on Earth when the link is up.', 'You can change the text before sending.'] },
  aisession: { title: 'Anonymous session with AI', lines: ['A private conversation that is not recorded or read (the team\'s idea).', 'No AI is connected in this version.'] },
  tellDoctor: { title: 'Tell the doctor on Earth', lines: ['Sends your recent check-ins to the doctor on Earth, only if you choose to.'] },
  advice: { title: 'Advice and articles', lines: ['Checked reading material: NASA health briefs, NASA evidence reports, MedlinePlus.', 'For people who prefer to read without the AI.'] },
  checkin: { title: 'Daily check-in', lines: ['Three quick questions each day: mood, energy and last night\'s sleep.', 'Your answers build up for a planned review. One bad day never raises an alarm.'] },
  keynums: { title: 'Key numbers', lines: ['Your everyday measures. A value turns blue, yellow or red only when it is outside its normal range; the arrow shows which way.', 'Press a row for its history, or its ? for where it comes from.'] },
  measures: { title: 'All measures', lines: ['Every measure, always in the same place. Find one by name or with an everyday word ("pulse", "sugar", "oxygen").', 'Each row\'s ? tells where the value comes from.'] },
  chart: { title: 'How to read the chart', lines: ['The line joins your readings; the shaded band is the normal range; rings mark readings outside it.', 'Dashed lines mark launch, today and landing. The dotted line is a straight-line forecast to landing, not a medical model.'] },
  display: { title: 'Display', lines: ['Dark suits a dim cabin, light a bright one.', 'NASA\'s Human Integration Design Handbook reports that dark or light text did not change reading speed.'] },
  camera: { title: 'Camera', lines: ['Google MediaPipe models run on this computer and find body and face points; nothing goes online.', 'A hand on the chest for 1.5 s asks "Are you okay?"; only "I need help" or no answer in 20 s calls the doctor.', 'Eyes closed and still for 5 s means asleep: no alarm.'] },
  connections: { title: 'Connections', lines: ['How data get in and out of the program.', 'Working now: Bluetooth heart rate, the export for medical records (HL7 FHIR), NASA OSDR data. Each row\'s ? says more.'] },
  onboard: { title: 'Simulation', lines: ['These switches simulate situations for the demonstration: AI working or not, a doctor on board or not, a link to Earth or not, and the made-up example flight.', 'Each change shows in the status line, so a simulated situation is never mistaken for a real one.'] },
  bluetooth: { title: 'Bluetooth heart rate', lines: ['Works now with any chest strap or watch that speaks the standard Bluetooth Heart Rate profile (Chrome or Edge on a computer).', 'One reading a minute is saved for the signed-in person.'] },
  fhir: { title: 'Export for the doctor', lines: ['Works now: the last 30 days as an HL7 FHIR file with LOINC codes, the format medical record systems read.', 'Example data carry FHIR\'s official "test data" label.'] },
  osdr: { title: 'NASA OSDR', lines: ['Works now: real, de-identified Inspiration4 blood tests from NASA\'s Open Science Data Repository (OSD-575 and OSD-569).'] },
  cycle: { title: 'Menstrual cycle', lines: ['Logged by you, private: nothing is sent unless you choose to.', 'The next date is a plain average of your last cycles, not a medical model.'] },
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
    "what": "Body mass as a share of your own pre-flight mass; ISS crews lose 2 to 5% in the first month, and ordinary scales do not work in weightlessness.",
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
    "what": "How much energy you have today (energetic or sluggish); on the ISS, nights under 6 hours of sleep went with slower reactions and higher stress and workload, so fatigue is worth catching early.",
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
      },
      {
        "name": "Samn-Perelli 7-point fatigue scale",
        "maker": "USAF School of Aerospace Medicine, public scale",
        "url": "https://caa.co.uk/publication/download/13058"
      }
    ],
    "how": "Self-report: one tap a day in the morning check-in. NASA's Reaction Self Test asked astronauts to rate stress, mental fatigue, physical exhaustion, tiredness and sleepiness on 11-point scales, then timed a 3-minute reaction test and gave feedback against astronaut norms. Fatigue level is also a set topic of the private psychologist call every two weeks.",
    "path": "Manual entry on the morning check-in. A wearable energy estimate"
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
    "what": "The start and end days of your period, logged privately; doctors use the cycle as a health sign, and how spaceflight affects it is still barely studied (one 157-day flight found normal cycles).",
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
    "how": "The person presses 'Period started today' and 'Period ended today'; the app counts cycle and period length and gives a plain-average next date (not a medical model). Optional extras used elsewhere: urine LH ovulation tests (used in flight by cosmonaut Anna Kikina), basal body temperature, or wrist temperature from a watch.",
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
    "what": "Carbon dioxide breathed out by the crew builds up in a closed cabin; in ISS data higher CO2 went with more headaches, so NASA limits the one-hour average to 3 mmHg.",
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
  }
};
