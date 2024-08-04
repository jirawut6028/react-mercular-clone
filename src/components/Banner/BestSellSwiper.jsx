import React from "react";
import { RiFireFill } from "react-icons/ri";
import { PiCrownSimpleFill } from "react-icons/pi";
import chiar1 from "../../assets/bestsell/ergonomic-chair1.jpg";
import chiar2 from "../../assets/bestsell/ergonomic-chair2.jpg";
import chiar3 from "../../assets/bestsell/ergonomic-chair3.jpg";
import notebook1 from "../../assets/bestsell/gaming-notebook1.webp";
import notebook2 from "../../assets/bestsell/gaming-notebook2.jpg";
import notebook3 from "../../assets/bestsell/gaming-notebook3.jpg";
import mouse1 from "../../assets/bestsell/gaming-mouse1.jpg";
import mouse2 from "../../assets/bestsell/gaming-mouse2.jpg";
import mouse3 from "../../assets/bestsell/gaming-mouse3.webp";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";

const data = [
  {
    id: 1,
    title: "เก้าอี้สุขภาพ",
    bestsell: [
      {
        id: 1,
        img: chiar1,
        brand: "Bewell",
        name: "เก้าอี้สุขภาพ Bewell FOSTER Ergonomic Chair",
      },
      {
        id: 2,
        img: chiar2,
        brand: "Bewell",
        name: "เก้าอี้สุขภาพ Bewell Glory Ergonomic Chair",
      },
      {
        id: 3,
        img: chiar3,
        brand: "Ergotrend",
        name: "เก้าอี้สุขภาพ Ergotrend Konomous Ergonomic Chair",
      },
    ],
  },
  {
    id: 2,
    title: "โน๊ตบุ๊คเกมมิ่ง",
    bestsell: [
      {
        id: 1,
        img: notebook1,
        brand: "Lenovo",
        name: "โน๊ตบุ๊ค Lenovo IdeaPad Gaming 3 15ARH7-82SB00JETA Gaming Notebook",
      },
      {
        id: 2,
        img: notebook2,
        brand: "MSI",
        name: "โน๊ตบุ๊ค MSI Thin A15 B7VE-045TH Gaming Notebook Cosmos Gray",
      },
      {
        id: 3,
        img: notebook3,
        brand: "Acer",
        name: "โน๊ตบุ๊ค Acer Nitro V 15 ANV15-51-574G Gaming Notebook",
      },
    ],
  },
  {
    id: 3,
    title: "เมาส์เกมมิ่ง",
    bestsell: [
      {
        id: 1,
        img: mouse1,
        brand: "Logitech",
        name: "เมาส์ Logitech G Pro X Superlight Wireless Gaming Mouse White",
      },
      {
        id: 2,
        img: mouse2,
        brand: "Lamzu",
        name: "เมาส์ Lamzu Thorn 4K Wireless Gaming Mouse Charcoal Black",
      },
      {
        id: 3,
        img: mouse3,
        brand: "ThundeRobot",
        name: "เมาส์ ThundeRobot ML903 NearLink Wireless Gaming Mouse White",
      },
    ],
  },
];

function BestSellSwiper() {
  return (
    <div className="w-[414px] relative">
      <Swiper
        className="w-full h-full rounded-xl bg-[#0f63e9]"
        navigation={{
          nextEl: ".swiper-best-button-next",
          prevEl: ".swiper-best-button-prev",
        }}
        modules={[Navigation]}
      >
        {data.map((item) => (
          <SwiperSlide
            className="px-3 py-3.5 flex flex-col justify-between"
            key={item.id}
          >
            <div className="flex gap-1">
              <RiFireFill className="text-2xl text-red-400" />
              <p className="text-white font-bold text-xl">
                Best Seller {item.title}
              </p>
            </div>
            {item.bestsell.map((i, index) => (
              <div
                key={i.id}
                className="w-full h-[103px] bg-white rounded-xl flex items-center justify-between px-4"
              >
                <div className="bg-[#0f63e9] h-[34px] w-[34px] rounded-full text-white flex items-center justify-center text-lg font-bold relative">
                  <PiCrownSimpleFill
                    className={`absolute -top-2.5 ${
                      index == 0 && "text-yellow-500"
                    } ${index == 1 && "text-gray-300"} ${
                      index == 2 && "text-amber-600"
                    }`}
                  />
                  {index + 1}
                </div>
                <img
                  src={i.img}
                  alt={i.name}
                  className="w-[100px] object-cover"
                />
                <div className="w-[200px] line-clamp-3">
                  <p className="text-xs text-[#2d77ec] pb-1">{i.brand}</p>
                  <p>{i.name}</p>
                </div>
              </div>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="swiper-best-button-prev absolute -left-4 top-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full text-xl text-[#0f63e9] p-2.5 z-10 shadow-md">
        <FaAngleLeft />
      </button>
      <button className="swiper-best-button-next absolute -right-4 top-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full text-xl text-[#0f63e9] p-2.5 z-10 shadow-md">
        <FaAngleRight />
      </button>
    </div>
  );
}

export default BestSellSwiper;
