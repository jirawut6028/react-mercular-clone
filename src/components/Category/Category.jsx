import React from "react";

const cate = [
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2002.png",
    title: "หูฟัง/ลำโพง",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2157.png",
    title: "คอมพิวเตอร์",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2071.png",
    title: "เกมมิ่ง",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2119.png",
    title: "จัดโต๊ะคอม",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2227.png",
    title: "อุปกรณ์มือถือ",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2208.png",
    title: "แกตเจ็ต",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2047.png",
    title: "เครื่องเสียงมืออาชีพ",
  },
  {
    img: "https://cdn.mercular.com/images/bulk-2024-04/categories/2278.png",
    title: "ทีวี",
  },
];

function Category() {
  return (
    <div className="flex py-1.5 gap-4 max-w-[1300px] mx-auto">
      {cate.map((item, index) => (
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
