import React from "react";

function Dropdown() {
  return (
    <div class="invisible absolute z-50 flex bg-white shadow-xl group-hover:visible">
      <div className="bg-[#f4f6f8] flex flex-col p-3">
        <p>สินค้าทั้งหมด</p>
        <ul>
          <li>หูฟัง/ลำโพง</li>
          <li>คอมพิวเตอร์</li>
          <li>เกมมิ่ง</li>
          <li>จัดโต๊ะคอม</li>
          <li>อุปกรณ์มือถือ</li>
          <li>แกตเจ็ต</li>
          <li>เครื่องเสียงมืออาชีพ</li>
          <li>ทีวี</li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}

export default Dropdown;
