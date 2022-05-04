import React from "react";

import PlayerCard from "./PlayerCard";

function PlayerCardContainer(props) {
    const playerCards = props.players.map((player) => {
        console.log(player.name, 'hello', player.key)
        return <PlayerCard name={player.name} balance={player.balance} key={player.key} onNameChange={props.onNameChange} onBalanceChange={props.onBalanceChange}/>
    })


    return (
        <div>
            {playerCards}
        </div>
    )
}

export default PlayerCardContainer