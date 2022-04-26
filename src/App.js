import React, {useState} from "react";

import Header from "./components/Header/Header";
import AddPlayer from "./components/AddPlayer/AddPlayer";
import PlayerCardContainer from "./components/PlayerCardContainer/PlayerCardContainer";

function App() {
    
    const [players, setPlayers] = useState([])

    function addNewPlayer() {
        setPlayers([...players, {name: "", balance: 0}])
    }
    function onNameChangeHandler(event) {
        players[0].name = event.target.value
        console.log(players[0])
    }
    function onBalanceChangeHandler(event) {
        players[0].balance = event.target.value
        console.log(players[0])

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
