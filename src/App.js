import React, {useRef, useState} from "react";

import Header from "./components/Header/Header";
import AddPlayer from "./components/AddPlayer/AddPlayer";
import PlayerCardContainer from "./components/PlayerCardContainer/PlayerCardContainer";

function App() {
    
    const [players, setPlayers] = useState([])

    function addNewPlayer() {
        setPlayers([...players, {name: "", balance: 0, id: Math.random()}])
    }
  
    function onNameChangeHandler(event, id) {
        for (let i = 0; i < players.length; i++) {
            if (players[i].id === id) {
                players[i].name = event.target.value
            }
        }
    }
    function onBalanceChangeHandler(event, id) {
        for (let i = 0; i < players.length; i++) {
            if (players[i].id === id) {
                players[i].balance = event.target.value
            }
        }
    }



    return (
        <div>
            <Header/>
            <AddPlayer newPlayer={addNewPlayer}/>
            <PlayerCardContainer players={players} id={players.id} onNameChange={onNameChangeHandler} onBalanceChange={onBalanceChangeHandler}/>
        </div>
    );
}

export default App;
