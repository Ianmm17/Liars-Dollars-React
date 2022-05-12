import React, {useState} from "react";

import PlayerCardForm from "./PlayerCardForm";
import PlayerCardDisplay from "./PlayerCardDisplay";

function PlayerCardContainer(props) {

    const playerCards = props.players.map((player) => {
        if (props.gameStarted) {
            return <PlayerCardDisplay player={player}/>
        } else {
            return <PlayerCardForm id={player.id} player={player} gameStarted={props.gameStarted}
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