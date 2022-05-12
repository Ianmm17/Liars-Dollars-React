import React from "react";

import './CustomInput.css'

function CustomInput(props) {
        return (
            <input type={props.inputData.type} className={props.inputData.class} placeholder={props.inputData.placeholder}
                   value={props.inputData.displayText} onChange={props.inputData.changeHandler}
            />
        )
}

export default CustomInput