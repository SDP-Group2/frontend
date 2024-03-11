import React, { useState, useEffect } from "react";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
    const [notificationData, setNotificationData] = useState([]);
    const [stallData, setStallData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/report/all', {
            method: 'GET',
            headers: {
                "api-key": "2ff20d0d99465c2d929666dc96d0620dbbc48b2d79f575a3784ae786b76628a6",
            }
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            const modifiedData = data.map(item => ({
                ...item,
                filePath: item.filePath.substring(item.filePath.indexOf("Public/") + 7)
            }));
            setNotificationData(modifiedData);
        })
        .catch(error => {
            console.error('Error fetching notification data:', error);
        });
    }, []); // เรียก useEffect เมื่อคอมโพเนนต์ถูกโหลดครั้งแรกเท่านั้น

    useEffect(() => {
        fetch('http://localhost:5000/stall/all', {
            method: 'GET',
            headers: {
                "api-key": "2ff20d0d99465c2d929666dc96d0620dbbc48b2d79f575a3784ae786b76628a6",
            }
        })
        .then(response => response.json())

        .then(data => {
            console.log(data);
            const modifiedData = data.map(item => ({
                ...item,
                filePath: item.path_to_imag_slip.substring(item.path_to_imag_slip.indexOf("Public/") + 7)
            }));
            
            setStallData(modifiedData);

            const mergedData = mergeDataByName(stallData);
            setStallData(mergedData);
            console.log(stallData)
        })
        .catch(error => {
            console.error('Error fetching stall data:', error);
        });
    }, []);
    const mergeDataByName = (data) => {
        const mergedData = {};
        data.forEach(item => {
            const combinedKey = `${item.lock_key}${item.num}`;
            if (!mergedData[item.Name_shop]) {
                mergedData[item.Name_shop] = {
                    ...item,
                    combinedKey: [combinedKey],
                    duration: calculateDuration(item.date_start, item.date_end)
                };
            } else {
                mergedData[item.Name_shop].combinedKey.push(combinedKey);
            }
        });
        return Object.values(mergedData);
    };
    const calculateDuration = (start, end) => {
        const startDate = new Date(start);
        const endDate = new Date(end);
        const duration = Math.ceil((endDate - startDate) / (1000 * 60 * 60 * 24));
        return duration;
    };
    return (
        <div className="admin_dashboard">
            <div className='nav'>
                <div className="nav_L">
                    <div className="circle"></div>
                    <div className="infor_admin">
                        <p className="name_admin">Thamdee Meesatang</p>
                        <p className="sub_title">ผู้ดูแลตลาด</p>
                    </div>
                </div>
            </div>
            <div className='financial'>
                <div className='notification'>
                    <h4>แสดงการรายงาน</h4>
                    {notificationData.map((notification, index) => (
                        <div key={index}>
                            <p className="name_report">ที่ไหน : {notification.location} :</p> 
                            <p className="place">เหตุ{notification.report}</p>
                            <a href={`http://localhost:5000/${notification.filePath}`}  target="_blank"> รูปภาพประกอบ </a>
                        </div>
                    ))}
                </div>

            </div>
            <div className='financial'>
            <div className='notification'>
                    <h4>แสดงการขออนุมัติ</h4>
                    {stallData.map((data, index) => (
                        <div key={index}>
                            <p className="name_report">ชื่อร้านค้า {data.Name_shop} :</p> 
                            <p className="place">lock {data.combinedKey}</p>

                            <a href={`http://localhost:5000/${data.filePath}`}  target="_blank"> รูปภาพประกอบ </a>
                            <p>ตั้งแต่วันที่ {new Date(data.date_start).toLocaleDateString()} - {new Date(data.date_end).toLocaleDateString()}</p>
                        </div>
                        
                    ))}
                </div>
                </div>
        </div>
    );
}

export default AdminDashboard;
