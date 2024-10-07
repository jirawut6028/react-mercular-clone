import { useState } from "react";
import { categoryNav } from "../../utils/constants";
import { FaAngleLeft, FaAngleRight, FaArrowRight } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";

function Category() {
  const [indexCate, setIndexCate] = useState(0);

  return (
    <div className="my-[7px] xl:w-[1280px] mx-auto w-[97%] max-lg:hidden">
      <div className="relative flex gap-2 xl:gap-4">
        {categoryNav.map((item, index) => (
          <div key={index} className="group">
            <button className="bg-[#f6f7f8] hover:bg-[#d8e6fb] hover:text-primary rounded-xl text-sm xl:h-[126px] h-[96px] focus:outline-none font-semibold flex flex-col justify-center items-center gap-2 cursor-pointer duration-200">
              <img
                src={item.img}
                alt={item.title}
                className="xl:w-20 xl:mx-[33px] w-[50px] mx-14"
              />
              <p className="line-clamp-1">{item.title}</p>
            </button>
            <div
              className={`absolute z-30 pt-2 duration-200 invisible opacity-0 group-hover:opacity-100 group-hover:visible ${
                [0, 1, 2].includes(index)
                  ? "left-0"
                  : index === 3
                  ? "xl:left-28 left-0"
                  : index === 4
                  ? "xl:right-16 right-0"
                  : "right-0"
              }`}
              onMouseLeave={() => {
                setIndexCate(0);
              }}
            >
              <div className="flex bg-white rounded-lg shadow-[0_4px_8px_0_rgba(145,158,171,0.16)] h-[368px] w-[923px] p-4">
                <div className="flex flex-col w-[730px]">
                  <div className="flex justify-between font-semibold">
                    <p>{categoryNav[index].title}</p>
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
                        nextEl: ".swiper-cate-button-next",
                        prevEl: ".swiper-cate-button-prev",
                      }}
                      modules={[Navigation]}
                    >
                      {categoryNav[index].cate.map((item, i) => (
                        <SwiperSlide key={i}>
                          <div
                            className={`overflow-visible relative flex items-center justify-center pl-[66px] h-14 w-[150px] pr-3 rounded-lg cursor-pointer ${
                              indexCate == i
                                ? "bg-[#cfdef5] text-primary"
                                : "bg-[#f4f6f8]"
                            }`}
                            onMouseEnter={() => setIndexCate(i)}
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
                    <button className="swiper-cate-button-prev absolute -left-2 top-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full text-xs text-primary p-1.5 z-10 shadow-md btn-ripple-m">
                      <FaAngleLeft className="relative z-10" />
                    </button>
                    <button className="swiper-cate-button-next absolute -right-2 top-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full text-xs text-primary p-1.5 z-10 shadow-md btn-ripple-m">
                      <FaAngleRight className="relative z-10" />
                    </button>
                  </div>
                  <div className="bg-[#f4f6f8] h-[215px] rounded-lg pt-5 px-4">
                    <div className="flex justify-between font-semibold">
                      <p>{categoryNav[index].cate[indexCate].title}</p>
                      <button className="flex gap-1.5 items-center text-sm text-primary hover:bg-[#ecf3fd] rounded-lg p-[5px] cursor-pointer">
                        <p>ดูทั้งหมด</p>
                        <div className="bg-[#ecf3fe] rounded-full p-0.5 text-[10px]">
                          <FaArrowRight />
                        </div>
                      </button>
                    </div>
                    <div className="flex flex-wrap gap-3 h-[164px] overflow-y-auto scrollbar-hide">
                      {categoryNav[index].cate[indexCate].cate?.map(
                        (item, i) => (
                          <button
                            key={i}
                            className="rounded-xl w-[100px] h-28 pt-1 px-2 focus:outline-none flex flex-col items-center gap-2 cursor-pointer hover:bg-[#d8e6fb] hover:text-primary"
                          >
                            <img
                              src={item.img}
                              alt={item.title}
                              className="w-14"
                            />
                            <p className="text-sm font-medium text-center line-clamp-2">
                              {item.title}
                            </p>
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <hr className="h-[320px] w-[1px] mx-4 my-auto bg-[#e5e8eb]"></hr>
                {categoryNav[index].brand?.length > 0 && (
                  <div>
                    <p className="font-semibold">แบรนด์แนะนำ</p>
                    <div className="flex flex-col h-[312px] overflow-y-auto scrollbar-hide">
                      <div className="flex flex-wrap w-[128px] gap-4">
                        {categoryNav[index].brand.map((item, i) => (
                          <img
                            key={i}
                            src={item}
                            alt="Brand"
                            className="object-cover rounded-lg cursor-pointer size-14 hover:drop-shadow-sm"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
