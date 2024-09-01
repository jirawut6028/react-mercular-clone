import React, { useEffect, useState } from "react";
import logo from "../../assets/mercular-logo.webp";
import thai from "../../assets/icons/th.png";
import { GrAppsRounded } from "react-icons/gr";
import { IoIosSearch } from "react-icons/io";
import FlashSale from "../../assets/icons/flash-sale.webp";
import OnlyAt from "../../assets/icons/promotion-exclusive-deals.webp";
import Blog from "../../assets/icons/review-article.webp";
import Best from "../../assets/icons/best-of.webp";
import Store from "../../assets/icons/store.webp";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    <nav
      className={`sticky top-0 flex flex-col py-[7.5px] mx-auto z-50 bg-white ${
        scrolled && "shadow-md"
      }`}
    >
      <div className="w-[1280px] mx-auto flex justify-between items-center pl-2.5 pb-3">
        <div className="flex gap-6">
          <img src={logo} alt="logo" className="cursor-pointer h-10" />
          <div className="relative group">
            <button className="text-primary bg-[#d8e6fb] hover:bg-[#b2cdf8] rounded-lg text-sm w-[133px] pl-2.5 py-2 font-bold flex items-center gap-1.5 cursor-pointer duration-200">
              <GrAppsRounded className="text-2xl" />
              สินค้าทั้งหมด
            </button>
            <Dropdown />
          </div>
        </div>
        <div>
          <div className="relative w-[544px]">
            <div className="absolute left-1 top-1/2 transform -translate-y-1/2 text-xl text-white bg-primary rounded-full p-1.5">
              <IoIosSearch />
            </div>
            <input
              name="search"
              type="text"
              placeholder={placeholderText}
              className="bg-[#f5f5f5] rounded-full pl-11 p-2 w-full border border-transparent hover:border-primary focus:border-primary duration-200"
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
          <div className="hover:bg-[#ecf3fd] rounded-full mr-5 ml-[11px] p-1 text-2xl text-gray-600 hover:text-primary cursor-pointer duration-200">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.927 5.39741C20.6926 5.11612 20.3992 4.88988 20.0675 4.73478C19.7358 4.57967 19.3741 4.49949 19.0079 4.49994H5.53491L5.49991 4.20744C5.42829 3.59947 5.13607 3.03892 4.67867 2.63205C4.22127 2.22518 3.63048 2.00028 3.01831 2L2.83331 2C2.6123 2 2.40035 2.0878 2.24407 2.24407C2.0878 2.40035 2 2.6123 2 2.83331C2 3.05432 2.0878 3.26628 2.24407 3.42255C2.40035 3.57883 2.6123 3.66662 2.83331 3.66662H3.01831C3.22241 3.66665 3.41941 3.74159 3.57194 3.87721C3.72446 4.01284 3.82191 4.19973 3.84579 4.40244L4.99242 14.1522C5.11146 15.1662 5.59864 16.1011 6.36148 16.7796C7.12432 17.4581 8.10972 17.8329 9.13065 17.8329H17.8329C18.0539 17.8329 18.2659 17.7451 18.4222 17.5889C18.5784 17.4326 18.6662 17.2206 18.6662 16.9996C18.6662 16.7786 18.5784 16.5666 18.4222 16.4104C18.2659 16.2541 18.0539 16.1663 17.8329 16.1663H9.13065C8.61488 16.1649 8.11218 16.0039 7.69147 15.7055C7.27076 15.4072 6.95263 14.986 6.78071 14.4997H16.7138C17.6907 14.4997 18.6365 14.1565 19.3861 13.5301C20.1356 12.9036 20.6412 12.0337 20.8145 11.0723L21.4687 7.44403C21.534 7.08404 21.5193 6.7141 21.4257 6.36042C21.3321 6.00674 21.1618 5.67797 20.927 5.39741ZM19.8329 7.1482L19.1779 10.7764C19.0738 11.3539 18.77 11.8764 18.3195 12.2524C17.869 12.6284 17.3006 12.8339 16.7138 12.8331H6.51572L5.73157 6.16656H19.0079C19.1303 6.16583 19.2514 6.19208 19.3625 6.24344C19.4736 6.2948 19.5721 6.37001 19.6508 6.46372C19.7296 6.55744 19.7867 6.66736 19.8182 6.78566C19.8497 6.90396 19.8547 7.02774 19.8329 7.1482Z"
                fill="currentColor"
              ></path>
              <path
                d="M7.83264 21.9993C8.75309 21.9993 9.49926 21.2531 9.49926 20.3326C9.49926 19.4122 8.75309 18.666 7.83264 18.666C6.91219 18.666 6.16602 19.4122 6.16602 20.3326C6.16602 21.2531 6.91219 21.9993 7.83264 21.9993Z"
                fill="currentColor"
              ></path>
              <path
                d="M16.1666 21.9993C17.0871 21.9993 17.8332 21.2531 17.8332 20.3326C17.8332 19.4122 17.0871 18.666 16.1666 18.666C15.2462 18.666 14.5 19.4122 14.5 20.3326C14.5 21.2531 15.2462 21.9993 16.1666 21.9993Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <button className="text-white bg-primary rounded-lg text-sm px-[16.5px] py-2.5 font-bold hover:drop-shadow-[0_10px_10px_#d4e3fb] cursor-pointer duration-200">
            เข้าสู่ระบบ
          </button>
        </div>
      </div>
      <div className="w-[1280px] mx-auto flex gap-2">
        {data.map((item, index) => (
          <button
            key={index}
            className="bg-[#f6f7f8] hover:bg-[#d8e6fb] hover:text-primary rounded-lg text-sm px-2 py-[5px] focus:outline-none font-semibold flex items-center gap-2 cursor-pointer duration-200"
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
