import React from "react";
import { dropDownNav } from "../../utils/constants";

function Category() {
  return (
    <div className="flex py-[7px] gap-4 w-[1280px] mx-auto">
      {dropDownNav.map((item, index) => (
        <button
          key={index}
          className="bg-[#f6f7f8] hover:bg-[#d8e6fb] hover:text-primary rounded-xl text-sm py-[9px] focus:outline-none font-semibold flex flex-col items-center gap-2 cursor-pointer duration-200"
        >
          <img src={item.img} alt={item.title} className="w-20 mx-[33px]" />
          {item.title}
        </button>
      ))}
    </div>
  );
}

export default Category;
