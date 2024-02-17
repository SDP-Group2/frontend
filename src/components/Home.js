import React from 'react'
import "../styles/Home.css";

function Home() {
    return (
      <div className="home">
        <h2>หน้าหลัก</h2>
        <div className="select">
            <div>
                <div></div>
                <h4>จองล็อค</h4>
            </div>
            <div>
                <div></div>
                <h4>รายงาน</h4>
            </div>
            <div>
                <div></div>
                <h4>แจ้งเตือน</h4>
            </div>
            <div>
                <div></div>
                <h4>ข้อมูลส่วนตัว</h4>
            </div>
        </div>
        <h3>การจองของฉัน</h3>
        <div className="list_reserved">
            <div className="reserved">
                <div className="infor-left">
                    <div>
                        <h4 className="name">ร้านยำอร่อยแซ่บอร่อย</h4>
                    </div>
                    <div>
                        <h4 className="stall">[B0, B1]</h4>
                    </div>
                    <div>
                        <h4 className="date">[รายเดือน] 1 ม.ค 67 - 1 ก.พ. 67</h4>
                    </div>
                    <div>
                        <h4 className="price">฿16,800</h4>
                    </div>
                </div>
                <div className="infor-rigth">
                    <div className="delete"></div>
                    <div className="state">รออนุมัติ</div>
                </div>
            </div>
        </div>
      </div>
    );
  }

export default Home