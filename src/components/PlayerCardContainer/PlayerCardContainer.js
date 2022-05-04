import React from "react";

import PlayerCard from "./PlayerCard";

function PlayerCardContainer(props) {
    const playerCards = props.players.map((player) => {
        return <PlayerCard name={player.name} balance={player.balance} id={player.id} onNameChange={props.onNameChange} onBalanceChange={props.onBalanceChange}/>
    })


    return (
        <div>
            {playerCards}
        </div>
    )
}

export default PlayerCardContainer