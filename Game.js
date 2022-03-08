import React from 'react'
export default function Game({input, computer}) {

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

    let user_score = 0;
let computer_score = 0;
    switch(choices_object[input][computer]){
        case 'win':
            user_score++ 
            break;
        case 'lose':
            computer_score++
            break;
        default:
            user_score++
            computer_score++
            break;    
        }
// i am facing an error where i can't compare the values of user input and computer
//  The above switch condition help me to determine the point for user or computer
//  its showing uncaught error again and again 
// please resolve this error or bug 

   return (
        <>
         <h1 className="score">{user_score}</h1>
         <h1 className="score"> {computer_score}</h1>
        </>
    )
}
