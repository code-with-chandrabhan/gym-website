// Type define करें
interface Meal {
  time: string;
  food: string;
  qty: string;
}

export default function NutritionChart() {
  const plans = [
    {
      goal: "Weight Gain",
      genders: {
        Men: {
          "50-65kg": [
            { time: "7:00 AM", food: "Oats + milk + banana", qty: "1 bowl" },
            { time: "11:00 AM", food: "Boiled eggs + sandwich", qty: "2 eggs + 2 slices bread" },
            { time: "2:00 PM", food: "Brown rice + paneer + salad", qty: "1.5 cup rice + 80g paneer" },
          ] as Meal[], // 👈 Type hint दिया
          "65-80kg": [
            { time: "7:00 AM", food: "Oats + milk + banana + nuts", qty: "1.5 bowl" },
            { time: "11:00 AM", food: "Boiled eggs + sandwich", qty: "3 eggs + 3 slices bread" },
            { time: "2:00 PM", food: "Brown rice + paneer + salad", qty: "2 cups rice + 100g paneer" },
          ] as Meal[],
        },
        Women: {
          "50-65kg": [
            { time: "7:00 AM", food: "Oats + skim milk + apple", qty: "1 bowl" },
            { time: "11:00 AM", food: "Sprouts salad", qty: "1 bowl" },
            { time: "2:00 PM", food: "Rice + dal + sabzi", qty: "1 plate small" },
          ] as Meal[],
          "65-80kg": [
            { time: "7:00 AM", food: "Oats + skim milk + nuts", qty: "1 medium bowl" },
            { time: "11:00 AM", food: "Boiled eggs + salad", qty: "2 eggs + 1 cup salad" },
            { time: "2:00 PM", food: "Brown rice + dal + sabzi", qty: "1.5 plate" },
          ] as Meal[],
        },
      },
    },
    {
      goal: "Weight Loss",
      genders: {
        Men: {
          "60-75kg": [
            { time: "7:00 AM", food: "Green tea + almonds", qty: "1 cup + 5 pcs" },
            { time: "1:30 PM", food: "2 multigrain roti + dal", qty: "2 roti" },
            { time: "8:30 PM", food: "Grilled paneer + soup", qty: "100g paneer" },
          ] as Meal[],
          "75-90kg": [
            { time: "7:00 AM", food: "Green tea + walnuts", qty: "1 cup + 5 pcs" },
            { time: "1:30 PM", food: "2 multigrain roti + sabzi + salad", qty: "2 roti + 1 cup sabzi" },
            { time: "8:30 PM", food: "Grilled chicken + soup", qty: "120g chicken" },
          ] as Meal[],
        },
        Women: {
          "50-65kg": [
            { time: "7:00 AM", food: "Warm lemon water + fruits", qty: "1 glass + 1 bowl" },
            { time: "1:00 PM", food: "1 multigrain roti + dal", qty: "1 roti" },
            { time: "7:30 PM", food: "Paneer tikka + soup", qty: "70g paneer" },
          ] as Meal[],
          "65-80kg": [
            { time: "7:00 AM", food: "Green tea + nuts", qty: "1 cup + handful" },
            { time: "1:30 PM", food: "2 roti + sabzi + salad", qty: "2 roti" },
            { time: "8:00 PM", food: "Grilled tofu + soup", qty: "80g tofu" },
          ] as Meal[],
        },
      },
    },
  ];

  return (
    <div className="bg-gradient-to-r from-black via-red-800 to-black py-16 px-4 text-white">
      <h2 className="text-4xl font-bold text-center mb-12">
        Nutrition & Diet Consultation Chart
      </h2>

      <div className="max-w-7xl mx-auto space-y-12">
        {plans.map((plan, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6">
            <h3 className="text-3xl font-semibold text-red-400 mb-6 text-center">
              {plan.goal}
            </h3>

            {Object.entries(plan.genders).map(([gender, weights], gIdx) => (
              <div key={gIdx} className="mb-10">
                <h4 className="text-2xl font-bold text-yellow-400 mb-4">{gender}</h4>

                {Object.entries(weights).map(([range, meals], wIdx) => (
                  <div key={wIdx} className="mb-6 bg-black/30 rounded-lg p-4 shadow-md">
                    <h5 className="text-xl font-semibold text-green-400 mb-3">
                      For Weight: {range}
                    </h5>
                    <div className="overflow-x-auto">
                      <table className="min-w-full text-sm md:text-base border border-gray-600 rounded-lg overflow-hidden">
                        <thead className="bg-red-600 text-white">
                          <tr>
                            <th className="px-4 py-2 text-left">Time</th>
                            <th className="px-4 py-2 text-left">Food</th>
                            <th className="px-4 py-2 text-left">Quantity</th>
                          </tr>
                        </thead>
                        <tbody>
                          {meals.map((meal: Meal, i: number) => ( // ✅ meal type fix किया
                            <tr
                              key={i}
                              className={`${i % 2 === 0 ? "bg-black/40" : "bg-black/20"} hover:bg-red-700/40 transition`}
                            >
                              <td className="px-4 py-3">{meal.time}</td>
                              <td className="px-4 py-3">{meal.food}</td>
                              <td className="px-4 py-3">{meal.qty}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
