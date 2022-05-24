import React from "react";

import './CustomButton.css'

function CustomButton(props) {
    console.log(props)

    function handleWinOrLose(e) {
        e.preventDefault()
        props.startGame()
        props.updatePlayersBalance()
    }

    return (
        <button onClick={handleWinOrLose} className={props.customButtonData.classStyle}>{props.customButtonData.winOrLost}</button>
    )
}

export default CustomButton