const PHASES = {
  p1: {
    label:'Phase 1',
    sublabel:'Wks 20-28',
    color:'p1',
    title:'Second Trimester',
    sub:'Weeks 20–28 — Maintain & Build',
    tags:['3-4x / week','Moderate intensity','Core stability focus','Pelvic floor daily'],
    safety:'After week 20, avoid lying flat on your back. Stop and contact your provider if you experience bleeding, dizziness, chest pain, shortness of breath, or contractions.',
    days:[
      {
        label:'Mon', name:'Lower Body Strength', type:'strength',
        meta:['45–60 min','60–90s rest between sets','3 working sets each'],
        exercises:[
          {name:'Goblet Squat',sets:3,reps:'12–15',load:'Moderate DB',tempo:'3-1-2',rest:'60s',note:'Wide stance for belly clearance. Brace core, exhale on the way up. Avoid Valsalva (breath-holding). Hold DB at chest.'},
          {name:'Romanian Deadlift',sets:3,reps:'10–12',load:'DB or Barbell',tempo:'3-1-1',rest:'75s',note:'Hinge at hips, soft knee bend. Feel the hamstring stretch. Keep bar close to legs. Stop before rounding lower back.'},
          {name:'Hip Thrust',sets:3,reps:'12–15',load:'Barbell or DB on lap',tempo:'2-2-1',rest:'60s',note:'Use a bench at hip height. Drive through heels, squeeze glutes at top. Hold 2 seconds at peak contraction.'},
          {name:'Reverse Lunge',sets:3,reps:'10 each leg',load:'Light-Moderate DB',tempo:'3-1-2',rest:'60s',note:'Step back, not forward — easier on balance. Keep front shin vertical. Reduce range of motion as belly grows.'},
          {name:'Banded Clamshell',sets:3,reps:'20 each side',load:'Light resistance band',tempo:'2-1-2',rest:'45s',note:'Side-lying with hips at 45°, knees bent. Targets glute med — critical for pelvic stability throughout pregnancy.'},
          {name:'Dead Bug',sets:3,reps:'8 each side',load:'Bodyweight',tempo:'Slow & controlled',rest:'45s',note:'Lower back pressed firmly into the mat throughout. Exhale as you extend limbs. Replaces all crunch and sit-up movements.'},
          {name:'Kegel Hold',sets:3,reps:'10 holds',load:'Bodyweight',tempo:'Hold 10s each',rest:'30s',note:'Contract, lift, hold 10s, then fully release. Do 3x daily — not just at the gym. Most important exercise on this list.'},
        ]
      },
      {
        label:'Tue', name:'Cardio', type:'cardio',
        options:[
          {name:'Elliptical',duration:'30–35 min',intensity:'Conversational pace — full sentences only',notes:'RPE 5–6 / 10. Adjust incline if hip discomfort arises.'},
          {name:'Stationary Bike',duration:'30–35 min',intensity:'Moderate resistance, 70–80 RPM',notes:'Easiest on joints. Adjust seat height as belly grows.'},
          {name:'Swimming / Water Walking',duration:'30 min',intensity:'Continuous, low exertion',notes:'Excellent choice — water offloads joint stress and supports the belly. Prioritize from week 28 onward.'},
        ]
      },
      {label:'Wed', name:'Rest or Walk', type:'rest', note:'10–20 min easy walk encouraged. Gentle stretching, hip circles, cat-cow. No structured training.'},
      {
        label:'Thu', name:'Upper Body & Back', type:'strength',
        meta:['45–60 min','60s rest between sets','3 working sets each'],
        exercises:[
          {name:'Seated Cable Row',sets:3,reps:'12–15',load:'Moderate',tempo:'2-1-3',rest:'60s',note:'Slow the eccentric return. Squeeze shoulder blades at the top. Back training directly counteracts the forward pull of the growing belly.'},
          {name:'Lat Pulldown',sets:3,reps:'12–15',load:'Moderate',tempo:'2-1-3',rest:'60s',note:'Wide overhand grip. Pull to upper chest, slight lean back. Avoid behind-the-neck variation entirely.'},
          {name:'Face Pull',sets:3,reps:'15–20',load:'Light cable or band',tempo:'2-1-2',rest:'45s',note:'Pull to eye level, elbows high and wide. Critical for posture. Keep doing these even when everything else gets scaled back.'},
          {name:'DB Shoulder Press',sets:3,reps:'10–12',load:'Moderate DB',tempo:'2-1-2',rest:'60s',note:'Seated. Neutral grip (palms facing in) reduces shoulder strain. Exhale as you press overhead.'},
          {name:'Incline DB Press',sets:3,reps:'10–12',load:'Moderate DB',tempo:'3-1-2',rest:'60s',note:'Bench at 30–45 degrees — avoids lying flat. Replaces all flat bench work from here forward.'},
          {name:'Tricep Pushdown',sets:3,reps:'15',load:'Light-Moderate cable',tempo:'2-1-2',rest:'45s',note:'Stand tall, elbows locked at sides. Maintain arm tone without loading the spine.'},
          {name:'Bird Dog',sets:3,reps:'8 each side',load:'Bodyweight',tempo:'3s hold',rest:'45s',note:'On all fours, extend opposite arm and leg simultaneously. Hold 3s. Keep hips perfectly level throughout.'},
          {name:'Kegel Hold',sets:3,reps:'10 holds',load:'Bodyweight',tempo:'Hold 10s each',rest:'30s',note:'End every session here. Treat it as a mandatory cool-down movement.'},
        ]
      },
      {
        label:'Fri', name:'Cardio', type:'cardio',
        options:[
          {name:'Incline Walking',duration:'30–40 min',intensity:'Brisk pace, 3–4% incline max',notes:'Keep incline low to avoid excessive forward lean straining the lower back.'},
          {name:'Swimming',duration:'30 min',intensity:'Easy laps or water aerobics',notes:'Best overall pregnancy cardio. No impact, full body, naturally cooling.'},
          {name:'Elliptical',duration:'30 min',intensity:'RPE 5–6, conversational pace',notes:''},
        ]
      },
      {label:'Sat', name:'Active Recovery', type:'rest', note:'Prenatal yoga, gentle mobility flow, hip openers, cat-cow, pigeon pose. 20–30 minutes. Focus on breathing and pelvic floor connection.'},
      {label:'Sun', name:'Full Rest', type:'rest', note:'Complete rest. Hydrate well. Light stretching only if desired.'},
    ]
  },
  p2: {
    label:'Phase 2',
    sublabel:'Wks 28–40',
    color:'p2',
    title:'Third Trimester',
    sub:'Weeks 28–40 — Maintain, Adapt, Prepare',
    tags:['2–3x / week','Lower intensity','Machine-forward','Pelvic floor & breathing'],
    safety:'Relaxin is at peak levels — joints are more lax, especially hips and pelvis. Reduce loads 20–30% from Phase 1. No standing single-leg movements. Stop for any pelvic pain, pressure, or leaking.',
    days:[
      {
        label:'Mon', name:'Lower Body (Supported)', type:'strength',
        meta:['30–45 min','90s rest — take what you need','2–3 sets each'],
        exercises:[
          {name:'Leg Press',sets:3,reps:'12–15',load:'Moderate machine',tempo:'3-1-2',rest:'90s',note:'Wide foot stance, toes slightly out. Avoid locking knees. Reduce range of motion as belly grows.'},
          {name:'Goblet Squat (Wide)',sets:3,reps:'12',load:'Light-Moderate DB',tempo:'3-1-2',rest:'75s',note:'Wider stance than Phase 1. Only go as deep as comfortable — no need to hit parallel this trimester.'},
          {name:'Seated Hip Abduction',sets:3,reps:'20',load:'Light machine',tempo:'2-1-2',rest:'45s',note:'Pelvic floor and hip stability. Keep it light — not a max effort exercise.'},
          {name:'Side-Lying Hip Abduction',sets:3,reps:'20 each',load:'Ankle weight optional',tempo:'2-1-2',rest:'45s',note:'Lie on side, top leg lifts. Maintain neutral pelvis. Can be done at home.'},
          {name:'Banded Clamshell',sets:3,reps:'20 each',load:'Band',tempo:'2-1-2',rest:'45s',note:'Even more important now as the pelvis continues to shift. Keep band light.'},
          {name:'Diaphragmatic Breathing',sets:3,reps:'8 breaths',load:'Bodyweight',tempo:'4s in / 4s out',rest:'30s',note:'360° breath into ribs, belly, and pelvic floor. On exhale, feel the pelvic floor gently rise. This is a direct labor skill.'},
          {name:'Kegel Hold',sets:3,reps:'10 holds',load:'Bodyweight',tempo:'Hold 8–10s',rest:'30s',note:'Continue daily. Pair each contraction with a diaphragmatic exhale. This coordination mirrors labor pushing mechanics.'},
        ]
      },
      {
        label:'Tue', name:'Cardio', type:'cardio',
        options:[
          {name:'Swimming',duration:'20–30 min',intensity:'Easy, continuous',notes:'Best option in the third trimester. Water supports full belly weight. Often the only comfortable cardio by week 36.'},
          {name:'Stationary Bike',duration:'20–25 min',intensity:'Low resistance, comfortable cadence',notes:'Shorten or reduce intensity freely. Energy varies significantly week to week now.'},
          {name:'Walking',duration:'20–30 min',intensity:'Comfortable pace, flat surface',notes:'If pelvic girdle pain is present, keep walks shorter and wear a support belt.'},
        ]
      },
      {label:'Wed', name:'Rest', type:'rest', note:'Full rest or gentle 10-min walk. Prioritize sleep. The body is working very hard even at rest.'},
      {
        label:'Thu', name:'Upper Body & Back (Supported)', type:'strength',
        meta:['30–40 min','90s rest','2–3 sets each'],
        exercises:[
          {name:'Seated Cable Row',sets:3,reps:'12–15',load:'Light-Moderate',tempo:'2-1-3',rest:'75s',note:'Prioritize this above all other upper body work. Back strength is critical as posture shifts forward.'},
          {name:'Lat Pulldown',sets:3,reps:'12–15',load:'Moderate',tempo:'2-1-3',rest:'75s',note:'Safe to continue through late third trimester.'},
          {name:'Face Pull',sets:3,reps:'15–20',load:'Light band or cable',tempo:'2-1-2',rest:'45s',note:'Non-negotiable. Prevents shoulder rounding as posture changes.'},
          {name:'Incline DB Press',sets:3,reps:'10–12',load:'Light-Moderate DB',tempo:'3-1-2',rest:'75s',note:'Bench at 45 degrees. Reduce weight if core feels unsupported.'},
          {name:'Supported DB Row',sets:3,reps:'12 each',load:'Light DB',tempo:'2-1-3',rest:'60s',note:'Free hand on bench for support. Single arm keeps spine neutral. Do not use momentum.'},
          {name:'Pallof Press',sets:3,reps:'12 each side',load:'Light cable or band',tempo:'2-1-2',rest:'45s',note:'Stand sideways to anchor, press cable straight out and hold. Anti-rotation core — safe in all trimesters.'},
          {name:'Kegel + Breath',sets:3,reps:'8 each',load:'Bodyweight',tempo:'Paired',rest:'30s',note:'Exhale and contract simultaneously. This exact coordination is used during labor.'},
        ]
      },
      {label:'Fri', name:'Cardio or Walk', type:'rest', note:'Optional gentle cardio (swimming preferred) or 20-min walk. By week 36, full rest is equally valid. Follow energy.'},
      {label:'Sat', name:'Active Recovery', type:'rest', note:'Prenatal yoga or gentle mobility. Hip openers, side-lying stretches, breathing practice. Safe through week 40.'},
      {label:'Sun', name:'Rest', type:'rest', note:'Full rest.'},
    ]
  },
  p3a: {
    label:'Postpartum',
    sublabel:'Wks 0–6',
    color:'p3a',
    title:'Early Postpartum',
    sub:'Weeks 0–6 — Recover First',
    tags:['Before clearance only','Walk & breathe','No gym','Pelvic reconnect'],
    safety:'Do NOT return to structured exercise until cleared by your OB or midwife at the 6-week visit. C-section or significant tearing may extend this. There is no "earning your body back" — this is pure repair time.',
    days:[
      {label:'Wks 1–2', name:'Gentle Start', type:'rest', note:'Walking 5–10 minutes easy. Diaphragmatic breathing (4s in, 4s out). Gentle pelvic floor awareness — not aggressive Kegels, but soft breath-led reconnection. Rest and sleep as much as possible.'},
      {label:'Wks 3–4', name:'Build Slowly', type:'rest', note:'Increase walks gradually to 15–20 min. Continue diaphragmatic breathing. Begin gentle Kegels — 5-second holds, fully release each time. Gentle cat-cow and hip circles if comfortable.'},
      {label:'Wks 5–6', name:'Pre-Clearance', type:'rest', note:'Walks up to 30 min. Full Kegel routine (10 x 10s holds, 3x daily). Light stretching. Attend 6-week postpartum appointment and get clearance before any gym return. Ask for a pelvic floor PT referral.'},
    ]
  },
  p3b: {
    label:'Return',
    sublabel:'Wks 6–16+',
    color:'p3b',
    title:'Postpartum Return',
    sub:'Weeks 6–16+ — Progressive Rebuild',
    tags:['Post-clearance only','Pelvic PT recommended','Progressive loading','Listen for symptoms'],
    safety:'Stop and see a pelvic floor PT if you experience leaking (urine or gas), pelvic heaviness or pressure, pain during exercise, or coning/doming of the midline on core work. These are treatable — not just "normal after having a baby."',
    days:[
      {
        label:'Wks 6–8', name:'Foundation', type:'strength',
        meta:['20–30 min sessions','Full rest between sets','Bodyweight only','2–3x this week'],
        exercises:[
          {name:'Walking',sets:1,reps:'30–45 min',load:'Bodyweight',tempo:'Easy pace',rest:'N/A',note:'Daily if possible. Foundation of this entire phase. Non-negotiable before any gym work.'},
          {name:'Bodyweight Squat',sets:3,reps:'10–15',load:'Bodyweight',tempo:'3-1-2',rest:'60s',note:'Slow and controlled. Monitor for any pelvic symptoms. Progress to goblet squats in weeks 8–10 if all clear.'},
          {name:'Glute Bridge',sets:3,reps:'15',load:'Bodyweight',tempo:'2-2-1',rest:'45s',note:'Drive hips up, hold 2s at top. Progress to single-leg bridge when 3x15 feels easy.'},
          {name:'Bird Dog',sets:3,reps:'8 each',load:'Bodyweight',tempo:'3s hold',rest:'45s',note:'Check for diastasis recti first. If you see coning or doming at midline, stop and see a pelvic PT before continuing.'},
          {name:'Dead Bug',sets:3,reps:'6 each side',load:'Bodyweight',tempo:'Slow',rest:'45s',note:'Start conservatively. The core has been stretched for 9 months — rebuild gradually, not aggressively.'},
          {name:'Kegel Hold',sets:3,reps:'10 holds',load:'Bodyweight',tempo:'Hold 10s, full release',rest:'30s',note:'Full release is as important as the contraction. Hypertonic (over-tight) pelvic floors are common postpartum.'},
        ]
      },
      {
        label:'Wks 8–12', name:'Progressive Reload', type:'strength',
        meta:['30–40 min','3x this week','Light-moderate weights','No running yet'],
        exercises:[
          {name:'Goblet Squat',sets:3,reps:'12–15',load:'Light DB',tempo:'3-1-2',rest:'60s',note:'Start lighter than you think you need. Monitor for symptoms on every rep. Progress weight only when form is perfect.'},
          {name:'Romanian Deadlift',sets:3,reps:'10–12',load:'Light DB',tempo:'3-1-2',rest:'75s',note:'Reconnect with the hinge. Keep weight light — tendons and ligaments are still recovering even when muscles feel ready.'},
          {name:'Incline DB Press',sets:3,reps:'12',load:'Light-Moderate DB',tempo:'3-1-2',rest:'60s',note:'No flat bench restriction postpartum. Incline remains a useful habit for shoulder-friendly pressing.'},
          {name:'Seated Cable Row',sets:3,reps:'12–15',load:'Light-Moderate',tempo:'2-1-3',rest:'60s',note:'Back work reloads well first — not directly affected by birth recovery.'},
          {name:'Pallof Press',sets:3,reps:'12 each',load:'Light band',tempo:'2-1-2',rest:'45s',note:'Safe core loading that avoids intra-abdominal pressure spikes. Continue throughout this phase.'},
          {name:'Hip Thrust',sets:3,reps:'12–15',load:'Bodyweight then light DB',tempo:'2-2-1',rest:'60s',note:'Glute rebuilding priority. Progress to barbell when 3x15 bodyweight feels too easy.'},
        ]
      },
      {
        label:'Wks 12–16', name:'Full Return', type:'strength',
        meta:['40–60 min','3–4x this week','Working weights','Running begins here'],
        exercises:[
          {name:'Back Squat or Goblet Squat',sets:4,reps:'8–12',load:'Working weight',tempo:'3-1-2',rest:'90s',note:'Return to compound loading. Rebuild to pre-pregnancy weights over several weeks, not days. Patience wins here.'},
          {name:'Romanian Deadlift',sets:4,reps:'8–10',load:'Working weight',tempo:'3-1-2',rest:'90s',note:'Progress load carefully. The hinge pattern should feel completely natural again before adding significant weight.'},
          {name:'Hip Thrust',sets:4,reps:'10–12',load:'Barbell',tempo:'2-2-1',rest:'75s',note:''},
          {name:'Bench or Incline Press',sets:3,reps:'10–12',load:'Working weight',tempo:'3-1-2',rest:'75s',note:'Can return to flat bench if no symptoms are present.'},
          {name:'Pull-Ups or Lat Pulldown',sets:3,reps:'8–12',load:'Assisted or machine',tempo:'2-1-3',rest:'75s',note:''},
          {name:'Running (if cleared)',sets:1,reps:'10–15 min easy',load:'Bodyweight',tempo:'Easy, conversational',rest:'N/A',note:'Pass the return-to-run screen first: 10 single-leg calf raises each side, 10 single-leg bridges each side, 60s jog in place — all with zero leaking or pelvic pressure. If yes, begin with 10-min easy runs and build gradually.'},
        ]
      },
      {label:'Wk 16+', name:'HIIT Return', type:'rest', note:'Return to HIIT-style programming progressively. Start with low-impact intervals (bike or elliptical). Add jumping movements only when single-leg hopping x10 each side produces zero symptoms (leaking, pressure, or pain). Full pre-pregnancy training typically resumes 16–20 weeks postpartum when recovery has gone smoothly.'},
    ]
  }
};

if(typeof module!=='undefined') module.exports = PHASES;
