import React from "react";

import './CustomButton.css'
import WinOrLose from "./WinOrLose";

function CustomButton(props) {

    function handleWinOrLose(e) {
        e.preventDefault()
        props.startGame(true)
        props.updatePlayersBalance()
        const worL = props.winOrLost
    }


    return (
        <button onClick={handleWinOrLose} className={props.classes}>{props.winOrLost}</button>
    )
}

export default CustomButton