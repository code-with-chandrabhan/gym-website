import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { CiCirclePlus } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import About from "../components/about"

import "swiper/css";
import "swiper/css/navigation";

// Images
import Results from "../assets/Results.jpeg";
import Results1 from "../assets/Results1.jpeg";
import Results2 from "../assets/Results2.jpeg";
import Results3 from "../assets/Results3.jpeg";
import Kick from "../assets/Kick Boxing.jpeg";
import aerobics from "../assets/Aerobics.jpeg";
import strength from "../assets/Strength.jpeg";
import yoga from "../assets/Yoga.jpeg";
import crossfit from "../assets/CrossFit.jpeg";
import zumba from "../assets/Zumba.jpeg";
import cardio from "../assets/Cardio.jpeg";
import personal from "../assets/Personal Training.jpeg";

function Gallery() {
  const navigate = useNavigate();

  const programs = [
    { name: "Kick Boxing", img: Kick },
    { name: "Aerobics", img: aerobics },
    { name: "Strength", img: strength },
    { name: "Yoga", img: yoga },
    { name: "CrossFit", img: crossfit },
    { name: "Zumba", img: zumba },
    { name: "Cardio", img: cardio },
    { name: "Personal Training", img: personal },
  ];

  const handleCardClick = (program: { name: string; img: string }) => {
    navigate("/services", { state: { program } });
  };

  const defaultImages = [Results, Results1, Results2, Results3]; // Always visible
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  // Fetch uploaded images from backend on mount
  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get("/api/images");
        const data = res.data as Array<{ url?: string; imageUrl?: string }>;
        const urls = data
          .map((img) => img.url || img.imageUrl)
          .filter((url): url is string => typeof url === "string");
        setUploadedImages(urls);
      } catch (err) {
        console.error("Error fetching images:", err);
      }
    };
    fetchImages();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const formData = new FormData();
    Array.from(files).forEach((file) => formData.append("images", file));

    try {
      const res = await axios.post("/api/images/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      const data = res.data as Array<{ url?: string; imageUrl?: string }>;
      const urls = data
        .map((img) => img.url || img.imageUrl)
        .filter((url): url is string => typeof url === "string");
      setUploadedImages((prev) => [...prev, ...urls]);
    } catch (err) {
      console.error("Error uploading images:", err);
    }
  };

  const handleDeleteImage = async (url: string) => {
    try {
      await axios.delete(`/api/images?url=${encodeURIComponent(url)}`);
      setUploadedImages((prev) => prev.filter((img) => img !== url));
    } catch (err) {
      console.error("Error deleting image:", err);
    }
  };

  return (
    <div>
      {/* ---------------- About Section ---------------- */}
      <div className="bg-gray-100 py-12 text-center px-6 bg-gradient-to-r from-black via-red-700 to-black text-white ">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 leading-tight max-w-4xl mx-auto">
          Welcome to FitLife Gym
        </h2>
        <p className=" max-w-6xl mx-auto leading-relaxed text-justify text-base sm:text-lg px-2 sm:px-0">
          Welcome to <b>FitLife Gym</b> — the ultimate destination where fitness
          meets passion. Our mission is to help you push your limits, gain
          strength, and achieve confidence both inside and outside the gym. Our
          expert trainers guide you with personalized plans, while
          state-of-the-art equipment ensures safety and results. We focus on
          functional fitness, flexibility, strength, and endurance. Programs
          include Kickboxing, Aerobics, Strength, Yoga, CrossFit, Zumba, Cardio,
          and Personal Training. Each program is designed to fit individual
          goals and fitness levels. We believe in holistic wellness, integrating
          diet guidance, mental well-being, and structured training sessions.
          Our supportive community motivates members every step of the way.
          Beginners and advanced athletes alike find suitable classes and
          challenges to continuously improve. Regular progress assessments keep
          you on track. Enjoy group classes, one-on-one sessions, and fun
          workout challenges in a safe and motivating environment.
        </p>
      </div>

      {/* ---------------- Promo Section ---------------- */}
      <div
        className="   relative bg-cover bg-center h-[600px] flex items-center justify-center text-center px-4 sm:px-6"
        style={{
          backgroundImage:
            "url('https://themewagon.github.io/gymlife/img/gallery/gallery-1.jpg')",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight">
            REGISTRATION NOW TO GET MORE DEALS
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-8">
            WHERE HEALTH, BEAUTY AND FITNESS MEET.
          </p>
          <button className="px-8 py-3 border-2 border-orange-500 text-white font-semibold hover:bg-orange-500 transition rounded-md shadow-lg">
            APPOINTMENT
          </button>
        </div>
      </div>

      {/* ---------------- Programs Section ---------------- */}
      <div className="py-12 bg-white text-center px-4 sm:px-6 bg-gradient-to-r from-black via-red-700 to-black  ">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">Our Programs</h2>
        <Swiper
          navigation
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="px-2 sm:px-6"
        >
          {programs.map((p) => (
            <SwiperSlide key={p.name}>
              <div
                className="shadow-lg rounded-lg overflow-hidden hover:scale-105 transition bg-white cursor-pointer select-none"
                onClick={() => handleCardClick(p)}
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
                <h3 className="text-xl font-semibold py-3">{p.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ---------------- Results Section ---------------- */}
      <div className="p-8 text-center  bg-gradient-to-r from-black via-red-700 to-black text-white ">
        <h2 className="text-3xl font-bold mb-6 mt-2 text-gray-900">Results</h2>

        <div className="max-w-5xl mx-auto text-left">
          <div className=" mb-8 text-justify px-2 sm:px-0 leading-relaxed">
            <p>
              Here you can view all gym results and transformations. Upload your
              own images to showcase your progress. Images appear below in a
              grid, and you can delete them anytime. Maintain proper posture,
              technique, and follow guidance from trainers. Consistency and
              motivation are key for results. Celebrate milestones and track
              improvements. Ensure safety while performing exercises. Encourage
              others by sharing progress.
            </p>

            <label className="cursor-pointer inline-flex items-center gap-2 mt-5 bg-red-500 text-white rounded-full px-4 py-2 shadow hover:bg-red-600 transition select-none">
              <CiCirclePlus className="text-2xl" /> Upload
              <input
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8 max-h-[80vh] overflow-y-auto max-w-6xl mx-auto px-2 sm:px-0">
          {[...defaultImages, ...uploadedImages].map((img, index) => (
            <div
              key={index}
              className="relative w-full h-64 bg-gray-200 rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={img}
                alt={`result-${index}`}
                className="w-full h-full object-contain p-2"
                loading="lazy"
              />
              {uploadedImages.includes(img) && (
                <button
                  onClick={() => handleDeleteImage(img)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition shadow-lg focus:outline-none focus:ring-2 focus:ring-red-400"
                  aria-label="Delete"
                >
                  <MdDelete className="text-xl" />
                </button>
              )}
            </div>
          ))}
        </div>
      </div>

      <About />
    </div>
  );
}

export default Gallery;
