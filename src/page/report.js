import React, { useState } from 'react';
import "../styles/Report.css";
import { GoChevronLeft } from "react-icons/go";

const Report = () =>{
    const [location, setLocation] = useState('');
    const [report, setReport] = useState('');
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            if (location.trim().length > 50 || report.trim().length > 127) {
                setShowAlert(true);
                return;
            }

            console.log({ location, report });
            const response = await fetch('http://localhost:5000/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': '2ff20d0d99465c2d929666dc96d0620dbbc48b2d79f575a3784ae786b76628a6'
                },
                body: JSON.stringify({ location, report  })
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
        <div className="reportpage">
            <div className="nav_report">
                <GoChevronLeft size={40} color="gray" style={{ fontWeight: 'bold' }} />
                <h2>รายงาน</h2>
            </div>
            <form className='location_form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    className='input_small'
                    placeholder="ระบุสถานที่"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    required
                />
                <textarea
                    className='input_large'
                    placeholder="ระบุหมายเหตุ"
                    value={report}
                    onChange={(e) => setReport(e.target.value)}
                    required
                />
                {showAlert && <div className="alert">กรุณาตรวจสอบด้วยว่าสถานที่ต้องไม่เกิน 50 ตัวอักษร และ ระบุหมายเหตุต้องไม่เกิน 127 ตัวอักษร</div>}
                <button type="submit">รายงาน</button>
            </form>

        </div>
    );
}

export default Report;
