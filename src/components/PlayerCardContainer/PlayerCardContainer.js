import React, {useState} from "react";

import PlayerCardForm from "./PlayerCardForm";
import PlayerCardDisplay from "./PlayerCardDisplay";

function PlayerCardContainer(props) {

    const playerCards = props.players.map((player) => {
        if (props.gameStarted) {
            return <PlayerCardDisplay key={player.id} player={player} players={props.players} onBalanceChange={props.onBalanceChange}/>
        } else {
            return <PlayerCardForm key={player.id} player={player} players={props.players} startGame={props.startGame}
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