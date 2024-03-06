import React, { useState } from 'react';
import "../styles/CreateStore.css";
import { Link } from 'react-router-dom';
import { GoChevronLeft } from "react-icons/go";
import { IoStorefrontOutline } from "react-icons/io5";
const CreateStore = () =>{
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [phone, setPhone] = useState('');
    const handleSubmit = async (event) => {
        event.preventDefault();
    };

    return(
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

            <div className='form-reservation'>
                
                <form className='reservation' onSubmit={handleSubmit}>
                    <p className='sub-topic'><IoStorefrontOutline /> ข้อมูลร้าน</p>
                    <div>
                        <h4>⚪ | </h4>
                        <input
                            type="text"
                            className='input_resevation_1'
                            placeholder="ชื่อร้านค้า"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <h4>⚪ | </h4>
                        <input
                            type="text"
                            className='input_resevation_2'
                            placeholder="ประเภทร้านค้า"
                            value={type}
                            onChange={(e) => setType(e.target.value)}
                        />
                    </div>
                    <div>
                        <h4>⚪ | </h4>
                        <input
                            type="text"
                            className='input_resevation_2'
                            placeholder="เบอร์โทรศัพท์ร้านค้า"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                        />
                    </div>
                    <Link to={"/SelectStall"} state={{ name, type, phone }}>
                    <button className="button-reservation" type="submit">บันทึก</button>
                </Link>
                </form>
            </div>

        </div>
    );
}

export default CreateStore;
