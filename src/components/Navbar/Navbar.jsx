import React, { useEffect, useState } from "react";
import logo from "../../assets/mercular-logo.webp";
import thai from "../../assets/icons/th.png";
import { GrAppsRounded } from "react-icons/gr";
import { IoCartOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import FlashSale from "../../assets/icons/Menu Icon-01.webp";
import OnlyAt from "../../assets/icons/Menu Icon-05.webp";
import Promotion from "../../assets/icons/Menu Icon-06.png";
import Blog from "../../assets/icons/Menu Icon-03.webp";
import Best from "../../assets/icons/Menu Icon-02.webp";
import Store from "../../assets/icons/Menu Icon-04.webp";
import Dropdown from "./Dropdown";

const data = [
  {
    title: "คูปองส่วนลด",
  },
  {
    title: "Flash Sale",
    icon: FlashSale,
  },
  {
    title: "Only at Mercular",
    icon: OnlyAt,
  },
  {
    title: "โปรหน้าร้าน",
    icon: Promotion,
  },
  {
    title: "บทความ",
    icon: Blog,
  },
  {
    title: "Best Of",
    icon: Best,
  },
  {
    title: "สาขาของเรา",
    icon: Store,
  },
];

function Navbar() {
  const [placeholderText, setPlaceholderText] = useState("");
  const fullText = "หา Gadget ที่ใช่กับ Mercular...";
  const [isFocused, setIsFocused] = useState(false);

  useEffect(() => {
    if (isFocused) {
      setPlaceholderText(fullText);
    } else {
      let i = 0;
      const interval = setInterval(() => {
        setPlaceholderText(fullText.substring(0, i + 1));
        i++;
        if (i === fullText.length) {
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isFocused, fullText]);

  return (
    <nav className="sticky top-0 flex flex-col py-2 max-w-[1300px] mx-auto z-50">
      <div className="flex justify-between items-center px-2.5 pb-3">
        <div className="flex gap-6">
          <img src={logo} alt="logo" className="cursor-pointer h-10" />
          <div className="relative group">
            <button className="text-[#0f63e9] bg-[#d8e6fb] hover:bg-[#b2cdf8] rounded-lg text-sm px-3.5 py-2 focus:outline-none font-bold flex items-center gap-1.5 cursor-pointer duration-200">
              <GrAppsRounded className="text-2xl" />
              สินค้าทั้งหมด
            </button>
            <Dropdown />
          </div>
        </div>
        <div>
          <div className="relative w-[544px]">
            <div className="absolute left-1 top-1/2 transform -translate-y-1/2 text-xl text-white bg-[#0f63e9] rounded-full p-1.5">
              <IoIosSearch />
            </div>
            <input
              name="search"
              type="text"
              placeholder={placeholderText}
              className="bg-[#f5f5f5] rounded-full pl-11 p-2 w-full border border-transparent hover:border-[#0f63e9] focus:border-[#0f63e9] duration-200"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
          </div>
        </div>
        <div className="flex items-center">
          <div className="hover:bg-[#f5f5f5] rounded-full p-2 cursor-pointer duration-200">
            <img
              src={thai}
              alt="thai"
              className="w-6 h-6 border-2 rounded-full"
            />
          </div>
          <div className="hover:bg-[#ecf3fd] rounded-full mr-5 ml-3 p-1 text-2xl text-gray-600 hover:text-[#0f63e9] cursor-pointer duration-200">
            <IoCartOutline />
          </div>
          <button className="text-white bg-[#0f63e9] rounded-lg text-sm px-4 py-2.5 focus:outline-none font-bold hover:drop-shadow-[0_10px_10px_#d4e3fb] cursor-pointer duration-200">
            เข้าสู่ระบบ
          </button>
        </div>
      </div>
      <div className="flex gap-2">
        {data.map((item, index) => (
          <button
            key={index}
            className="bg-[#f6f7f8] hover:bg-[#d8e6fb] hover:text-[#0f63e9] rounded-lg text-sm px-2 py-[5px] focus:outline-none font-semibold flex items-center gap-2 cursor-pointer duration-200"
          >
            {item.icon && (
              <img src={item.icon} alt={item.title} className="w-6" />
            )}
            {item.title}
          </button>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
