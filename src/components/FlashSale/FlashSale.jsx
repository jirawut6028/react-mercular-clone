import { useEffect, useState } from "react";
import FlashSaleSwiper from "./FlashSaleSwiper";
import { FaArrowRight } from "react-icons/fa6";
import FSLogo from "../../assets/flash-sale/Mercular_FS.webp";
import Bose from "../../assets/category/audio/brand/bose.png";
import Bose700_1 from "../../assets/flash-sale/audio/Bose-Headphone-700-1.jpg";
import Bose700_2 from "../../assets/flash-sale/audio/Bose-Headphone-700-2.jpg";
import Ergonoz from "../../assets/category/work-station/brand/ergonoz.png";
import ErgonozEGN_1 from "../../assets/flash-sale/work-station/ergonoz-egn-blaze-1.webp";
import ErgonozEGN_2 from "../../assets/flash-sale/work-station/ergonoz-egn-blaze-2.jpg";
import Logitech from "../../assets/category/gaming/brand/logitech.png";
import LogitechMXKeysMini_1 from "../../assets/flash-sale/computer/logitech-mx-keys-mini-1.jpg";
import LogitechMXKeysMini_2 from "../../assets/flash-sale/computer/logitech-mx-keys-mini-2.jpg";
import Klipsch from "../../assets/category/audio/brand/klipsch.png";
import KlipschTheFives_1 from "../../assets/flash-sale/audio/klipsch-the-fives-1.jpg";
import KlipschTheFives_2 from "../../assets/flash-sale/audio/klipsch-the-fives-2.jpg";
import Ajazz from "../../assets/category/gaming/brand/ajazz.png";
import AjazzAk820_1 from "../../assets/flash-sale/gaming/ak820-max-1.webp";
import AjazzAk820_2 from "../../assets/flash-sale/gaming/ak820-max-2.webp";
import Asus from "../../assets/category/computer/brand/asus.png";
import AsusA15_1 from "../../assets/flash-sale/computer/asus-tuf-a15-1.jpg";
import AsusA15_2 from "../../assets/flash-sale/computer/asus-tuf-a15-2.jpg";
import SteelSeries from "../../assets/category/gaming/brand/steelseries.png";
import SteelSeriesArctis7_1 from "../../assets/flash-sale/gaming/steelseries-arctis-7-plus-1.jpg";
import SteelSeriesArctis7_2 from "../../assets/flash-sale/gaming/steelseries-arctis-7-plus-2.jpg";
import Philips from "../../assets/category/computer/brand/philips.webp";
import PhilipsTAT1108_1 from "../../assets/flash-sale/audio/philips-tat1108-1.webp";
import PhilipsTAT1108_2 from "../../assets/flash-sale/audio/Bose-Headphone-700-2.jpg";
import Hp from "../../assets/category/computer/brand/hp.png";
import HPVictus15_1 from "../../assets/flash-sale/computer/hp-victus-15-fa1305tx-1.jpg";
import HPVictus15_2 from "../../assets/flash-sale/computer/hp-victus-15-fa1305tx-2.jpg";
import ErgonozOCT01_1 from "../../assets/flash-sale/professional-audio/ergonoz-egn-oct01-1.webp";
import ErgonozOCT01_2 from "../../assets/flash-sale/professional-audio/ergonoz-egn-oct01-2.jpg";
import Qwerty from "../../assets/category/gaming/brand/qwerty.webp";
import QwertykeysNeo70_1 from "../../assets/flash-sale/gaming/qwertykeys-neo70-1.webp";
import QwertykeysNeo70_2 from "../../assets/flash-sale/gaming/qwertykeys-neo70-2.jpg";
import QwertyQK100_1 from "../../assets/flash-sale/gaming/qwertykeys-qk100-1.webp";
import QwertyQK100_2 from "../../assets/flash-sale/gaming/qwertykeys-qk100-2.jpg";
import Countdown from "./Countdown";

const category = [
  "ทั้งหมด",
  "หูฟัง/ลำโพง",
  "คอมพิวเตอร์",
  "เกมมิ่ง",
  "เครื่องเสียงมืออาชีพ",
  "จัดโต๊ะคอม",
];

const products = [
  {
    cate: "หูฟัง/ลำโพง",
    img1: Bose700_1,
    img2: Bose700_2,
    brand: Bose,
    name: "หูฟังไร้สาย Bose Noise Cancelling Headphones 700 Headphone Black",
    price: 15900,
    discount: 13515,
    balance: 1,
  },
  {
    cate: "จัดโต๊ะคอม",
    img1: ErgonozEGN_1,
    img2: ErgonozEGN_2,
    brand: Ergonoz,
    name: "ขาตั้งจอคอมพิวเตอร์ ERGONOZ EGN-BLAZE-D Monitor Arm",
    price: 2400,
    discount: 2190,
    balance: 5,
  },
  {
    cate: "คอมพิวเตอร์",
    img1: LogitechMXKeysMini_1,
    img2: LogitechMXKeysMini_2,
    brand: Logitech,
    name: "คีย์บอร์ด Logitech MX KEYS MINI Wireless Keyboard (EN/TH) Pale Gray",
    price: 4290,
    discount: 3190,
    balance: 2,
  },
  {
    cate: "หูฟัง/ลำโพง",
    img1: KlipschTheFives_1,
    img2: KlipschTheFives_2,
    brand: Klipsch,
    name: "ลำโพง Klipsch The Fives Powered Speaker Walnut",
    price: 34900,
    discount: 25890,
    balance: 2,
  },
  {
    cate: "เกมมิ่ง",
    img1: AjazzAk820_1,
    img2: AjazzAk820_2,
    brand: Ajazz,
    name: "คีย์บอร์ด Ajazz AK820 Max Wireless Mechanical Keyboard (EN/TH) Starry Night Gift Switch",
    price: 2390,
    discount: 2090,
    balance: 2,
  },
  {
    cate: "คอมพิวเตอร์",
    img1: AsusA15_1,
    img2: AsusA15_2,
    brand: Asus,
    name: "โน๊ตบุ๊ค Asus TUF A15 FA506NCR-HN005W Gaming Notebook",
    price: 29990,
    discount: 2790,
    balance: 2,
  },
  {
    cate: "เกมมิ่ง",
    img1: SteelSeriesArctis7_1,
    img2: SteelSeriesArctis7_2,
    brand: SteelSeries,
    name: "หูฟัง SteelSeries Arctis 7+ Destiny 2: Lightfall Edition Wireless Gaming Headset",
    price: 7490,
    discount: 4590,
    balance: 2,
  },
  {
    cate: "หูฟัง/ลำโพง",
    img1: PhilipsTAT1108_1,
    img2: PhilipsTAT1108_2,
    brand: Philips,
    name: "หูฟัง Philips TAT1108 True Wireless Black",
    price: 1290,
    discount: 760,
    balance: 5,
  },
  {
    cate: "คอมพิวเตอร์",
    img1: HPVictus15_1,
    img2: HPVictus15_2,
    brand: Hp,
    name: "โน๊ตบุ๊ค HP Victus 15-fa1305TX Gaming Notebook Mica Silver",
    price: 33990,
    balance: 2,
  },
  {
    cate: "เครื่องเสียงมืออาชีพ",
    img1: ErgonozOCT01_1,
    img2: ErgonozOCT01_2,
    brand: Ergonoz,
    name: "ขาตั้งไมค์ ERGONOZ EGN-OCT01 Octavia Series Microphone Stand",
    price: 1390,
    discount: 1250,
    balance: 5,
  },
  {
    cate: "เกมมิ่ง",
    img1: QwertykeysNeo70_1,
    img2: QwertykeysNeo70_2,
    brand: Qwerty,
    name: "คีย์บอร์ด Qwertykeys Neo70 Wireless Mechanical Keyboard Anodized Black Case + Golden ALU Weight + PVD Golden Badge",
    price: 5550,
    discount: 5090,
    balance: 1,
  },
  {
    cate: "เกมมิ่ง",
    img1: QwertyQK100_1,
    img2: QwertyQK100_2,
    brand: Qwerty,
    name: "คีย์บอร์ด Qwertykeys QK100 Wireless Mechanical Keyboard (EN) Anodized Black Case + Anodized Black Weight + QK01",
    price: 12090,
    discount: 10890,
    balance: 1,
  },
];

function FlashSale() {
  const [cate, setCate] = useState("ทั้งหมด");
  const [timeLeft, setTimeLeft] = useState(86400);
  const [sIndex, setSIndex] = useState(0);
  const [mIndex, setMIndex] = useState(0);
  const [hIndex, setHIndex] = useState(0);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
      setSIndex(sIndex + 1);
    }, 1000);

    if (timeLeft % 60 === 0) {
      setMIndex(mIndex + 1);
    }

    if (timeLeft % 3600 === 0) {
      setHIndex(hIndex + 1);
    }

    return () => clearInterval(timerId);
  }, [timeLeft]);

  const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="w-[1280px] max-xl:w-full max-xl:px-4 mx-auto mt-[30px] mb-10">
      <div className="flex justify-between gap-2 max-lg:mb-3">
        <div className="flex items-center gap-1">
          <img src={FSLogo} alt="FSLogo" className="mr-3 w-52 max-lg:w-36" />
          <div className="space-x-2 max-xl:hidden">
            {category.map((item, index) => (
              <button
                key={index}
                className={`text-sm font-semibold px-[23px] py-[9px] rounded-full cursor-pointer relative btn-ripple ${
                  cate == item ? "bg-black text-white" : "text-[#637385]"
                }`}
                onClick={() => setCate(item)}
              >
                <p className="relative z-10">{item}</p>
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-1 xl:items-center">
          <Countdown time={hours} index={hIndex} text="ชั่วโมง" />
          <p className="text-xl font-bold">:</p>
          <Countdown time={minutes} index={mIndex} text="นาที" />
          <p className="text-xl font-bold">:</p>
          <Countdown time={seconds} index={sIndex} text="วินาที" />
        </div>
      </div>
      <div className="space-x-1 overflow-y-auto xl:hidden whitespace-nowrap scrollbar-hide">
        {category.map((item, index) => (
          <button
            key={index}
            className={`text-sm font-semibold px-[23px] py-[9px] rounded-full cursor-pointer relative btn-ripple ${
              cate == item ? "bg-black text-white" : "text-[#637385]"
            }`}
            onClick={() => setCate(item)}
          >
            <p className="relative z-10">{item}</p>
          </button>
        ))}
      </div>
      {cate == "ทั้งหมด" && <FlashSaleSwiper products={products} />}
      {cate == "หูฟัง/ลำโพง" && (
        <FlashSaleSwiper
          products={products.filter((item) => item.cate == "หูฟัง/ลำโพง")}
        />
      )}
      {cate == "คอมพิวเตอร์" && (
        <FlashSaleSwiper
          products={products.filter((item) => item.cate == "คอมพิวเตอร์")}
        />
      )}
      {cate == "เกมมิ่ง" && (
        <FlashSaleSwiper
          products={products.filter((item) => item.cate == "เกมมิ่ง")}
        />
      )}
      {cate == "เครื่องเสียงมืออาชีพ" && (
        <FlashSaleSwiper
          products={products.filter(
            (item) => item.cate == "เครื่องเสียงมืออาชีพ"
          )}
        />
      )}
      {cate == "จัดโต๊ะคอม" && (
        <FlashSaleSwiper
          products={products.filter((item) => item.cate == "จัดโต๊ะคอม")}
        />
      )}
      <button className="bg-[#161c24] max-lg:w-[98%] text-white font-semibold flex justify-center items-center gap-3 rounded-md px-20 py-2.5 mx-auto text-sm relative btn-ripple">
        <p className="relative z-10">ดู Flash Sale ทั้งหมด</p>
        <FaArrowRight className="relative z-10" />
      </button>
    </div>
  );
}

export default FlashSale;
