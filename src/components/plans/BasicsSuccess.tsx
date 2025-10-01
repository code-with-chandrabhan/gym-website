import { motion } from "framer-motion";
import navvideo from "../../assets/navvideo.mp4";


const machines = [
  {
    name: "Treadmill",
    video: "https://cdn.pixabay.com/video/2021/06/16/77916-563974349_tiny.mp4",
    text: "The treadmill is excellent for warm-up and cardio. It improves stamina, burns calories, and strengthens your heart.",
  },
  {
    name: "Chest Press",
    video: "https://cdn.pixabay.com/video/2021/03/05/66999-521238821_tiny.mp4",
    text: "This machine works your chest, shoulders, and triceps. Use smooth controlled movements for best muscle growth.",
  },
  {
    name: "Lat Pulldown",
    video: "https://cdn.pixabay.com/video/2022/10/16/135162-761273567_tiny.mp4",
    text: "Perfect for your back and lats. Sit straight and pull the bar to your chest to improve posture and strength.",
  },
  {
    name: "Leg Press",
    video: "https://cdn.pixabay.com/video/2023/01/27/148204-793717940_tiny.mp4",
    text: "The leg press builds your thighs, hamstrings, and glutes. Push with your legs, not your back, to avoid injuries.",
  },
  {
    name: "Shoulder Press",
    video:
      "https://media.istockphoto.com/id/2213753325/video/determined-male-athlete-executes-dumbbell-shoulder-presses-in-a-modern-gym.mp4?s=mp4-640x640-is&k=20&c=jV9UGqksbyKi_ydmFOK_TjCGwTasHe9QgXLy4FOaumY=",
    text: "Strengthens shoulders and arms. Keep your back straight and push upwards slowly for better control.",
  },
  {
    name: "Bicep Curl Machine",
    video:
      "https://media.istockphoto.com/id/1729649027/video/chest-workout-and-curling-arms-for-biceps-in-gym.mp4?s=mp4-640x640-is&k=20&c=COg3b33IWEVkWjZzDs0nFEftq58fy_2E_etgAwaZIQ8=",
    text: "Targets your biceps for arm strength. Keep elbows fixed and lift smoothly to avoid jerking movements.",
  },
  {
    name: "Cable Machine",
    video: "https://cdn.pixabay.com/video/2023/01/27/148208-793717949_tiny.mp4",
    text: "A versatile machine for chest, triceps, and shoulders. Adjust the pulleys for different angles and exercises.",
  },
  {
    name: "Ab Crunch Machine",
    video: "https://cdn.pixabay.com/video/2018/12/18/20112-307163913_tiny.mp4",
    text: "Focuses on core muscles. Perform slow crunches to strengthen abs and support overall body posture.",
  },
];

const facilities = [
  {
    name: "Locker Facility",
    img: "https://cdn.pixabay.com/photo/2017/08/11/11/53/locker-2630498_640.jpg",
    text: "Our gym provides secure lockers so you can focus on your workout without worry. Spacious, hygienic, and with durable locking systems, they allow you to store your belongings safely during training sessions. The facility encourages regular exercise by eliminating the hassle of carrying items. Maintenance is a priority, and cleanliness is ensured daily. This promotes peace of mind and discipline, creating a safe environment for all members. You can train with full dedication knowing your personal items are protected. Locker facilities are an essential part of a professional gym experience.",
  },
  {
    name: "Weekly Group Class",
    img: "https://cdn.pixabay.com/photo/2013/02/09/04/19/weights-79587_640.jpg",
    text: "We organize weekly group classes that boost motivation and create a vibrant community atmosphere. Led by expert trainers, sessions include Zumba, Yoga, Aerobics, and Strength Training. Group workouts improve teamwork, positivity, and accountability while burning calories and enhancing fitness. They make exercise enjoyable and encourage social interaction, allowing members to build friendships and share experiences. The variety keeps workouts exciting, with themes changing weekly. These classes are completely free, offering more value for your membership. Group classes are ideal for both beginners and experienced fitness enthusiasts.",
  },
  {
    name: "Free Wi-Fi",
    img: "https://cdn.pixabay.com/photo/2017/07/13/11/38/wlan-2500161_1280.jpg",
    text: "Our gym offers high-speed free Wi-Fi throughout the premises. Whether you stream workout music, follow fitness tutorials, or track your performance with apps, our Wi-Fi ensures seamless connectivity. It helps members stay connected with friends, family, or work even during workouts. The service is secure and covers all areas of the gym including locker rooms, workout spaces, and lounges. Free Wi-Fi allows you to combine fitness with productivity, making your gym experience smarter and more convenient. It’s our way of ensuring members have a tech-friendly environment to support their lifestyle.",
  },
];

export default function BasicSuccess() {
  return (
    <>
      {/* Background Video */}
      <div className="relative w-full h-screen overflow-hidden ">
        <video
          src={navvideo}
          autoPlay
          loop
          muted
          className="w-full h-full object-cover"
          playsInline
          preload="metadata"
        />
      </div>
      

      {/* Machines Section */}
      <div className="py-16 px-6 bg-gradient-to-r from-black via-red-700 to-black text-white ">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-8xl mx-auto ">
          {machines.map((m, i) => (
            <motion.div
              key={i}
              className="bg-gradient-to-r from-black via-red-700 to-black text-white  shadow-lg rounded-2xl overflow-hidden p-5"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: false, amount: 0.4 }}
            >
              <video
                src={m.video}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                className="w-full h-60 object-cover rounded-xl"
              />
              <h3 className="mt-4 text-xl font-semibold">{m.name}</h3>
              <p className="mt-2 ">{m.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Facilities Section */}
      <div className="py-16 px-6 bg-gradient-to-r from-black via-red-700 to-black text-white ">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          Extra Facilities for Members
        </h2>

        <div className="space-y-16 max-w-7xl mx-auto">
          {facilities.map((f, i) => (
            <motion.div
              key={i}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
              initial={{ opacity: 0, x: i % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: i * 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              {/* Text Section */}
              <div className="md:w-1/2 px-4">
                <h3 className="text-2xl font-semibold text-gray-300 ">
                  {f.name}
                </h3>
                <p className="mt-4  text-justify leading-relaxed">{f.text}</p>
              </div>

              {/* Image Section */}
              <div className="md:w-1/2 px-4">
                <img
                  src={f.img}
                  alt={f.name}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}
