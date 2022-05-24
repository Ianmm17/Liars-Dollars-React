import React, {useState} from "react";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import './PlayerCardForm.css'


function PlayerCardForm(props) {

    const nameInputProps = {
        type: 'text',
        class: 'input-name',
        placeholder: 'Enter Name',
        gameStarted: props.gameStarted,
        displayText: props.player.name,
        changeHandler: (event) => {
            props.onNameChange(event, props.player.id)
        }
    }

    const balanceInputProps = {
        type: 'number',
        class: 'input-balance',
        placeholder: 'Enter Starting Balance',
        gameStarted: props.gameStarted,
        displayText: props.player.balance,
        changeHandler: (event) => {
            props.onBalanceChange(event, props.player.id)
        }
    }

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
        <form className="player-card">
            <CustomInput inputData={nameInputProps}/>
            <CustomInput inputData={balanceInputProps}/>
            <CustomButton customButtonData={customWinButtonProps}/>
            <CustomButton customButtonData={customLoseButtonProps}/>
        </form>
    )
}

export default PlayerCardForm