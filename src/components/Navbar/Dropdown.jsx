import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";

const headphone = [
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2003.png",
    title: "หูฟังไร้สาย & หูฟังบลูทูธ",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2004.png",
    title: "หูฟัง True Wireless",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2005.png",
    title: "หูฟังครอบหู & แนบหู",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2008.png",
    title: "หูฟังออกกำลังกาย",
  },
  {
    img: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/categories/2006/1716963039529_2006.png",
    title: "หูฟัง In Ear",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2007.png",
    title: "หูฟัง Earbud",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2009.png",
    title: "หูฟัง Call Center",
  },
];

const speaker = [
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2011.png",
    title: "ลำโพงพกพา",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2012.png",
    title: "ลำโพง Bluetooth",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2013.png",
    title: "ลำโพงคอมพิวเตอร์",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2014.png",
    title: "ลำโพงซาวด์บาร์ (Soundbar)",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2015.png",
    title: "ลำโพงเคลื่อนที่",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2016.png",
    title: "ลำโพงห้องประชุม (Conference speaker)",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2017.png",
    title: "ลำโพง Multi-room",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2018.png",
    title: "เครื่องเสียงบ้าน",
  },
];

const dapDacAmp = [
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2033.png",
    title: "เครื่องเล่นเพลงพกพา (DAP)",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2034.png",
    title: "DAC-Amplifiers",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2035.png",
    title: "เครื่องเล่นแผ่นเสียง",
  },
];

const headphoneAccessory = [
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2037.png",
    title: "ฟองน้ำหูฟัง / จุกหูฟัง",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2038.png",
    title: "สายหูฟัง",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2039.png",
    title: "เคสหูฟัง",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2035.png",
    title: "ที่แขวนหูฟัง",
  },
];

const speakerAccessory = [
  {
    img: "https://www.mercular.com/category/2042",
    title: "สายสัญญาณ",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2043.png",
    title: "เครื่องกรองไฟ",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2044.png",
    title: "ขาตั้งลำโพง",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2045.png",
    title: "ตัวเชื่อมสัญญาณบลูทูธ (Bluetooth Connector)",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2046.png",
    title: "เคสและอุปกรณ์เสริมอื่นๆ",
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
    <div className="invisible absolute group-hover:visible pt-1">
      <div className="flex bg-white shadow-xl rounded-lg">
        <div className="bg-[#f4f6f8] flex flex-col p-3 w-[230px] rounded-s-lg">
          <p className="font-semibold pb-3">สินค้าทั้งหมด</p>
          <ul className="font-semibold text-sm *:py-2 *:px-2 *:mb-0.5 *:gap-3 *:rounded-lg *:flex *:items-center *:cursor-pointer">
            <li
              className={`${
                title == "หูฟัง/ลำโพง" &&
                "bg-[#cfdef5] font-bold text-[#0f63e9]"
              }`}
              onMouseEnter={() => setTitle("หูฟัง/ลำโพง")}
            >
              <img
                className="w-8"
                src="https://cdn.mercular.com/images/bulk-2024-04/categories/2002.png"
                alt="audio"
              />
              หูฟัง/ลำโพง
            </li>
            <li
              className={`${
                title == "คอมพิวเตอร์" &&
                "bg-[#cfdef5] font-bold text-[#0f63e9]"
              }`}
              onMouseEnter={() => setTitle("คอมพิวเตอร์")}
            >
              <img
                className="w-8"
                src="https://cdn.mercular.com/images/bulk-2024-04/categories/2157.png"
                alt="Computer"
              />
              คอมพิวเตอร์
            </li>
            <li
              className={`${
                title == "เกมมิ่ง" && "bg-[#cfdef5] font-bold text-[#0f63e9]"
              }`}
              onMouseEnter={() => setTitle("เกมมิ่ง")}
            >
              <img
                className="w-8"
                src="https://cdn.mercular.com/images/bulk-2024-04/categories/2071.png"
                alt="Gaming"
              />
              เกมมิ่ง
            </li>
            <li
              className={`${
                title == "จัดโต๊ะคอม" && "bg-[#cfdef5] font-bold text-[#0f63e9]"
              }`}
              onMouseEnter={() => setTitle("จัดโต๊ะคอม")}
            >
              <img
                className="w-8"
                src="https://cdn.mercular.com/images/bulk-2024-04/categories/2119.png"
                alt="WorkStation"
              />
              จัดโต๊ะคอม
            </li>
            <li
              className={`${
                title == "อุปกรณ์มือถือ" &&
                "bg-[#cfdef5] font-bold text-[#0f63e9]"
              }`}
              onMouseEnter={() => setTitle("อุปกรณ์มือถือ")}
            >
              <img
                className="w-8"
                src="https://cdn.mercular.com/images/bulk-2024-04/categories/2227.png"
                alt="MobileAccessory"
              />
              อุปกรณ์มือถือ
            </li>
            <li
              className={`${
                title == "แกตเจ็ต" && "bg-[#cfdef5] font-bold text-[#0f63e9]"
              }`}
              onMouseEnter={() => setTitle("แกตเจ็ต")}
            >
              <img
                className="w-8"
                src="https://cdn.mercular.com/images/bulk-2024-04/categories/2208.png"
                alt="SmartGadget"
              />
              แกตเจ็ต
            </li>
            <li
              className={`${
                title == "เครื่องเสียงมืออาชีพ" &&
                "bg-[#cfdef5] font-bold text-[#0f63e9]"
              }`}
              onMouseEnter={() => setTitle("เครื่องเสียงมืออาชีพ")}
            >
              <img
                className="w-8"
                src="https://cdn.mercular.com/images/bulk-2024-04/categories/2047.png"
                alt="ProfessionalAudio"
              />
              เครื่องเสียงมืออาชีพ
            </li>
            <li
              className={`${
                title == "ทีวี" && "bg-[#cfdef5] font-bold text-[#0f63e9]"
              }`}
              onMouseEnter={() => setTitle("ทีวี")}
            >
              <img
                className="w-8"
                src="https://cdn.mercular.com/images/bulk-2024-04/categories/2278.png"
                alt="TV"
              />
              ทีวี
            </li>
          </ul>
        </div>
        <div className="flex flex-col w-[730px] p-4">
          <div className="flex justify-between font-semibold">
            <p>{title}</p>
            <div className="flex gap-1.5 items-center text-sm text-[#0f63e9] hover:bg-[#ecf3fd] rounded-lg p-[5px] cursor-pointer">
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
                    src="https://cdn.mercular.com/images/bulk-2024-04/categories/2002.png"
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
                    src="https://cdn.mercular.com/images/bulk-2024-04/categories/2010.png"
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
                    src="https://cdn.mercular.com/images/bulk-2024-04/categories/2032.png"
                    alt="DapDacAmp"
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
                    src="https://cdn.mercular.com/images/bulk-2024-04/categories/2041.png"
                    alt="HeadphoneAccessory"
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
                    src="https://cdn.mercular.com/images/bulk-2024-04/categories/2041.png"
                    alt="SpeakerAccessory"
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
              <div className="flex gap-1.5 items-center text-sm text-[#0f63e9] hover:bg-[#ecf3fd] rounded-lg p-[5px] cursor-pointer">
                <p>ดูทั้งหมด</p>
                <div className="bg-[#ecf3fe] rounded-full p-0.5 text-[10px]">
                  <FaArrowRight />
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 h-[164px] overflow-y-auto scrollbar-hide">
              {cate == "หูฟัง" &&
                headphone.map((item, index) => (
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
              {cate == "ลำโพง" &&
                speaker.map((item, index) => (
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
                dapDacAmp.map((item, index) => (
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
              {cate == "อุปกรณ์เสริมหูฟัง" &&
                headphoneAccessory.map((item, index) => (
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
              {cate == "อุปกรณ์เสริมลำโพง" &&
                speakerAccessory.map((item, index) => (
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
              className="w-full p-[1px]"
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
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/1093/1714738134350_Brand%20Logo-01.jpg"
                  alt="Marshall"
                  className="w-[70px] cursor-pointer rounded-lg hover:drop-shadow-sm"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/1413/1718168461261_Brand%20Logo-45.jpg"
                  alt="Klipsch"
                  className="w-[70px] cursor-pointer rounded-lg hover:drop-shadow-sm"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/1197/1715146261134_Brand%20Logo-04.jpg"
                  alt="Edifier"
                  className="w-[70px] cursor-pointer rounded-lg hover:drop-shadow-sm"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/1248/1714738589557_Brand%20Logo-47.jpg"
                  alt="BO"
                  className="w-[70px] cursor-pointer rounded-lg hover:drop-shadow-sm"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/1740/1714738447069_Brand%20Logo-44.jpg"
                  alt="Soundpeats"
                  className="w-[70px] cursor-pointer rounded-lg hover:drop-shadow-sm"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/1095/1715146065660_Brand%20Logo_2-08.jpg"
                  alt="JBL"
                  className="w-[70px] cursor-pointer rounded-lg hover:drop-shadow-sm"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/1137/1715145441563_Brand%20Logo-03.jpg"
                  alt="Sony"
                  className="w-[70px] cursor-pointer rounded-lg hover:drop-shadow-sm"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/1254/1715146571262_Brand%20Logo-48.jpg"
                  alt="Jabra"
                  className="w-[70px] cursor-pointer rounded-lg hover:drop-shadow-sm"
                />
              </SwiperSlide>
              <SwiperSlide>
                <img
                  src="https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/1053/1714738539373_Brand%20Logo-46.jpg"
                  alt="Bose"
                  className="w-[70px] cursor-pointer rounded-lg hover:drop-shadow-sm"
                />
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
    </div>
  );
}

export default Dropdown;
