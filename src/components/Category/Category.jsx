import React from "react";
import { dropDownNav } from "../../utils/constants";

function Category() {
  return (
    <div className="flex py-[7px] gap-4 w-[1280px] mx-auto max-xl:w-[97%] max-xl:gap-2 max-lg:hidden">
      {dropDownNav.map((item, index) => (
        <button
          key={index}
          className="bg-[#f6f7f8] hover:bg-[#d8e6fb] hover:text-primary rounded-xl text-sm h-[126px] max-xl:h-[96px] focus:outline-none font-semibold flex flex-col justify-center items-center gap-2 cursor-pointer duration-200"
        >
          <img
            src={item.img}
            alt={item.title}
            className="w-20 mx-[33px] max-xl:w-[50px] max-xl:mx-14"
          />
          <p className="line-clamp-1">{item.title}</p>
        </button>
      ))}
    </div>
  );
}

export default Category;
