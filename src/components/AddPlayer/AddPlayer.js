import React from "react";

import './AddPlayer.css'

function AddPlayer(props) {

    return (
        <div className='add-player'>
            <button onClick={props.newPlayer}>Add Player</button>
        </div>
    )
}

export default AddPlayer