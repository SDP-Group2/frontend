import React from 'react'
import "../styles/Profile.css";

function Profile() {
    return (
        <div className="profile">
            <div className="leftSide">
                <div className="picture"></div>
                <div className="text">
                    <div><span>FULLNAME : </span>ธนะดล คนเที่ยง</div>
                    <div><span>TELEPHONE : </span>0983420730</div>
                    <div><span>MARKET NAME : </span>ร้านก๋วยเตี๋ยวไก่</div>
                    <div><span>TYPE OF MARKET : </span>ร้านอาหาร</div>
                </div>
            </div>
            <div className="rightSide">
                <span>คะแนนความประพฤติ : </span><b>100/100</b>
                <div>ดีมาก</div>
            </div>
        </div>
    )
}

export default Profile