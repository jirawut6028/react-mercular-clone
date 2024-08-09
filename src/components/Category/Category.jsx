import React from "react";
import Audio from "../../assets/categorys/2001.png";
import Computer from "../../assets/categorys/2157.webp";
import Gaming from "../../assets/categorys/2071.webp";
import Work from "../../assets/categorys/2119.webp";
import Mobile from "../../assets/categorys/2227.webp";
import Gadget from "../../assets/categorys/2208.webp";
import Pro from "../../assets/categorys/2047.png";
import TV from "../../assets/categorys/2278.webp";

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
    img: Work,
    title: "จัดโต๊ะคอม",
  },
  {
    img: Mobile,
    title: "อุปกรณ์มือถือ",
  },
  {
    img: Gadget,
    title: "แกตเจ็ต",
  },
  {
    img: Pro,
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
