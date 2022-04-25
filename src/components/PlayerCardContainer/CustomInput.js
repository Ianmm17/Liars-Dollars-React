import React, {useState} from "react";

import './CustomInput.css'

function CustomInput(props) {
        return (
            <input type={props.type} className={props.classes} placeholder={props.placeHolder} onChange={props.onChange} />
       )
}

export default CustomInput