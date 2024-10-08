import { useState } from "react";
import Banner1 from "../../assets/banners/GG_Sale.webp";
import Banner2 from "../../assets/banners/Hot-Deals.jpg";
import Banner3 from "../../assets/banners/HP-Banner.webp";
import Banner4 from "../../assets/banners/HP-DDay.webp";
import Banner5 from "../../assets/banners/JBL.webp";
import Banner6 from "../../assets/banners/Smartwatch.webp";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { IoPlayOutline, IoPauseOutline } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const bannerIMG = [
  { img: Banner1 },
  { img: Banner2 },
  { img: Banner3 },
  { img: Banner4 },
  { img: Banner5 },
  { img: Banner6 },
];

function BannerSwiper() {
  const [bannerSwiper, setBannerSwiper] = useState(null);
  const [pause, setPause] = useState(false);

  const handleAutoplay = () => {
    if (pause) {
      bannerSwiper.autoplay.start();
      setPause(false);
    } else {
      bannerSwiper.autoplay.stop();
      setPause(true);
    }
  };
  return (
    <div className="w-[850px] max-xl:w-full xl:h-[400px] relative">
      <Swiper
        onSwiper={setBannerSwiper}
        className="w-full rounded-xl"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".swiper-banner-pagination",
          type: "fraction",
        }}
        navigation={{
          nextEl: ".swiper-banner-button-next",
          prevEl: ".swiper-banner-button-prev",
        }}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {bannerIMG.map((item, index) => (
          <SwiperSlide key={index}>
            <img
              src={item.img}
              alt="Banner"
              className="w-full cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute z-20 flex gap-2 text-xl text-white max-sm:gap-3 max-sm:scale-50 max-sm:bottom-0 max-sm:-right-12 bottom-4 right-4">
        <button
          onClick={handleAutoplay}
          className="cursor-pointer bg-black rounded-full p-2.5 bg-opacity-30 hover:bg-opacity-10"
        >
          {pause ? <IoPlayOutline /> : <IoPauseOutline />}
        </button>
        <div className="px-4 py-2 text-base text-white bg-black rounded-full select-none max-sm:px-7 swiper-banner-pagination bg-opacity-30 -tracking-widest"></div>
        <button className="swiper-banner-button-prev cursor-pointer bg-black rounded-full p-2.5 bg-opacity-30">
          <FaAngleLeft />
        </button>
        <button className="swiper-banner-button-next cursor-pointer bg-black rounded-full p-2.5 bg-opacity-30">
          <FaAngleRight />
        </button>
      </div>
    </div>
  );
}

export default BannerSwiper;
