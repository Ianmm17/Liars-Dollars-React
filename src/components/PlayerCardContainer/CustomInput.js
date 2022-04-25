import React from "react";

import './CustomInput.css'

function CustomInput(props) {
    return (
        <input type={props.type} className={props.classes} placeholder={props.placeHolder} value={props.name}></input>
    )
}

export default CustomInput