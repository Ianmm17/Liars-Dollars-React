import React, {useState} from "react";

import './CustomInput.css'

function CustomInput(props) {
        return (
            <input type={props.type} className={props.classes} placeholder={props.placeHolder}
                   value={props.name? props.name : props.balance} onChange={props.changeHandler}
            />
        )
}

export default CustomInput