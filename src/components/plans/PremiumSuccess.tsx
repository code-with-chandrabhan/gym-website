import BasicSuccess from "./BasicsSuccess";

export default function PremiumSuccess() {
  const unlimitedGroupText = `
Our Premium Membership offers unlimited access to group classes every single day, ensuring that your fitness journey stays exciting, engaging, and varied. Unlike regular memberships with restricted class access, our unlimited group classes allow you to attend as many sessions as you want — whether it's Yoga, Zumba, HIIT, Strength Training, Pilates, or Dance Fitness.  

Group classes bring a unique energy that pushes you beyond your limits. They are guided by certified instructors who design sessions to cater to all fitness levels, whether you're a beginner or an advanced athlete. This variety not only makes exercise enjoyable but also improves your motivation, discipline, and consistency.  

By joining unlimited classes, you gain the advantage of constantly challenging your body with different workout styles. This helps prevent workout plateaus and keeps your body adapting and growing stronger. Classes are designed to target every muscle group, improve flexibility, enhance endurance, and boost overall health.  

The social aspect of group classes is invaluable. Training alongside other members builds a sense of community, encourages camaraderie, and fosters accountability. You meet like-minded people who share your fitness goals, making your workout experience not just beneficial for your body but also uplifting for your mind.  

Our unlimited group classes are scheduled throughout the day to suit your lifestyle — early mornings for energizing starts, mid-day sessions to break up work stress, and evenings for relaxation and recovery. You have the freedom to choose classes that best fit your routine without worrying about restrictions.  

For our Premium Members, this means a completely immersive and holistic fitness experience. You’re not just paying for gym access — you’re investing in a lifestyle of health, energy, and vitality.  
  `;

  return (
    <>
      <BasicSuccess />
      <div>
        <div className="bg-gradient-to-r from-black via-red-600 to-black text-white p-8  shadow-lg overflow-hidden">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Unlimited Group Classes
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-justify  mx-auto max-w-7xl">
            {unlimitedGroupText}
          </p>
          <h2 className="text-3xl font-bold text-center mb-4 mt-4 text-gray-800">
            Steam Sauna Access
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-justify  mx-auto max-w-7xl">
            Our gym provides exclusive Steam Sauna Access for members who seek
            not only a workout but a complete wellness experience. The steam
            sauna is designed to offer deep relaxation, detoxification, and
            muscle recovery after intense training sessions. Heat therapy in a
            steam sauna improves circulation, opens pores for deep cleansing,
            and helps the body release toxins naturally. Regular use of steam
            sauna also relieves muscle soreness and stiffness, aiding faster
            recovery after a workout. It reduces stress by calming your mind and
            promoting better sleep patterns. The warmth increases blood flow,
            which not only boosts metabolism but also supports cardiovascular
            health. The steam sauna is maintained with the highest hygiene
            standards and is available to members throughout gym hours. It
            creates an oasis of tranquility where members can unwind, meditate,
            and rejuvenate before or after their training sessions. Whether you
            finish a heavy lifting workout or a high-intensity cardio session,
            steam sauna access offers the perfect recovery solution. This
            facility is particularly beneficial for those with joint pain or
            muscle injuries, as the heat improves flexibility and reduces
            discomfort. Beyond physical benefits, it also enhances mental
            wellness, making every gym visit a holistic experience.
          </p>
          <h2 className="text-3xl font-bold text-center mb-4 mt-4 text-gray-800">
            Nutrition Guidance
          </h2>
          <p className="text-lg md:text-xl leading-relaxed text-justify  mx-auto max-w-7xl">
            Fitness is incomplete without proper nutrition. That’s why we offer
            personalized Nutrition Guidance to all our members. Our certified
            nutritionists work with you to develop tailored meal plans that
            align with your fitness goals — whether it’s weight loss, muscle
            gain, endurance improvement, or general wellness. Nutrition guidance
            includes a comprehensive assessment of your dietary habits,
            lifestyle, and fitness requirements. Our experts focus on balancing
            macronutrients, optimizing caloric intake, and ensuring the right
            micronutrients are included in your diet. You’ll receive practical
            meal suggestions, portion control tips, and guidance on healthy
            eating habits that fit seamlessly into your daily life. For those
            interested in sports performance, our nutrition plans enhance energy
            levels and endurance while aiding faster recovery. For members
            aiming for weight management, we focus on nutrient-dense foods that
            promote fat loss while preserving lean muscle mass. We also offer
            advice on supplements, hydration strategies, and timing of meals to
            maximize your workout results. Education is a big part of our
            nutrition guidance — members learn how to make informed food choices
            for long-term health benefits. When nutrition is combined with
            exercise, the results are exponential. Our aim is to help you not
            just train your body but also fuel it properly. This is why
            nutrition guidance is an essential part of our premium gym
            experience.
          </p>
        </div>
      </div>
    </>
  );
}
