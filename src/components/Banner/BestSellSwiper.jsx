import React from "react";
import { RiFireFill } from "react-icons/ri";
import { PiCrownSimpleFill } from "react-icons/pi";
import BewellFoster from "../../assets/best-seller/bewell-foster.jpg";
import BewellGlory from "../../assets/best-seller/bewell-glory.jpg";
import FurradecRio from "../../assets/best-seller/furradec-rio.webp";
import AsusTufA15 from "../../assets/best-seller/asus-tuf-a15.webp";
import HpVictus15 from "../../assets/best-seller/hp-victus-15.jpg";
import MsiCyborg15 from "../../assets/best-seller/msi-cyborg-15.jpg";
import LogitechGProXSuperlight from "../../assets/best-seller/logitech-g-pro-x-superlight.jpg";
import LamzuThorn from "../../assets/best-seller/lamzu-thorn.jpg";
import ThunderobotMl903 from "../../assets/best-seller/thunderobot-ml903.webp";
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
        img: BewellFoster,
        brand: "Bewell",
        name: "เก้าอี้สุขภาพ Bewell FOSTER Ergonomic Chair [ส่งของภายใน 3-7 วันทำการ]",
      },
      {
        img: BewellGlory,
        brand: "Bewell",
        name: "เก้าอี้สุขภาพ Bewell Glory Ergonomic Chair Black [ส่งของภายใน 3-7 วันทำการ]",
      },
      {
        img: FurradecRio,
        brand: "Furradec",
        name: "เก้าอี้สุขภาพ Furradec Rio Ergonomic Chair Black",
      },
    ],
  },
  {
    title: "โน๊ตบุ๊คเกมมิ่ง",
    bestsell: [
      {
        img: AsusTufA15,
        brand: "ASUS",
        name: "โน๊ตบุ๊ค Asus TUF A15 FA507NV-LP023W Gaming Notebook Mecha Gray",
      },
      {
        img: HpVictus15,
        brand: "HP",
        name: "โน๊ตบุ๊ค HP Victus 15-fb2023AX Gaming Notebook Mica Silver",
      },
      {
        img: MsiCyborg15,
        brand: "MSI",
        name: "โน๊ตบุ๊ค MSI Cyborg 15 A13VEK-875TH Gaming Notebook Translucent Black",
      },
    ],
  },
  {
    title: "เมาส์เกมมิ่ง",
    bestsell: [
      {
        img: LogitechGProXSuperlight,
        brand: "Logitech",
        name: "เมาส์ Logitech G Pro X Superlight Wireless Gaming Mouse White",
      },
      {
        img: LamzuThorn,
        brand: "Lamzu",
        name: "เมาส์ Lamzu Thorn 4K Wireless Gaming Mouse Charcoal Black",
      },
      {
        img: ThunderobotMl903,
        brand: "ThundeRobot",
        name: "เมาส์ ThundeRobot ML903 NearLink Wireless Gaming Mouse White",
      },
    ],
  },
];

function BestSellSwiper() {
  return (
    <div className="w-[414px] max-xl:w-full relative">
      <Swiper
        slidesPerView={"auto"}
        spaceBetween={10}
        navigation={{
          nextEl: ".swiper-best-button-next",
          prevEl: ".swiper-best-button-prev",
        }}
        modules={[Navigation]}
      >
        {data.map((item, index) => (
          <SwiperSlide
            className="px-3 py-3 flex flex-col justify-between rounded-xl h-[400px] max-lg:h-[310px] max-lg:w-[85%] bg-primary"
            key={index}
          >
            <p className="text-xl font-bold text-white max-lg:text-lg">
              🔥Best Seller {item.title}
            </p>
            {item.bestsell.map((i, index) => (
              <div
                key={index}
                className="h-[103px] max-lg:h-[80px] bg-white rounded-xl flex items-center justify-between max-xl:justify-start px-4 cursor-pointer"
              >
                <div className="relative flex items-center justify-center text-lg font-bold px-4 text-white rounded-full bg-primary size-[34px]">
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
                  className="w-[100px] max-lg:w-[80px] object-cover mx-2"
                />
                <div className="w-[200px] max-xl:w-full line-clamp-3">
                  <p className="text-xs text-[#2d77ec] pb-1">{i.brand}</p>
                  <p>{i.name}</p>
                </div>
              </div>
            ))}
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="swiper-best-button-prev -left-4 btn-swiper-left btn-ripple-m max-lg:hidden">
        <FaAngleLeft className="relative z-10" />
      </button>
      <button className="swiper-best-button-next -right-4 btn-swiper-right btn-ripple-m max-lg:hidden">
        <FaAngleRight className="relative z-10" />
      </button>
    </div>
  );
}

export default BestSellSwiper;
