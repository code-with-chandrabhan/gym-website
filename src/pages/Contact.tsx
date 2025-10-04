import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FaStar, FaRegStar, FaUser } from "react-icons/fa";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import "swiper/css";
import "swiper/css/navigation";


function getBreakdown(testimonials: Array<{ rating: number }>) {
  const breakdown = [0, 0, 0, 0, 0];
  testimonials.forEach((t) => {
    if (t.rating >= 1 && t.rating <= 5) breakdown[5 - t.rating]++;
  });
  return breakdown;
}

function averageRating(testimonials: Array<{ rating: number }>) {
  if (!testimonials.length) return 0;
  const total = testimonials.reduce((sum, t) => sum + (t.rating || 0), 0);
  return (total / testimonials.length).toFixed(1);
}

const JoinUs: React.FC = () => {
  type Testimonial = {
    _id?: string;
    name: string;
    comment: string;
    rating: number;
    likes?: number;
    profilePic?: string;
    responses?: string[];
  };

  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [newReview, setNewReview] = useState({
    name: "",
    comment: "",
    rating: 5,
  });
  const [reviewLoading, setReviewLoading] = useState(false);
  const [error, setError] = useState("");
  const [hoverRating, setHoverRating] = useState(0);

  // Fetch testimonials
  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const res = await axios.get("/api/testimonials");
        setTestimonials(Array.isArray(res.data) ? res.data : []);
      } catch (err) {
        setError("Failed to load testimonials");
      }
    };
    fetchTestimonials();
  }, []);

  // Handle like button
  const handleLike = async (id: string | undefined) => {
    try {
      const res = await axios.post(`/api/testimonials/${id}/like`);
      const data = res.data as { likes: number };
      setTestimonials((prev) =>
        prev.map((t) => (t._id === id ? { ...t, likes: data.likes } : t))
      );
    } catch {}
  };

  // Review input
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setNewReview({ ...newReview, [e.target.name]: e.target.value });
  };

  // Submit review
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReviewLoading(true);
    setError("");
    try {
      const res = await axios.post("/api/testimonials", newReview);
      setTestimonials((prev) => [res.data as Testimonial, ...prev]);
      setNewReview({ name: "", comment: "", rating: 5 });
    } catch {
      setError("Failed to submit review");
    } finally {
      setReviewLoading(false);
    }
  };

  // Rating breakdown
  const aggRating = Number(averageRating(testimonials));
  const reviewCount = testimonials.length;
  const breakdown = getBreakdown(
    testimonials.length
      ? testimonials
      : [
          { rating: 5 },
          { rating: 5 },
          { rating: 4 },
          { rating: 4 },
          { rating: 3 },
        ]
  );

  const [form, setForm] = useState({ name: "", email: "", contact: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("/api/join", form);
      const data = res.data as { message?: string };
      setMessage(data.message || "Thank you! We'll contact you soon.");
      setForm({ name: "", email: "", contact: "" });
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="w-full h-[600px]">
        <img
          src="https://t3.ftcdn.net/jpg/05/62/71/86/360_F_562718625_BM93noP9JDAR8kiBPfRy0h4WTvUwYXNH.jpg"
          alt="gym-banner"
          className="w-full h-full object-cover  shadow-lg"
          loading="lazy"
        />
      </div>
      <div className="bg-gradient-to-r from-black via-red-700 to-black text-white  py-12 px-4 sm:px-6 max-w-8xl mx-auto  shadow-lg  ">
        <section className="flex flex-col md:flex-row gap-12 justify-center items-center min-h-[80vh]">
          {/* LEFT - Content */}
          <div className="flex-1 max-w-xl text-left">
            <h2 className="text-4xl font-extrabold mb-6 leading-tight text-gray-900">
              TAKE YOUR FIRST STEP.
              <br />
              WE WILL DO THE REST.
            </h2>
            <p className=" mb-8 text-lg">
              Join today and be part of our Fitness Family. We believe taking
              care of yourself is part of taking care of your family.
            </p>
            <div className="flex flex-col gap-4 text-lg font-medium ">
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-red-600" />
                <span>+916232469432</span>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-600" />
                <span>
                  #16, 2nd floor, 9th Main, 17th Cross Road,
                  <br />
                  7th Sector, HSR Layout, Bengaluru, Karnataka 560102
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaClock className="text-red-600" />
                <span>06:00 AM – 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* RIGHT - Form */}
          <div className="flex-1 max-w-md bg-gradient-to-r from-black via-red-700 to-black text-white  rounded-xl p-10 w-full shadow-xl">
            <h3 className="text-2xl font-bold text-white text-center mb-7">
              Contact Us
            </h3>
            <form className="space-y-6" onSubmit={handleContactSubmit}>
              <div>
                <label className="block text-white mb-2 font-semibold">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-white focus:outline-none text-gray-800"
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-semibold">
                  Contact Number
                </label>
                <input
                  name="contact"
                  type="text"
                  placeholder="Contact Number"
                  value={form.contact}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-white focus:outline-none text-gray-800"
                />
              </div>
              <div>
                <label className="block text-white mb-2 font-semibold">
                  Email Address
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="Email Address"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded bg-white focus:outline-none text-gray-800"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className={`w-full mt-2 cursor-pointer bg-red-600 hover:bg-red-700 text-white py-3 rounded font-bold text-lg tracking-wider transition flex justify-center items-center gap-2 ${
                  loading ? "opacity-60 cursor-not-allowed" : ""
                }`}
              >
                SUBMIT
              </button>
              {message && (
                <p className="text-green-700 font-semibold mt-4 text-center">
                  {message}
                </p>
              )}
            </form>
          </div>
        </section>

        <section>
          <div className="grid md:grid-cols-2 gap-12 items-start ">
            {/* LEFT: Aggregate rating & breakdown */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center md:items-start bg-gradient-to-r from-black via-red-700 to-black text-white ">
              <div className="flex items-end gap-3">
                <span className="text-5xl font-bold ">
                  {aggRating || "4.6"}
                </span>
                <span className="ml-2 text-lg font-semibold ">
                  / 5
                </span>
              </div>
              <div className="font-medium text-lg text-green-700 mt-1 mb-1">
                {aggRating >= 4.5
                  ? "Excellent"
                  : aggRating >= 4
                  ? "Very Good"
                  : "Good"}
              </div>
              {/* Stars */}
              <div className="flex items-center mb-2">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar
                    key={i}
                    size={28}
                    className={`${
                      i < Math.round(aggRating)
                        ? "text-green-500"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <div className="text-base mb-4">
                {reviewCount} reviews
              </div>
              {/* Breakdown */}
              <div className="w-full space-y-1">
                {[5, 4, 3, 2, 1].map((star, idx) => (
                  <div key={star} className="flex items-center gap-3">
                    <div className="w-10 text-xs ">
                      {star}-star
                    </div>
                    <div className="flex-1 bg-gray-200 rounded h-2 overflow-hidden">
                      <div
                        className={`h-2 rounded ${
                          star === 5
                            ? "bg-green-500"
                            : star === 4
                            ? "bg-lime-400"
                            : star === 3
                            ? "bg-yellow-400"
                            : star === 2
                            ? "bg-amber-400"
                            : "bg-red-500"
                        }`}
                        style={{
                          width: `${
                            reviewCount
                              ? (
                                  (breakdown[5 - star] / reviewCount) *
                                  100
                                ).toFixed(1)
                              : [0.66, 0.15, 0.07, 0.07, 0.05][idx] * 100
                          }%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: Review form */}
            <form
              onSubmit={handleSubmit}
              className="bg-gradient-to-r from-black via-red-700 to-black text-white  rounded-2xl shadow-md p-8"
            >
              <h3 className="text-2xl font-bold mb-6 ">
                Leave Your Review
              </h3>
              {error && (
                <p
                  className="mb-4 text-red-500 font-medium"
                  role="alert"
                  aria-live="assertive"
                >
                  {error}
                </p>
              )}
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={newReview.name}
                onChange={handleInputChange}
                required
                className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
                disabled={reviewLoading}
              />
              <textarea
                name="comment"
                placeholder="Your Review"
                value={newReview.comment}
                onChange={handleInputChange}
                required
                rows={4}
                className="w-full mb-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-400 resize-none"
                disabled={reviewLoading}
              />

              {/* Interactive Star Rating */}
              <div className="mb-6">
                <label className="block mb-2 font-medium text-gray-700">
                  Rating:
                </label>
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      onMouseEnter={() => setHoverRating(index + 1)}
                      onMouseLeave={() => setHoverRating(0)}
                      onClick={() =>
                        setNewReview({ ...newReview, rating: index + 1 })
                      }
                      className="p-1"
                    >
                      {(hoverRating || newReview.rating) > index ? (
                        <FaStar size={24} className="text-yellow-500" />
                      ) : (
                        <FaRegStar size={24} className="text-gray-400" />
                      )}
                    </button>
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-600">
                    ({hoverRating || newReview.rating}/5)
                  </span>
                </div>
              </div>

              <button
                type="submit"
                disabled={reviewLoading}
                className="px-6 py-3 w-full cursor-pointer bg-red-600 text-white rounded-md hover:bg-red-700 transition disabled:opacity-60 disabled:cursor-not-allowed font-semibold"
              >
                {reviewLoading ? "Submitting..." : "Submit Review"}
              </button>
            </form>
          </div>

          {/* REVIEWS SLIDER */}
          <div className="mt-16 ">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              spaceBetween={30}
              slidesPerView={1}
              loop={true}
              className="max-w-4xl mx-auto "
            >
              {testimonials.map((t) => (
                <SwiperSlide key={t._id}>
                  <div className="bg-gradient-to-r from-black via-red-700 to-black text-white  p-8 rounded-lg shadow-md text-left relative">
                    <div className="flex items-start gap-4 mb-4">
                      {/* Profile Avatar */}
                      <div className="w-12 h-12 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-md">
                        {t.profilePic ? (
                          <img
                            src={t.profilePic}
                            alt={t.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                        ) : (
                          <FaUser size={16} />
                        )}
                      </div>

                      <div className="flex-1">
                        <h4 className="font-bold text-lg mb-1">
                          {t.name}
                        </h4>
                        <div className="flex items-center gap-1 mb-2">
                          {Array.from({ length: 5 }).map((_, i) => (
                            <FaStar
                              key={i}
                              size={16}
                              className={`${
                                i < t.rating
                                  ? "text-yellow-500"
                                  : "text-white"
                              }`}
                            />
                          ))}
                          <span className="text-sm  ml-1">
                            ({t.rating}/5)
                          </span>
                        </div>
                        <p className="font-medium leading-relaxed">
                          {t.comment}
                        </p>
                      </div>

                      {/* Like Button */}
                      <button
                        type="button"
                        onClick={() => handleLike(t._id)}
                        className="flex items-center gap-1 text-red-600 hover:text-red-700 transition p-2"
                        aria-label="Like this review"
                      >
                        {(t.likes ?? 0) > 0 ? (
                          <AiFillHeart size={20} />
                        ) : (
                          <AiOutlineHeart size={20} />
                        )}
                        <span className="text-sm font-medium">
                          {t.likes ?? 0}
                        </span>
                      </button>
                    </div>

                    {t.responses && t.responses.length > 0 && (
                      <div className="mt-5 pl-16">
                        <h5 className="font-semibold mb-2 text-gray-800">
                          Replies:
                        </h5>
                        <ul className="space-y-2 text-gray-600 text-sm max-h-32 overflow-y-auto">
                          {t.responses.map((res, idx) => (
                            <li
                              key={idx}
                              className="border-l-2 border-red-600 pl-3 py-1"
                            >
                              {res}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      </div>
    </>
  );
};

export default JoinUs;
