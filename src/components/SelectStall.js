import { React, useState } from "react";
import "../styles/SelectStall.css";
import Stall from './Stall';

function SelectStall() {
    const [stall, setStall] = useState({col: "", row: []});

    const colCallback = (data) => {
        setStall({...stall, col: data});
        setStall({...stall, row: []});
    };

    const rowCallback = (data) => {
        setStall({...stall, row: [...stall.row, data.toString()]});
    };

    return (
        <div className="selectpage">
            <h2>จองล็อค</h2>
            <div className="show-state">
                <div className="back">
                    <div className="store_selectstall"></div>
                    <div className="selectstall_payment"></div>
                </div>
                <div className="front">
                    <div className="store">
                        <div className="symbol"></div>
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
                        {[...new Array(20)].map((col, colIndex) => {
                            return (
                                <div>
                                    <Stall text={String(colIndex + 1)} mode="col" stall={(data) => colCallback(data)}/>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="col">
                    <h4>เลือกล็อค</h4>
                    <div className="text_stall">
                        {[...new Array(20)].map((row, rowIndex) => {
                            return (
                                <div>
                                    <Stall text={String(rowIndex + 1)} mode="row" stall={(data) => rowCallback(data)}/>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="radio">
                    <div>
                        <div></div>
                        <h4>รายวัน</h4>
                    </div>
                    <div>
                        <div></div>
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