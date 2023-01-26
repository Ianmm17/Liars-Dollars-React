import React, {useState} from "react";

import CustomInput from "./CustomInput";
import WinLoseButton from "./WinLoseButton";
import './PlayerCardForm.css'


function PlayerCardForm(props) {

    function nameHandler(event) {
        props.onNameChange(event, props.player.id)
    }

    function balanceHandler(event) {
        props.onBalanceChange(event, props.player.id)
    }

    function startGame() {
        props.startGame()
    }

    function updatePlayersBalance(winOrLost) {
        // TODO: 1) Verify there's two or more players. 2) Work on updating player cards once W or L is clicked
        if (winOrLost === 'W') {
            console.log('we won')
            for (var i = 0; i < props.players.length; i++) {
                if (props.players[i].name !== props.player.name) {
                    props.players[i].balance = parseInt(props.players[i].balance) - 1
                }
                console.log(props.players[i]);
              }
            props.player.balance = parseInt(props.player.balance) + (props.players.length - 1)
        } else {
            console.log('we lost')
            for (var i = 0; i < props.players.length; i++) {
                if (props.players[i].name !== props.player.name) {
                    props.players[i].balance = parseInt(props.players[i].balance) + 1
                }
                console.log(props.players[i]);
              }
            props.player.balance = parseInt(props.player.balance) - (props.players.length - 1)
        }
        
    }

    return (
        <form className="player-card">
            <CustomInput type="text" classes='input-name' name={props.player.name} displayedText={props.player.name} changeHandler={nameHandler} placeHolder='Enter Name' />
            <CustomInput type="number" classes='input-balance' balance={props.player.balance} displayedText={props.player.balance} changeHandler={balanceHandler} placeHolder='Enter starting balance' />
            <WinLoseButton winOrLost='W' classes='winner' player={{name: props.name, balance: props.balance}} updatePlayersBalance={updatePlayersBalance} clickHandler={startGame}/>
            <WinLoseButton winOrLost='L' classes='lost' player={{name: props.name, balance: props.balance}} updatePlayersBalance={updatePlayersBalance} clickHandler={startGame}/>
        </form>
    )
}

export default PlayerCardForm