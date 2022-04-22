import React from "react";

import PlayerCard from "../PlayerCard/PlayerCard";
import './AddPlayer.css'

function AddPlayer (props) {

    function addPlayerHandler () {
        return (
            <PlayerCard/>
        )
    }

    return (
        <div className={'add-player'}>
            <button onClick={addPlayerHandler}>Add Player</button>
        </div>
    )
}

export default AddPlayer