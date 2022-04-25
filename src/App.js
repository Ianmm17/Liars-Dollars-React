import React, {useState} from "react";

import Header from "./components/Header/Header";
import AddPlayer from "./components/AddPlayer/AddPlayer";
import PlayerCardContainer from "./components/PlayerCardContainer/PlayerCardContainer";

function App() {
    
    const [players, setPlayers] = useState([])

    function addNewPlayer() {
        setPlayers([...players, {name: "", balance: 0}])
    }
    
    return (
        <div>
            <Header/>
            <AddPlayer newPlayer={addNewPlayer}/>
            <PlayerCardContainer players={players}/>
        </div>
    );
}

export default App;
