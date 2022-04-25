import React from "react";

import './CustomButton.css'

function CustomButton(props) {
    return (
        <button className={props.classes}>{props.winOrLost}</button>
    )
}

export default CustomButton