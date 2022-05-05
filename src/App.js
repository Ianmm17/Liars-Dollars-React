import React, {useRef, useState} from "react";

import Header from "./components/Header/Header";
import AddPlayer from "./components/AddPlayer/AddPlayer";
import PlayerCardContainer from "./components/PlayerCardContainer/PlayerCardContainer";

const INTIAL_STATE = [];

function App() {
    
    const [players, setPlayers] = useState(INTIAL_STATE)

    function addNewPlayer() {
        setPlayers(
            [...players, {name: "", balance: 0, id: players.length+1}]
            )
    }
  
    function onNameChangeHandler(event, id) {
        const playersArr = [...players];
        const playerIndex = getPlayerIndexById(id, playersArr);
        if (playerIndex > -1) {
            playersArr[playerIndex].name = event.target.value;
            setPlayers(playersArr);
            console.log(players)
        }
    }
    
    function onBalanceChangeHandler(event, id) {
        const playerArr = [...players];
        const playerIndex = getPlayerIndexById(id, playerArr);
        if (playerIndex > -1) {
            playerArr[playerIndex].balance = event.target.value;
            setPlayers(playerArr);
        }
    }

    function getPlayerIndexById(id, playersArr) {
        let playerIndex = -1;
        for (let i = 0; i < playersArr.length; i++) {
            if (playersArr[i].id === id) {
                playerIndex = i
            }
        }
        return playerIndex
    }

    return (
        <div>
            <Header/>
            <AddPlayer newPlayer={addNewPlayer}/>
            <PlayerCardContainer players={players} onNameChange={onNameChangeHandler} onBalanceChange={onBalanceChangeHandler}/>
        </div>
    );
}

export default App;
