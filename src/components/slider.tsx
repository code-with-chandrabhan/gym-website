
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// Images
import gym from "../assets/gym.jpeg";
import gym1 from "../assets/gym1.jpeg";
import gym2 from "../assets/gym2.jpeg";
import gym3 from "../assets/gym3.jpeg";
import gym4 from "../assets/gym4.jpeg";
import gym5 from "../assets/gym5.jpeg";

function Slider() {
  return (
    <div className="w-full h-screen">
      <Swiper
        navigation={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        slidesPerGroup={1}
        loop={true}
        className="w-full h-full"
      >
        {[gym, gym1, gym2, gym3, gym4, gym5].map((imgSrc, index) => (
          <SwiperSlide key={index}>
            <img
              src={imgSrc}
              alt={`gym-slide-${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
              draggable={false}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom CSS for navigation arrows */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          width: 30px;
          height: 30px;
          top: 50%;
          transform: translateY(-50%);
        }
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 28px;
          font-weight: bold;
        }
        .swiper-container-horizontal > .swiper-pagination-bullets {
          bottom: 15px;
        }
      `}</style>
    </div>
  );
}

export default Slider;
