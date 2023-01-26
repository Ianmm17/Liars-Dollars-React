import React from "react";

import './WinLoseButton.css'

function WinLoseButton(props) {

    function handleWinOrLose(e) {
        e.preventDefault()
        props.clickHandler()
        // props.updatePlayersBalance(props.winOrLost)
    }


    return (
        <button onClick={handleWinOrLose} className={props.classes}>{props.winOrLost}</button>
    )
}

export default WinLoseButton