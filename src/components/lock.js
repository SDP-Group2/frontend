import React, { useState, useEffect } from "react";
import "../styles/lock.css";

function PositionLock(props) {
  const [lockKeys, setLockKeys] = useState([]);
  const [selectedIndices, setSelectedIndices] = useState([]); 
  const [fetchError, setFetchError] = useState(false);

  useEffect(() => {
    fetchKeysFromDatabase();
  }, [props.value]);

  const fetchKeysFromDatabase = () => {
    setSelectedIndices([]); 
    fetch(`http://localhost:5000/market/${props.value}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json', 
        'api-key': '2ff20d0d99465c2d929666dc96d0620dbbc48b2d79f575a3784ae786b76628a6'
      }
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      const filteredLockKeys = data.map(item => {
        return {
          num: item.num,
          status: item.status
        };
      });
      
      setLockKeys(filteredLockKeys);
      setFetchError(false);
    })
    .catch(error => {
      console.error('Error fetching data:', error);
      setFetchError(true);
    });
  };

  const handleLockClick = (index) => {
    const clickedItem = lockKeys[index];
    if (clickedItem.status !== 1) {
      const updatedSelectedIndices = [...selectedIndices];
      if (updatedSelectedIndices.includes(index)) {
        updatedSelectedIndices.splice(updatedSelectedIndices.indexOf(index), 1);
      } else {
        updatedSelectedIndices.push(index);
      }
      setSelectedIndices(updatedSelectedIndices);
    }
    props.stall(selectedIndices);
  };
  return (
    <div className="component_lock">
      {fetchError ? ( 
        <div className="error-message">ไม่มีรายการที่ท่านเลือก</div>
      ) : (
        lockKeys.map((item, index) => (
          <div className={`lock_select ${item.status === 1 ? 'status_1' : 'status_0'} ${selectedIndices.includes(index) ? 'red-background' : ''}`} key={index} onClick={() => handleLockClick(index)}>
            {item.status === 1 && <div className="div_lock"></div>}
            <h3>{item.num}</h3>
          </div>
        ))
      )}
    </div>
  );
}

export default PositionLock;
