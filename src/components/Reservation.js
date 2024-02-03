import React, { useState } from 'react';
import Select from 'react-select';
import "../styles/Reservation.css";

function Reservation() {
    const [selectedCol, setSelectedCol] = useState(null);
    const [selectedRow, setSelectedRow] = useState([]);
    const [selectedElectronic, setSelectedElectronic] = useState(null);

    const col = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Option 4' }
    ];

    const row = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Option 4' }
    ];

    const electronic = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
        { value: 'option4', label: 'Option 4' }
    ];


    const handleSelectColChange = (selected) => {
        setSelectedCol(selected);
    };

    const handleSelectRowChange = (selected) => {
        setSelectedRow(selected);
    };

    const handleSelectElectronicChange = (selected) => {
        setSelectedElectronic(selected);
    };

    return (
        <div className="reservation">
            <div className="selectMarket">
                <p>เลือกแถวที่ต้องการจอง</p>
                <Select
                    options={col}
                    value={selectedCol}
                    onChange={handleSelectColChange}
                />
                <p>เลือกล็อกที่ต้องการจอง</p>
                <Select
                    options={row}
                    isMulti
                    value={selectedRow}
                    onChange={handleSelectRowChange}
                />
                <p>เลือกอุปกรณ์ไฟฟ้า</p>
                <Select
                    options={electronic}
                    value={selectedElectronic}
                    onChange={handleSelectElectronicChange}
                />
            </div>
        </div >
    )
}

export default Reservation