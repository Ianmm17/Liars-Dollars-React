import React, {useState} from "react";

import PlayerCardForm from "./PlayerCardForm";
import PlayerCardDisplay from "./PlayerCardDisplay";

function PlayerCardContainer(props) {

    function updatePlayersBalance() {
        return console.log((parseInt(props.player.balance) + 1).toString())
    }

    const playerCards = props.players.map((player) => {
        if (props.gameStarted) {
            return <PlayerCardDisplay player={player} updatePlayersBalance={updatePlayersBalance}/>
        } else {
            return <PlayerCardForm id={player.id} player={player}
                                   gameStarted={props.gameStarted}
                                   startGame={props.startGame}
                                   onNameChange={props.onNameChange}
                                   onBalanceChange={props.onBalanceChange}
                                   updatePlayersBalance={updatePlayersBalance}
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