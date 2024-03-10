import React from 'react'
import "../styles/Home.css";
import Reserved from '../components/Reserve';
import { FaStore } from "react-icons/fa";
import { GoPerson } from "react-icons/go";
import { GoUnread } from "react-icons/go";
import { GoLog } from "react-icons/go";

function Home() {
    return (
      <div className="home">
        <h2>หน้าหลัก</h2>
        <div className="select">
            <div>
                <div>
                    <FaStore size={35} style={{ fontWeight: 'bold' }}/>
                </div>
                <h4>จองล็อค</h4>
            </div>
            <div>
                <div>
                    <GoLog size={35} style={{ fontWeight: 'bold' }}/>
                </div>
                <h4>รายงาน</h4>
            </div>
            <div>
                <div>
                    <GoUnread size={35} style={{ fontWeight: 'bold' }}/>
                </div>
                <h4>แจ้งเตือน</h4>
            </div>
            <div>
                <div>
                    <GoPerson size={35} style={{ fontWeight: 'bold' }}/>
                </div>
                <h4>ข้อมูลส่วนตัว</h4>
            </div>
        </div>
        <h3>การจองของฉัน</h3>
        <div className="list_reserved">
            <Reserved />
        </div>
      </div>
    );
  }

export default Home