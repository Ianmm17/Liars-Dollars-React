import React, {useState} from "react";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import './PlayerCard.css'


function PlayerCard(props) {

    function nameHandler(event) {
        props.onNameChange(event, props.player.id)
    }

    function balanceHandler(event) {
        props.onBalanceChange(event, props.player.id)
    }

    function startGame() {
        props.startGame()
    }

    function updatePlayersBalance() {

        console.log(props.player.balance)
    }

    return (
        <form className="player-card">
            <CustomInput type="text" classes='input-name' name={props.player.name} changeHandler={nameHandler} gameStarted={props.gameStarted} placeHolder='Enter Name' />
            <CustomInput type="number" classes='input-balance' balance={props.player.balance}  changeHandler={balanceHandler} gameStarted={props.gameStarted} placeHolder='Enter starting balance' />
            <CustomButton winOrLost='W' classes='winner' player={{name: props.name, balance: props.balance}} updatePlayersBalance={updatePlayersBalance} startGame={startGame} gameStarted={props.gameStarted}/>
            <CustomButton winOrLost='L' classes='lost'/>
        </form>
    )
}

export default PlayerCard