import React from "react";

import InputName from "./InputName";
import './PlayerCard.css'
import PlayerWinsButton from "./PlayerWinsButton";
import PlayerLosesButton from "./PlayerLosesButton";
import PlayerBalance from "./PlayerBalance";

function PlayerCard () {
    return (
        <div>
            <form className={'player-card'}>
                <InputName/>
                <PlayerBalance/>
                <PlayerWinsButton/>
                <PlayerLosesButton/>
            </form>
        </div>
    )
}

export default PlayerCard