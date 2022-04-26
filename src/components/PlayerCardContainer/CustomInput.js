import React, {useState} from "react";

import './CustomInput.css'

function CustomInput(props) {
        return (
            <input type={props.type} className={props.classes} placeholder={props.placeHolder} onChange={props.onNameChange ?  props.onNameChange : props.onBalanceChange} />
       )
}

export default CustomInput