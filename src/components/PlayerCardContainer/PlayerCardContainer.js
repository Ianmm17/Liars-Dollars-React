import React, {useState} from "react";

import PlayerCard from "./PlayerCard";
import PlayerCardForm from "./PlayerCardForm";

function PlayerCardContainer(props) {

    const playerCards = props.players.map((player) => {
        if (props.gameStarted) {
            return <PlayerCardForm player={player}/>
        } else {
            return <PlayerCard key={player.id} player={player} gameStarted={props.gameStarted}
                               startGame={props.startGame}
                               onNameChange={props.onNameChange} onBalanceChange={props.onBalanceChange}
            />
        }
    })


    return (
        <div>
            {playerCards}
        </div>
    )
}

export default PlayerCardContainer