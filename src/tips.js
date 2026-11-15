// Short explanations for the crew screen, shown by the "?" buttons and on hover (see explain.js).
// Plain English, one idea per line. Written by Claude (Anthropic), an AI system, at the team's request.

export const TIPS = {
  flightday: { title: 'Flight day', lines: ['Days since launch; launch day is day 1.', 'Here it counts the made-up example flight, which always runs up to today: flight day 167, landing in 26 days.'] },
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
  onboard: { title: 'On board, for the demonstration', lines: ['These switches show what the program does in each situation: AI working or not, a doctor on board or not, a link to Earth or not.'] },
  bluetooth: { title: 'Bluetooth heart rate', lines: ['Works now with any chest strap or watch that speaks the standard Bluetooth Heart Rate profile (Chrome or Edge on a computer).', 'One reading a minute is saved for the signed-in person.'] },
  fhir: { title: 'Export for the doctor', lines: ['Works now: the last 30 days as an HL7 FHIR file with LOINC codes, the format medical record systems read.', 'Example data carry FHIR\'s official "test data" label.'] },
  osdr: { title: 'NASA OSDR', lines: ['Works now: real, de-identified Inspiration4 blood tests from NASA\'s Open Science Data Repository (OSD-575 and OSD-569).'] },
  cycle: { title: 'Menstrual cycle', lines: ['Logged by you, private: nothing is sent unless you choose to.', 'The next date is a plain average of your last cycles, not a medical model.'] },
};

// Where each measure comes from. Filled from cited research: what it is, what measures it on the ISS,
// what else could, how the value reaches this program. Links point to the source of each claim.
export const PROVENANCE = {};
