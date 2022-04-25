import React from "react";

import PlayerCard from "../PlayerCardContainer/PlayerCard";
import PlayerCardContainer from "../PlayerCardContainer/PlayerCardContainer";
import './AddPlayer.css'

function AddPlayer (props) {

    return (
        <div className={'add-player'}>
            <button onClick={props.newPlayer}>Add Player</button>
        </div>
    )
}

export default AddPlayer