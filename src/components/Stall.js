import React, { useState } from "react";
import "../styles/Stall.css";

function Stall(props) {
  const [itemNums, setItemNums] = useState([]); 
  let newText = "";
  const firstChar = props.text.charAt(0);
  if (firstChar >= 'A' && firstChar <= 'T' && props.select === 1) {
    newText += props.text;
  }
  
  return (
    <div className="component_stall">
      <div className="stall_select" onClick={() => props.stall(props.text)}>
        {props.select === 1 && <div className="div_state"></div>}
        <h3>{props.text}</h3>
      </div>
    </div>
  );
} 

export default Stall;
