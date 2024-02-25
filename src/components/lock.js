import React, { useState, useEffect } from "react";
import "../styles/lock.css";

function PositionLock(props) {
  const [lockKeys, setLockKeys] = useState([]);

  useEffect(() => {
    fetchKeysFromDatabase();
  }, [props.value]);

  const fetchKeysFromDatabase = () => {
    fetch(`http://localhost:5000/market/${props.value}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', 
        'api-key': '2ff20d0d99465c2d929666dc96d0620dbbc48b2d79f575a3784ae786b76628a6'
      }
    })
    .then(response => response.json())
    .then(data => {
      const filteredLockKeys = data.filter(item => item.status === 0).map(item => item.num);
      setLockKeys(filteredLockKeys);
    })
    .catch(error => console.error('Error fetching data:', error));
  };

  return (
    <div className="component_lock">
    {lockKeys.map((key, index) => (
      <div className="lock_select" key={index} onClick={() => props.stall(props.value)}>
        {props.select === 1 && <div className="div_lock"></div>}
        <h3>{key}</h3>
      </div>
    ))}

    </div>
  );
}

export default PositionLock;
