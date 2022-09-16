import React from 'react'
import rock from './img/rock.png';
import paper from './img/paper.png';
import scissor from './img/scissor.png';
import { useState, useEffect, useRef } from 'react';
function App() {
  // useState for use Selection process 
  const [user, setUser] = useState('')
  // useState for delcaring winner and loser
  const [winner, setWinnner] = useState('')
   // computer selcection process
  const [computer, setComputer] = useState('')
  // labeling the scoring
  const compScore = useRef(0)
  const useScore = useRef(0)
  function infoComputer(){
    let choices = ['rock','scissor','paper']
    let num = Math.floor(Math.random()*3)
    let info = choices[num]
    return info;
  }
  // delcaring winner 
  useEffect(() => {
    const timerId = setTimeout(() => {
      if(user === computer){
        draw()
       }
       else if(user === 'rock'){
         if(computer === 'paper'){
           loser()
         }else{
           won()
         }
       }else if(user === 'scissor'){
         if(computer === 'rock'){
           loser()
         }else{
           won()
         }
       }else if(user === "paper"){
         if(computer === 'scissor'){
           loser()
         }else{
           won()
         }
       }
       
       // delcaring user as  winner function 
       function won(){
        setWinnner('You won, Computer lose')
        useScore.current ++;
      }
       // delecaring computer as winner function
       function loser(){
         setWinnner('Computer won, You lose')
         compScore.current ++;
       }
       function draw(){
         setWinnner('Both choose same')
       }
     
  }, 2);
  return () => clearTimeout(timerId);
},[user, computer])
  

   return (
     <div className="game">
       
     <div className="info">
     
       <h1>Computer Choice :{computer} </h1>
       <h1>User Choice: {user}</h1>
     
     </div>
        <div>
          <div className="board">
          <div>
           <button onClick={()=> {setComputer(infoComputer())}}>
          <img src={rock} alt="" className="rock" onClick={() => {setUser('rock')}}   />
           </button>
           <button onClick={()=> {setComputer(infoComputer())}}>
           <img src={scissor} alt="" className="scissors" onClick={() => {setUser('scissor')}}  />
        
          </button>
          <button onClick={()=> {setComputer(infoComputer())}}>
          <img src={paper} alt="" className="paper" onClick={() => {setUser('paper')}}   />
          </button>
          </div>
          </div>
        </div>
        <div>
          <h1>Winner is : {winner}</h1>
          <h2>Computer score is {compScore.current}</h2>
          <h2>User score is {useScore.current}</h2>
        </div>
      </div>

   )
   }

export default App

