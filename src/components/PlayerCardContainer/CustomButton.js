import React from "react";

import './CustomButton.css'

function CustomButton(props) {

    function handleWinOrLose(e) {
        e.preventDefault()
        props.startGame(true)
        props.updatePlayersBalance(props.winOrLost)
    }


    return (
        <button onClick={handleWinOrLose} className={props.classes}>{props.winOrLost}</button>
    )
}

export default CustomButton