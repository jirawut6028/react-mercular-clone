import React from "react";
import BestSellSwiper from "./BestSellSwiper";
import BannerSwiper from "./BannerSwiper";
function Banner() {
  return (
    <div className="w-[1280px] flex max-xl:flex-col max-xl:w-full max-xl:px-4 gap-4 py-1.5 mx-auto">
      <BannerSwiper />
      <BestSellSwiper />
    </div>
  );
}

export default Banner;
