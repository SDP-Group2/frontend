import React, { useState } from 'react';
import MultiDatepicker from 'react-multi-date-picker';
import 'react-multi-date-picker/styles/layouts/mobile.css'; 
import "../styles/SelectDate.css";

const MultiSelectDate = () => {
  const [selectedDates, setSelectedDates] = useState([]);
  const excludedDates = ["2024-03-15", "2024-03-16"]; 

  const shouldDisableDate = (date) => {
    const formattedDate = date.format("YYYY-MM-DD");
    return excludedDates.includes(formattedDate);
  };

  {selectedDates.map((date, index) => (
    console.log(date.format("YYYY-MM-DD"))
  ))}

  
  return (
    <div className='select_date'>
      <h4>เลือกวัน</h4>
      <MultiDatepicker
        className='box_date'
        value={selectedDates}
        onChange={(dates) => setSelectedDates(dates)}
        placeholder="เลือกวันที่" 
        shouldDisableDate={shouldDisableDate} 
      />
    </div>
  );
};


export default MultiSelectDate;
