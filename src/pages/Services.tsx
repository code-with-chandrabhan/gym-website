
import  { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Kick from "../assets/Kick Boxing.jpeg";
import aerobics from "../assets/Aerobics.jpeg";
import strength from "../assets/Strength.jpeg";
import yoga from "../assets/Yoga.jpeg";
import crossfit from "../assets/CrossFit.jpeg";
import zumba from "../assets/Zumba.jpeg";
import cardio from "../assets/Cardio.jpeg";
import personal from "../assets/Personal Training.jpeg";
import gym4 from "../assets/gym4.jpeg";

type Program = {
  name: string;
  img: string;
  description: string;
  extraText?: string;
  extraImages?: string[];
  details?: {
    heading: string;
    text: string;
  }[];
};

const programs: Program[] = [
  {
    name: "Kick Boxing",
    img: Kick,
    description:
      "Kick Boxing is an intense full-body workout focusing on strength, agility, and endurance.",
    details: [
      {
        heading: "About",
        text: "Kick Boxing is a high-intensity sport that combines martial arts techniques with cardio. It improves agility, strength, and coordination while offering a full-body workout. Practicing regularly increases stamina and mental focus, making it suitable for fitness enthusiasts and athletes alike.",
      },
      {
        heading: "Benefits",
        text: "Kick Boxing helps burn calories rapidly, tones muscles, and improves cardiovascular health. It also enhances reflexes, balance, and overall endurance. Mental benefits include stress relief, confidence building, and discipline through structured training.",
      },
      {
        heading: "Body Areas Targeted",
        text: "This workout targets the legs, core, arms, and back. Kicking strengthens the lower body, while punching improves upper body strength. Core exercises enhance stability and posture, making it a comprehensive full-body workout.",
      },
      {
        heading: "Recommended Frequency",
        text: "For optimal results, practice Kick Boxing 3–5 times a week. Beginners should start with 2–3 sessions per week, gradually increasing intensity and duration. Rest days are important to allow muscle recovery and prevent injuries.",
      },
      {
        heading: "Timing",
        text: "Kick Boxing can be practiced any time of day. Morning sessions help energize and boost metabolism, while evening sessions release daily stress. Avoid immediately after heavy meals; ideally practice 1–2 hours post-meal.",
      },
      {
        heading: "Diet Tips",
        text: "Eat a balanced meal with carbohydrates and protein 1–2 hours before training. Stay hydrated and consume light snacks like fruits or nuts if training intensity is high. Post-workout protein intake aids muscle recovery.",
      },
      {
        heading: "Equipment",
        text: "Basic equipment includes gloves, hand wraps, comfortable workout clothes, and proper shoes. Advanced training may use pads, bags, and protective gear for sparring sessions.",
      },
    ],
  },
  {
    name: "Aerobics",
    img: aerobics,
    description:
      "Aerobics classes help improve cardiovascular health, flexibility, and coordination.",
    details: [
      {
        heading: "About",
        text: "Aerobics is a high-energy workout that combines rhythmic movements with music. It enhances cardiovascular fitness, strengthens muscles, and improves overall coordination. Classes are designed for all levels, from beginners to advanced participants, making it an inclusive fitness option.",
      },
      {
        heading: "Benefits",
        text: "Regular aerobics training helps increase stamina, improve lung capacity, and burn calories effectively. It tones muscles, boosts mood through endorphin release, and supports weight management. Mental benefits include stress relief and better focus.",
      },
      {
        heading: "Body Areas Targeted",
        text: "Aerobics primarily works the legs, glutes, and core through dynamic movements like jumping, stepping, and lunging. Arms and shoulders also get light toning depending on the routine. Overall, it provides a full-body moderate-intensity workout.",
      },
      {
        heading: "Recommended Frequency",
        text: "It is suggested to do aerobics 3–5 times per week for best results. Beginners can start with 2–3 sessions weekly, gradually increasing intensity. Rest days help prevent fatigue and muscle strain.",
      },
      {
        heading: "Timing",
        text: "Aerobics can be practiced any time, but morning sessions can kickstart your metabolism and energize your day. Evening sessions help release daily stress. Avoid immediately after a heavy meal; ideally wait 1–2 hours post-meal.",
      },
      {
        heading: "Diet Tips",
        text: "Consume a balanced meal with carbohydrates and protein 1–2 hours before class. Stay hydrated and snack lightly if needed. Post-workout protein or smoothie aids muscle recovery and reduces fatigue.",
      },
      {
        heading: "Equipment",
        text: "Wear comfortable workout clothes and supportive shoes. A yoga mat or step platform may be used depending on the routine. Music and a positive attitude enhance motivation and performance.",
      },
    ],
  },
  {
    name: "Strength",
    img: strength,
    description:
      "Strength training is key to building muscle, improving posture, and boosting metabolism.",
    details: [
      {
        heading: "About",
        text: "Strength training involves using resistance like free weights, machines, or bodyweight exercises to build muscle and improve overall body strength. It enhances functional fitness, making everyday activities easier and safer.",
      },
      {
        heading: "Benefits",
        text: "Improves muscle tone, increases bone density, boosts metabolism, and supports weight management. Also enhances posture, balance, and reduces risk of injury.",
      },
      {
        heading: "Body Areas Targeted",
        text: "Strength workouts target all major muscle groups: arms, legs, chest, back, and core. Programs can be customized to focus on specific areas or full-body strength.",
      },
      {
        heading: "Recommended Frequency",
        text: "3–5 sessions per week are ideal. Beginners should start with 2–3 days, allowing rest for muscle recovery. Advanced athletes can increase intensity or volume gradually.",
      },
      {
        heading: "Timing",
        text: "Can be performed any time of day. Morning sessions energize you, while evening sessions can relieve stress. Avoid training immediately after heavy meals.",
      },
      {
        heading: "Diet Tips",
        text: "Protein-rich meals before and after workouts help muscle repair and growth. Stay hydrated and include complex carbs for sustained energy.",
      },
      {
        heading: "Equipment",
        text: "Free weights, resistance bands, machines, and proper footwear. Beginners may start with bodyweight exercises.",
      },
    ],
  },
  {
    name: "Yoga",
    img: yoga,
    description: "Yoga enhances flexibility, balance, and mental wellness.",
    details: [
      {
        heading: "About",
        text: "Yoga is an ancient practice focusing on body, mind, and breath. Styles include Hatha, Vinyasa, and Power Yoga. It improves flexibility, strength, and mental clarity.",
      },
      {
        heading: "Benefits",
        text: "Increases flexibility, improves posture, reduces stress, enhances balance, and supports mental wellness. Helps with recovery and injury prevention.",
      },
      {
        heading: "Body Areas Targeted",
        text: "Works the entire body with emphasis on core, back, legs, and shoulders. Poses engage multiple muscle groups and joints.",
      },
      {
        heading: "Recommended Frequency",
        text: "3–5 sessions per week for noticeable benefits. Beginners can start with 2 sessions per week.",
      },
      {
        heading: "Timing",
        text: "Morning practice energizes and centers the mind; evening sessions relax and unwind. Avoid practicing immediately after heavy meals.",
      },
      {
        heading: "Diet Tips",
        text: "Light meals preferred before yoga. Hydration is important. Post-session, eat balanced meals for energy replenishment.",
      },
      {
        heading: "Equipment",
        text: "Yoga mat, comfortable clothing, blocks, and straps if needed.",
      },
    ],
  },
  {
    name: "CrossFit",
    img: crossfit,
    description:
      "CrossFit combines cardio, weightlifting, and functional movements for high-intensity workouts.",
    details: [
      {
        heading: "About",
        text: "CrossFit is a high-intensity fitness program that combines elements of weightlifting, gymnastics, and cardio. Classes focus on varied functional movements to improve overall fitness and endurance.",
      },
      {
        heading: "Benefits",
        text: "Enhances strength, endurance, flexibility, and cardiovascular fitness. Burns calories, builds lean muscle, and improves mental toughness.",
      },
      {
        heading: "Body Areas Targeted",
        text: "Works the entire body including legs, arms, core, back, and shoulders through compound movements like squats, lifts, and jumps.",
      },
      {
        heading: "Recommended Frequency",
        text: "3–5 classes per week depending on experience. Beginners start with 2–3 sessions to build stamina and technique.",
      },
      {
        heading: "Timing",
        text: "Morning sessions boost energy for the day, evening sessions help relieve stress. Avoid training immediately after a large meal.",
      },
      {
        heading: "Diet Tips",
        text: "Balanced meals with protein, healthy fats, and carbs fuel workouts. Hydration and post-workout protein shakes aid recovery.",
      },
      {
        heading: "Equipment",
        text: "Weights, kettlebells, jump ropes, pull-up bars, and proper shoes. Gym setup varies depending on program.",
      },
    ],
  },
  {
    name: "Zumba",
    img: zumba,
    description:
      "Zumba is a fun dance-based workout that combines Latin music with aerobic movements.",
    details: [
      {
        heading: "About",
        text: "Zumba is a lively dance fitness program combining Latin and international music with aerobic movements. It’s fun, energetic, and suitable for all fitness levels.",
      },
      {
        heading: "Benefits",
        text: "Improves cardiovascular health, burns calories, tones muscles, enhances coordination, and boosts mood.",
      },
      {
        heading: "Body Areas Targeted",
        text: "Mainly legs, core, and arms through dynamic dance movements. Provides full-body moderate-intensity workout.",
      },
      {
        heading: "Recommended Frequency",
        text: "2–5 sessions per week depending on fitness goals. Beginners start with 2 sessions per week.",
      },
      {
        heading: "Timing",
        text: "Anytime is fine; morning sessions energize the day, evening sessions relieve stress.",
      },
      {
        heading: "Diet Tips",
        text: "Light pre-class snack, stay hydrated, and post-session protein or fruit intake supports recovery.",
      },
      {
        heading: "Equipment",
        text: "Comfortable clothes and shoes, water bottle, and a towel.",
      },
    ],
  },
  {
    name: "Cardio",
    img: cardio,
    description:
      "Cardio workouts focus on endurance, heart health, and fat burning.",
    details: [
      {
        heading: "About",
        text: "Cardio exercises include running, cycling, swimming, or HIIT. These workouts strengthen the heart and lungs, improve stamina, and help maintain a healthy weight.",
      },
      {
        heading: "Benefits",
        text: "Boosts cardiovascular health, burns calories, improves endurance, lowers stress, and increases energy levels.",
      },
      {
        heading: "Body Areas Targeted",
        text: "Primarily legs, core, and cardiovascular system. High-intensity cardio also engages arms and back depending on activity.",
      },
      {
        heading: "Recommended Frequency",
        text: "3–6 sessions per week for best results. Beginners start with 3 sessions of moderate intensity.",
      },
      {
        heading: "Timing",
        text: "Morning cardio accelerates metabolism, evening sessions reduce stress. Avoid immediately after heavy meals.",
      },
      {
        heading: "Diet Tips",
        text: "Carb-rich meals before cardio provide energy; hydration is crucial. Post-workout protein helps recovery.",
      },
      {
        heading: "Equipment",
        text: "Running shoes, treadmill, cycling machine, jump rope, or outdoor gear depending on activity.",
      },
    ],
  },
  {
    name: "Personal Training",
    img: personal,
    description:
      "Personal Training offers one-on-one guidance with certified trainers.",
    details: [
      {
        heading: "About",
        text: "Personal Training provides individualized fitness programs tailored to your goals. Trainers monitor form, adjust exercises, and ensure progression and safety.",
      },
      {
        heading: "Benefits",
        text: "Accelerates results, provides accountability, reduces injury risk, and optimizes workouts based on personal fitness level.",
      },
      {
        heading: "Body Areas Targeted",
        text: "Customized to target specific areas like strength, endurance, flexibility, or weight loss. Full-body or focused training is possible.",
      },
      {
        heading: "Recommended Frequency",
        text: "2–5 sessions per week depending on goals and availability. Trainer adjusts frequency for best outcomes.",
      },
      {
        heading: "Timing",
        text: "Flexible timing based on client preference; sessions can be morning, afternoon, or evening.",
      },
      {
        heading: "Diet Tips",
        text: "Trainers provide personalized nutrition guidance based on goals. Pre- and post-workout nutrition is key for recovery.",
      },
      {
        heading: "Equipment",
        text: "Depends on program — can include weights, machines, resistance bands, or bodyweight exercises.",
      },
    ],
  },
];

function Services() {
  const location = useLocation();
  const clickedProgram = location.state?.program;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const displayPrograms = clickedProgram
    ? programs.filter((p) => p.name === clickedProgram.name)
    : programs;

  return (
    <>
    <div className="w-full h-[600px]">
  <img
    src={gym4}
    alt="gym-banner"
    className="w-full h-full object-cover  shadow-lg"
    loading="lazy"
  />
</div>
<div className="max-w-8xl mx-auto py-12 px-4 space-y-16 sm:space-y-20 bg-gradient-to-r from-black via-red-700 to-black  ">
  {displayPrograms.map((p) => (
    <div
      key={p.name}
      className="flex flex-col md:flex-row  shadow-xl rounded-2xl overflow-hidden bg-gradient-to-r from-black via-red-700 to-black text-white "
      style={{ alignItems: "stretch" }} 
    >
      
      <div className="md:w-1/2 w-full p-4 md:p-6 flex flex-col" >
        <img
          src={p.img}
          alt={p.name}
          className="rounded-lg shadow-md w-full h-auto max-h-full object-cover flex-grow"
          loading="lazy"
          style={{ alignSelf: "stretch", height: "100%" }}
        />
        {p.extraImages &&
          p.extraImages.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`extra-${idx}`}
              className="rounded-lg shadow-md w-full h-48 md:h-64 object-cover mt-4"
              loading="lazy"
            />
          ))}
      </div>

      {/* Text Content */}
      <div className="md:w-1/2 w-full p-6 flex flex-col justify-start space-y-6">
        <h2 className="text-4xl font-extrabold text-gray-900">{p.name}</h2>
        <p className=" text-lg">{p.description}</p>
        {p.details?.map((detail, idx) => (
          <div key={idx}>
            <h3 className="text-2xl font-semibold mt-6 mb-2">{detail.heading}</h3>
            <p className="text-gray-300 text-base leading-relaxed">{detail.text}</p>
          </div>
        ))}
      </div>
    </div>
  ))}
</div>


    </>
  );
}

export default Services;





