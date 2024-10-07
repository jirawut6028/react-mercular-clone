import { useState } from "react";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { categoryNav } from "../../utils/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

function Dropdown() {
  const [indexTitle, setIndexTitle] = useState(0);
  const [indexCate, setIndexCate] = useState(0);

  return (
    <div
      className="absolute invisible pt-1 max-xl:left-3 group-hover:visible"
      onMouseLeave={() => {
        setIndexTitle(0);
        setIndexCate(0);
      }}
    >
      <div className="flex bg-white rounded-lg shadow-[0_4px_8px_0_rgba(145,158,171,0.16)] h-[480px]">
        <div className="bg-[#f4f6f8] flex flex-col p-3 w-[230px] rounded-s-lg">
          <p className="pb-3 font-semibold">สินค้าทั้งหมด</p>
          <ul className="text-sm font-semibold">
            {categoryNav.map((item, index) => (
              <li
                key={index}
                className={`py-2 px-2 mb-0.5 gap-3 rounded-lg flex items-center cursor-pointer ${
                  indexTitle == index && "bg-[#cfdef5] font-bold text-primary"
                }`}
                onMouseEnter={() => {
                  setIndexTitle(index);
                  setIndexCate(0);
                }}
              >
                <img className="w-8" src={item.img} alt={item.title} />
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col w-[730px] p-4">
          <div className="flex justify-between font-semibold">
            <p>{categoryNav[indexTitle].title}</p>
            <button className="flex gap-1.5 items-center text-sm text-primary hover:bg-[#ecf3fd] rounded-lg p-[5px] cursor-pointer">
              <p>ดูทั้งหมด</p>
              <div className="bg-[#ecf3fe] rounded-full p-0.5 text-[10px]">
                <FaArrowRight />
              </div>
            </button>
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
              {categoryNav[indexTitle].cate.map((item, index) => (
                <SwiperSlide key={index}>
                  <div
                    className={`overflow-visible relative flex items-center justify-center pl-[66px] h-14 w-[150px] pr-3 rounded-lg cursor-pointer ${
                      indexCate == index
                        ? "bg-[#cfdef5] text-primary"
                        : "bg-[#f4f6f8]"
                    }`}
                    onMouseEnter={() => setIndexCate(index)}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-16 absolute left-0.5 -top-2"
                    />
                    <p className="text-sm font-semibold text-center line-clamp-2">
                      {item.title}
                    </p>
                    {indexCate == index && (
                      <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-solid border-t-0 border-r-[25px] border-l-[25px] border-b-[20px] border-l-transparent border-r-transparent border-t-transparent border-b-[#f4f6f8]"></span>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button className="swiper-drop-button-prev absolute -left-2 top-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full text-xs text-primary p-1.5 z-10 shadow-md btn-ripple-m">
              <FaAngleLeft className="relative z-10" />
            </button>
            <button className="swiper-drop-button-next absolute -right-2 top-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full text-xs text-primary p-1.5 z-10 shadow-md btn-ripple-m">
              <FaAngleRight className="relative z-10" />
            </button>
          </div>
          <div className="bg-[#f4f6f8] h-[215px] rounded-lg pt-5 px-4">
            <div className="flex justify-between font-semibold">
              <p>{categoryNav[indexTitle].cate[indexCate].title}</p>
              <button className="flex gap-1.5 items-center text-sm text-primary hover:bg-[#ecf3fd] rounded-lg p-[5px] cursor-pointer">
                <p>ดูทั้งหมด</p>
                <div className="bg-[#ecf3fe] rounded-full p-0.5 text-[10px]">
                  <FaArrowRight />
                </div>
              </button>
            </div>
            <div className="flex flex-wrap gap-3 h-[164px] overflow-y-auto scrollbar-hide">
              {categoryNav[indexTitle].cate[indexCate].cate?.map(
                (item, index) => (
                  <button
                    key={index}
                    className="rounded-xl w-[100px] h-28 pt-1 px-2 focus:outline-none flex flex-col items-center gap-2 cursor-pointer hover:bg-[#d8e6fb] hover:text-primary"
                  >
                    <img src={item.img} alt={item.title} className="w-14" />
                    <p className="text-sm font-medium text-center line-clamp-2">
                      {item.title}
                    </p>
                  </button>
                )
              )}
            </div>
          </div>
          {categoryNav[indexTitle].brand?.length > 0 && (
            <>
              <p className="mt-6 font-semibold">แบรนด์แนะนำ</p>
              <div className="relative">
                <Swiper
                  className="w-full relative p-[1px]"
                  slidesPerView={"auto"}
                  spaceBetween={19}
                  navigation={{
                    nextEl: ".swiper-brand-button-next",
                    prevEl: ".swiper-brand-button-prev",
                  }}
                  modules={[Navigation]}
                >
                  {categoryNav[indexTitle].brand.map((item, index) => (
                    <SwiperSlide key={index}>
                      <img
                        src={item}
                        alt="Brand"
                        className="w-[70px] cursor-pointer rounded-lg hover:drop-shadow-sm"
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
                <button className="swiper-brand-button-prev absolute -left-2 top-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full text-xs text-primary p-1.5 z-10 shadow-md btn-ripple-m">
                  <FaAngleLeft className="relative z-10" />
                </button>
                <button className="swiper-brand-button-next absolute -right-2 top-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full text-xs text-primary p-1.5 z-10 shadow-md btn-ripple-m">
                  <FaAngleRight className="relative z-10" />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
