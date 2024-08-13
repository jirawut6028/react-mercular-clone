import React, { useState } from "react";
import FSLogo from "../../assets/flashsale/Mercular_FS.webp";

function FlashSale() {
  const [cate, setCate] = useState("ทั้งหมด");
  return (
    <div className="max-w-[1300px] mx-auto mt-[30px]">
      <div className="flex items-center gap-2">
        <img src={FSLogo} alt="FSLogo" className="w-52" />
        <button
          className={`text-sm font-semibold px-[23px] py-[9px] rounded-full cursor-pointer ${
            cate == "ทั้งหมด" ? "bg-black text-white" : "text-[#637385]"
          }`}
          onClick={() => setCate("ทั้งหมด")}
        >
          ทั้งหมด
        </button>
        <button
          className={`text-sm font-semibold px-4 py-[9px] rounded-full cursor-pointer ${
            cate == "จัดโต๊ะคอม" ? "bg-black text-white" : "text-[#637385]"
          }`}
          onClick={() => setCate("จัดโต๊ะคอม")}
        >
          จัดโต๊ะคอม
        </button>
        <button
          className={`text-sm font-semibold px-4 py-[9px] rounded-full cursor-pointer ${
            cate == "หูฟัง/ลำโพง" ? "bg-black text-white" : "text-[#637385]"
          }`}
          onClick={() => setCate("หูฟัง/ลำโพง")}
        >
          หูฟัง/ลำโพง
        </button>
        <button
          className={`text-sm font-semibold px-4 py-[9px] rounded-full cursor-pointer ${
            cate == "คอมพิวเตอร์" ? "bg-black text-white" : "text-[#637385]"
          }`}
          onClick={() => setCate("คอมพิวเตอร์")}
        >
          คอมพิวเตอร์
        </button>
        <button
          className={`text-sm font-semibold px-[26px] py-[9px] rounded-full cursor-pointer ${
            cate == "เกมมิ่ง" ? "bg-black text-white" : "text-[#637385]"
          }`}
          onClick={() => setCate("เกมมิ่ง")}
        >
          เกมมิ่ง
        </button>
        <button
          className={`text-sm font-semibold px-4 py-[9px] rounded-full cursor-pointer ${
            cate == "เครื่องเสียงมืออาชีพ"
              ? "bg-black text-white"
              : "text-[#637385]"
          }`}
          onClick={() => setCate("เครื่องเสียงมืออาชีพ")}
        >
          เครื่องเสียงมืออาชีพ
        </button>
      </div>
    </div>
  );
}

export default FlashSale;
