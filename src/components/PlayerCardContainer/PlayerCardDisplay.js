import React from "react";

import './PlayerCardDisplay.css'
import CustomButton from "./CustomButton";

function PlayerCardDisplay(props) {
    return (
        <div className={'player-card-display'}>
            <p className={'player-name-display'}>{props.player.name}</p>
            <p className={'player-balance-display'}>${props.player.balance}.00</p>
            <CustomButton winOrLost='W' classes='winner' player={{name: props.name, balance: props.balance}} gameStarted={props.gameStarted}/>
            <CustomButton winOrLost='L' classes='lost'/>
        </div>
    )
}

export default PlayerCardDisplay