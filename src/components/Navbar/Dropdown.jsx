import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa6";
import Audio from "../../assets/categorys/audio/audio.png";
import Computer from "../../assets/categorys/computer/computer.webp";
import Gaming from "../../assets/categorys/gaming/gaming.webp";
import WorkStation from "../../assets/categorys/work-station/work-station.webp";
import MobileAccessory from "../../assets/categorys/mobile-accessory/mobile-accessory.webp";
import SmartGadget from "../../assets/categorys/smart-gadget/smart-gadget.webp";
import ProfessionalAudio from "../../assets/categorys/professional-audio/professional-audio.png";
import TV from "../../assets/categorys/tv/tv.webp";
import Speaker from "../../assets/categorys/audio/speaker.webp";
import DapDacAmp from "../../assets/categorys/audio/dap-dac-amp.webp";
import HeadphoneAccessory from "../../assets/categorys/audio/headphone-accessory.webp";
import SpeakerAccessory from "../../assets/categorys/audio/speaker-accessory.png";
import WirelessHeadphone from "../../assets/categorys/audio/headphone/wireless-headphone.png";
import TrueWirelessHeadphone from "../../assets/categorys/audio/headphone/true-wireless-headphone.webp";
import OnEarOverEarHeadphone from "../../assets/categorys/audio/headphone/on-ear-over-ear-headphone.png";
import SportHeadphone from "../../assets/categorys/audio/headphone/sport-headphone.png";
import InEarHeadphone from "../../assets/categorys/audio/headphone/in-ear-headphone.webp";
import EarbudHeadphone from "../../assets/categorys/audio/headphone/earbud-headphone.webp";
import BluetoothHeadsetCallCenter from "../../assets/categorys/audio/headphone/bluetooth-headset-call-center.png";
import PortableSpeaker from "../../assets/categorys/audio/speaker/portable-speaker.webp";
import WirelessSpeaker from "../../assets/categorys/audio/speaker/wireless-speaker.webp";
import ComputerSpeaker from "../../assets/categorys/audio/speaker/computer-speaker.webp";
import Soundbar from "../../assets/categorys/audio/speaker/soundbar.webp";
import PartySpeaker from "../../assets/categorys/audio/speaker/party-speaker.webp";
import ConferenceSpeaker from "../../assets/categorys/audio/speaker/conference-speaker.png";
import MultiRoom from "../../assets/categorys/audio/speaker/multi-room.webp";
import HomeSpeaker from "../../assets/categorys/audio/speaker/home-speaker.webp";
import Dap from "../../assets/categorys/audio/dap-dac-amp/dap.webp";
import DACAmp from "../../assets/categorys/audio/dap-dac-amp/dac-amplifiers.webp";
import TurntableCartridge from "../../assets/categorys/audio/dap-dac-amp/turntable-cartridge.webp";
import Eartip from "../../assets/categorys/audio/headphone-accessory/eartip.webp";
import HeadphoneChord from "../../assets/categorys/audio/headphone-accessory/headphone-chord.png";
import HeadphoneCase from "../../assets/categorys/audio/headphone-accessory/headphone-case.webp";
import HeadphoneStand from "../../assets/categorys/audio/headphone-accessory/headphone-stand.png";
import AudioWire from "../../assets/categorys/audio/speaker-accessory/audio-wire.png";
import AudioPowerPlugPowerFilter from "../../assets/categorys/audio/speaker-accessory/audio-power-plug-power-filter.webp";
import SpeakerStand from "../../assets/categorys/audio/speaker-accessory/speaker-stand.png";
import BluetoothRecieverTransmitter from "../../assets/categorys/audio/speaker-accessory/bluetooth-reciever-transmitter.webp";
import CaseAndAudioAccessories from "../../assets/categorys/audio/speaker-accessory/case-and-audio-accessories.webp";
import Marshall from "../../assets/categorys/audio/brand/marshall.webp";
import Klipsch from "../../assets/categorys/audio/brand/klipsch.webp";
import Edifier from "../../assets/categorys/audio/brand/edifier.webp";
import BO from "../../assets/categorys/audio/brand/bo.webp";
import Soundpeats from "../../assets/categorys/audio/brand/soundpeats.webp";
import JBL from "../../assets/categorys/audio/brand/jbl.webp";
import Sony from "../../assets/categorys/audio/brand/sony.webp";
import Jabra from "../../assets/categorys/audio/brand/jabra.webp";
import Bose from "../../assets/categorys/audio/brand/bose.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Navigation } from "swiper/modules";

const headphone = [
  {
    img: WirelessHeadphone,
    title: "หูฟังไร้สาย & หูฟังบลูทูธ",
  },
  {
    img: TrueWirelessHeadphone,
    title: "หูฟัง True Wireless",
  },
  {
    img: OnEarOverEarHeadphone,
    title: "หูฟังครอบหู & แนบหู",
  },
  {
    img: SportHeadphone,
    title: "หูฟังออกกำลังกาย",
  },
  {
    img: InEarHeadphone,
    title: "หูฟัง In Ear",
  },
  {
    img: EarbudHeadphone,
    title: "หูฟัง Earbud",
  },
  {
    img: BluetoothHeadsetCallCenter,
    title: "หูฟัง Call Center",
  },
];

const speaker = [
  {
    img: PortableSpeaker,
    title: "ลำโพงพกพา",
  },
  {
    img: WirelessSpeaker,
    title: "ลำโพง Bluetooth",
  },
  {
    img: ComputerSpeaker,
    title: "ลำโพงคอมพิวเตอร์",
  },
  {
    img: Soundbar,
    title: "ลำโพงซาวด์บาร์ (Soundbar)",
  },
  {
    img: PartySpeaker,
    title: "ลำโพงเคลื่อนที่",
  },
  {
    img: ConferenceSpeaker,
    title: "ลำโพงห้องประชุม (Conference speaker)",
  },
  {
    img: MultiRoom,
    title: "ลำโพง Multi-room",
  },
  {
    img: HomeSpeaker,
    title: "เครื่องเสียงบ้าน",
  },
];

const dapDacAmp = [
  {
    img: Dap,
    title: "เครื่องเล่นเพลงพกพา (DAP)",
  },
  {
    img: DACAmp,
    title: "DAC-Amplifiers",
  },
  {
    img: TurntableCartridge,
    title: "เครื่องเล่นแผ่นเสียง",
  },
];

const headphoneAccessory = [
  {
    img: Eartip,
    title: "ฟองน้ำหูฟัง / จุกหูฟัง",
  },
  {
    img: HeadphoneChord,
    title: "สายหูฟัง",
  },
  {
    img: HeadphoneCase,
    title: "เคสหูฟัง",
  },
  {
    img: HeadphoneStand,
    title: "ที่แขวนหูฟัง",
  },
];

const speakerAccessory = [
  {
    img: AudioWire,
    title: "สายสัญญาณ",
  },
  {
    img: AudioPowerPlugPowerFilter,
    title: "เครื่องกรองไฟ",
  },
  {
    img: SpeakerStand,
    title: "ขาตั้งลำโพง",
  },
  {
    img: BluetoothRecieverTransmitter,
    title: "ตัวเชื่อมสัญญาณบลูทูธ (Bluetooth Connector)",
  },
  {
    img: CaseAndAudioAccessories,
    title: "เคสและอุปกรณ์เสริมอื่นๆ",
  },
];

function Dropdown() {
  const [title, setTitle] = useState("");
  const [cate, setCate] = useState("");
  useEffect(() => {
    setTitle("หูฟัง/ลำโพง");
  }, []);

  useEffect(() => {
    title == "หูฟัง/ลำโพง" && setCate("หูฟัง");
  }, [title]);

  return (
    <div className="invisible absolute flex bg-white shadow-xl mt-1 rounded-lg group-hover:visible">
      <div className="bg-[#f4f6f8] flex flex-col p-3 w-[230px] rounded-s-lg">
        <p className="font-semibold pb-3">สินค้าทั้งหมด</p>
        <ul className="font-semibold text-sm *:py-2 *:px-2 *:mb-0.5 *:gap-3 *:rounded-lg *:flex *:items-center *:cursor-pointer">
          <li
            className={`${
              title == "หูฟัง/ลำโพง" && "bg-[#cfdef5] font-bold text-[#0f63e9]"
            }`}
            onMouseEnter={() => setTitle("หูฟัง/ลำโพง")}
          >
            <img className="w-8" src={Audio} alt="audio" />
            หูฟัง/ลำโพง
          </li>
          <li
            className={`${
              title == "คอมพิวเตอร์" && "bg-[#cfdef5] font-bold text-[#0f63e9]"
            }`}
            onMouseEnter={() => setTitle("คอมพิวเตอร์")}
          >
            <img className="w-8" src={Computer} alt="Computer" />
            คอมพิวเตอร์
          </li>
          <li
            className={`${
              title == "เกมมิ่ง" && "bg-[#cfdef5] font-bold text-[#0f63e9]"
            }`}
            onMouseEnter={() => setTitle("เกมมิ่ง")}
          >
            <img className="w-8" src={Gaming} alt="Gaming" />
            เกมมิ่ง
          </li>
          <li
            className={`${
              title == "จัดโต๊ะคอม" && "bg-[#cfdef5] font-bold text-[#0f63e9]"
            }`}
            onMouseEnter={() => setTitle("จัดโต๊ะคอม")}
          >
            <img className="w-8" src={WorkStation} alt="WorkStation" />
            จัดโต๊ะคอม
          </li>
          <li
            className={`${
              title == "อุปกรณ์มือถือ" &&
              "bg-[#cfdef5] font-bold text-[#0f63e9]"
            }`}
            onMouseEnter={() => setTitle("อุปกรณ์มือถือ")}
          >
            <img className="w-8" src={MobileAccessory} alt="MobileAccessory" />
            อุปกรณ์มือถือ
          </li>
          <li
            className={`${
              title == "แกตเจ็ต" && "bg-[#cfdef5] font-bold text-[#0f63e9]"
            }`}
            onMouseEnter={() => setTitle("แกตเจ็ต")}
          >
            <img className="w-8" src={SmartGadget} alt="SmartGadget" />
            แกตเจ็ต
          </li>
          <li
            className={`${
              title == "เครื่องเสียงมืออาชีพ" &&
              "bg-[#cfdef5] font-bold text-[#0f63e9]"
            }`}
            onMouseEnter={() => setTitle("เครื่องเสียงมืออาชีพ")}
          >
            <img
              className="w-8"
              src={ProfessionalAudio}
              alt="ProfessionalAudio"
            />
            เครื่องเสียงมืออาชีพ
          </li>
          <li
            className={`${
              title == "ทีวี" && "bg-[#cfdef5] font-bold text-[#0f63e9]"
            }`}
            onMouseEnter={() => setTitle("ทีวี")}
          >
            <img className="w-8" src={TV} alt="TV" />
            ทีวี
          </li>
        </ul>
      </div>
      <div className="flex flex-col w-[730px] p-4">
        <div className="flex justify-between font-semibold">
          <p>{title}</p>
          <div className="flex gap-1.5 items-center text-sm text-[#0f63e9] hover:bg-[#ecf3fd] rounded-lg p-[5px] cursor-pointer">
            <p>ดูทั้งหมด</p>
            <div className="bg-[#ecf3fe] rounded-full p-0.5 text-[10px]">
              <FaArrowRight />
            </div>
          </div>
        </div>
        <div className="relative">
          <Swiper
            className="w-full pt-3 pb-4"
            slidesPerView={"auto"}
            spaceBetween={12}
            navigation={{
              nextEl: ".swiper-drop-button-next",
              prevEl: ".swiper-drop-button-prev",
            }}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <div
                className={`overflow-visible relative flex items-center justify-center pl-16 h-14 w-[150px] pr-3 rounded-lg cursor-pointer ${
                  cate == "หูฟัง"
                    ? "bg-[#cfdef5] text-[#0f63e9]"
                    : "bg-[#f4f6f8]"
                }`}
                onMouseEnter={() => setCate("หูฟัง")}
              >
                <img
                  src={Audio}
                  alt="Audio"
                  className="w-16 absolute left-0.5 -top-2"
                />
                <p className="line-clamp-2 text-sm font-semibold text-center">
                  หูฟัง
                </p>
                {cate == "หูฟัง" && (
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-solid border-t-0 border-r-[25px] border-l-[25px] border-b-[20px] border-l-transparent border-r-transparent border-t-transparent border-b-[#f4f6f8]"></span>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`overflow-visible relative flex items-center justify-center pl-16 h-14 w-[150px] pr-3 rounded-lg cursor-pointer ${
                  cate == "ลำโพง"
                    ? "bg-[#cfdef5] text-[#0f63e9]"
                    : "bg-[#f4f6f8]"
                }`}
                onMouseEnter={() => setCate("ลำโพง")}
              >
                <img
                  src={Speaker}
                  alt="Speaker"
                  className="w-16 absolute left-0.5 -top-2"
                />
                <p className="line-clamp-2 text-sm font-semibold text-center">
                  ลำโพง
                </p>
                {cate == "ลำโพง" && (
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-solid border-t-0 border-r-[25px] border-l-[25px] border-b-[20px] border-l-transparent border-r-transparent border-t-transparent border-b-[#f4f6f8]"></span>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`overflow-visible relative flex items-center justify-center pl-16 h-14 w-[150px] pr-3 rounded-lg cursor-pointer ${
                  cate == "เครื่องเล่นเพลง & DAC"
                    ? "bg-[#cfdef5] text-[#0f63e9]"
                    : "bg-[#f4f6f8]"
                }`}
                onMouseEnter={() => setCate("เครื่องเล่นเพลง & DAC")}
              >
                <img
                  src={DapDacAmp}
                  alt="DapDacAmp"
                  className="w-16 absolute left-0.5 -top-2"
                />
                <p className="line-clamp-2 text-sm font-semibold text-center">
                  เครื่องเล่นเพลง & DAC
                </p>
                {cate == "เครื่องเล่นเพลง & DAC" && (
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-solid border-t-0 border-r-[25px] border-l-[25px] border-b-[20px] border-l-transparent border-r-transparent border-t-transparent border-b-[#f4f6f8]"></span>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`overflow-visible relative flex items-center justify-center pl-16 h-14 w-[150px] pr-3 rounded-lg cursor-pointer ${
                  cate == "อุปกรณ์เสริมหูฟัง"
                    ? "bg-[#cfdef5] text-[#0f63e9]"
                    : "bg-[#f4f6f8]"
                }`}
                onMouseEnter={() => setCate("อุปกรณ์เสริมหูฟัง")}
              >
                <img
                  src={HeadphoneAccessory}
                  alt="HeadphoneAccessory"
                  className="w-16 absolute left-0.5 -top-2"
                />
                <p className="line-clamp-2 text-sm font-semibold text-center">
                  อุปกรณ์เสริมหูฟัง
                </p>
                {cate == "อุปกรณ์เสริมหูฟัง" && (
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-solid border-t-0 border-r-[25px] border-l-[25px] border-b-[20px] border-l-transparent border-r-transparent border-t-transparent border-b-[#f4f6f8]"></span>
                )}
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div
                className={`overflow-visible relative flex items-center justify-center pl-16 h-14 w-[150px] pr-3 rounded-lg cursor-pointer ${
                  cate == "อุปกรณ์เสริมลำโพง"
                    ? "bg-[#cfdef5] text-[#0f63e9]"
                    : "bg-[#f4f6f8]"
                }`}
                onMouseEnter={() => setCate("อุปกรณ์เสริมลำโพง")}
              >
                <img
                  src={SpeakerAccessory}
                  alt="SpeakerAccessory"
                  className="w-16 absolute left-0.5 -top-2"
                />
                <p className="line-clamp-2 text-sm font-semibold text-center">
                  อุปกรณ์เสริมลำโพง
                </p>
                {cate == "อุปกรณ์เสริมลำโพง" && (
                  <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-0 h-0 border-solid border-t-0 border-r-[25px] border-l-[25px] border-b-[20px] border-l-transparent border-r-transparent border-t-transparent border-b-[#f4f6f8]"></span>
                )}
              </div>
            </SwiperSlide>
          </Swiper>
          <button className="swiper-drop-button-prev absolute -left-2 top-1/2 -translate-y-1/4 cursor-pointer bg-white rounded-full text-xs text-[#0f63e9] p-1.5 z-10 shadow-md">
            <FaAngleLeft />
          </button>
          <button className="swiper-drop-button-next absolute -right-2 top-1/2 -translate-y-1/4 cursor-pointer bg-white rounded-full text-xs text-[#0f63e9] p-1.5 z-10 shadow-md">
            <FaAngleRight />
          </button>
        </div>
        <div className="bg-[#f4f6f8] h-[215px] rounded-lg pt-5 px-4">
          <div className="flex justify-between font-semibold">
            <p>{cate}</p>
            <div className="flex gap-1.5 items-center text-sm text-[#0f63e9] hover:bg-[#ecf3fd] rounded-lg p-[5px] cursor-pointer">
              <p>ดูทั้งหมด</p>
              <div className="bg-[#ecf3fe] rounded-full p-0.5 text-[10px]">
                <FaArrowRight />
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 h-[164px] overflow-y-auto scrollbar-hide">
            {cate == "หูฟัง" &&
              headphone.map((item, index) => (
                <button
                  key={index}
                  className="rounded-xl w-[100px] h-28 px-2 focus:outline-none flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#d8e6fb] hover:text-[#0f63e9]"
                >
                  <img src={item.img} alt={item.title} className="w-14" />
                  <p className="font-medium text-sm text-center line-clamp-2">
                    {item.title}
                  </p>
                </button>
              ))}
            {cate == "ลำโพง" &&
              speaker.map((item, index) => (
                <button
                  key={index}
                  className="rounded-xl w-[100px] h-28 px-2 focus:outline-none flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#d8e6fb] hover:text-[#0f63e9]"
                >
                  <img src={item.img} alt={item.title} className="w-14" />
                  <p className="font-medium text-sm text-center line-clamp-2">
                    {item.title}
                  </p>
                </button>
              ))}
            {cate == "เครื่องเล่นเพลง & DAC" &&
              dapDacAmp.map((item, index) => (
                <button
                  key={index}
                  className="rounded-xl w-[100px] h-28 px-2 focus:outline-none flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#d8e6fb] hover:text-[#0f63e9]"
                >
                  <img src={item.img} alt={item.title} className="w-14" />
                  <p className="font-medium text-sm text-center line-clamp-2">
                    {item.title}
                  </p>
                </button>
              ))}
            {cate == "อุปกรณ์เสริมหูฟัง" &&
              headphoneAccessory.map((item, index) => (
                <button
                  key={index}
                  className="rounded-xl w-[100px] h-28 px-2 focus:outline-none flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#d8e6fb] hover:text-[#0f63e9]"
                >
                  <img src={item.img} alt={item.title} className="w-14" />
                  <p className="font-medium text-sm text-center line-clamp-2">
                    {item.title}
                  </p>
                </button>
              ))}
            {cate == "อุปกรณ์เสริมลำโพง" &&
              speakerAccessory.map((item, index) => (
                <button
                  key={index}
                  className="rounded-xl w-[100px] h-28 px-2 focus:outline-none flex flex-col items-center justify-center gap-2 cursor-pointer hover:bg-[#d8e6fb] hover:text-[#0f63e9]"
                >
                  <img src={item.img} alt={item.title} className="w-14" />
                  <p className="font-medium text-sm text-center line-clamp-2">
                    {item.title}
                  </p>
                </button>
              ))}
          </div>
        </div>
        <p className="font-semibold mt-6">แบรนด์แนะนำ</p>
        <div className="relative">
          <Swiper
            className="w-full p-[1px]"
            slidesPerView={"auto"}
            spaceBetween={19}
            navigation={{
              nextEl: ".swiper-brand-button-next",
              prevEl: ".swiper-brand-button-prev",
            }}
            modules={[Navigation]}
          >
            <SwiperSlide>
              <img
                src={Marshall}
                alt="Marshall"
                className="w-[70px] cursor-pointer rounded-lg hover:drop-shadow-sm"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Klipsch}
                alt="Klipsch"
                className="w-[70px] cursor-pointer rounded-lg hover:drop-shadow-sm"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Edifier}
                alt="Edifier"
                className="w-[70px] cursor-pointer rounded-lg hover:drop-shadow-sm"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={BO}
                alt="BO"
                className="w-[70px] cursor-pointer rounded-lg hover:drop-shadow-sm"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Soundpeats}
                alt="Soundpeats"
                className="w-[70px] cursor-pointer rounded-lg hover:drop-shadow-sm"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={JBL}
                alt="JBL"
                className="w-[70px] cursor-pointer rounded-lg hover:drop-shadow-sm"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Sony}
                alt="Sony"
                className="w-[70px] cursor-pointer rounded-lg hover:drop-shadow-sm"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Jabra}
                alt="Jabra"
                className="w-[70px] cursor-pointer rounded-lg hover:drop-shadow-sm"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={Bose}
                alt="Bose"
                className="w-[70px] cursor-pointer rounded-lg hover:drop-shadow-sm"
              />
            </SwiperSlide>
          </Swiper>
          <button className="swiper-brand-button-prev absolute -left-2 top-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full text-xs text-[#0f63e9] p-1.5 z-10 shadow-md">
            <FaAngleLeft />
          </button>
          <button className="swiper-brand-button-next absolute -right-2 top-1/2 -translate-y-1/2 cursor-pointer bg-white rounded-full text-xs text-[#0f63e9] p-1.5 z-10 shadow-md">
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
