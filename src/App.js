import React, {useRef, useState} from "react";

import Header from "./components/Header/Header";
import AddPlayer from "./components/AddPlayer/AddPlayer";
import PlayerCardContainer from "./components/PlayerCardContainer/PlayerCardContainer";

const INTIAL_STATE = [];

function App() {
    
    const [players, setPlayers] = useState(INTIAL_STATE)
    const [gameStarted, setGameStarted] = useState(false)


    function addNewPlayer() {
        setGameStarted(false)
        setPlayers(
            [...players, {name: "", balance: 0, id: players.length+1}]
            )
    }
  
    function onNameChangeHandler(event, id) {
        const playersArr = [...players];
        const playerIndex = id - 1
        replacingValueInPlayerArr(playerIndex, playersArr, event, true)
    }
    
    function onBalanceChangeHandler(event, id) {
        const playersArr = [...players];
        const playerIndex = id - 1
        replacingValueInPlayerArr(playerIndex, playersArr, event, false)
    }

    function replacingValueInPlayerArr(playerIndex, playerArr, event, editingName) {
        if (playerIndex > -1) {
            if (editingName) {
                playerArr[playerIndex].name = event.target.value;
                setPlayers(playerArr);
            } else {
                playerArr[playerIndex].balance = event.target.value;
                setPlayers(playerArr);
            }
        } else {
            console.log('No players in Array to reference')
        }
    }

    function startGame(gameHasStarted) {
        setGameStarted(gameHasStarted)
    }

    return (
        <div>
            <Header/>
            <AddPlayer newPlayer={addNewPlayer}/>
            <PlayerCardContainer players={players}
                                 onNameChange={onNameChangeHandler}
                                 onBalanceChange={onBalanceChangeHandler}
                                 hasGameStarted={gameStarted}
                                 startGame={startGame}
            />
        </div>
    );
}

export default App;
