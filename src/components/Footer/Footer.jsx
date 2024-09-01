import React from "react";
import Logo from "../../assets/mercular-logo.webp";
import Facebook from "../../assets/icons/facebook.png";
import Twitter from "../../assets/icons/twitter.png";
import Tiktok from "../../assets/icons/tiktok.png";
import Youtube from "../../assets/icons/youtube.png";
import Instagram from "../../assets/icons/instagram.png";
import Line from "../../assets/icons/line.png";
import Threads from "../../assets/icons/threads.png";
import Thai from "../../assets/icons/th.png";
import { IoIosArrowDown } from "react-icons/io";

const cate = [
  {
    title: "หูฟัง/ลำโพง",
    subtitle: [
      "หูฟัง",
      "ลําโพง",
      "เครื่องเล่นเพลง & DAC-Amp",
      "อุปกรณ์เสริมหูฟัง",
      "อุปกรณ์เสริมลำโพง",
    ],
  },
  {
    title: "คอมพิวเตอร์",
    subtitle: [
      "โน๊ตบุ๊ค",
      "จอคอมพิวเตอร์",
      "Tablet",
      "จัดสเปคคอม",
      "อุปกรณ์คอมพิวเตอร์",
      "Components & Upgrades",
    ],
  },
  {
    title: "เกมมิ่ง",
    subtitle: [
      "หูฟังเกมมิ่ง & ลำโพงเกมมิ่ง",
      "เมาส์เกมมิ่ง",
      "คีย์บอร์ดเกมมิ่ง",
      "Mechanical & Custom Keyboard",
      "โต๊ะ & เก้าอี้เกมมิ่ง",
      "จอยเกม & Controller",
      "Game Console",
      "อุปกรณ์สตรีมเกม",
    ],
  },
  {
    title: "จัดโต๊ะคอม",
    subtitle: [
      "เก้าอี้",
      "โต๊ะ",
      "ขาตั้ง",
      "ที่วางและชั้นวาง",
      "อุปกรณ์เสริมโต๊ะและเก้าอี้",
      "Docking Station & Hub",
      "ปลั๊กราง & อุปกรณ์จัดเก็บสายไฟ",
      "ไฟตกแต่ง",
    ],
  },
  {
    title: "สมาร์ทแกดเจ็ต",
    subtitle: [
      "Smart Watch & Fitness Tracker",
      "Action Camera",
      "Camera Stabilizer",
      "จักรยานไฟฟ้า & สกู๊ตเตอร์ไฟฟ้า",
    ],
  },
  {
    title: "อุปกรณ์มือถือ",
    subtitle: [
      "สายชาร์จ",
      "หัวชาร์จ",
      "พาวเวอร์แบงค์",
      "แท่นชาร์จ",
      "อุปกรณ์ไอแพด",
    ],
  },
  {
    title: "เครื่องเสียงมืออาชีพ",
    subtitle: [
      "ไมโครโฟนและอุปกรณ์เสริม",
      "Audio Interface",
      "Sound Mixer",
      "Pro Audio Accessories",
      "เครื่องบันทึกเสียง",
    ],
  },
  {
    title: "ทีวี",
    subtitle: ["Smart TV", "โปรเจคเตอร์และอุปกรณ์เสริม"],
  },
];

const Social = [Facebook, Twitter, Tiktok, Youtube, Instagram, Line, Threads];

function Footer() {
  return (
    <div className="w-[1280px] mx-auto mb-8">
      <div className="grid grid-cols-4 gap-y-5 text-gray-700 mt-6">
        {cate.map((item, index) => (
          <div key={index} className="space-y-1">
            <p className="font-semibold hover:text-primary cursor-pointer">
              {item.title}
            </p>
            <div className="flex flex-wrap text-sm leading-7">
              {item.subtitle.map((sub, i) => (
                <p
                  key={i}
                  className="after:content-['|'] after:text-gray-400 after:px-1 last:after:content-[''] hover:text-primary cursor-pointer"
                >
                  {sub}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between gap-[100px] mt-10">
        <div className="flex gap-16">
          <div className="space-y-2">
            <img src={Logo} alt="Logo" className="w-[71px]" />
            <div className="text-sm text-gray-700 hover:*:text-primary *:cursor-pointer leading-7">
              <p>เกี่ยวกับ Mercular.com</p>
              <p>เราคือตัวแทนจำหน่าย</p>
              <p>ข้อตกลงและเงื่อนไข</p>
              <p>นโยบายความเป็นส่วนตัว</p>
              <p>ร่วมงานกับเรา</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-black text-base font-semibold">
              แผนกบริการลูกค้า
            </p>
            <div className="text-sm text-gray-700 hover:*:text-primary *:cursor-pointer leading-7">
              <p>ติดต่อเรา</p>
              <p>การสมัครสมาชิก</p>
              <p>วิธีการชำระเงินและบริการอื่น ๆ</p>
              <p>วิธีการขอใบกำกับภาษี</p>
              <p>วิธีการเคลมสินค้า</p>
              <p>รายละเอียดการประกันสินค้า</p>
              <p>คำถามที่พบบ่อย (FAQs)</p>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-black text-base font-semibold">รีวิวและบทความ</p>
            <div className="text-sm text-gray-700 hover:*:text-primary *:cursor-pointer leading-7">
              <p>บทความทั้งหมด</p>
              <p>Hobby News</p>
              <p>Buying Guide ๆ</p>
              <p>Tips & Tricks</p>
              <p>Editors' Pick</p>
              <p>รีวิวสินค้า</p>
              <p>Best of Mercular</p>
              <p>เปรียบเทียบสินค้า</p>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-black text-base font-semibold">ติดต่อเรา</p>
          <p className="text-sm text-gray-700">
            พูดคุย แลกเปลี่ยนประสบการณ์กันได้ที่ช่องทาง
          </p>
          <div className="flex gap-3 pt-4">
            {Social.map((item, index) => (
              <img key={index} src={item} alt="Social" className="size-9" />
            ))}
          </div>
        </div>
        <div className="space-y-4">
          <button className="flex gap-2 bg-[#f6f7f8] py-2 pl-3 w-[200px] rounded-lg text-gray-700 hover:text-primary hover:bg-[#ecf3fd] duration-200">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.5999 10.4004C21.5999 10.342 21.5935 10.2838 21.5807 10.2268L20.5407 5.53245C20.3475 4.64144 19.8538 3.84396 19.1424 3.27372C18.431 2.70348 17.5452 2.39516 16.6335 2.40046H7.3663C6.45514 2.3959 5.57009 2.70455 4.85937 3.27473C4.14864 3.84491 3.65542 4.64198 3.4623 5.53245L2.4191 10.2268C2.40631 10.2838 2.39987 10.342 2.3999 10.4004V11.2004C2.39926 11.9793 2.68384 12.7314 3.1999 13.3148V17.6004C3.20117 18.6609 3.62301 19.6776 4.37288 20.4274C5.12275 21.1773 6.13943 21.5991 7.1999 21.6004H16.7999C17.8604 21.5991 18.8771 21.1773 19.6269 20.4274C20.3768 19.6776 20.7986 18.6609 20.7999 17.6004V13.3148C21.316 12.7314 21.6005 11.9793 21.5999 11.2004V10.4004ZM3.9999 10.4876L5.0239 5.87965C5.13994 5.34545 5.43592 4.86731 5.86231 4.52523C6.28871 4.18315 6.81965 3.99789 7.3663 4.00045H7.9999V6.40044C7.9999 6.61262 8.08419 6.8161 8.23422 6.96613C8.38425 7.11616 8.58773 7.20044 8.7999 7.20044C9.01208 7.20044 9.21556 7.11616 9.36559 6.96613C9.51562 6.8161 9.5999 6.61262 9.5999 6.40044V4.00045H14.3999V6.40044C14.3999 6.61262 14.4842 6.8161 14.6342 6.96613C14.7842 7.11616 14.9877 7.20044 15.1999 7.20044C15.4121 7.20044 15.6156 7.11616 15.7656 6.96613C15.9156 6.8161 15.9999 6.61262 15.9999 6.40044V4.00045H16.6335C17.1802 3.99789 17.7111 4.18315 18.1375 4.52523C18.5639 4.86731 18.8599 5.34545 18.9759 5.87965L19.9999 10.4876V11.2004C19.9999 11.6248 19.8313 12.0317 19.5313 12.3318C19.2312 12.6319 18.8242 12.8004 18.3999 12.8004H17.5999C17.1756 12.8004 16.7686 12.6319 16.4685 12.3318C16.1685 12.0317 15.9999 11.6248 15.9999 11.2004C15.9999 10.9883 15.9156 10.7848 15.7656 10.6347C15.6156 10.4847 15.4121 10.4004 15.1999 10.4004C14.9877 10.4004 14.7842 10.4847 14.6342 10.6347C14.4842 10.7848 14.3999 10.9883 14.3999 11.2004C14.3999 11.6248 14.2313 12.0317 13.9313 12.3318C13.6312 12.6319 13.2242 12.8004 12.7999 12.8004H11.1999C10.7756 12.8004 10.3686 12.6319 10.0685 12.3318C9.76847 12.0317 9.5999 11.6248 9.5999 11.2004C9.5999 10.9883 9.51562 10.7848 9.36559 10.6347C9.21556 10.4847 9.01208 10.4004 8.7999 10.4004C8.58773 10.4004 8.38425 10.4847 8.23422 10.6347C8.08419 10.7848 7.9999 10.9883 7.9999 11.2004C7.9999 11.6248 7.83133 12.0317 7.53127 12.3318C7.23122 12.6319 6.82425 12.8004 6.3999 12.8004H5.5999C5.17556 12.8004 4.76859 12.6319 4.46853 12.3318C4.16847 12.0317 3.9999 11.6248 3.9999 11.2004V10.4876ZM16.7999 20.0004H7.1999C6.56338 20.0004 5.95293 19.7475 5.50285 19.2975C5.05276 18.8474 4.7999 18.2369 4.7999 17.6004V14.2988C5.06118 14.3665 5.33001 14.4006 5.5999 14.4004H6.3999C6.85416 14.4007 7.30323 14.3039 7.71711 14.1167C8.13099 13.9295 8.50014 13.6561 8.7999 13.3148C9.09966 13.6561 9.46882 13.9295 9.8827 14.1167C10.2966 14.3039 10.7457 14.4007 11.1999 14.4004H12.7999C13.2542 14.4007 13.7032 14.3039 14.1171 14.1167C14.531 13.9295 14.9001 13.6561 15.1999 13.3148C15.4997 13.6561 15.8688 13.9295 16.2827 14.1167C16.6966 14.3039 17.1456 14.4007 17.5999 14.4004H18.3999C18.6698 14.4006 18.9386 14.3665 19.1999 14.2988V17.6004C19.1999 18.2369 18.947 18.8474 18.497 19.2975C18.0469 19.7475 17.4364 20.0004 16.7999 20.0004Z"
                fill="currentColor"
              ></path>
            </svg>
            ที่ตั้งร้าน
          </button>
          <button className="flex items-center gap-2 bg-[#f6f7f8] py-2 px-3 w-[200px] rounded-lg text-gray-700 hover:bg-[#ecf3fd] duration-200">
            <img src={Thai} alt="Thai" className="rounded-full size-6" />
            ภาษาไทย
            <IoIosArrowDown className="text-xl ml-auto" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
