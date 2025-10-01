import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {
  BarrelIcon,
  Clock,
  User,
  Dumbbell,
  Activity,
  HeartPulse,
} from "lucide-react";


export default function About() {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.backgroundColor = "black";
    document.body.style.margin = "0";
    return () => {
      document.body.style.backgroundColor = "";
      document.body.style.margin = "";
    };
  }, []);

  return (
    <>
      <div className="w-full h-[600px]">
        <img
          src="https://t3.ftcdn.net/jpg/05/62/71/86/360_F_562718625_BM93noP9JDAR8kiBPfRy0h4WTvUwYXNH.jpg"
          alt="gym-banner"
          className="w-full h-full object-cover shadow-lg"
          loading="lazy"
        />
      </div>

      <div className="bg-black min-h-screen w-full">
        {/* TOP BLACK SECTION: ABOUT US */}
        <section className="w-full px-4 py-16 bg-gradient-to-r from-black via-red-700 to-black text-white ">
          <div className="max-w-6xl mx-auto space-y-6">
            <span className="text-gray-300 font-semibold tracking-wide text-xs uppercase">
              RUNNER’S LIFE
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-2 mb-3">
              ABOUT US
            </h2>
            <h3 className="text-lg  mb-5 font-medium">
              get up . it’s time to change your life
            </h3>
            <p className=" text-md font-light">
              Our state-of-the-art gym provides you with a great place to work
              out, whether you are here to burn off some calories or are
              searching for something more specific. Why not take your nearest
              Gym Center and take a look?
            </p>

            <div className="space-y-5 text-lg leading-relaxed">
              <p>
                At THE GYM, our mission is to provide you with the ultimate
                fitness experience, one that focuses on your specific fitness
                needs, helps you achieve the results you are after and
                invigorates your soul. We guarantee the highest quality
                equipment and training programs available, an expert staff,
                special amenities that are often not found in other health
                clubs, attentive service, and truly sophisticated surroundings.
                Our every Fitness training center is committed to being a unique
                Fitness training center in India.
              </p>
              <p>
                We believe in being different. Not merely for the sake of being
                dissimilar, but different by being the best in the fitness
                industry. We set out with one simple and honest goal; to be
                sensitive to our members' needs and fitness requirements. Our
                ideology is to provide our members with the best fitness
                technologies and services that no others can provide. We listen,
                we are sensitive to your needs, and most importantly, we thus
                know what you, as a gym-goer, want.
              </p>
              <p>
                Welcome to THE GYM, the latest and modern fitness clubs in New
                Delhi located at Pitampura, Rajouri Garden, Patel Nagar, Vikas
                Puri, Janak Puri, Model Town, Dayanand Vihar, Punjabi Bagh,
                Malviya Nagar, and Paschim Vihar.
              </p>
              <p>
                THE GYM is a fitness club brand that specializes in the
                prestigious market segment of business professionals and the
                working professionals. With our dedication in bringing you the
                latest fitness technologies, THE GYM is equipped with many
                hi-tech equipment and state-of-the-art fitness gadgets. Our
                professional personal trainers and trained helpers' dedication
                will ensure that you receive the appropriate fitness program,
                customized to your fitness and health needs. We currently have
                the highest trainers to member ratio in our industry. Our
                members enjoy our private yet classy environment, and this will
                ensure that you exercise in utmost privacy and luxury.
              </p>
              <p>
                THE GYM is the brainchild of our founders G. Khatter, who
                believe a healthy lifestyle leads to a better quality of life.
                The main idea is to have our members enjoy their fitness
                trainings in classy and private settings. It is led by a team of
                highly qualified and experienced fitness instructors and health
                professionals who serve with dedication, friendliness, and
                helpfulness.
              </p>
              <p>
                At THE GYM, our primary goal is to create awareness and easy
                access to keep your body, mind, and spirit at peak performance.
                Our vision is to maintain a fitness center catering to members'
                physical wellbeing, improving, building, and maintaining a
                stronger, fitter body complemented by a health food bar to
                nourish your body's daily fiber and vitamin requirements.
              </p>
              <p>
                If you are looking for unwavering personal attention during your
                training regime, then THE GYM is the place you want to be.
              </p>
            </div>
          </div>
        </section>

        {/* IMAGE + TEXT SECTION */}
        <section className="w-full bg-gradient-to-r from-black via-red-700 to-black text-white  py-30">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-40 px-4 items-center">
            {/* Overlapping Images */}
            <div className="relative w-full flex justify-center items-start min-h-[230px]">
              <img
                src="https://t3.ftcdn.net/jpg/01/96/46/98/240_F_196469873_1XBQuqof7ItJgvc4HoeC9tX5P1sGO3qG.jpg"
                alt="Gym Model"
                className="rounded-xl shadow-lg w-[550px] h-auto object-cover object-center"
                loading="lazy"
              />
              <img
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?fit=crop&w=500&q=80"
                alt="Athlete Gym"
                className="rounded-xl shadow-xl w-[300px] h-auto object-cover object-center absolute left-0 top-40"
                loading="lazy"
              />
            </div>

            {/* RIGHT TEXT CONTENT */}
            <div>
              <span className="text-xs tracking-wide font-semibold text-gray-300 uppercase">
                About Our Club
              </span>
              <h3 className="mt-2 text-3xl md:text-4xl font-extrabold  leading-tight mb-3">
                WE RAISE YOUR <br /> CONFIDENCE
              </h3>
              <h4 className="text-lg font-medium mb-3">
                with a gym designed around you
              </h4>
              <p className=" mb-5">
                Our gym offers an empowering environment for each and every
                member. Get the most modern equipment, certified coaches,
                dedicated women's and men's zones, and a motivating atmosphere.
              </p>
              <ul className="list-disc ml-5  space-y-2 mb-6 text-base">
                <li>Latest gym machines and premium workout areas</li>
                <li>Individual & group personal training</li>
                <li>Support from professional male & female trainers</li>
                <li>Clean locker rooms, nutrition bar, healthy snacks</li>
                <li>Wellness workshops, lifestyle tips, and more</li>
              </ul>
              <a
                href="/contact"
                className="inline-block px-8 py-3 bg-black text-white border border-black font-semibold rounded shadow hover:bg-red-600 hover:border-red-600 transition"
              >
                JOIN NOW
              </a>
            </div>
          </div>
        </section>

        {/* STATS & ICONS SECTION */}
        <section className="w-full bg-black text-white py-16 h-[600px]">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h3 className="uppercase text-sm tracking-wide text-red-500 mt-12">
              About Our Club
            </h3>
            <h2 className="text-4xl font-extrabold mb-6">LET’S SEE OUR</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12">
              Our state-of-the-art gym provides you with a great place to work
              out, whether hether <br />
              you are there to burn off some calories or are training for
              something more specific.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10 max-w-5xl mx-auto">
              <div>
                <User className="w-10 h-10 mx-auto text-red-600 mb-2" />
                <h3 className="text-3xl font-bold">1</h3>
                <p className="text-gray-300">Expert Trainers</p>
              </div>
              <div>
                <BarrelIcon className="w-10 h-10 mx-auto text-red-600 mb-2" />
                <h3 className="text-3xl font-bold">43</h3>
                <p className="text-gray-300">Happy Clients</p>
              </div>
              <div>
                <Clock className="w-10 h-10 mx-auto text-red-600 mb-2" />
                <h3 className="text-3xl font-bold">10+</h3>
                <p className="text-gray-300">Years Experience</p>
              </div>
              <div>
                <Dumbbell className="w-10 h-10 mx-auto text-red-600 mb-2" />
                <h3 className="text-3xl font-bold">12+</h3>
                <p className="text-gray-300">Instruments</p>
              </div>
            </div>
          </div>
        </section>

        {/* CONFIDENCE ICONS & IMAGE ROW */}
        <section className="w-full bg-gradient-to-r from-black via-gray-900 to-orange-900 text-white py-16 px-6 relative">
          {/* Overlay for dark effect */}
          <div className="absolute inset-0 bg-black opacity-50"></div>

          <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            {/* Left Content */}
            <div>
              <h3 className="uppercase text-sm tracking-wide text-red-500 mb-2">
                About Our Club
              </h3>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
                WE RAISE YOUR CONFIDENCE
              </h2>
              <p className="text-gray-300 mb-8 leading-relaxed">
                The gym space is made for recording your progress, crushing new
                PRs, and joining one of the most vibrant fitness communities in
                the city.
              </p>

              {/* Icons with Labels */}
              <div className="grid grid-cols-2 gap-6 text-red-500 font-semibold text-lg">
                <div className="flex items-center gap-2">
                  <Dumbbell className="w-6 h-6" /> Cycling
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-6 h-6" /> Athlete
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-6 h-6" /> Dumbbells
                </div>
                <div className="flex items-center gap-2">
                  <HeartPulse className="w-6 h-6" /> Kettlebell
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center">
              <img
                src="https://t3.ftcdn.net/jpg/02/85/71/98/240_F_285719802_MbRuW0HqEhkqi4076HYAv2xZ7CoTIBdV.jpg"
                alt="Gym Confidence"
                className="rounded-lg shadow-2xl object-cover w-full max-w-md h-[450px]"
              />
            </div>
          </div>
        </section>

        {/* SKILLS SECTION: RED CARD + IMAGE */}
        <div className="max-w-7xl mx-auto px-4 md:px-16 grid md:grid-cols-2 gap-0 md:gap-0 items-stretch mt-20">
          {/* Red Overlay Left */}
          <div className="relative bg-red-600 text-white flex flex-col justify-center p-10 shadow-2xl z-10 rounded-l-lg">
            <h4 className="uppercase text-sm tracking-wider font-semibold opacity-80">
              Let's See Now
            </h4>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight mt-2 mb-4">
              Check <br /> Your Skills
            </h2>
            <p className="text-base leading-relaxed opacity-90">
              Explore your limits with cardio, strength, and endurance
              assessments. Push yourself with pro-level challenges—your fitness
              journey starts here!
            </p>
            {/* Progress bars */}
            <div className="mt-8 space-y-7 max-w-md">
              {[
                { label: "Challenging", value: "90%" },
                { label: "Professional", value: "80%" },
                { label: "Perseverance", value: "85%" },
                { label: "Dedication", value: "95%" },
              ].map((skill, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm font-semibold mb-1">
                    <span>{skill.label}</span>
                    <span>{skill.value}</span>
                  </div>
                  <div className="w-full bg-white/30 h-2 rounded-full overflow-hidden">
                    <div
                      className="h-2 bg-white rounded-full transition-all duration-700 ease-in-out"
                      style={{ width: skill.value }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side Image */}
          <div className="rounded-r-lg shadow-2xl overflow-hidden">
            <img
              src="https://t4.ftcdn.net/jpg/02/59/95/61/240_F_259956139_6JOjkN3ktTz3MTQN34HsaKM2FAxo8Pm5.jpg"
              alt="Gym Instrument"
              className="h-full w-full object-cover rounded-r-lg"
            />
          </div>
        </div>

        {/* BUSINESS HOURS SECTION */}
        <div className="mt-16 px-6 md:px-16 lg:px-24  py-16 bg-gradient-to-r from-black via-red-700 to-black text-white  ">
          <div className="grid md:grid-cols-2 gap-10 items-stretch max-w-6xl mx-auto ">
            {/* Left Content */}
            <div className="flex flex-col rounded  bg-gradient-to-r from-black via-red-700 to-black text-white    p-8">
              <h4 className="uppercase text-base text-gray-300 tracking-wider font-semibold mb-3">
                Business Hours
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
                Our Working Hours
              </h2>
              <p className="leading-relaxed text-lg max-w-md">
                Our state-of-the-art gym provides you with a great place to work
                out, whether you are there to burn off some calories or are
                training for something more specific.
              </p>
            </div>

            {/* Right Table Card */}
            <div className="bg-gradient-to-r rounded from-black via-red-700 to-black text-white   flex flex-col justify-center  p-6">
              {[
                { day: "Saturday", time: "10:00 AM – 6:00 PM" },
                { day: "Sunday", time: "10:00 AM – 6:00 PM" },
                { day: "Monday", time: "10:00 AM – 6:00 PM" },
                { day: "Tuesday", time: "10:00 AM – 6:00 PM" },
                { day: "Wednesday", time: "10:00 AM – 6:00 PM" },
                { day: "Thursday", time: "10:00 AM – 6:00 PM" },
                { day: "Friday", time: "Closed" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`flex justify-between py-4 px-5 border-b last:border-0 text-base md:text-lg ${
                    item.time === "Closed"
                      ? "text-red-600 font-semibold bg-red-50"
                      : ""
                  }`}
                >
                  <span className="font-semibold">{item.day}</span>
                  <span>{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* VISUAL WORK / VIDEO SECTION */}
        <section className="w-full bg-black text-white py-16 mt-20 rounded-3xl">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="uppercase text-red-500 text-sm tracking-wider font-semibold">
                About Our Club
              </h4>
              <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-snug">
                Let's See Our <br /> Visual Work
              </h2>
              <p className="mt-4 text-gray-300 leading-relaxed">
                Results you can see! Watch our transformation journeys & workout
                highlights to get inspired for your next big goal.
              </p>
              <button
                onClick={() => navigate("/contact")}
                className="mt-6 cursor-pointer px-6 py-3 bg-red-600 hover:bg-red-700 transition rounded text-white font-semibold shadow-lg"
              >
                Join Now
              </button>
            </div>
            <div className="w-full h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Gym Visual Work"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
