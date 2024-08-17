import React from "react";
import { RiFireFill } from "react-icons/ri";
import { PiCrownSimpleFill } from "react-icons/pi";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";

const data = [
  {
    title: "เก้าอี้สุขภาพ",
    bestsell: [
      {
        img: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/01/bewell-foster-ergonomic-chair-front-view.jpg",
        brand: "Bewell",
        name: "เก้าอี้สุขภาพ Bewell FOSTER Ergonomic Chair [ส่งของภายใน 3-7 วันทำการ]",
      },
      {
        img: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2023/04/Product/furradec-rio-ergonomic-chair-front-left-view.jpg",
        brand: "Furradec",
        name: "เก้าอี้สุขภาพ Furradec Rio Ergonomic Chair Black",
      },
      {
        img: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2022/09/Product/sihoo-comfy-ergonomic-chair-black-basic-m57-001-front-view.jpg",
        brand: "Sihoo",
        name: "เก้าอี้สุขภาพ Sihoo Comfy Ergonomic Chair Basic Black M57-N110",
      },
    ],
  },
  {
    title: "โน๊ตบุ๊คเกมมิ่ง",
    bestsell: [
      {
        img: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2023/06/Product/asus-tuf-a15-fa507nv-lp023w-gaming-notebook-front-view.png",
        brand: "ASUS",
        name: "โน๊ตบุ๊ค Asus TUF A15 FA507NV-LP023W Gaming Notebook Mecha Gray",
      },
      {
        img: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/04/Product/asus-tuf-a15-fa506nf-hn012w-gaming-notebook-front-view.jpg",
        brand: "ASUS",
        name: "โน๊ตบุ๊ค Asus TUF A15 FA506NF-HN012W Gaming Notebook Graphite Black",
      },
      {
        img: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2023/07/Product/hp-victus-15-fa1069tx-gaming-notebook-icon.jpg",
        brand: "HP",
        name: "โน๊ตบุ๊ค HP Victus 15-fa1069TX Gaming Notebook Performance Blue",
      },
    ],
  },
  {
    title: "เมาส์เกมมิ่ง",
    bestsell: [
      {
        img: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2021/01/logitech-g-pro-x-superlight-wireless-gaming-mouse-white-icon.jpg",
        brand: "Logitech",
        name: "เมาส์ Logitech G Pro X Superlight Wireless Gaming Mouse White",
      },
      {
        img: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/02/Product/lamzu-thorn-4k-wireless-gaming-mouse-top-view.jpg",
        brand: "Lamzu",
        name: "เมาส์ Lamzu Thorn 4K Wireless Gaming Mouse Charcoal Black",
      },
      {
        img: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/05/Product/thunderobot-ml903-nearlink-wireless-gaming-mouse-white-top-view.jpg",
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
        {data.map((item, index) => (
          <SwiperSlide
            className="px-3 py-3.5 flex flex-col justify-between"
            key={index}
          >
            <div className="flex gap-1">
              <RiFireFill className="text-2xl text-red-400" />
              <p className="text-white font-bold text-xl">
                Best Seller {item.title}
              </p>
            </div>
            {item.bestsell.map((i, index) => (
              <div
                key={index}
                className="w-full h-[103px] bg-white rounded-xl flex items-center justify-between px-4 cursor-pointer"
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
