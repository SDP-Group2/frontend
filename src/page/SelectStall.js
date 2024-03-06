import { React, useState, useEffect } from "react";
import { GoCheckCircle } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";
import "../styles/SelectStall.css";
import Stall from '../components/Stall';

function SelectStall() {
    const keys = 'ABCDEFGHIJKLMNOPQRST';
    const [dataCol, setDataCol] = useState([]);
    const [dataRow, setDataRow] = useState([]);

    useEffect(() => {
        const initialDataCol = {};
        for (let key of keys) {
            initialDataCol[key] = 0;
        }
        setDataCol(initialDataCol);
    
        const initialDataRow = Array.from({ length: 20 }, (_, index) => {
            return {num: String(index + 1), status: 1 };
        });
        setDataRow(initialDataRow);
    }, []);

    const [selectedCol, setSelectedCol] = useState([dataCol]);
    const [selectedRow, setSelectedRow] = useState([dataRow]);

    const colCallback = (col) => {
        const updatedSelectedCol = {};
        Object.keys(selectedCol).forEach((key) => {
            updatedSelectedCol[key] = key === col ? 1 : 0;
        });
        setSelectedCol(updatedSelectedCol);
        Object.keys(selectedRow).forEach((key) => {
            setSelectedRow((prevSelectedRow) => ({ ...prevSelectedRow, [key]: 0 }));
        });

        if(col){
            fetchKeysFromDatabase()
        }

        const fetchKeysFromDatabase = () => {
            fetch(`http://localhost:5000/market/${col}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'api-key': '2ff20d0d99465c2d929666dc96d0620dbbc48b2d79f575a3784ae786b76628a6'
                }
            })
                .then(response => response.json())
                .then(data => {
                    setDataRow(data);
                })
                .catch(error => console.error('Error fetching data:', error));
        };
    };

    const rowCallback = (row) => {
        setSelectedRow({ ...selectedRow, [row]: 1 });
    };

    const [selectedRent, setSelectedRent] = useState({ daily: false, monthly: false });

    const selectDaily = () => {
        setSelectedRent({ ...selectedRent, daily: !selectedRent.daily, monthly: false });
    };

    const selectMonthly = () => {
        setSelectedRent({ ...selectedRent, daily: false, monthly: !selectedRent.monthly });
    };

    return (
        <div className="selectpage">
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
                            <GoCheckCircle size={40} color="white" style={{ fontWeight: 'bold' }} />
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
            <div className="selectstall">
                <h3>จองล็อค</h3>
                <div className="col">
                    <h4>เลือกแถว</h4>
                    <div className="text_stall">
                        {Object.keys(dataCol).map((key, index) => {
                            return (
                                <div key={index}>
                                    <Stall text={key} state={1} select={selectedCol[key]} stall={(data) => colCallback(data)} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="col">
                    <h4>เลือกล็อค</h4>
                    <div className="text_stall">
                        {dataRow.map((row) => {
                            return (
                                <div>
                                    <Stall text={row.num} state={row.status} select={selectedRow[row.num]} stall={(data) => rowCallback(data)} />
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="radio">
                    <div>
                        <div onClick={() => selectDaily()}></div>
                        {selectedRent.daily && <div className="select_rent"></div>}
                        <h4>รายวัน</h4>
                    </div>
                    <div>
                        <div onClick={() => selectMonthly()}></div>
                        {selectedRent.monthly && <div className="select_rent"></div>}
                        <h4>รายเดือน</h4>
                    </div>
                </div>
                <div className="save">
                    <h2>บันทึก</h2>
                </div>
            </div>
        </div>
    );
}

export default SelectStall;