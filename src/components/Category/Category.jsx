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
    id: 1,
    title: "หูฟัง/ลำโพง",
    img: Audio,
  },
  {
    id: 2,
    title: "คอมพิวเตอร์",
    img: Computer,
  },
  {
    id: 3,
    title: "เกมมิ่ง",
    img: Gaming,
  },
  {
    id: 4,
    title: "จัดโต๊ะคอม",
    img: Work,
  },
  {
    id: 5,
    title: "อุปกรณ์มือถือ",
    img: Mobile,
  },
  {
    id: 6,
    title: "แกตเจ็ต",
    img: Gadget,
  },
  {
    id: 7,
    title: "เครื่องเสียงมืออาชีพ",
    img: Pro,
  },
  {
    id: 8,
    title: "ทีวี",
    img: TV,
  },
];

function Category() {
  return (
    <div className="flex py-1.5 gap-4 max-w-[1300px] mx-auto">
      {data.map((item) => (
        <button
          key={item.id}
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
