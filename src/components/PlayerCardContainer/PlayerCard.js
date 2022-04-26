import React, {useState} from "react";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import './PlayerCard.css'


function PlayerCard({ name, balance, onNameChange, onBalanceChange }) {

    return (
        <form className="player-card">
            <CustomInput type="text" classes={'input-name'} name={name} onNameChange={onNameChange} placeHolder='Enter Name' />
            <CustomInput type="number" classes={'input-balance'} balance={balance}  onBalanceChange={onBalanceChange} placeHolder='Enter starting balance' />
            <CustomButton winOrLost={'W'} classes={'winner'} player={{name: name, balance: balance}}/>
            <CustomButton winOrLost={'L'} classes={'lost'}/>
        </form>
    )
}

export default PlayerCard