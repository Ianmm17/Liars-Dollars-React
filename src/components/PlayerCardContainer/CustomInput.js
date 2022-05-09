import React, {useState} from "react";

import './CustomInput.css'

function CustomInput(props) {
    if (props.hasGameStarted) {
        return (
            <input type={props.type} className={props.classes} placeholder={props.placeHolder} onChange={props.changeHandler} readOnly/>
        )
    } else {
        return (
            <input type={props.type} className={props.classes} placeholder={props.placeHolder} onChange={props.changeHandler}/>
        )
    }

}

export default CustomInput