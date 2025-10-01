import PersonalSuccess from "./PersonalSuccess";
export default function GroupSuccess() {
  return (
    <>
    <PersonalSuccess/>
    <div className="p-8  bg-gradient-to-r from-black via-red-800 to-black text-white">
      {/* Detailed Sections */}
      <div className="mt-12 space-y-12 max-w-7xl mx-auto">
        {/* Family & Friends Section */}
        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-red-400">
            👨‍👩‍👧‍👦 5 Family/Friends Members Included
          </h3>
          <p className="leading-relaxed text-gray-200 text-justify">
            With our Group Plan, you don’t have to work out alone. Your
            membership includes access for up to <b>5 family or friends</b>,
            allowing your loved ones to join you on your fitness journey at no
            additional cost. Training together not only makes workouts more fun
            but also builds accountability and consistency. Fitness becomes a
            shared lifestyle, ensuring everyone stays motivated and inspired.
          </p>
        </div>

        {/* Private Group Sessions Section */}
        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-red-400">
            💪 Private Group Sessions
          </h3>
          <p className="leading-relaxed text-gray-200 text-justify">
            As a Group Plan member, you gain access to{" "}
            <b>exclusive private training sessions</b> tailored specifically for
            your group. These sessions are designed by certified trainers to
            match your collective fitness level, whether you’re beginners or
            advanced athletes. Private sessions provide a focused and supportive
            environment where you and your group can train effectively without
            distractions. It’s the perfect way to experience personalized
            training while enjoying the energy of working as a team.
          </p>
        </div>

        {/* Discounts Section */}
        <div className="bg-white/10 p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
          <h3 className="text-2xl font-semibold mb-3 text-red-400">
            🎉 Special Discounts on Events
          </h3>
          <p className="leading-relaxed text-gray-200 text-justify mb-6">
            Group Plan members also receive <b>exclusive discounts</b> on our
            fitness events, workshops, and bootcamps. These events go beyond
            regular workouts and give you the chance to expand your fitness
            knowledge, participate in fun challenges, and connect with the wider
            gym community. With discounted access, you not only save money but
            also gain added value, making your membership even more rewarding
            and holistic.
          </p>

          {/* Discount Chart */}
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-700 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-red-700 text-white text-lg">
                  <th className="px-6 py-3 text-left">Plan Duration</th>
                  <th className="px-6 py-3 text-left">Discount Offered</th>
                </tr>
              </thead>
              <tbody className="bg-white/5 text-gray-200 text-base">
                <tr className="hover:bg-white/10 transition">
                  <td className="px-6 py-4">Monthly</td>
                  <td className="px-6 py-4">10% Off</td>
                </tr>
                <tr className="hover:bg-white/10 transition">
                  <td className="px-6 py-4">1 Year</td>
                  <td className="px-6 py-4">25% Off</td>
                </tr>
                <tr className="hover:bg-white/10 transition">
                  <td className="px-6 py-4">10 Years</td>
                  <td className="px-6 py-4">40% Off</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
