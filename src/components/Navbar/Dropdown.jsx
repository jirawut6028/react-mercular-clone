import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import Audio from "../../assets/categorys/2001.png";
import Computer from "../../assets/categorys/2157.webp";
import Gaming from "../../assets/categorys/2071.webp";
import Work from "../../assets/categorys/2119.webp";
import Mobile from "../../assets/categorys/2227.webp";
import Gadget from "../../assets/categorys/2208.webp";
import Pro from "../../assets/categorys/2047.png";
import TV from "../../assets/categorys/2278.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";

function Dropdown() {
  return (
    <div className="absolute flex bg-white shadow-xl visible mt-1 rounded-lg">
      <div className="bg-[#f4f6f8] flex flex-col p-3 w-[230px] rounded-s-lg">
        <p className="font-semibold pb-3">สินค้าทั้งหมด</p>
        <ul className="font-semibold text-sm *:py-2 *:px-1 *:mb-1 *:gap-3 *:rounded-lg *:flex *:items-center *:cursor-pointer hover:*:bg-[#cfdef5] hover:*:font-bold hover:*:text-[#0f63e9]">
          <li>
            <img className="w-8" src={Audio} alt="audio" />
            หูฟัง/ลำโพง
          </li>
          <li>
            <img className="w-8" src={Computer} alt="Computer" />
            คอมพิวเตอร์
          </li>
          <li>
            <img className="w-8" src={Gaming} alt="Gaming" />
            เกมมิ่ง
          </li>
          <li>
            <img className="w-8" src={Work} alt="Work" />
            จัดโต๊ะคอม
          </li>
          <li>
            <img className="w-8" src={Mobile} alt="Mobile" />
            อุปกรณ์มือถือ
          </li>
          <li>
            <img className="w-8" src={Gadget} alt="Gadget" />
            แกตเจ็ต
          </li>
          <li>
            <img className="w-8" src={Pro} alt="Pro" />
            เครื่องเสียงมืออาชีพ
          </li>
          <li>
            <img className="w-8" src={TV} alt="TV" />
            ทีวี
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-[730px] p-3">
        <div className="flex justify-between font-semibold">
          <p>หูฟัง/ลำโพง</p>
          <div className="flex gap-1.5 items-center text-sm text-[#0f63e9]">
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
              <button className="overflow-visible relative flex bg-[#f4f6f8] py-4 pl-24 pr-6 rounded-lg">
                <img
                  src={Audio}
                  alt="Audio"
                  className="w-16 absolute left-0.5 -top-2"
                />
                หูฟัง
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="overflow-visible relative flex bg-[#f4f6f8] py-4 pl-24 pr-6  rounded-lg">
                <img
                  src={Audio}
                  alt="Audio"
                  className="w-16 absolute left-0.5 -top-2"
                />
                หูฟัง
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="overflow-visible relative flex bg-[#f4f6f8] py-4 pl-24 pr-6  rounded-lg">
                <img
                  src={Audio}
                  alt="Audio"
                  className="w-16 absolute left-0.5 -top-2"
                />
                หูฟัง
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="overflow-visible relative flex bg-[#f4f6f8] py-4 pl-24 pr-6 rounded-lg">
                <img
                  src={Audio}
                  alt="Audio"
                  className="w-16 absolute left-0.5 -top-2"
                />
                หูฟัง
              </button>
            </SwiperSlide>
            <SwiperSlide>
              <button className="overflow-visible relative flex bg-[#f4f6f8] py-4 pl-24 pr-6  rounded-lg">
                <img
                  src={Audio}
                  alt="Audio"
                  className="w-16 absolute left-0.5 -top-2"
                />
                หูฟัง
              </button>
            </SwiperSlide>
          </Swiper>
          <button className="swiper-drop-button-prev absolute -left-2 top-1/2 -translate-y-1/4 cursor-pointer bg-white rounded-full text-xs text-[#0f63e9] p-1.5 z-10 shadow-md">
            <FaAngleLeft />
          </button>
          <button className="swiper-drop-button-next absolute -right-2 top-1/2 -translate-y-1/4 cursor-pointer bg-white rounded-full text-xs text-[#0f63e9] p-1.5 z-10 shadow-md">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
