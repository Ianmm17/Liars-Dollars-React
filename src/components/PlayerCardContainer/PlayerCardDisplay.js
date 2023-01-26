import React from "react";

import './PlayerCardDisplay.css'
import WinLoseButton from "./WinLoseButton";

function PlayerCardDisplay(props) {
    return (
        <div className={'player-card-display'}>
            <p className={'player-name-display'}>{props.player.name}</p>
            <p className={'player-balance-display'}>${props.player.balance}.00</p>
            <WinLoseButton winOrLost='W' classes='winner' player={{name: props.name, balance: props.balance}} clickHandler={() => console.log('Winner')}/>
            <WinLoseButton winOrLost='L' classes='lost' player={{name: props.name, balance: props.balance}} clickHandler={() => console.log('Loser')}/>
        </div>
    )
}

export default PlayerCardDisplay