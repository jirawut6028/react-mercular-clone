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
    <div className="w-[1280px] mx-auto mb-20">
      <p className="mb-2 text-2xl font-bold text-center">
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
        <button className="left-0 swiper-only-button-prev btn-swiper-left btn-ripple-m">
          <FaAngleLeft className="relative z-10" />
        </button>
        <button className="right-0 swiper-only-button-next btn-swiper-right btn-ripple-m">
          <FaAngleRight className="relative z-10" />
        </button>
      </div>
    </div>
  );
}

export default OnlyAtMercular;
