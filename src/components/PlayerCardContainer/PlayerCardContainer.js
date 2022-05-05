import React, {useState} from "react";

import PlayerCard from "./PlayerCard";

function PlayerCardContainer(props) {

    const [gameStarted, setGameStarted] = useState(false)


    const playerCards = props.players.map((player) => {
        return <PlayerCard key={player.id} name={player.name} balance={player.balance} id={player.id} hasGameStarted={gameStarted} startGame={startGame} onNameChange={props.onNameChange} onBalanceChange={props.onBalanceChange}/>
    })

    function startGame(gameHasStarted) {
       console.log('starting game??')
        setGameStarted(gameHasStarted)
        console.log(gameStarted, 'we started')
    }


    return (
        <div>
            {playerCards}
        </div>
    )
}

export default PlayerCardContainer