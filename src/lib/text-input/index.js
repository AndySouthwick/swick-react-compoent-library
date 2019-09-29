import React from "react";
import "./index.scss";



const TextInput = ({ type, label, value, inputClass, placeholder, onChange }) => (

  <div className="input-wrapper">
    <label>{label}</label>
    <div className="input">
    <input type={type} className={inputClass} placeholder={placeholder}/>
    </div>
  </div>
);

export default TextInput;