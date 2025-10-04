// Existing imports
import  { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";

import basices from "../assets/basices.jpeg";
import basices1 from "../assets/basices1.jpeg";
import premium from "../assets/basices2.jpeg";
import personal from "../assets/basices3.jpeg";
import group from "../assets/basices4.jpeg";

const STRIPE_PUBLIC_KEY =
  "pk_test_51SBRg7AC5alvvt07t54U4rhrEWFR3Le0sMVByvQpWnK2kMqav2TMXeB39Hg73TIW7JG57oRi6vzdmeDheNItMHsd00FRr84uSF";

const stripePromise = loadStripe(STRIPE_PUBLIC_KEY);

const API_URL = import.meta.env.VITE_API_URL || "https://gym-backend-2-61kx.onrender.com";

interface Plan {
  name: string;
  price: string;
  img: string;
  amount: number;
  features: string[];
}

function Pricing() {
  const plans: Plan[] = [
    {
      name: "Basic Plan",
      price: "$20 / month",
      img: basices,
      amount: 20,
      features: [
        "Access to Gym Equipment",
        "Locker Facility",
        "1 Group Class / Week",
        "Free Wi-Fi",
      ],
    },
    {
      name: "Premium Plan",
      price: "$40 / month",
      img: premium,
      amount: 40,
      features: [
        "All Basic Plan Benefits",
        "Unlimited Group Classes",
        "Steam & Sauna Access",
        "Nutrition Guidance",
      ],
    },
    {
      name: "Personal Training",
      price: "$70 / month",
      img: personal,
      amount: 70,
      features: [
        "Dedicated Personal Trainer",
        "Customized Workout Plan",
        "Weekly Progress Tracking",
        "Diet & Supplement Guidance",
      ],
    },
    {
      name: "Group Classes",
      price: "$120 / month",
      img: group,
      amount: 120,
      features: [
        "Unlimited Group Classes",
        "Yoga & Zumba Sessions",
        "HIIT & CrossFit Workouts",
        "Fun & Motivating Environment",
      ],
    },
  ];

  const [selectedDurations, setSelectedDurations] = useState<{
    [key: string]: number;
  }>({});

  const handleDurationChange = (planName: string, months: number) => {
    setSelectedDurations({ ...selectedDurations, [planName]: months });
  };

const handleCheckout = async (plan: Plan) => {
  const months = selectedDurations[plan.name] || 1;
  const totalAmount = plan.amount * months;
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  if (!userId || !token) {
    console.error("User ID or token missing. Please login first.");
    alert("Please login first.");
    return;
  }

  try {
    const stripe = await stripePromise;
    if (!stripe) {
      console.error("Stripe failed to load.");
      return;
    }

    const res = await fetch(`${API_URL}/payment/create-checkout-session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`, // ✅ Token भेजो
      },
      body: JSON.stringify({
        plan,
        months,
        totalAmount,
        userId,
      }),
    });

    if (!res.ok) {
      console.error("Backend Error:", await res.text());
      return;
    }

    const session = await res.json();

    if (session.id) {
      const { error } = await stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (error) console.error(error);
    }
  } catch (error) {
    console.error("Stripe checkout error:", error);
  }
};




  return (
    <>
      <div className="w-full h-[600px]">
        <img
          src={basices1}
          alt="gym"
          className="w-full h-full object-cover shadow-lg"
        />
      </div>

      <section className=" py-12 px-4 sm:px-8 lg:px-16 bg-gradient-to-r from-black via-red-700 to-black text-white  ">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 drop-shadow-md">
            Membership Pricing
          </h2>
          <p className=" mt-3 text-lg sm:text-xl">
            Choose the best plan for your fitness journey 
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          {plans.map((plan, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transform transition-transform hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={plan.img}
                alt={plan.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {plan.name}
                </h3>
                <p className="text-red-600 font-semibold text-xl mb-5">
                  ${plan.amount} / month
                </p>

                <ul className="text-gray-600 text-sm space-y-2 mb-6 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-red-600 font-bold">✅</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-4">
                  <label className="block text-gray-800 font-semibold mb-2 text-sm">
                    Duration
                  </label>
                  <div className="relative">
                    <select
                      value={selectedDurations[plan.name] || 1}
                      onChange={(e) =>
                        handleDurationChange(plan.name, Number(e.target.value))
                      }
                      className="
                        w-full
                        p-3
                        border
                        border-gray-300
                        rounded-lg
                        bg-white
                        shadow-sm
                        focus:outline-none
                        focus:ring-2
                        focus:ring-red-500
                        focus:border-red-500
                        transition
                        text-gray-700
                        font-medium
                        appearance-none
                        hover:border-red-400
                      "
                    >
                      <option value={1}>1 Month</option>
                      <option value={3}>3 Months</option>
                      <option value={6}>6 Months</option>
                      <option value={12}>1 Year</option>
                    </select>
                    <span className="absolute inset-y-0 right-3 flex items-center pointer-events-none text-gray-500">
                      ▼
                    </span>
                  </div>
                  <p className="mt-2 text-gray-600 text-sm">
                    Total:{" "}
                    <span className="font-semibold">
                      ${plan.amount * (selectedDurations[plan.name] || 1)}
                    </span>
                  </p>
                </div>

                <button
                  onClick={() => handleCheckout(plan)}
                  className="mt-auto cursor-pointer bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg font-semibold hover:bg-red-700 transition"
                >
                  Purchase Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Pricing;
