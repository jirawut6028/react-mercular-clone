import React, { useEffect, useState } from "react";
import FSLogo from "../../assets/flashsale/Mercular_FS.webp";

function FlashSale() {
  const [cate, setCate] = useState("ทั้งหมด");
  const [timeLeft, setTimeLeft] = useState(36000);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="max-w-[1300px] mx-auto mt-[30px] pr-[17.5px]">
      <div className="flex items-center justify-between gap-2">
        <div className="flex items-center">
          <img src={FSLogo} alt="FSLogo" className="w-52 mr-3" />
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
        <div className="flex items-center gap-1 ">
          <div className="w-9 h-[52px] bg-black rounded-lg">
            <div className="bg-[#161c24] h-[65%] flex items-center justify-center text-white text-[18px] font-bold rounded-lg">
              {hours}
            </div>
            <div className="text-white text-[10px] text-center">ชั่วโมง</div>
          </div>
          <p className="font-bold text-xl">:</p>
          <div className="w-9 h-[52px] bg-black rounded-lg">
            <div className="bg-[#161c24] h-[65%] flex items-center justify-center text-white text-[18px] font-bold rounded-lg">
              {minutes}
            </div>
            <div className="text-white text-[10px] text-center">นาที</div>
          </div>
          <p className="font-bold text-xl">:</p>
          <div className="w-9 h-[52px] bg-black rounded-lg">
            <div className="bg-[#161c24] h-[65%] flex items-center justify-center text-white text-[18px] font-bold rounded-lg">
              {seconds}
            </div>
            <div className="text-white text-[10px] text-center">วินาที</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashSale;
