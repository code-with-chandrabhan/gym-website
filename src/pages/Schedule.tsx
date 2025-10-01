import { useState } from "react";


const classes = [
  {
    day: "Monday",
    sessions: [
      { time: "06:00 AM - 07:00 AM", name: "Yoga", type: "Mind & Body" },
      { time: "07:30 AM - 08:30 AM", name: "HIIT", type: "Strength" },
      { time: "06:00 PM - 07:00 PM", name: "Zumba", type: "Dance Fitness" },
    ],
    workout: {
      target: "Chest + Triceps",
      machines: ["Chest Press", "Incline Bench", "Tricep Rope", "Pec Deck"],
      sets: "3 sets × 10-12 reps each",
      tips: "Warm-up, slow controlled motion, pushups at end, stretch after.",
    },
  },
  {
    day: "Tuesday",
    sessions: [
      { time: "06:00 AM - 07:00 AM", name: "Cardio Blast", type: "Endurance" },
      { time: "07:30 AM - 08:30 AM", name: "Pilates", type: "Core Training" },
      {
        time: "06:00 PM - 07:00 PM",
        name: "Strength Training",
        type: "Weights",
      },
    ],
    workout: {
      target: "Back + Biceps",
      machines: ["Lat Pulldown", "Seated Row", "Barbell Curl", "Hammer Curl"],
      sets: "4 sets × 8-10 reps each",
      tips: "Full stretch, don't swing, squeeze on every rep, cool-down.",
    },
  },
  {
    day: "Wednesday",
    sessions: [
      { time: "06:00 AM - 07:00 AM", name: "Yoga", type: "Mind & Body" },
      { time: "07:30 AM - 08:30 AM", name: "CrossFit", type: "High Intensity" },
      { time: "06:00 PM - 07:00 PM", name: "Zumba", type: "Dance Fitness" },
    ],
    workout: {
      target: "Legs + Core",
      machines: ["Leg Press", "Squat Rack", "Leg Curl", "Plank"],
      sets: "4 sets × 12 reps (legs), 2 min × abs",
      tips: "Full motion, knee safety, pausing technique, stretch calves.",
    },
  },
  {
    day: "Thursday",
    sessions: [
      { time: "06:00 AM - 07:00 AM", name: "Boxing", type: "Strength" },
      { time: "07:30 AM - 08:30 AM", name: "Pilates", type: "Core Training" },
      { time: "06:00 PM - 07:00 PM", name: "Cardio Blast", type: "Endurance" },
    ],
    workout: {
      target: "Shoulders + Abs",
      machines: ["Shoulder Press", "Lateral Raise", "Crunch", "Ab Roller"],
      sets: "3 sets × 12 reps each",
      tips: "Light warm-up, posture focus, high rep abs at end.",
    },
  },
  {
    day: "Friday",
    sessions: [
      { time: "06:00 AM - 07:00 AM", name: "Yoga", type: "Mind & Body" },
      { time: "07:30 AM - 08:30 AM", name: "HIIT", type: "Strength" },
      { time: "06:00 PM - 07:00 PM", name: "Zumba", type: "Dance Fitness" },
    ],
    workout: {
      target: "Full Body / Circuit",
      machines: ["Row", "Cycle", "Sled Push", "Deadlift", "Burpees"],
      sets: "3-5 rounds circuit style",
      tips: "Push hard, stable form, adapt rounds as per stamina.",
    },
  },
  {
    day: "Saturday",
    sessions: [
      { time: "08:00 AM - 09:00 AM", name: "Bootcamp", type: "Full Body" },
      { time: "10:00 AM - 11:00 AM", name: "Spin Class", type: "Cardio" },
      {
        time: "05:00 PM - 06:00 PM",
        name: "Stretch & Mobility",
        type: "Flexibility",
      },
    ],
    workout: {
      target: "Glutes + Lower Body",
      machines: ["Hip Thrust", "Cable Kickback", "Step Up", "Stability Ball"],
      sets: "4 sets × 15 reps",
      tips: "Slow contraction, glute focus, stabilize core.",
    },
  },
  {
    day: "Sunday",
    sessions: [
      { time: "09:00 AM - 10:00 AM", name: "Pilates", type: "Core Strength" },
      {
        time: "05:00 PM - 06:00 PM",
        name: "Yoga & Relaxation",
        type: "Mind & Body",
      },
      { time: "—", name: "Open Gym", type: "Self Workout" },
    ],
    workout: {
      target: "Active Recovery + Stretch",
      machines: ["Foam Roller", "Resistance Band", "Yoga Mat"],
      sets: "40 min stretching & mobility",
      tips: "Deep breathing, focus on sore areas, stay hydrated.",
    },
  },
];

type ClassDay = (typeof classes)[number];

function Schedule() {
  const [modalDay, setModalDay] = useState<ClassDay | null>(null);

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden bg-gradient-to-r from-black via-red-700 to-black text-white ">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-white mt-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-5xl sm:text-6xl font-extrabold text-cyan-400 drop-shadow-[0_0_16px_#20fafe] pb-3 border-b-4 border-cyan-500 tracking-wide rounded-xl bg-black/20 px-6 py-3 inline-block">
            7-DAY GYM SCHEDULE
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 mt-6">
            Perfect planning for your fitness week.
          </p>
        </div>

        {/* Schedule Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((day, i) => (
            <button
              key={i}
              className="bg-black/60 border-2 border-cyan-400 neon-glow shadow-xl rounded-xl p-6 transition-transform hover:scale-105 backdrop-blur-md w-full text-left min-h-[180px]"
              onClick={() => setModalDay(day)}
            >
              <h3 className="text-2xl sm:text-3xl font-extrabold text-cyan-300 mb-4 pb-2 border-b border-cyan-500 drop-shadow-[0_0_8px_#25fafe]">
                {day.day}
              </h3>
              <ul className="space-y-3">
                {day.sessions.map((session, j) => (
                  <li
                    key={j}
                    className="bg-gray-900/80 rounded-lg p-3 flex flex-col shadow neon-shadow"
                  >
                    <span className="text-xs sm:text-sm text-gray-300">
                      {session.time}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white">
                      {session.name}
                    </span>
                    <span className="text-[10px] sm:text-xs text-cyan-400 font-bold uppercase tracking-wide">
                      {session.type}
                    </span>
                  </li>
                ))}
              </ul>
            </button>
          ))}
        </div>

        {/* Modal */}
        {modalDay && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 ">
            <div className="bg-gray-900 border-2 border-cyan-400 neon-glow rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative">
              <button
                aria-label="Close modal"
                className="absolute right-5 top-4 text-cyan-400 text-3xl sm:text-4xl"
                onClick={() => setModalDay(null)}
              >
                ×
              </button>
              <h2 className="text-3xl font-extrabold text-cyan-300 mb-3">
                {modalDay.day} Training Plan
              </h2>
              <div className="mb-4">
                <span className="block text-lg font-bold text-white">
                  Target:{" "}
                  <span className="text-cyan-300">
                    {modalDay.workout.target}
                  </span>
                </span>
                <span className="block text-sm text-cyan-400 font-bold uppercase tracking-wide mt-3">
                  Recommended Machines:
                </span>
                <ul className="list-disc ml-5 text-gray-200 mt-1 mb-3">
                  {modalDay.workout.machines.map((machine, idx) => (
                    <li key={idx}>{machine}</li>
                  ))}
                </ul>
                <div className="text-sm text-cyan-400 font-bold uppercase tracking-wide">
                  Standard Sets & Reps:
                </div>
                <div className="mb-3 text-gray-200">
                  {modalDay.workout.sets}
                </div>
                <div className="text-sm text-cyan-400 font-bold uppercase tracking-wide">
                  Tips:
                </div>
                <div className="text-gray-200">{modalDay.workout.tips}</div>
              </div>
            </div>
          </div>
        )}

        {/* CSS for neon effect */}
        <style>{`
          .neon-shadow {
            text-shadow: 0 0 10px #22d3ee, 0 0 20px #0891b2;
          }
          .neon-glow {
            box-shadow: 0 0 40px #22d3ee88, 0 0 16px #0891b299;
          }
        `}</style>
      </div>
    </div>
  );
}

export default Schedule;
