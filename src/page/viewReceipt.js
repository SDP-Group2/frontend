import React from "react";
import "../styles/addAdmin.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import { BsFileEarmarkBarGraph } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { RiShutDownLine } from "react-icons/ri";

function viewRecipt () {
    return(
        <div class="content-body">
            <div class="content-body-col">
                <div class="content-body-L">
                    <div class="content-text">
                        <IoPersonCircleOutline /> <p>ผู้ดูแลตลาด</p> 
                    </div>
                    <div class="content-text">
                        <BsFileEarmarkBarGraph /> <p>การเงิน</p>
                    </div>
                    <div class="content-text" id="logout">
                        <RiShutDownLine /> <p>ออกจากระบบ</p>
                    </div>
                </div>

                <div class="content-body-R">
                    <p>ขอดูรายรับ</p>
                    <div class="input-form">
                        <form>
                            <input 
                                type="date"
                                placeholder="ชื่อผู้ใช้"
                                required
                            />
                            <input 
                                type="date"
                                placeholder="อีเมล"
                                required
                            />
                            <button class="btn-register">ดาวน์โหลด</button>
                        </form>
                    </div>

                    <div>
                        <p>ประวัติการขอดู</p>
                        <div class="admin">
                            <p>test test</p> <ImBin />
                        </div>
                        <div class="admin">
                            <p>test test</p> <ImBin />
                        </div>
                        <div class="admin">
                            <p>test test</p> <ImBin />
                        </div>
                        <div class="admin">
                            <p>test test</p> <ImBin />
                        </div>
                        <div class="admin">
                            <p>test test</p> <ImBin />
                        </div>
                        <div class="admin">
                            <p>test test</p> <ImBin />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default viewRecipt