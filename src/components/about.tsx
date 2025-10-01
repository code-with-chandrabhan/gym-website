import { FaDumbbell, FaAppleAlt, FaHeartbeat, FaRunning } from "react-icons/fa";
import JoinUs from "./JoinUs";

const About = () => {
  return (
    <>
      <section className="bg-gradient-to-r from-black via-gray-900 to-orange-900 text-white py-16 px-6 min-h-[600px]">
        {/* Heading */}
        <div className="text-center max-w-4xl mx-auto mb-20 px-4 sm:px-6 lg:px-0">
          <p className="text-orange-500 font-semibold tracking-widest uppercase text-sm sm:text-base">
            Why Choose Us?
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mt-2 leading-tight drop-shadow-lg">
            Push Your Limits Forward
          </h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-0">
          {/* Card 1 */}
          <div className="text-center flex flex-col items-center min-h-[280px]">
            <div className="w-20 h-20 flex justify-center items-center bg-gray-900 rounded-full mb-5 shadow-lg">
              <FaDumbbell className="text-5xl text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Modern Equipment</h3>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              Train with the latest machines and tools designed to boost strength,
              endurance, and overall performance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="text-center flex flex-col items-center min-h-[280px]">
            <div className="w-20 h-20 flex justify-center items-center bg-gray-900 rounded-full mb-5 shadow-lg">
              <FaAppleAlt className="text-5xl text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Healthy Nutrition Plan</h3>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              Get expert diet guidance tailored to your fitness goals—whether it's fat
              loss, muscle gain, or overall wellness.
            </p>
          </div>

          {/* Card 3 */}
          <div className="text-center flex flex-col items-center min-h-[280px]">
            <div className="w-20 h-20 flex justify-center items-center bg-gray-900 rounded-full mb-5 shadow-lg">
              <FaRunning className="text-5xl text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Professional Training</h3>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              Learn from certified trainers who create personalized workout plans to
              maximize your progress safely.
            </p>
          </div>

          {/* Card 4 */}
          <div className="text-center flex flex-col items-center min-h-[280px]">
            <div className="w-20 h-20 flex justify-center items-center bg-gray-900 rounded-full mb-5 shadow-lg">
              <FaHeartbeat className="text-5xl text-orange-500" />
            </div>
            <h3 className="text-xl font-bold mb-3">Tailored to Your Needs</h3>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              No matter your fitness level, we adapt programs to fit your goals,
              lifestyle, and personal preferences.
            </p>
          </div>
        </div>
      </section>

      <JoinUs />
    </>
  );
};

export default About;
