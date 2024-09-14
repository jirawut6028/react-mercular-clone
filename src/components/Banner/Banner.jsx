import React from "react";
import HeroSwiper from "./HeroSwiper";
import BestSellSwiper from "./BestSellSwiper";
function Banner() {
  return (
    <div className="w-[1280px] flex max-xl:flex-col max-xl:w-[97%] gap-4 py-1.5 mx-auto">
      <HeroSwiper />
      <BestSellSwiper />
    </div>
  );
}

export default Banner;
