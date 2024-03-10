import React, { useState } from 'react';
import "../styles/notification.css";
import { RiDeleteBin5Line } from "react-icons/ri";
import { GoChevronLeft } from "react-icons/go";

const Report = () =>{
    const [location, setLocation] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('https://example.com/api/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ location, notes })
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            // Handle success
            console.log('Report submitted successfully!');
        } catch (error) {
            // Handle error
            console.error('Error submitting report:', error);
        }
    };

    return(
        <div className='notification_page'>
            <div class="head_info">
                <div class="txt_head_info">
                    <GoChevronLeft size={40} color="gray" style={{ fontWeight: 'bold' }} />
                    <h2>การแจ้งเตือน</h2>
                </div>
            </div>

            <div class="container-noti">
                <div class="form-group-noti">
                    <div class="noti-name">
                        <label for="username">ผู้ดูแลตลาด</label>
                        <p id="username" name="username">การจองล็อคร้านยำอร่อยแซ่บได้รับอนุมัติแล้ว </p>
                    </div>
                    <div class="icon-noit">
                        <RiDeleteBin5Line />
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Report;
