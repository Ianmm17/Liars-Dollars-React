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
        props.gameStarted(true)
    }


    return (
        <form className="player-card">
            {props.hasGameStarted ? console.log(props.gameStarted, 'sweet') : <CustomInput type="text" classes={'input-name'} name={props.name} changeHandler={nameHandler} placeHolder='Enter Name' />}
            <CustomInput type="number" classes='input-balance' balance={props.balance}  changeHandler={balanceHandler} placeHolder='Enter starting balance' />
            <CustomButton winOrLost='W' classes='winner' player={{name: props.name, balance: props.balance}} gameStarted={gameHasStarted}/>
            <CustomButton winOrLost='L' classes='lost'/>
        </form>
    )
}

export default PlayerCard