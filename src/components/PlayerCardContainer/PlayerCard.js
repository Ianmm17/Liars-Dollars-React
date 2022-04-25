import React, { useState } from "react";

import InputName from "./InputName";
import PlayerBalance from "./PlayerBalance";
import CustomInput from "./CustomInput";
import PlayerWinsButton from "./PlayerWinsButton";
import PlayerLosesButton from "./PlayerLosesButton";
import './PlayerCard.css'


function PlayerCard({ name, balance }) {
    return (
        <form className="player-card">
            <CustomInput type="text" classes={'input-name'} name={name} placeHolder='Enter Name' />
            <CustomInput type="number" classes={'input-balance'} balance={balance} placeHolder='Enter starting balance' />
            <InputName name={name} />
            <PlayerBalance balance={balance} />
            <PlayerWinsButton />
            <PlayerLosesButton />
        </form>
    )
}

export default PlayerCard