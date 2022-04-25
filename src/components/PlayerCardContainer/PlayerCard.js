import React, {useState} from "react";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import './PlayerCard.css'


function PlayerCard({ name, balance }) {

    const onChangeHandler = (event) => {
        console.log(event.target.value, 'parent')
        name = event.target.value
        console.log(name, 'this is name')
    }

    return (
        <form className="player-card">
            <CustomInput type="text" classes={'input-name'} name={name} onChange={onChangeHandler} placeHolder='Enter Name' />
            <CustomInput type="number" classes={'input-balance'} balance={balance} onChange={onChangeHandler} placeHolder='Enter starting balance' />
            <CustomButton winOrLost={'W'} classes={'winner'} player={{name: name, balance: balance}}/>
            <CustomButton winOrLost={'L'} classes={'lost'}/>
        </form>
    )
}

export default PlayerCard