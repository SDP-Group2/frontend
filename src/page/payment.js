import React from 'react';
import "../styles/payment.css";
import { BsShop } from "react-icons/bs";
import { BsQrCode } from "react-icons/bs";

function payment(){
    return(
        <div>
            <div class="head_payment">
                <p>จองล็อค</p>
            </div>
            <div class="status-payment">
                <br>
                </br>
                <br>
                </br>
                <br>
                </br>
            </div>

            <div class="payment_detail">
                <div class="detail_head">
                    <p><BsShop /> จ่ายเงิน</p>
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
                            <p>นาย เทพซ่า ฮาฮาบวก</p>
                            <p>1234567890</p>
                        </div>
                        <div class="payment-stall">
                            <p>จองล็อค B0, B1</p>
                            <p>฿560</p>
                        </div>
                        <div class="payment-stall">
                            <p>จองล็อคแบบรายเดือน</p>
                            <p>฿16,800</p>
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