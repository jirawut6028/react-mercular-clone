import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const data = [
  {
    img: "https://cdn.mercular.com/images/homepage/sections/8/spaces/11/1722487284109_HP-DDay%20(34).jpg",
  },
  {
    img: "https://cdn.mercular.com/images/homepage/sections/8/spaces/11/1722497079651_HP-DDay%20(35).jpg",
  },
  {
    img: "https://cdn.mercular.com/images/homepage/sections/8/spaces/11/1720518626325_HP-Banner.jpg",
  },
  {
    img: "https://cdn.mercular.com/images/homepage/sections/8/spaces/11/1720597141351_Smartwatch_2024_Curation_HP.jpg",
  },
  {
    img: "https://cdn.mercular.com/images/homepage/sections/8/spaces/11/1710849795305_Mercular_Store_Homepage.jpg",
  },
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
