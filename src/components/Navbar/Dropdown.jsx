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
        <ul className="font-semibold text-sm *:py-2 *:px-1 *:mb-1 *:gap-3 *:rounded-lg *:flex *:items-center *:cursor-pointer">
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
      <div className="flex flex-col w-[730px] p-3">
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
            className="w-full pt-4"
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
        <div className="bg-[#f4f6f8] mt-4 h-[215px] rounded-lg pt-5 px-4">
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
      </div>
    </div>
  );
}

export default Dropdown;
