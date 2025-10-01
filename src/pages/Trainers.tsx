import { useState } from "react";

function Trainers() {
  const trainers = [
    {
      name: "Stella",
      designation: "Club Manager & Ladies Personal Trainer",
      img: "https://fitnessfuelfactory.com/wp-content/uploads/2025/09/IMG_0433-1396x1536.webp",
      details: [
        "Proton Fitness Academy Certified",
        "10 Years of Experience in Personal Training",
        "AST – Advanced Strength Training | FST – Functional Strength",
        "Training | Basic Personal Training | National Bodybuilding Certification",
      ],
      language: "Kannada | English | Tamil | Telugu | Hindi",
      specialization:
        "Weight Management | Senior Fitness Specialist | Corrective Exercise Specialist | PCOD | Thyroid",
      overview: `
Hi, My Name is Stella
I have done my Personal Training from “VIVAFIT”.
I have done my Functional Training Certification & Pilates certification
I conduct One-on-One Training Session of Cardio, Weight training wellness
programme and Group Training.

Passionate about helping others achieve their fitness and weight-loss goals, I
provide high-energy programs combining the latest techniques, nutrition
counselling, and exercise science for all Age Group.

– Helping clients achieve and maintain weight loss with Tailor made Fitness
plan with Exercise form, I worked for overall Fitness  
– I identify the Strength, weakness with Fitness assessments.  
– I agree Goal with the client, provide advice, support and motivate them to
achieve their Fitness Goal.  
– Track your progress and make alterations where necessary  
– Leading sessions that improve the fitness, flexibility, strength and
conditioning of men and women.  
      `,
      certification: {
        associations: ["Pro Power Fitness Academy", "Skill India"],
        certifications: [
          "Personal Training & Nutritionist (Level -2)",
          "AST – Advanced Strength Training",
          "FST – Functional Strength Training",
          "First Aid & CPR",
          "Body building contestant prep.",
        ],
      },
      contact: {
        whatsapp: "https://wa.me/916232469432",
        phone: "tel:+916232469432",
      },
    },
    {
      name: "Keerthi B E",
      designation: "(Personal Gym Trainer)",
      img: "https://fitnessfuelfactory.com/wp-content/uploads/2022/04/personal-trainer-keerthi.jpg",
      details: [
        "Professional Personal Fitness Trainer",
        "10 Years of Experience in Personal Trainer",
        "ISSA Certification (International Sports Science Association)",
      ],
      language: "Kannada | English | Hindi | Telugu",
      specialization:
        "Personal Trainer for Body Transformation, Weight Management, HIT, Strength Group workout, Boot Camp, core conditioning, cross fit, step workouts, abs killer, weight loss program, weight gain program",
      overview: `
A professional fitness trainer and coach, with in-depth knowledge of human body, the musculoskeletal system, and the associated strengthening and weight reduction techniques. Overall fitness experience of about 10 years.
I have been a professional body builder. Competed and won prizes at university level in Best physique, Weight lifting and Wrestling. I also play Cricket,Kabaddi and Tennis. I am a certified Personal Fitness Trainer from IFAA.
1. Personal Fitness Training- weight loss/gain, body toning/building, strength training, post-natal training etc.
My personal fitness training program includes:
a) Initial assessment of clients – covering the medical history, life style, food habits, nature of job, body condition, muscular strength and weaknesses, posture etc., – and then agreeing on realistic fitness goals
b) Developing and implementing personalized exercise and diet programs for individual clients, based on their body conditions, medical history, age, gender and fitness goals
c) Training covers stretches, cardio, strength training, and endurance training. Combination of weight training, body weight training, or using various equipment.
I have coached people to achieve their fitness goals, become healthier, and change the lifestyle.
2. 60 days Fat loss program:
This is suitable for people who are overweight / obese. The is based on nutrition control, and has been 99% successful.
a) Assessment & preparatory phase
b) Diet & nutrition management phase
c) Maintenance 
      `,
      certification: {
        associations: ["Pro Power Fitness Academy", "Skill India"],
        certifications: [
          "Personal Training & Nutritionist (Level -2)",
          "AST – Advanced Strength Training",
          "FST – Functional Strength Training",
          "First Aid & CPR",
          "Body building contestant prep.",
        ],
      },
      contact: {
        whatsapp: "https://wa.me/916232469432",
        phone: "tel:+916232469432",
      },
    },
    {
      name: "Bigin",
      designation: "(Head Gym Trainer)",
      img: "https://fitnessfuelfactory.com/wp-content/uploads/2025/05/IMG_0419-864x1536.jpg",
      details: [
        "Professional Personal Fitness Trainer",
        "10 Years of Experience",
        "ISSA Certification (International Sports Science Association)",
        "1250+ members trained so far",
      ],
      language: "Kannada | English | Hindi | Telugu",
      specialization:
        "Personal Trainer for Weight Management, Body building strength training.",
      overview: `
A professional fitness trainer and coach, with in-depth knowledge of human body, the musculoskeletal system, and the associated strengthening and weight reduction techniques. Overall fitness experience of about 5years.
1. Personal Fitness Training- weight loss/gain, body toning/building, strength training, post-natal training etc.
My personal fitness training program includes:
a) Initial assessment of clients – covering the medical history, life style, food habits, nature of job, body condition, muscular strength and weaknesses, posture etc., – and then agreeing on realistic fitness goals.
b) Developing and implementing personalized exercise and diet programs for individual clients, based on their body conditions, medical history, age, gender and fitness goals
c) Training covers stretches, cardio, strength training, and endurance training.
Combination of weight training, body weight training, or using various equipment. 
      `,
      certification: {
        associations: ["Pro Power Fitness Academy", "Skill India"],
        certifications: [
          "Personal Training & Nutritionist (Level -2)",
          "AST – Advanced Strength Training",
          "FST – Functional Strength Training",
          "First Aid & CPR",
          "Body building contestant prep.",
        ],
      },
      contact: {
        whatsapp: "https://wa.me/916232469432",
        phone: "tel:+916232469432",
      },
    },
    {
      name: "Goutham P",
      designation: "(General Trainer)",
      img: "https://fitnessfuelfactory.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-01-31-at-8.31.17-PM-1152x1536.jpeg",
      details: [
        "Professional Personal Fitness Trainer",
        "10 Years of Experience",
        "ISSA Certification (International Sports Science Association)",
        "200+ members trained so far",
      ],
      language: "Kannada | English | Hindi | Telugu",
      specialization:
        "Personal Trainer for Weight Management, Body building strength training..",
      overview: `
A professional fitness trainer and coach, with in-depth knowledge of human body, the musculoskeletal system, and the associated strengthening and weight reduction techniques. Overall fitness experience of about 5years.
1. Personal Fitness Training- weight loss/gain, body toning/building, strength training, post-natal training etc.
My personal fitness training program includes:
a) Initial assessment of clients – covering the medical history, life style, food habits, nature of job, body condition, muscular strength and weaknesses, posture etc., – and then agreeing on realistic fitness goals.
b) Developing and implementing personalized exercise and diet programs for individual clients, based on their body conditions, medical history, age, gender and fitness goals
c) Training covers stretches, cardio, strength training, and endurance training.
Combination of weight training, body weight training, or using various equipment. 
      `,
      certification: {
        associations: ["Pro Power Fitness Academy", "Skill India"],
        certifications: [
          "Personal Training & Nutritionist (Level -2)",
          "AST – Advanced Strength Training",
          "FST – Functional Strength Training",
          "First Aid & CPR",
          "Body building contestant prep.",
        ],
      },
      contact: {
        whatsapp: "https://wa.me/916232469432",
        phone: "tel:+916232469432",
      },
    },
    {
      name: "Ponsrinidhi",
      designation: "(Personal Gym Trainer)",
      img: "https://fitnessfuelfactory.com/wp-content/uploads/2025/02/WhatsApp-Image-2025-01-31-at-8.37.02-PM-1024x1024.jpeg",
      details: [
        "Professional Personal Fitness Trainer",
        "10 Years of Experience",
        "ISSA Certification (International Sports Science Association)",
        "200+ members trained so far",
      ],
      language: "Kannada | English | Hindi | Telugu",
      specialization:
        "Personal Trainer for Weight Management, Body building strength training..",
      overview: `
A professional fitness trainer and coach, with in-depth knowledge of human body, the musculoskeletal system, and the associated strengthening and weight reduction techniques. Overall fitness experience of about 5years.
1. Personal Fitness Training- weight loss/gain, body toning/building, strength training, post-natal training etc.
My personal fitness training program includes:
a) Initial assessment of clients – covering the medical history, life style, food habits, nature of job, body condition, muscular strength and weaknesses, posture etc., – and then agreeing on realistic fitness goals.
b) Developing and implementing personalized exercise and diet programs for individual clients, based on their body conditions, medical history, age, gender and fitness goals
c) Training covers stretches, cardio, strength training, and endurance training.
Combination of weight training, body weight training, or using various equipment. 
      `,
      certification: {
        associations: ["Pro Power Fitness Academy", "Skill India"],
        certifications: [
          "Personal Training & Nutritionist (Level -2)",
          "AST – Advanced Strength Training",
          "FST – Functional Strength Training",
          "First Aid & CPR",
          "Body building contestant prep.",
        ],
      },
      contact: {
        whatsapp: "https://wa.me/916232469432",
        phone: "tel:+916232469432",
      },
    },
  ];

  const [openSection, setOpenSection] = useState<{
    [key: number]: string | null;
  }>({});

  const toggleSection = (idx: number, section: string) => {
    setOpenSection((prev) => ({
      ...prev,
      [idx]: prev[idx] === section ? null : section,
    }));
  };

  return (
    <>
      <div className="w-full h-[600px]">
        <img
          src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Z3ltfGVufDB8fDB8fHww"
          alt="gym trainers banner"
          className="w-full h-full object-cover  shadow-lg"
          loading="lazy"
        />
      </div>

      <section className="bg-gradient-to-r from-black via-red-700 to-black text-white  py-14 px-6  space-y-14">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Meet Our Trainers
          </h2>
          <p className=" text-lg">
            Our certified trainers are here to guide you every step.
          </p>
        </header>

        {trainers.map((trainer, idx) => (
          <div
            key={idx}
            className="max-w-7xl mx-auto bg-gradient-to-r from-black via-red-700 to-black text-white  rounded-2xl shadow-xl overflow-hidden grid md:grid-cols-2 "
          >
            {/* Image */}
            <img
              src={trainer.img}
              alt={trainer.name}
              className="w-full h-[600px] md:h-auto object-cover rounded-l-2xl "
              loading="lazy"
            />

            {/* Content */}
            <div className="p-8 flex flex-col bg-gradient-to-r from-black via-red-700 to-black text-white">
              <h3 className="text-3xl font-bold ">{trainer.name}</h3>
              <p className="italic  mb-6">{trainer.designation}</p>

              <ul className="space-y-2 mb-6 text-gray-400">
                {trainer.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span>✔️</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Expandable Sections */}
              <div className="space-y-3">
                {[
                  "Language",
                  "Specialization",
                  "Certification",
                  "Overview",
                ].map((section) => (
                  <div key={section} className="border-b border-gray-300 pb-2">
                    <button
                      onClick={() => toggleSection(idx, section)}
                      className="w-full flex justify-between items-center py-3 text-left font-semibold text-gray-200 hover:text-red-600 transition"
                    >
                      {section}
                      <span className="ml-4 text-xl cursor-pointer">
                        {openSection[idx] === section ? "▲" : "▼"}
                      </span>
                    </button>
                    {openSection[idx] === section && (
                      <div className="pt-2 text-gray-200 text-base whitespace-pre-line">
                        {section === "Language" && trainer.language}
                        {section === "Specialization" && trainer.specialization}
                        {section === "Certification" && (
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-gray-200 mb-1">
                                Associations / Boards
                              </h4>
                              <ul className="list-disc list-inside ml-5 text-gray-700">
                                {trainer.certification?.associations?.map(
                                  (assoc, i) => (
                                    <li key={i}>{assoc}</li>
                                  )
                                )}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-800 mb-1">
                                Certifications
                              </h4>
                              <ul className="list-disc list-inside ml-5 text-gray-700">
                                {trainer.certification?.certifications?.map(
                                  (cert, i) => (
                                    <li key={i}>{cert}</li>
                                  )
                                )}
                              </ul>
                            </div>
                          </div>
                        )}
                        {section === "Overview" && trainer.overview}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Contact Buttons */}
              <div className="mt-8 flex gap-4">
                <a
                  href={trainer.contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-green-600 hover:bg-green-700 transition-colors text-white py-3 rounded-lg text-center font-semibold shadow"
                >
                  WhatsApp
                </a>
                <a
                  href={trainer.contact.phone}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 transition-colors text-white py-3 rounded-lg text-center font-semibold shadow"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Trainers;
