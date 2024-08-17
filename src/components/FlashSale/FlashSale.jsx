import React, { useEffect, useState } from "react";
import FlashSaleSwiper from "./FlashSaleSwiper";
import { FaArrowRight } from "react-icons/fa6";

const category = [
  "ทั้งหมด",
  "หูฟัง/ลำโพง",
  "คอมพิวเตอร์",
  "เกมมิ่ง",
  "อุปกรณ์มือถือ",
];

const data = [
  {
    cate: "หูฟัง/ลำโพง",
    img1: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2019/09/Bose-Headphone-700-1.jpg",
    img2: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2019/09/Bose-Headphone-700-2.jpg",
    brand:
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/1053/1714738539373_Brand%20Logo-46.jpg",
    name: "หูฟังไร้สาย Bose Noise Cancelling Headphones 700 Headphone Black",
    price: 15900,
    discount: 13515,
    balance: 1,
  },
  {
    cate: "คอมพิวเตอร์",
    img1: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/06/Computer/FA506NCR-HN005W-1.jpg",
    img2: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/06/Computer/FA506NCR-HN005W-2.jpg",
    brand:
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/1594/1716190222299_Brand%20Logo-09.jpg",
    name: "โน๊ตบุ๊ค Asus TUF A15 FA506NCR-HN005W Gaming Notebook",
    price: 29990,
    discount: 27990,
    balance: 2,
  },
  {
    cate: "อุปกรณ์มือถือ",
    img1: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/05/Product/cabletime-cu04-240w-usb-c-to-usb-c-charging-cable-front-view.jpg",
    img2: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/05/Product/cabletime-cu04-240w-usb-c-to-usb-c-charging-cable-480mbps-view.jpg",
    brand:
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/2023/08/Logo/cabletime-logo.jpg",
    name: "สายชาร์จ Cabletime CU04 240W USB C to USB C Charging Cable 2m Orange",
    price: 250,
    balance: 5,
  },
  {
    cate: "หูฟัง/ลำโพง",
    img1: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/04/Product/philips-tat1108-true-wireless-front-view.jpg",
    img2: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/04/Product/philips-tat1108-true-wireless-ear-view.jpg",
    brand:
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/1454/1717575991002_Brand%20Logo-27.jpg",
    name: "หูฟัง Philips TAT1108 True Wireless Black",
    price: 1290,
    discount: 760,
    balance: 5,
  },
  {
    cate: "คอมพิวเตอร์",
    img1: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/04/Product/hp-victus-15-fa1305tx-gaming-notebook-front-view.jpg",
    img2: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/04/Product/hp-victus-15-fa1305tx-gaming-notebook-front-right-view.jpg",
    brand:
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/2046/1716190284937_Brand%20Logo-17.jpg",
    name: "โน๊ตบุ๊ค HP Victus 15-fa1305TX Gaming Notebook Mica Silver",
    price: 33990,
    balance: 2,
  },
  {
    cate: "เกมมิ่ง",
    img1: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/04/Product/qwertykeys-neo70-wireless-mechanical-keyboard-ano-black-golden-alu-pvd-golden.jpg",
    img2: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/04/qwertykeys-neo70-wireless-mechanical-keyboard-case.jpg",
    brand:
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/2439/1718099385922_Brand%20Logo_5-06.jpg",
    name: "คีย์บอร์ด Qwertykeys Neo70 Wireless Mechanical Keyboard Anodized Black Case + Golden ALU Weight + PVD Golden Badge",
    price: 5550,
    discount: 5090,
    balance: 1,
  },
  {
    cate: "เกมมิ่ง",
    img1: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/04/Product/qwertykeys-qk100-wireless-mechanical-keyboard-ano-black-ano-black-qk01.jpg",
    img2: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/04/qwertykeys-qk100-wireless-mechanical-keyboard-case.jpg",
    brand:
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/2439/1718099385922_Brand%20Logo_5-06.jpg",
    name: "คีย์บอร์ด Qwertykeys QK100 Wireless Mechanical Keyboard (EN) Anodized Black Case + Anodized Black Weight + QK01",
    price: 12090,
    discount: 10890,
    balance: 1,
  },
  {
    cate: "เกมมิ่ง",
    img1: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/02/Product/lenovo-loq-15aph8-82xt009kta-gaming-notebook-front-view.jpg",
    img2: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/02/Product/lenovo-loq-15aph8-82xt009kta-gaming-notebook-front-right-view.jpg",
    brand:
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/1988/1716190185386_Brand%20Logo-10.jpg",
    name: "โน๊ตบุ๊ค Lenovo LOQ 15APH8-82XT009KTA Gaming Notebook Storm Grey",
    price: 32990,
    discount: 27990,
    balance: 2,
  },
  {
    cate: "เกมมิ่ง",
    img1: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/02/Product/ajazz-ak871-wireless-mechanical-keyboard-front-view-blue.jpg",
    img2: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/02/Product/ajazz-ak871-wireless-mechanical-keyboard-long-lasting.jpg",
    brand:
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/2022/01/Logo/Ajazz-logo.gif",
    name: "คีย์บอร์ด Ajazz AK871 Wireless Mechanical Keyboard (EN/TH) Blue Island + Blue Switch",
    price: 749,
    discount: 690,
    balance: 2,
  },
  {
    cate: "เกมมิ่ง",
    img1: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/02/Product/ajazz-ak35i-v2-wireless-mechanical-keyboard-top-view-mirror-moon.jpg",
    img2: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/02/Product/ajazz-ak35i-v2-wireless-mechanical-keyboard-front-view-mirror-moon.jpg",
    brand:
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/2022/01/Logo/Ajazz-logo.gif",
    name: "คีย์บอร์ด Ajazz AK35i V2 Wireless Mechanical Keyboard (EN/TH) Model Max + Mirror Moon + Gift Switch",
    price: 3299,
    discount: 2990,
    balance: 2,
  },
  {
    cate: "อุปกรณ์มือถือ",
    img1: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/01/Product/moov-pb02c-5000mah-power-bank-front-view-white.jpg",
    img2: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/01/Product/moov-pb02c-5000mah-power-bank-fast-charge.jpg",
    brand:
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/2024/01/Logo/moov-logo.jpg",
    name: "พาวเวอร์แบงค์ Moov PB02C 5000mAh Power Bank White",
    price: 650,
    discount: 599,
    balance: 5,
  },
  {
    cate: "คอมพิวเตอร์",
    img1: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/01/Product/logitech-wave-keys-wireless-keyboard-graphite-top-view.jpg",
    img2: "https://mercular.s3.ap-southeast-1.amazonaws.com/images/products/2024/01/Product/logitech-wave-keys-wireless-keyboard-graphite-upper-view.jpg",
    brand:
      "https://mercular.s3.ap-southeast-1.amazonaws.com/images/brands/1532/1715152169377_Brand%20Logo-02.jpg",
    name: "คีย์บอร์ด Logitech Wave Keys Wireless Keyboard (EN/TH) Graphite",
    price: 2190,
    discount: 1790,
    balance: 2,
  },
];

function FlashSale() {
  const [cate, setCate] = useState("ทั้งหมด");
  const [timeLeft, setTimeLeft] = useState(86400);

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
          <img
            src="https://cdn.mercular.com/images/homepage/sections/8/spaces/11/1693999391467_Mercular_FS.png"
            alt="FSLogo"
            className="w-52 mr-3"
          />
          {category.map((item, index) => (
            <button
              key={index}
              className={`text-sm font-semibold px-[23px] py-[9px] rounded-full cursor-pointer ${
                cate == item ? "bg-black text-white" : "text-[#637385]"
              }`}
              onClick={() => setCate(item)}
            >
              {item}
            </button>
          ))}
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
      {cate == "ทั้งหมด" && <FlashSaleSwiper data={data} />}
      {cate == "หูฟัง/ลำโพง" && (
        <FlashSaleSwiper
          data={data.filter((item) => item.cate == "หูฟัง/ลำโพง")}
        />
      )}
      {cate == "คอมพิวเตอร์" && (
        <FlashSaleSwiper
          data={data.filter((item) => item.cate == "คอมพิวเตอร์")}
        />
      )}
      {cate == "เกมมิ่ง" && (
        <FlashSaleSwiper data={data.filter((item) => item.cate == "เกมมิ่ง")} />
      )}
      {cate == "อุปกรณ์มือถือ" && (
        <FlashSaleSwiper
          data={data.filter((item) => item.cate == "อุปกรณ์มือถือ")}
        />
      )}
      <button className="bg-[#161c24] text-white font-semibold flex items-center gap-3 rounded-md px-20 py-2.5 mx-auto mb-10 text-sm">
        ดู Flash Sale ทั้งหมด
        <FaArrowRight />
      </button>
    </div>
  );
}

export default FlashSale;
