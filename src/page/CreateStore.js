import React, { useState } from 'react';
import "../styles/CreateStore.css";
import { IoStorefrontOutline } from "react-icons/io5";

const Report = () =>{
    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log({ name, type, phone});
            const response = await fetch('http://localhost:5000/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },

                body: JSON.stringify({ name,type,phone })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            console.log('Report submitted successfully!');
        } catch (error) {
            console.error('Error submitting report:', error);
        }
    };

    return(
        <div>
            <h1 className='topic-store'>จองล็อค</h1>
            <div className='form-reservation'>
            <form className='reservation' onSubmit={handleSubmit}>
                <p className='sub-topic'><IoStorefrontOutline /> ข้อมูลร้าน</p>
                <input
                    type="text"
                    className='input_resevation_1'
                    placeholder="⚪ | ชื่อร้านค้า"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    type="text"
                    className='input_resevation_2'
                    placeholder="⚪ | ประเภทร้านค้า"
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                />
                <input
                    type="text"
                    className='input_resevation_2'
                    placeholder="⚪ | เบอร์โทรศัพท์ร้านค้า"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <button className="button-reservation" type="submit">บันทึก</button>
            </form>
            </div>
        </div>
    );
}

export default Report;
