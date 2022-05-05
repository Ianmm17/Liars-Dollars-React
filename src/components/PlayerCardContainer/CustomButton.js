import React from "react";

import './CustomButton.css'
import WinOrLose from "./WinOrLose";

function CustomButton(props) {
    function handleWinOrLose(e) {
        e.preventDefault()
        const worL = props.winOrLost
        console.log(worL, props.gameStarted)
    }

    return (
        <button onClick={handleWinOrLose} className={props.classes}>{props.winOrLost}</button>
    )
}

export default CustomButton