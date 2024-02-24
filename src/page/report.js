import React, { useState } from 'react';
import "../styles/Report.css";

const Report = () =>{
    const [location, setLocation] = useState('');
    const [report, setReport] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log({ location, report });
            const response = await fetch('http://localhost:5000/report', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
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
        <div>
            <h1>รายงาน</h1>
            <form className='location_form' onSubmit={handleSubmit}>
                <input
                    type="text"
                    className='input_small'
                    placeholder="ระบุสถานที่"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <textarea
                    className='input_large'
                    placeholder="ระบุหมายเหตุ"
                    value={report}
                    onChange={(e) => setReport(e.target.value)}
                />
                <button type="submit">รายงาน</button>
            </form>
        </div>
    );
}

export default Report;
