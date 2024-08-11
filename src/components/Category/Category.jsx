import React from "react";
import Audio from "../../assets/categorys/audio/audio.png";
import Computer from "../../assets/categorys/computer/computer.webp";
import Gaming from "../../assets/categorys/gaming/gaming.webp";
import WorkStation from "../../assets/categorys/work-station/work-station.webp";
import MobileAccessory from "../../assets/categorys/mobile-accessory/mobile-accessory.webp";
import SmartGadget from "../../assets/categorys/smart-gadget/smart-gadget.webp";
import ProfessionalAudio from "../../assets/categorys/professional-audio/professional-audio.png";
import TV from "../../assets/categorys/tv/tv.webp";

const data = [
  {
    img: Audio,
    title: "หูฟัง/ลำโพง",
  },
  {
    img: Computer,
    title: "คอมพิวเตอร์",
  },
  {
    img: Gaming,
    title: "เกมมิ่ง",
  },
  {
    img: WorkStation,
    title: "จัดโต๊ะคอม",
  },
  {
    img: MobileAccessory,
    title: "อุปกรณ์มือถือ",
  },
  {
    img: SmartGadget,
    title: "แกตเจ็ต",
  },
  {
    img: ProfessionalAudio,
    title: "เครื่องเสียงมืออาชีพ",
  },
  {
    img: TV,
    title: "ทีวี",
  },
];

function Category() {
  return (
    <div className="flex py-1.5 gap-4 max-w-[1300px] mx-auto">
      {data.map((item, index) => (
        <button
          key={index}
          className="bg-[#f6f7f8] hover:bg-[#d8e6fb] hover:text-[#0f63e9] rounded-xl text-sm py-2 focus:outline-none font-semibold flex flex-col items-center gap-2 cursor-pointer duration-200"
        >
          <img src={item.img} alt={item.title} className="w-20 mx-[33px]" />
          {item.title}
        </button>
      ))}
    </div>
  );
}

export default Category;
