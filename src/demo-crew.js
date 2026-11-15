// Example flight for the made-up crew, so that history, change over time and the forecast can be shown.
// EVERYTHING HERE IS MADE UP FOR THE EXAMPLE. It is not anyone's real data. Claude (Anthropic, an AI system)
// wrote this generator; the shapes follow published changes in flight (each one checked against its source):
// - blood pressure over 24 hours in space: systolic about 8 and diastolic about 9 mmHg lower, heart rate
//   unchanged on average (Norsk et al., J Physiol 2015, PMC4324706). Tom's and Elly's resting pulse follow
//   the team's own example instead (Earth 70 and 80, space 60);
// - sleep about 6 hours a night on the ISS, about 7 in the first week home (Barger et al., Lancet Neurol 2014);
// - resting core temperature rising by about 1 degree C over about 2.5 months, then staying there
//   (Stahn et al., Sci Rep 2017, PMC5701078);
// - aerobic capacity (VO2peak) down about 17% by flight day 15, then rising slowly but not back to the
//   pre-flight level in flight, with tests about every 30 days (Moore et al., J Appl Physiol 2014); not the
//   same for everyone, and the exercise done in flight went with the fitness after flight (NASA JSC,
//   J Appl Physiol 2026). NASA's limit is 80% of the person's own pre-flight level (NASA-STD-3001);
// - muscle strength is measured before and after flight, not in flight (English et al., 2015); NASA's 2023
//   evidence report says the in-flight time course is not well characterized. So the example has no
//   in-flight strength tests;
// - radiation on the ISS adds about 0.2 to 0.5 mSv a day; NASA's career limit is 600 mSv;
// - cabin CO2 at or below NASA's 3 mmHg one-hour limit most of the time, cabin temperature within 18 to 27 C;
// - body mass: in ISS data crew lost 2 to 5% in the first month of flight and then kept the lower mass (NASA HRP, 2015);
// - fluid: NASA's need is at least 2,500 mL a day for men and 2,100 mL for women (JSC-67378, 2020);
// - the ISS keeps cabin pressure about 101.3 kPa and inspired oxygen within NASA's 145 to 155 mmHg target;
//   acoustic monitors are worn for 24 hours about once a month; hearing is checked on orbit for long stays;
//   eye checks run on flight day 30 and 90 (NASA). The exact example numbers are Claude's.
// Mood: weekly questionnaires of 17 ISS crew showed no drop in the third quarter of the mission (Kanas et al.,
// 2007), while the diaries of 10 ISS astronauts turned darker in the third quarter (Stuster, NASA 2010).
// One made-up person's mood slides in the third quarter, as in the team's own example of homesickness
// for Earth.
// Menstrual cycle (made up): Elly does not suppress her periods in this example, as cosmonaut Anna Kikina did not
// during 157 days in flight, when her cycles stayed of normal length (npj Microgravity, 2024). Many astronauts
// do suppress them; that choice is the person's and the flight surgeon's.

const DAY = 24 * 60 * 60 * 1000;

// The example flight follows the calendar: "today" is the start of the current hour (GMT), launch was
// 166.5 days earlier (flight day 167) and landing is 25.5 days ahead. So the example never goes stale while
// judges look at it, from November to January. The shapes of every story stay the same on any day.
const HOUR = 60 * 60 * 1000;
export function missionAt(nowMs) {
  const today = Math.floor(nowMs / HOUR) * HOUR;
  return {
    name: 'Example flight (made up)',
    launch: new Date(today - 166 * DAY - 12 * HOUR).toISOString(),
    landing: new Date(today + 25 * DAY + 12 * HOUR).toISOString(),
    today: new Date(today).toISOString(),
  };
}
export const MISSION = missionAt(Date.now());

// A small repeatable random generator, so the example looks the same on every computer.
function rng(seed) {
  let a = seed >>> 0;
  return () => {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const round = (v, digits = 0) => { const k = 10 ** digits; return Math.round(v * k) / k; };

// Each made-up person's own story in this example flight.
// vo2Early: share of endurance lost by flight day 15; vo2End: share still lost at the last test.
// Elly's endurance drops little at first but keeps falling all flight (made up: she exercises little), so by the
// straight line she passes NASA's 80% limit before landing. Member 4 sleeps less and less and, from the
// third quarter of the flight, is often in a bad mood.
export const STORY = {
  'crew-1': { massLoss: 3.0, fluidMean: 2750, hearingDrift: 0, seed: 11, pulseEarth: 70, pulseSpace: 60, sysEarth: 118, diaEarth: 76, vo2Early: 0.15, vo2End: 0.07, careerDose: 140, sleepStart: 6.1, sleepEnd: 6.0, moodFrom: null },
  'crew-2': { massLoss: 4.0, fluidMean: 2350, hearingDrift: 0, seed: 23, pulseEarth: 80, pulseSpace: 60, sysEarth: 112, diaEarth: 72, vo2Early: 0.06, vo2End: 0.18, careerDose: 60, sleepStart: 6.1, sleepEnd: 5.9, moodFrom: null },
  'crew-3': { massLoss: 2.5, fluidMean: 2700, hearingDrift: 5, seed: 37, pulseEarth: 66, pulseSpace: 64, sysEarth: 124, diaEarth: 80, vo2Early: 0.17, vo2End: 0.09, careerDose: 300, sleepStart: 6.0, sleepEnd: 6.0, moodFrom: null },
  'crew-4': { massLoss: 4.5, fluidMean: 2650, hearingDrift: 0, seed: 41, pulseEarth: 72, pulseSpace: 70, sysEarth: 116, diaEarth: 74, vo2Early: 0.18, vo2End: 0.12, careerDose: 90, sleepStart: 6.1, sleepEnd: 5.3, moodFrom: 120 },
};

const state = { aiWorks: true, doctorOnBoard: false, linkToEarth: true };
const at = (ms) => new Date(ms).toISOString();

// Builds the events of the example flight for the given crew, up to MISSION.today.
export function exampleFlight(crew, stories = STORY) {
  const events = [];
  const launch = new Date(MISSION.launch).getTime();
  const today = new Date(MISSION.today).getTime();
  const flightDays = Math.floor((today - launch) / DAY);
  const push = (person, source, indicator, value, ms) => events.push({ v: 1, kind: 'reading', example: true, time: at(ms), person, state, reading: { source, indicator, value } });

  for (const p of crew) {
    const s = stories[p.id];
    if (!s) continue;
    const r = rng(s.seed);
    const noise = (size) => (r() - 0.5) * 2 * size;
    const r2 = rng(s.seed + 7919);
    const noise2 = (size) => (r2() - 0.5) * 2 * size;
    const base = p.baselines || {};

    // Before flight: three check-ups, like the Inspiration4 timepoints, with endurance and strength tests.
    for (const daysBefore of [90, 45, 10]) {
      const ms = launch - daysBefore * DAY + 3 * 60 * 60 * 1000;
      push(p.id, 'pulse-meter', 'pulse', round(s.pulseEarth + noise(3)), ms);
      push(p.id, 'bp-meter', 'bp', { sys: round(s.sysEarth + noise(4)), dia: round(s.diaEarth + noise(3)) }, ms);
      push(p.id, 'thermometer', 'temp', round(36.6 + noise(0.2), 1), ms);
      push(p.id, 'fitness-test', 'vo2max', round(base.vo2max * (1 + noise(0.02)), 1), ms);
      push(p.id, 'strength-test', 'strength', round(base.strength * (1 + noise(0.02))), ms);
      push(p.id, 'bio-monitor-resp', 'resp', round(14 + noise2(2)), ms);
      push(p.id, 'mass-device', 'bodyMass', round(100 + noise2(0.4), 1), ms);
      if (daysBefore === 45) {
        push(p.id, 'tonometer', 'eyePressure', round(15 + noise2(2)), ms + 60 * 60 * 1000);
        push(p.id, 'audiometer', 'hearing', round(10 + noise2(3)), ms + 60 * 60 * 1000);
      }
    }

    // In flight: every morning; an endurance test on flight day 15 and then about every 30 days.
    for (let d = 0; d <= flightDays; d += 1) {
      const ms = launch + d * DAY + 2 * 60 * 60 * 1000;
      const settle = Math.min(1, d / 14); // the first two weeks move from Earth to space values
      push(p.id, 'pulse-meter', 'pulse', round(s.pulseEarth + (s.pulseSpace - s.pulseEarth) * settle + noise(3)), ms);
      push(p.id, 'bp-meter', 'bp', { sys: round(s.sysEarth - 8 * settle + noise(4)), dia: round(s.diaEarth - 9 * settle + noise(3)) }, ms);
      push(p.id, 'thermometer', 'temp', round(36.6 + Math.min(1, d / 75) * 1.0 + noise(0.15), 1), ms);
      const sleep = s.sleepStart + (s.sleepEnd - s.sleepStart) * Math.min(1, d / flightDays) + noise(0.6);
      push(p.id, 'sleep-tracker', 'sleep', round(Math.max(3.5, sleep), 1), ms);
      push(p.id, 'sleep-rating', 'sleepQuality', Math.max(1, Math.min(7, round(5 + noise(1.5)))), ms + 60 * 1000);
      push(p.id, 'dosimeter', 'radiation', round(s.careerDose + d * (0.3 + 0.1 * r()), 1), ms + 2 * 60 * 1000);
      // Mood: mostly good; for one person it slides from a day onward, as in the team's example.
      const low = s.moodFrom !== null && d >= s.moodFrom;
      const pBad = low ? 0.25 + 0.5 * Math.min(1, (d - s.moodFrom) / 40) : 0.05;
      const m = r();
      push(p.id, 'mood-report', 'mood', m < pBad ? 'bad' : m < pBad + 0.3 ? 'fair' : 'good', ms + 3 * 60 * 1000);
      push(p.id, 'attitude-report', 'attitude', r() < (low ? pBad + 0.1 : 0.1) ? 'sluggish' : 'energetic', ms + 4 * 60 * 1000);
      push(p.id, 'bio-monitor-resp', 'resp', round(14 + noise2(2)), ms);
      push(p.id, 'drink-log', 'fluid', Math.round((s.fluidMean + noise2(220)) / 10) * 10, ms + 8 * 60 * 60 * 1000);
      if (d % 7 === 0) push(p.id, 'mass-device', 'bodyMass', round(100 - s.massLoss * Math.min(1, d / 30) + noise2(0.4), 1), ms + 30 * 60 * 1000);
      if (d === 30 || d === 90) push(p.id, 'tonometer', 'eyePressure', round(15 + noise2(2)), ms + 6 * 60 * 60 * 1000);
      if (d > 0 && d % 30 === 0) push(p.id, 'audiometer', 'hearing', round(10 + s.hearingDrift * Math.min(1, d / flightDays) + noise2(2)), ms + 7 * 60 * 60 * 1000);
      // The team's planned review of the self-reports, for example every two weeks.
      if (d > 0 && d % 14 === 0) events.push({ v: 1, kind: 'review', example: true, time: at(ms + 12 * 60 * 60 * 1000), person: p.id, state });
      if (d >= 15 && (d - 15) % 30 === 0) {
        const lost = s.vo2Early + (s.vo2End - s.vo2Early) * ((d - 15) / (flightDays - 15));
        push(p.id, 'fitness-test', 'vo2max', round(base.vo2max * (1 - lost) * (1 + noise(0.015)), 1), ms + 5 * 60 * 60 * 1000);
      }
    }
  }

  // Elly's made-up cycle log: a period start about every 27 to 30 days, lasting 4 to 6 days.
  const elly = crew.find((p) => p.id === 'crew-2');
  if (elly) {
    const rc = rng(53);
    let start = launch - 40 * DAY + 7 * 60 * 60 * 1000;
    while (start <= today) {
      push(elly.id, 'cycle-log', 'cycle', 'period_start', start);
      const end = start + (3 + Math.floor(rc() * 3)) * DAY;
      if (end <= today) push(elly.id, 'cycle-log', 'cycle', 'period_end', end);
      start += (27 + Math.floor(rc() * 4)) * DAY;
    }
  }

  // The ship's air, measured for the whole crew.
  const r = rng(97);
  const rs = rng(97 + 7919);
  for (let d = 0; d <= Math.floor((today - launch) / DAY); d += 1) {
    const ms = launch + d * DAY + 60 * 60 * 1000;
    push('ship', 'co2-sensor', 'co2', round(2.2 + (r() - 0.5) * 1.4 + (d % 37 === 0 ? 1.2 : 0), 1), ms);
    push('ship', 'cabin-thermo', 'cabinTemp', round(22.5 + (r() - 0.5) * 2.4, 1), ms);
    push('ship', 'mca', 'cabinO2', round(149.5 + (rs() - 0.5) * 4, 1), ms);
    push('ship', 'pressure-sensor', 'cabinPressure', round(101.3 + (rs() - 0.5) * 0.4, 1), ms);
    if (d > 0 && d % 30 === 0) push('ship', 'acoustic-monitor', 'noise', round(61 + (rs() - 0.5) * 6), ms + 60 * 60 * 1000);
  }
  return events.sort((a, b) => new Date(a.time) - new Date(b.time));
}
