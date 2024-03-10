import React from 'react';
import "../styles/payment.css";
import { BsShop } from "react-icons/bs";
import { BsQrCode } from "react-icons/bs";
import { GoCheckCircle } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

function payment(){
    return(
        <div className='payment_page'>
            <div class="head_payment">
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
                        <div className="symbol">
                            <GoCheckCircle size={40} color="white" style={{ fontWeight: 'bold' }} />
                        </div>
                        <h4>จองล็อค</h4>
                    </div>
                    <div className="payment">
                        <div className="symbol"></div>
                        <h4>จ่ายเงิน</h4>
                    </div>
                </div>
            </div>

            <div class="payment_detail">
                <div class="detail_head">
                    <h3><BsShop /> จ่ายเงิน</h3>
                    <div class="qr">
                        <img src="" width="170px" height="170px"></img>
                    </div>

                </div>
                <div class="payment_bank">
                    <p>ธนาคารกสิกรไทย</p>
                </div>
                <div class="payment-content">
                    <div class="payment-L">
                        <div class="payment_name">
                            <p className='name'>นาย เทพซ่า ฮาฮาบวก</p>
                            <p className='num'>1234567890</p>
                        </div>
                        <div class="payment-stall">
                            <p>จองล็อค B0, B1</p>
                            <p>฿560</p>
                        </div>
                        <div class="payment-stall">
                            <p>จองล็อคแบบรายเดือน</p>
                            <p className='price'>฿16,800</p>
                        </div>
                        <div class="payment-bill">
                            <p>bill.png</p>
                            <p class="btn-bill">แนบใบเสร็จ</p>
                        </div>
                    </div>
                </div>

                <button class="btn-submit">จองเลย</button>
            </div>
        </div>
    );
};

export default payment;
