import React, { useState } from "react";

import CustomInput from "./CustomInput";
import CustomButton from "./CustomButton";
import './PlayerCard.css'


function PlayerCard({ name, balance }) {
    return (
        <form className="player-card">
            <CustomInput type="text" classes={'input-name'} name={name} placeHolder='Enter Name' />
            <CustomInput type="number" classes={'input-balance'} balance={balance} placeHolder='Enter starting balance' />
            <CustomButton winOrLost={'W'} classes={'winner'}/>
            <CustomButton winOrLost={'L'} classes={'lost'}/>
        </form>
    )
}

export default PlayerCard