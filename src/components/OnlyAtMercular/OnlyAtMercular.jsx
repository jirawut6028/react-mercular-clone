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
import "swiper/css/pagination";

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
    <div className="w-[1280px] max-xl:w-full max-xl:px-4 mx-auto mb-10">
      <p className="mb-2 text-2xl font-bold text-center max-sm:mb-0 max-lg:text-xl max-lg:text-start">
        🌟 Only at Mercular 🌟
      </p>
      <div className="relative">
        <Swiper
          className="pb-10 max-sm:pb-0"
          effect={"coverflow"}
          speed={800}
          centeredSlides={true}
          loop={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 0,
            stretch: 100,
            depth: 150,
            modifier: 3,
            slideShadows: false,
          }}
          navigation={{
            nextEl: ".swiper-only-button-next",
            prevEl: ".swiper-only-button-prev",
          }}
          pagination={{
            clickable: true,
          }}
          modules={[EffectCoverflow, Navigation, Pagination]}
        >
          {image.map((item, index) => (
            <SwiperSlide key={index}>
              <img
                src={item}
                alt="slide_image"
                className="w-[600px]  max-sm:scale-[0.6] max-sm:rounded-2xl object-cover rounded-lg cursor-pointer"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="-left-2 swiper-only-button-prev btn-swiper-left btn-ripple-m max-sm:hidden">
          <FaAngleLeft className="relative z-10" />
        </button>
        <button className="-right-2 swiper-only-button-next btn-swiper-right btn-ripple-m max-sm:hidden">
          <FaAngleRight className="relative z-10" />
        </button>
      </div>
    </div>
  );
}

export default OnlyAtMercular;
