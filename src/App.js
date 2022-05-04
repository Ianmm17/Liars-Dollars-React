import React, {useRef, useState} from "react";

import Header from "./components/Header/Header";
import AddPlayer from "./components/AddPlayer/AddPlayer";
import PlayerCardContainer from "./components/PlayerCardContainer/PlayerCardContainer";

function App() {
    
    const [players, setPlayers] = useState([])
    const updatePlayer = useRef(players)

    function addNewPlayer() {
        setPlayers([...players, {name: "", balance: 0, key: Math.random()}])
    }

    function onNameChangeHandler(event, key) {
        console.log(key, 'YEYYEY')
        //players.name = event.target.value
        // for (let i = 0; i < players.length; i++) {
        //     if (players[i].key === players[i].key) {
        //         console.log('made it', players[i])
        //         players[i].name = event.target.value
        //
        //         console.log(players[i].key, 'plsurt')
        //
        //     }
        // }
        console.log(players)
    }
    function onBalanceChangeHandler(event) {
        players[0].balance = event.target.value
        console.log(players)

    }



    return (
        <div>
            <Header/>
            <AddPlayer newPlayer={addNewPlayer}/>
            <PlayerCardContainer players={players} key={players.key} onNameChange={onNameChangeHandler} onBalanceChange={onBalanceChangeHandler}/>
        </div>
    );
}

export default App;
