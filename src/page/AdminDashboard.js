import { React, useState } from "react";
import "../styles/AdminDashboard.css";
import ButtonMarket from '../components/ButtonMarket';
import Popup from '../components/Popup';
import WaittingPopup from '../components/Waittingpopup';
import PointPopup from '../components/PointPopup';
import DoughnutChart from '../components/DoughnutChart';
import ColumnGraph from '../components/ColumnChart';
import { FaStore } from "react-icons/fa";
import { GoGear } from "react-icons/go";

function AdminDashboard() {
    const rangeCol= Array.from({ length: 20 }, (_, index) => index + 1);
    const rangeRow = Array.from({ length: 20 }, (_, index) => index + 1);

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handleOpenPopup = () => {
        setIsPopupOpen(true);
        console.log(isPopupOpen);
    };

    const handleClosePopup = () => {
        setIsPopupOpen(false);
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
                <div className="nav_R">
                    <div class="zone_food">
                        <p> <FaStore /> โซนอาหาร</p> 
                    </div>
                    <div class="zone_normal">
                        <p> <FaStore /> โซนทั่วไป</p> 
                    </div>
                    <div class="zone_clothes">
                        <p> <FaStore /> โซนเสื้อผ้า</p> 
                    </div>
                    <div>
                        <GoGear style={{ fontSize: '30px', fontWeight: 'bold', margin: '20px'}} />
                    </div>
                </div>
            </div>
            <div className='financial'>
                <div className='graph_market'>
                    <h4>แผนภาพแสดงร้านค้า</h4>
                    <div>
                        <div>
                            <h4 className="reserved_admin">จองแล้ว</h4>
                            <h4 className="no_reserve">ห้ามจอง</h4>
                            <h4 className="free">ว่าง</h4>
                        </div>
                        <DoughnutChart />
                    </div>
                </div>
                <div className='graph_financial'>
                    <h4>แผนภาพแสดงรายได้</h4>
                    <ColumnGraph/>
                </div>
                <div className='notification'>
                    <h4>แสดงการแจ้งเตือน</h4>
                    <div>
                        <p className="name_report">สมชาย หล่อเท่ :</p> 
                        <p className="place">ห้องน้ำ</p>
                        <p className="msg">ไม่สะอาด</p>
                    </div>
                </div>
            </div>
            <div className='infor_market'>
                <h4>ข้อมูลของล็อคโซนอาหาร</h4>
                <div className='name_col'>
                    <h5>A</h5>
                    <h5>B</h5>
                    <h5>C</h5>
                    <h5>D</h5>
                    <h5>E</h5>
                    <h5>F</h5>
                    <h5>G</h5>
                    <h5>H</h5>
                    <h5>I</h5>
                    <h5>J</h5>
                    <h5>K</h5>
                    <h5>L</h5>
                    <h5>M</h5>
                    <h5>N</h5>
                    <h5>O</h5>
                    <h5>P</h5>
                    <h5>Q</h5>
                    <h5>R</h5>
                    <h5>S</h5>
                    <h5>T</h5>
                </div>
                <div className='div_market'>
                    <div className='number'>
                        <h5>1</h5>
                        <h5>2</h5>
                        <h5>3</h5>
                        <h5>4</h5>
                        <h5>5</h5>
                        <h5>6</h5>
                        <h5>7</h5>
                        <h5>8</h5>
                        <h5>9</h5>
                        <h5>10</h5>
                        <h5>11</h5>
                        <h5>12</h5>
                        <h5>13</h5>
                        <h5>14</h5>
                        <h5>15</h5>
                        <h5>16</h5>
                        <h5>17</h5>
                        <h5>18</h5>
                        <h5>19</h5>
                        <h5>20</h5>
                    </div>
                    <div className='all_market'>
                        {rangeCol.map((value, index) => (
                            <div className='col_market'>
                                {rangeCol.map((value, index) => (
                                    <ButtonMarket popup = {(data) => handleOpenPopup(data)}/>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <WaittingPopup open={isPopupOpen} onClose={handleClosePopup} />
        </div>
    );
  }

export default AdminDashboard