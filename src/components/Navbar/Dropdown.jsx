import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Audio from "../../assets/categorys/2001.png";
import Computer from "../../assets/categorys/2157.webp";
import Gaming from "../../assets/categorys/2071.webp";
import Work from "../../assets/categorys/2119.webp";
import Mobile from "../../assets/categorys/2227.webp";
import Gadget from "../../assets/categorys/2208.webp";
import Pro from "../../assets/categorys/2047.png";
import TV from "../../assets/categorys/2278.webp";
import Speaker from "../../assets/categorys/2010.webp";
import Dac from "../../assets/categorys/2032.webp";
import HeadphoneAccessories from "../../assets/categorys/2036.webp";
import SpeakerAccessories from "../../assets/categorys/2041.png";
import Bluetooth from "../../assets/categorys/headphones/2003.png";
import TrueWireless from "../../assets/categorys/headphones/2004.webp";
import Headphone from "../../assets/categorys/headphones/2005.png";
import Sport from "../../assets/categorys/headphones/2008.png";
import InEar from "../../assets/categorys/headphones/1716963039529_2006.webp";
import Earbud from "../../assets/categorys/headphones/2007.webp";
import CallCenter from "../../assets/categorys/headphones/2009.png";
import Marshall from "../../assets/categorys/headphones/brands/Brand Logo-01.webp";
import Klipsch from "../../assets/categorys/headphones/brands/Brand Logo-45.webp";
import Edifier from "../../assets/categorys/headphones/brands/Brand Logo-04.webp";
import BO from "../../assets/categorys/headphones/brands/Brand Logo-47.webp";
import Soundpeats from "../../assets/categorys/headphones/brands/Brand Logo-44.webp";
import JBL from "../../assets/categorys/headphones/brands/Brand Logo_2-08.webp";
import Sony from "../../assets/categorys/headphones/brands/Brand Logo-03.webp";
import Jabra from "../../assets/categorys/headphones/brands/Brand Logo-48.webp";
import Bose from "../../assets/categorys/headphones/brands/Brand Logo-46.webp";
import Dap from "../../assets/categorys/dap&dac/2033.webp";
import DACAmp from "../../assets/categorys/dap&dac/2034.webp";
import RecordPlayer from "../../assets/categorys/dap&dac/2035.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";

const headphones = [
  {
    img: Bluetooth,
    title: "หูฟังไร้สาย & หูฟังบลูทูธ",
  },
  {
    img: TrueWireless,
    title: "หูฟัง True Wireless",
  },
  {
    img: Headphone,
    title: "หูฟังครอบหู & แนบหู",
  },
  {
    img: Sport,
    title: "หูฟังออกกำลังกาย",
  },
  {
    img: InEar,
    title: "หูฟัง In Ear",
  },
  {
    img: Earbud,
    title: "หูฟัง Earbud",
  },
  {
    img: CallCenter,
    title: "หูฟัง Call Center",
  },
];

const DapDac = [
  {
    img: Dap,
    title: "เครื่องเล่นเพลงพกพา (DAP)",
  },
  {
    img: DACAmp,
    title: "DAC-Amplifiers",
  },
  {
    img: RecordPlayer,
    title: "เครื่องเล่นแผ่นเสียง",
  },
];

function Dropdown() {
  const [title, setTitle] = useState("");
  const [cate, setCate] = useState("");
  useEffect(() => {
    setTitle("หูฟัง/ลำโพง");
  }, []);

  useEffect(() => {
    title == "หูฟัง/ลำโพง" && setCate("หูฟัง");
  }, [title]);

  return (
    <div className="absolute flex bg-white shadow-xl visible mt-1 rounded-lg">
      <div className="bg-[#f4f6f8] flex flex-col p-3 w-[230px] rounded-s-lg">
        <p className="font-semibold pb-3">สินค้าทั้งหมด</p>
        <ul className="font-semibold text-sm *:py-2 *:px-2 *:mb-0.5 *:gap-3 *:rounded-lg *:flex *:items-center *:cursor-pointer">
          <li
            className={`${
              title == "หูฟัง/ลำโพง" && "bg-[#cfdef5] font-bold text-[#0f63e9]"
            }`}
            onMouseEnter={() => setTitle("หูฟัง/ลำโพง")}
          >
            <img className="w-8" src={Audio} alt="audio" />
            หูฟัง/ลำโพง
          </li>
          <li
            className={`${
              title == "คอมพิวเตอร์" && "bg-[#cfdef5] font-bold text-[#0f63e9]"
            }`}
            onMouseEnter={() => setTitle("คอมพิวเตอร์")}
          >
            <img className="w-8" src={Computer} alt="Computer" />
            คอมพิวเตอร์
          </li>
          <li
            className={`${
              title == "เกมมิ่ง" && "bg-[#cfdef5] font-bold text-[#0f63e9]"
            }`}
            onMouseEnter={() => setTitle("เกมมิ่ง")}
          >
            <img className="w-8" src={Gaming} alt="Gaming" />
            เกมมิ่ง
          </li>
          <li
            className={`${
              title == "จัดโต๊ะคอม" && "bg-[#cfdef5] font-bold text-[#0f63e9]"
            }`}
            onMouseEnter={() => setTitle("จัดโต๊ะคอม")}
          >
            <img className="w-8" src={Work} alt="Work" />
            จัดโต๊ะคอม
          </li>
          <li
            className={`${
              title == "อุปกรณ์มือถือ" &&
              "bg-[#cfdef5] font-bold text-[#0f63e9]"
            }`}
            onMouseEnter={() => setTitle("อุปกรณ์มือถือ")}
          >
            <img className="w-8" src={Mobile} alt="Mobile" />
            อุปกรณ์มือถือ
          </li>
          <li
            className={`${
              title == "แกตเจ็ต" && "bg-[#cfdef5] font-bold text-[#0f63e9]"
            }`}
            onMouseEnter={() => setTitle("แกตเจ็ต")}
          >
            <img className="w-8" src={Gadget} alt="Gadget" />
            แกตเจ็ต
          </li>
          <li
            className={`${
              title == "เครื่องเสียงมืออาชีพ" &&
              "bg-[#cfdef5] font-bold text-[#0f63e9]"
            }`}
            onMouseEnter={() => setTitle("เครื่องเสียงมืออาชีพ")}
          >
            <img className="w-8" src={Pro} alt="Pro" />
            เครื่องเสียงมืออาชีพ
          </li>
          <li
            className={`${
              title == "ทีวี" && "bg-[#cfdef5] font-bold text-[#0f63e9]"
            }`}
            onMouseEnter={() => setTitle("ทีวี")}
          >
            <img className="w-8" src={TV} alt="TV" />
            ทีวี
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-[730px] p-4">
        <div className="flex justify-between font-semibold">
          <p>{title}</p>
          <div className="flex gap-1.5 items-center text-sm text-[#0f63e9] hover:bg-[#ecf3fd] rounded-lg p-[5px] duration-200 cursor-pointer">
            <p>ดูทั้งหมด</p>
            <div className="bg-[#ecf3fe] rounded-full p-0.5 text-[10px]">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="relative">
          <Swiper
            className="w-full pt-3 pb-4"
            slidesPerView={"auto"}
            spaceBetween={12}
            navigation={{
              nextEl: ".swiper-drop-button-next",
              prevEl: ".swiper-drop-button-prev",
            }}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <div
                className={`overflow-visible relative flex items-center justify-center pl-16 h-14 w-[150px] pr-3 rounded-lg cursor-pointer ${
                  cate == "หูฟัง"
                    ? "bg-[#cfdef5] text-[#0f63e9]"
                    : "bg-[#f4f6f8]"
                }`}
                onMouseEnter={() => setCate("หูฟัง")}
              >
                <img
                  src={Audio}
                  alt="Audio"
                  className="w-16 absolute left-0.5 -top-2"
                />
                <p className="line-clamp-2 text-sm font-semibold text-center">
                  หูฟัง
                </p>
                {cate == "หูฟัง" && (
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-solid border-t-0 border-r-[25px] border-l-[25px] border-b-[20px] border-l-transparent border-r-transparent border-t-transparent border-b-[#f4f6f8]"></span>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`overflow-visible relative flex items-center justify-center pl-16 h-14 w-[150px] pr-3 rounded-lg cursor-pointer ${
                  cate == "ลำโพง"
                    ? "bg-[#cfdef5] text-[#0f63e9]"
                    : "bg-[#f4f6f8]"
                }`}
                onMouseEnter={() => setCate("ลำโพง")}
              >
                <img
                  src={Speaker}
                  alt="Speaker"
                  className="w-16 absolute left-0.5 -top-2"
                />
                <p className="line-clamp-2 text-sm font-semibold text-center">
                  ลำโพง
                </p>
                {cate == "ลำโพง" && (
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-solid border-t-0 border-r-[25px] border-l-[25px] border-b-[20px] border-l-transparent border-r-transparent border-t-transparent border-b-[#f4f6f8]"></span>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`overflow-visible relative flex items-center justify-center pl-16 h-14 w-[150px] pr-3 rounded-lg cursor-pointer ${
                  cate == "เครื่องเล่นเพลง & DAC"
                    ? "bg-[#cfdef5] text-[#0f63e9]"
                    : "bg-[#f4f6f8]"
                }`}
                onMouseEnter={() => setCate("เครื่องเล่นเพลง & DAC")}
              >
                <img
                  src={Dac}
                  alt="Dac"
                  className="w-16 absolute left-0.5 -top-2"
                />
                <p className="line-clamp-2 text-sm font-semibold text-center">
                  เครื่องเล่นเพลง & DAC
                </p>
                {cate == "เครื่องเล่นเพลง & DAC" && (
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-solid border-t-0 border-r-[25px] border-l-[25px] border-b-[20px] border-l-transparent border-r-transparent border-t-transparent border-b-[#f4f6f8]"></span>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`overflow-visible relative flex items-center justify-center pl-16 h-14 w-[150px] pr-3 rounded-lg cursor-pointer ${
                  cate == "อุปกรณ์เสริมหูฟัง"
                    ? "bg-[#cfdef5] text-[#0f63e9]"
                    : "bg-[#f4f6f8]"
                }`}
                onMouseEnter={() => setCate("อุปกรณ์เสริมหูฟัง")}
              >
                <img
                  src={HeadphoneAccessories}
                  alt="HeadphoneAccessories"
                  className="w-16 absolute left-0.5 -top-2"
                />
                <p className="line-clamp-2 text-sm font-semibold text-center">
                  อุปกรณ์เสริมหูฟัง
                </p>
                {cate == "อุปกรณ์เสริมหูฟัง" && (
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-solid border-t-0 border-r-[25px] border-l-[25px] border-b-[20px] border-l-transparent border-r-transparent border-t-transparent border-b-[#f4f6f8]"></span>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`overflow-visible relative flex items-center justify-center pl-16 h-14 w-[150px] pr-3 rounded-lg cursor-pointer ${
                  cate == "อุปกรณ์เสริมลำโพง"
                    ? "bg-[#cfdef5] text-[#0f63e9]"
                    : "bg-[#f4f6f8]"
                }`}
                onMouseEnter={() => setCate("อุปกรณ์เสริมลำโพง")}
              >
                <img
                  src={SpeakerAccessories}
                  alt="SpeakerAccessories"
                  className="w-16 absolute left-0.5 -top-2"
                />
                <p className="line-clamp-2 text-sm font-semibold text-center">
                  อุปกรณ์เสริมลำโพง
                </p>
                {cate == "อุปกรณ์เสริมลำโพง" && (
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-solid border-t-0 border-r-[25px] border-l-[25px] border-b-[20px] border-l-transparent border-r-transparent border-t-transparent border-b-[#f4f6f8]"></span>
                )}
              </div>
            </SwiperSlide>
          </Swiper>
          <button className="swiper-drop-button-prev absolute -left-2 top-1/2 -translate-y-1/4 cursor-pointer bg-white rounded-full text-xs text-[#0f63e9] p-1.5 z-10 shadow-md">
            <FaAngleLeft />
          </button>
          <button className="swiper-drop-button-next absolute -right-2 top-1/2 -translate-y-1/4 cursor-pointer bg-white rounded-full text-xs text-[#0f63e9] p-1.5 z-10 shadow-md">
            <FaAngleRight />
          </button>
        </div>
        <div className="bg-[#f4f6f8] h-[215px] rounded-lg pt-5 px-4">
          <div className="flex justify-between font-semibold">
            <p>{cate}</p>
            <div className="flex gap-1.5 items-center text-sm text-[#0f63e9] hover:bg-[#ecf3fd] rounded-lg p-[5px] duration-200 cursor-pointer">
              <p>ดูทั้งหมด</p>
              <div className="bg-[#ecf3fe] rounded-full p-0.5 text-[10px]">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 h-[164px] overflow-y-auto scrollbar-hide">
            {cate == "หูฟัง" &&
              headphones.map((item, index) => (
                <button
                  key={index}
                  className="rounded-xl w-[100px] h-28 px-2 focus:outline-none flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#d8e6fb] hover:text-[#0f63e9]"
                >
                  <img src={item.img} alt={item.title} className="w-14" />
                  <p className="font-medium text-sm text-center line-clamp-2">
                    {item.title}
                  </p>
                </button>
              ))}
            {cate == "เครื่องเล่นเพลง & DAC" &&
              DapDac.map((item, index) => (
                <button
                  key={index}
                  className="rounded-xl w-[100px] h-28 px-2 focus:outline-none flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#d8e6fb] hover:text-[#0f63e9]"
                >
                  <img src={item.img} alt={item.title} className="w-14" />
                  <p className="font-medium text-sm text-center line-clamp-2">
                    {item.title}
                  </p>
                </button>
              ))}
          </div>
        </div>
        <p className="font-semibold mt-6">แบรนด์แนะนำ</p>
        <div className="relative">
          <Swiper
            className="w-full"
            slidesPerView={"auto"}
            spaceBetween={19}
            navigation={{
              nextEl: ".swiper-brand-button-next",
              prevEl: ".swiper-brand-button-prev",
            }}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <img
                src={Marshall}
                alt="Marshall"
                className="w-[70px] cursor-pointer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Klipsch}
                alt="Klipsch"
                className="w-[70px] cursor-pointer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Edifier}
                alt="Edifier"
                className="w-[70px] cursor-pointer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src={BO} alt="BO" className="w-[70px] cursor-pointer" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Soundpeats}
                alt="Soundpeats"
                className="w-[70px] cursor-pointer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src={JBL} alt="JBL" className="w-[70px] cursor-pointer" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Sony} alt="Sony" className="w-[70px] cursor-pointer" />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Jabra}
                alt="Jabra"
                className="w-[70px] cursor-pointer"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img src={Bose} alt="Bose" className="w-[70px] cursor-pointer" />
            </SwiperSlide>
          </Swiper>
          <button className="swiper-brand-button-prev absolute -left-2 top-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full text-xs text-[#0f63e9] p-1.5 z-10 shadow-md">
            <FaAngleLeft />
          </button>
          <button className="swiper-brand-button-next absolute -right-2 top-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full text-xs text-[#0f63e9] p-1.5 z-10 shadow-md">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
