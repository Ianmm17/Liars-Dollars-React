import React from "react";

import './PlayerCard.css'
import PlayerWinsButton from "./PlayerWinsButton";
import PlayerLosesButton from "./PlayerLosesButton";
import PlayerBalance from "./PlayerBalance";
import InputName from "./InputName";


function PlayerCard () {
    return (
        <div className={'player-card'}>
            <form>
                <InputName/>
                <PlayerBalance/>
                <PlayerWinsButton/>
                <PlayerLosesButton/>
            </form>
        </div>
    )
}

export default PlayerCard