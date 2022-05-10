import React from "react";

import './PlayerCardForm.css'

function PlayerCardForm(props) {
    return (
        <div className={'player-card-display'}>
            <label className={'player-name-display'}>{props.player.name}</label>
            <label className={'player-balance-display'}>${props.player.balance}.00</label>
        </div>
    )
}

export default PlayerCardForm