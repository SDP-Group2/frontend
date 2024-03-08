import React, { useState, useEffect } from "react";
import "../styles/CreateStore.css";
import { Link } from "react-router-dom";
import { GoChevronLeft } from "react-icons/go";
import { IoStorefrontOutline } from "react-icons/io5";

const CreateStore = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (submitted) {
      window.location.href = "/SelectStall";
    }
  }, [submitted]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (name.trim() !== "" && type !== "" && phone.trim() !== "" && name.trim().length <= 50 && phone.trim().length == 10 && /^\d+$/.test(phone.trim())){
      console.log("Form submitted");
      window.location.href = `/SelectStall?name=${name}&type=${type}&phone=${phone}`;
    }
    else{
        setShowAlert(true);
    }
  };

  return (
    <div className="createstorepage">
    <div className="nav_reserve">
        <GoChevronLeft size={40} color="gray" style={{ fontWeight: 'bold' }} />
        <h2>จองล็อค</h2>
    </div>
    <div className="show-state">
        <div className="back">
            <div className="store_selectstall"></div>
            <div className="selectstall_payment"></div>
        </div>
        <div className="front">
            <div className="store">
                <div className="symbol">
                </div>
                <h4>ข้อมูลร้าน</h4>
            </div>
            <div className="select_stall">
                <div className="symbol"></div>
                <h4>จองล็อค</h4>
            </div>
            <div className="payment">
                <div className="symbol"></div>
                <h4>จ่ายเงิน</h4>
            </div>
        </div>
    </div>

      <div className="form-reservation">
        <form className="reservation" onSubmit={handleSubmit}>
          <p className="sub-topic">
            <IoStorefrontOutline /> ข้อมูลร้าน
          </p>
          {showAlert && <div className="alert">กรุณาตรวจสอบด้วยว่าชื่อร้านค้าต้องไม่เกิน 50 ตัวอักษร <br/>และ เบอร์โทรศัพท์ร้านค้าต้องเป็นเลขเท่ากับ 10 ตัว</div>}
          <div>

            <h4>⚪ | </h4>
            <input
              type="text"
              className="input_resevation_1"
              placeholder="ชื่อร้านค้า"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <h4>⚪ | </h4>
            <select
              className="select_resevation_2"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            >
              <option value="">เลือกประเภทร้านค้า</option>
              <option value="food">อาหาร</option>
              <option value="cloth">เสื้อผ้า</option>
              <option value="Normal">ทั่วไป</option>
            </select>
          </div>
          <div>
            <h4>⚪ | </h4>
            <input
              type="text"
              className="input_resevation_2"
              placeholder="เบอร์โทรศัพท์ร้านค้า"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <button className="button-reservation" type="submit">
            บันทึก
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateStore;
