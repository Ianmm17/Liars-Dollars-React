import React from "react";

function CustomInput(props) {
    return (
        <input type={props.type} className={props.classes} placeholder={props.placeHolder} value={props.name}></input>
    )
}

export default CustomInput