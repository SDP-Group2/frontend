import React from "react";
import "../styles/SelectStall.css";

function SelectStall() {
  return (
    <div className="select-stall">
        <h2>จองล็อค</h2>
        <div className="show-state">
            <div className="back">
                <div className="store-selectstall">

                </div>
                <div className="selectstall-payment">
                    
                </div>
            </div>
            <div className="front">
                <div className="store">
                    <div className="symbol"></div>
                    <h4>ข้อมูลร้าน</h4>
                </div>
                <div className="selectstall">
                    <div className="symbol"></div>
                    <h4>จองล็อค</h4>
                </div>
                <div className="payment">
                    <div className="symbol"></div>
                    <h4>จ่ายเงิน</h4>
                </div>
            </div>
        </div>
        <div className="select">

        </div>
    </div>
  );
}

export default SelectStall;