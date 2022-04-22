import React from "react";

import Header from "./components/Header/Header";
import PlayerCard from "./components/PlayerCard/PlayerCard";
import AddPlayer from "./components/AddPlayer/AddPlayer";


function App() {
    return (
        <div>
            <Header/>
            <AddPlayer playerCard={PlayerCard}/>
            <PlayerCard/>
            <PlayerCard/>
        </div>
    );
}

export default App;
