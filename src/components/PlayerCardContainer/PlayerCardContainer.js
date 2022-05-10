import React, {useState} from "react";

import PlayerCard from "./PlayerCard";

function PlayerCardContainer(props) {

    const playerCards = props.players.map((player) => {
        return <PlayerCard key={player.id} name={player.name} balance={player.balance} id={player.id}
                           hasGameStarted={props.hasGameStarted} startGame={props.startGame}
                           onNameChange={props.onNameChange} onBalanceChange={props.onBalanceChange}
                />
    })

    return (
        <div>
            {playerCards}
        </div>
    )
}

export default PlayerCardContainer