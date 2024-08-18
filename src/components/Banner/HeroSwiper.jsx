import React, { useState } from "react";
import Banner1 from "../../assets/banners/GG_Sale.webp";
import Banner2 from "../../assets/banners/Hot-Deals.jpg";
import Banner3 from "../../assets/banners/HP-Banner.webp";
import Banner4 from "../../assets/banners/HP-DDay.webp";
import Banner5 from "../../assets/banners/JBL.webp";
import Banner6 from "../../assets/banners/Smartwatch.webp";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const data = [
  { img: Banner1 },
  { img: Banner2 },
  { img: Banner3 },
  { img: Banner4 },
  { img: Banner5 },
  { img: Banner6 },
];

function HeroSwiper() {
  const [heroSwiper, setHeroSwiper] = useState(null);
  const [pause, setPause] = useState(false);

  const handleAutoplay = () => {
    if (pause) {
      heroSwiper.autoplay.start();
      setPause(false);
    } else {
      heroSwiper.autoplay.stop();
      setPause(true);
    }
  };
  return (
    <div className="w-[850px] relative">
      <Swiper
        onSwiper={setHeroSwiper}
        className="w-full rounded-xl"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".swiper-pagination",
          type: "fraction",
        }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.img} alt="Banner" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute bottom-4 right-4 z-20 flex gap-2 text-white text-xl">
        <button
          onClick={handleAutoplay}
          className="cursor-pointer bg-black rounded-full p-2.5 bg-opacity-30 hover:bg-opacity-10"
        >
          {pause ? <IoPlayOutline /> : <IoPauseOutline />}
        </button>
        <div className="swiper-pagination text-white bg-black rounded-full py-2 px-4 bg-opacity-30 -tracking-widest text-base noselect no-select"></div>
        <button className="swiper-button-prev cursor-pointer bg-black rounded-full p-2.5 bg-opacity-30">
          <FaAngleLeft />
        </button>
        <button className="swiper-button-next cursor-pointer bg-black rounded-full p-2.5 bg-opacity-30">
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default HeroSwiper;
