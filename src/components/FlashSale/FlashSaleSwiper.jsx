import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
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
        slidesPerGroup={6}
        spaceBetween={15}
        navigation={{
          nextEl: ".swiper-flash-button-next",
          prevEl: ".swiper-flash-button-prev",
        }}
        modules={[Navigation]}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col w-[200px] rounded-xl shadow-lg cursor-pointer hover:shadow-[0_10px_10px_#d4e3fb] group/card duration-200">
              <div className="relative group/img">
                <img
                  src={item.brand}
                  alt="item.name"
                  className="absolute z-10 w-10 rounded-md top-2 right-2 group-hover/img:brightness-75"
                />
                <div className="absolute flex flex-col gap-2 top-[60px] right-3 z-10 invisible group-hover/img:visible">
                  <button className="p-2 bg-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill="currentColor"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16.5815 3C14.6722 3.03042 12.9247 4.10444 12 5.8157C11.0753 4.10444 9.32778 3.03042 7.41855 3C4.30577 3.13853 1.88662 5.82616 2.0041 9.01535C2.0041 12.895 5.9908 17.1322 9.33443 20.0051C10.8755 21.3316 13.1245 21.3316 14.6656 20.0051C18.0092 17.1322 21.9959 12.895 21.9959 9.01535C22.1134 5.82616 19.6942 3.13853 16.5815 3ZM13.5951 18.7002C12.6733 19.4953 11.3265 19.4953 10.4047 18.7002C6.12481 15.0219 3.66999 11.4929 3.66999 9.0159C3.55146 6.76862 5.2254 4.84441 7.41845 4.70703C9.6115 4.84441 11.2854 6.76862 11.1669 9.0159C11.1669 9.48713 11.5399 9.86914 11.9999 9.86914C12.46 9.86914 12.8329 9.48713 12.8329 9.0159C12.7144 6.76862 14.3883 4.84441 16.5814 4.70703C18.7744 4.84441 20.4483 6.76862 20.3298 9.0159C20.3298 11.4929 17.875 15.0219 13.5951 18.6968V18.7002Z"
                      ></path>
                    </svg>
                  </button>
                  <button className="p-2 bg-white rounded-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.64236 5.71289L6.21479 12.8458L3.71229 5.71289H1L4.98601 16.2024H7.44356L11.3247 5.71289H8.64236Z"
                        fill="rgba(69, 79, 91, 1)"
                      ></path>
                      <path
                        d="M19.0139 20.1883C21.5763 20.1883 22.9999 18.7647 22.9999 16.8166C22.9999 14.464 20.9919 13.8646 19.4185 13.46C18.3695 13.1903 17.5753 12.9655 17.5753 12.3361C17.5753 11.8866 17.9649 11.497 18.7891 11.497C19.7781 11.497 20.2576 11.9765 20.2576 12.6808H22.7452C22.7452 10.5379 21.4265 9.21924 18.909 9.21924C16.4065 9.21924 15.0578 10.5679 15.0578 12.3661C15.0578 14.5839 16.946 15.1983 18.5044 15.6029C19.5833 15.8876 20.4824 16.1423 20.4824 16.9215C20.4824 17.491 20.0479 17.9105 19.0139 17.9105C17.89 17.9105 17.3805 17.4011 17.3805 16.5319H14.863C14.863 18.6898 16.3615 20.1883 19.0139 20.1883Z"
                        fill="rgba(69, 79, 91, 1)"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M8.78884 19.8528C8.67739 20.1426 8.82195 20.4679 9.11175 20.5794C9.40154 20.6908 9.72682 20.5463 9.83828 20.2565L15.8579 4.60546C15.9694 4.31567 15.8248 3.99039 15.535 3.87893C15.2452 3.76747 14.9199 3.91204 14.8085 4.20183L8.78884 19.8528Z"
                        fill="rgba(69, 79, 91, 1)"
                      ></path>
                    </svg>
                  </button>
                </div>
                <img
                  src={item.img1}
                  alt={item.name}
                  className="w-full rounded-xl group-hover/card:hidden"
                />
                <img
                  src={item.img2}
                  alt={item.name}
                  className="hidden w-full rounded-xl group-hover/img:brightness-75 group-hover/card:block"
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
                      <p className="text-base font-semibold">
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
      <button className="swiper-flash-button-prev -left-4 btn-swiper-left btn-ripple-m">
        <FaAngleLeft className="relative z-10" />
      </button>
      <button className="swiper-flash-button-next -right-4 btn-swiper-right btn-ripple-m">
        <FaAngleRight className="relative z-10" />
      </button>
    </div>
  );
}

export default FlashSaleSwiper;
