import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import Wobkey from "../../assets/only-at-mercular/wobkey.webp";
import Jayine from "../../assets/only-at-mercular/jayine.webp";
import Lention from "../../assets/only-at-mercular/lention.webp";
import Zenget from "../../assets/only-at-mercular/zenget.webp";
import Qwerty from "../../assets/only-at-mercular/qwerty.webp";
import Hifiman from "../../assets/only-at-mercular/hifiman.webp";
import ThunderRobot from "../../assets/only-at-mercular/thunderRobot.webp";
import DryStudio from "../../assets/only-at-mercular/dry-studio.webp";

import "swiper/css";
import "swiper/css/effect-coverflow";

import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";

const image = [
  Wobkey,
  Jayine,
  Lention,
  Zenget,
  Qwerty,
  Hifiman,
  ThunderRobot,
  DryStudio,
];

function OnlyAtMercular() {
  return (
    <div className="max-w-[1300px] mx-auto">
      <p className="text-center font-bold text-2xl mb-2">
        🌟 Only at Mercular 🌟
      </p>
      <div className="relative">
        <Swiper
          effect={"coverflow"}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 110,
            depth: 100,
            modifier: 3,
          }}
          navigation={{
            nextEl: ".swiper-only-button-next",
            prevEl: ".swiper-only-button-prev",
          }}
          modules={[EffectCoverflow, Navigation, Pagination]}
        >
          {image.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item}
                alt="slide_image"
                className="w-[600px] object-cover rounded-lg cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-only-button-prev absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full text-xl text-[#0f63e9] p-2.5 z-10 shadow-md btn-ripple-m">
          <FaAngleLeft className="z-10 relative" />
        </button>
        <button className="swiper-only-button-next absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full text-xl text-[#0f63e9] p-2.5 z-10 shadow-md btn-ripple-m">
          <FaAngleRight className="z-10 relative" />
        </button>
      </div>
    </div>
  );
}

export default OnlyAtMercular;
