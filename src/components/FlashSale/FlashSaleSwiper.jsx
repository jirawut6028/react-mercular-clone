import React from "react";
import { FaAngleLeft, FaAngleRight, FaRegHeart } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";

function FlashSaleSwiper({ data }) {
  const formatNumber = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <div className="relative mt-4">
      <Swiper
        className="pb-4"
        slidesPerView={6}
        spaceBetween={16}
        navigation={{
          nextEl: ".swiper-flash-button-next",
          prevEl: ".swiper-flash-button-prev",
        }}
        breakpoints={{
          769: {
            slidesPerGroup: 6,
          },
        }}
        modules={[Navigation]}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col w-[200px] rounded-xl shadow-lg cursor-pointer hover:shadow-[0_10px_10px_#d4e3fb] group/card">
              <div className="relative group/img">
                <img
                  src={item.brand}
                  alt="item.name"
                  className="absolute top-2 right-2 w-10 z-10 rounded-md group-hover/img:brightness-75"
                />
                <div className="absolute top-[60px] right-3 z-10 text-xl p-2.5 bg-white rounded-full invisible group-hover/img:visible">
                  <FaRegHeart />
                </div>
                <div className="absolute top-[110px] right-3 z-10 font-bold text-[14px] p-2 bg-white rounded-full invisible group-hover/img:visible">
                  V/S
                </div>
                <img
                  src={item.img1}
                  alt={item.name}
                  className="w-full rounded-xl group-hover/card:hidden"
                />
                <img
                  src={item.img2}
                  alt={item.name}
                  className="w-full rounded-xl group-hover/img:brightness-75 hidden group-hover/card:block"
                />
              </div>
              <div className="text-[14px] px-4 py-1">
                <p className="line-clamp-2">{item.name}</p>
                <div className="flex items-center gap-2 pt-1.5 pb-2">
                  {item.discount && (
                    <div className="flex items-center gap-1">
                      <p className="bg-red-500 text-white font-semibold rounded-md text-xs flex justify-center items-center px-0.5 py-1">
                        -
                        {Math.floor(
                          ((item.price - item.discount) / item.price) * 100
                        )}
                        %
                      </p>
                      <p className="font-semibold text-base">
                        ฿{formatNumber(item.discount)}
                      </p>
                    </div>
                  )}
                  <p
                    className={`${
                      item.discount
                        ? "line-through text-xs text-[#a5b0ba]"
                        : "font-semibold text-base"
                    }`}
                  >
                    ฿{formatNumber(item.price)}
                  </p>
                </div>
                <div className="text-[10px] w-full text-center bg-[#f4f6f8] rounded-full py-[1px] mb-2">
                  เหลือสินค้าอีก {item.balance} ชิ้น
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <button className="swiper-flash-button-prev absolute -left-4 top-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full text-xl text-[#0f63e9] p-2.5 z-10 shadow-md">
        <FaAngleLeft />
      </button>
      <button className="swiper-flash-button-next absolute -right-4 top-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full text-xl text-[#0f63e9] p-2.5 z-10 shadow-md">
        <FaAngleRight />
      </button>
    </div>
  );
}

export default FlashSaleSwiper;
