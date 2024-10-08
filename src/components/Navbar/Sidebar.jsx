import { useState } from "react";
import Thai from "../../assets/icons/th.png";
import En from "../../assets/icons/en.png";
import { GrAppsRounded } from "react-icons/gr";
import { FaAngleRight } from "react-icons/fa6";

function Sidebar({ menu, btnClick, sidebar }) {
  const [dropDown, setDropDown] = useState(false);

  return (
    <aside
      className={`fixed top-0 left-0 z-40 h-screen transition-transform w-[271px] duration-300 lg:-translate-x-full ${
        sidebar ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="h-full px-4 py-2 overflow-y-auto bg-white border">
        <button
          className="rounded-full hover:bg-[#f5f5f5] duration-150"
          onClick={() => btnClick(false)}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="rgba(22, 28, 36, 1)"
              d="M18 6.00006C17.8125 5.81259 17.5582 5.70728 17.293 5.70728C17.0278 5.70728 16.7735 5.81259 16.586 6.00006L12 10.5861L7.414 6.00006C7.22647 5.81259 6.97217 5.70728 6.707 5.70728C6.44184 5.70728 6.18753 5.81259 6 6.00006C5.81253 6.18759 5.70721 6.4419 5.70721 6.70706C5.70721 6.97223 5.81253 7.22653 6 7.41406L10.586 12.0001L6 16.5861C5.81253 16.7736 5.70721 17.0279 5.70721 17.2931C5.70721 17.5582 5.81253 17.8125 6 18.0001C6.18753 18.1875 6.44184 18.2928 6.707 18.2928C6.97217 18.2928 7.22647 18.1875 7.414 18.0001L12 13.4141L16.586 18.0001C16.7735 18.1875 17.0278 18.2928 17.293 18.2928C17.5582 18.2928 17.8125 18.1875 18 18.0001C18.1875 17.8125 18.2928 17.5582 18.2928 17.2931C18.2928 17.0279 18.1875 16.7736 18 16.5861L13.414 12.0001L18 7.41406C18.1875 7.22653 18.2928 6.97223 18.2928 6.70706C18.2928 6.4419 18.1875 6.18759 18 6.00006Z"
            ></path>
          </svg>
        </button>
        <ul className="w-full mt-1 text-sm font-semibold">
          <li className="flex items-center px-2 gap-1.5 cursor-pointer duration-200">
            <GrAppsRounded className="text-2xl" />
            สินค้าทั้งหมด
            <FaAngleRight className="ml-auto" />
          </li>
          <hr className="my-4 border-t" />
          {menu.map((item, index) => (
            <li
              key={index}
              className="flex gap-2 px-2 items-center my-2 cursor-pointer h-[34px]"
            >
              {item.icon && (
                <img src={item.icon} alt={item.title} className="size-5" />
              )}
              {item.title}
            </li>
          ))}
          <hr className="my-4 border-t" />
          <li className="flex gap-2 px-2 hover:bg-[#f5f5f5] rounded-lg items-center my-2 cursor-pointer h-[34px]">
            <svg
              width="20"
              height="20"
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
            รถเข็น
          </li>
          <li className="my-2">
            <button
              className="flex w-full gap-2 px-2 items-center cursor-pointer h-[34px]"
              onClick={() => setDropDown(!dropDown)}
            >
              <img
                src={Thai}
                alt="thai"
                className="object-cover border-2 rounded-full size-5"
              />
              ภาษาไทย
              <FaAngleRight
                className={`ml-auto duration-200 ${
                  dropDown ? "-rotate-90" : "rotate-90"
                }`}
              />
            </button>
            <div
              className={`pl-6 duration-200 transition-all overflow-hidden ${
                dropDown ? "h-[68px]" : "h-0"
              }`}
            >
              <div className="flex w-ful items-center gap-2 px-2 cursor-pointer h-[34px]">
                <img
                  src={Thai}
                  alt="thai"
                  className="object-cover border-2 rounded-full size-5"
                />
                ภาษาไทย
              </div>
              <div className="flex w-full items-center gap-2 px-2 cursor-pointer h-[34px]">
                <img
                  src={En}
                  alt="thai"
                  className="object-cover border-2 rounded-full size-5"
                />
                English
              </div>
            </div>
          </li>
          <hr className="my-4 border-t" />
          <button className="text-white bg-primary rounded-lg text-sm w-full py-2.5 font-bold hover:drop-shadow-[0_10px_10px_#d4e3fb] cursor-pointer duration-200">
            เข้าสู่ระบบ
          </button>
        </ul>
      </div>
    </aside>
  );
}

export default Sidebar;
