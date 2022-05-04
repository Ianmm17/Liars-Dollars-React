import React, {useState} from "react";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import './PlayerCard.css'


function PlayerCard(props) {
    console.log(props)

    //const key = Math.random()

    function nameHandler(event) {
        console.log(props.key)
        props.onNameChange(event, props.key)
    }

    function balanceHandler(event) {
        props.onNameChange(event, props.key)
    }

    return (
        <form className="player-card">
            <CustomInput type="text" classes={'input-name'} name={props.name} key={props.key} onNameChange={nameHandler} placeHolder='Enter Name' />
            <CustomInput type="number" classes={'input-balance'} balance={props.balance}  onBalanceChange={balanceHandler} placeHolder='Enter starting balance' />
            <CustomButton winOrLost={'W'} classes={'winner'} player={{name: props.name, balance: props.balance}}/>
            <CustomButton winOrLost={'L'} classes={'lost'}/>
        </form>
    )
}

export default PlayerCard