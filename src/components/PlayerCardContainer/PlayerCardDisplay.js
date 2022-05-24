import React from "react";

import './PlayerCardDisplay.css'
import CustomButton from "./CustomButton";

function PlayerCardDisplay(props) {

    const customWinButtonProps = {
        winOrLost: 'W',
        classStyle: 'winner',
        player: props.player,
        updatePlayersBalance: props.updatePlayersBalance,
        startGame: props.startGame,
        gameStarted: props.gameStarted
    }

    const customLoseButtonProps = {
        winOrLost: 'L',
        classStyle: 'lost',
        player: props.player,
        updatePlayersBalance: props.updatePlayersBalance,
        startGame: props.startGame,
        gameStarted: props.gameStarted
    }

    return (
        <div className={'player-card-display'}>
            <p className={'player-name-display'}>{props.player.name}</p>
            <p className={'player-balance-display'}>${props.player.balance}.00</p>
            <CustomButton customeButtonData={customWinButtonProps}/>
            <CustomButton customButtonData={customLoseButtonProps}/>
        </div>
    )
}

export default PlayerCardDisplay