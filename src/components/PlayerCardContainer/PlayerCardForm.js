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

    function updatePlayersBalance() {
        console.log((parseInt(props.player.balance) + 1).toString())
    }

    return (
        <form className="player-card">
            <CustomInput inputData={nameInputProps}/>
            <CustomInput inputData={balanceInputProps}/>
            <CustomButton winOrLost='W' classes='winner' player={{name: props.name, balance: props.balance}} updatePlayersBalance={updatePlayersBalance} startGame={props.startGame} gameStarted={props.gameStarted}/>
            <CustomButton winOrLost='L' classes='lost'/>
        </form>
    )
}

export default PlayerCardForm