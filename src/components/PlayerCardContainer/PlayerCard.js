import React, {useState} from "react";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import './PlayerCard.css'


function PlayerCard(props) {

    function nameHandler(event) {
        props.onNameChange(event, props.id)
    }

    function balanceHandler(event) {
        props.onBalanceChange(event, props.id)
    }

    function gameHasStarted() {
        props.startGame()
    }


    return (
        <form className="player-card">
            <CustomInput type="text" classes={'input-name'} name={props.name} changeHandler={nameHandler} hasGameStarted={props.hasGameStarted} placeHolder='Enter Name' />
            <CustomInput type="number" classes='input-balance' balance={props.balance}  changeHandler={balanceHandler} hasGameStarted={props.hasGameStarted} placeHolder='Enter starting balance' />
            <CustomButton winOrLost='W' classes='winner' player={{name: props.name, balance: props.balance}} gameStarted={gameHasStarted} hasGameStarted={props.hasGameStarted}/>
            <CustomButton winOrLost='L' classes='lost'/>
        </form>
    )
}

export default PlayerCard