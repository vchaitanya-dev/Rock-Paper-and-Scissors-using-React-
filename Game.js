import React from 'react'
import {useEffect} from 'react'
function Game({input}) {
    useEffect(() => {
       
      
    },[])
    let choices_object = 
    {
        'rock' : {
            'rock' : 'draw',
            'scissor' : 'win',
            'paper' : 'lose'
        },
        'scissor': {
            'rock' : 'lose',
            'scissor' : 'draw',
            'paper' : 'win'
        },
        'paper': {
            'rock' : 'win',
            'scissor' : 'lose',
            'paper' : 'draw'
        }
    }

    let user_choices = choices_object[input]

    let choices = ["rock", "scissors", "paper"];
    let num = Math.floor(Math.random() *3);
    let computer_choices = choices[num];
    return (
        <div>
            <h1>Computer : {computer_choices}</h1>
            <h1>User : {user_choices} </h1>
        </div>
    )
}

export default Game
