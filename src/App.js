import React from 'react'
import rock from './img/rock.png';
import paper from './img/paper.png';
import scissors from './img/scissors.png';
import { useState, useEffect } from 'react'




export default function App() {


 const [user, setUser] = useState('')
 // computer selcection process
const [computer, setComputer] = useState('')
const [computer_score, setComputer_score] = useState(0)
const [user_score, setUser_score] = useState(0)
function infoComputer(){
  let choices = ['rock','scissor','paper']
  let num = Math.floor(Math.random()*3)
  let info = choices[num]
  return info;
}
// delcaring score values
useEffect(() => {
  if(user === computer){
   
  }
  else if(user === 'rock'){
    if(computer === 'paper'){
      // alert("You lose!, computer won ")
       increment()
    }else{
      // alert("You win, Computer Lose")
      decrement()
    }
  }else if(user === 'scissor'){
    if(computer === 'rock'){
      // alert("You lose!, computer won")
      increment()
    }else{
      // alert("You win, Computer Lose")
      decrement()
    }
  }else{
    if(computer === 'scissor'){
      // alert("You lose!, computer won")
      
    }else{
      // alert("You win, Computer Lose")
    }
  }

}

)

//  increment function
function increment(){
  setComputer_score = + 1 
}
// decrement function
function decrement(){
  setComputer_score = -1
}

  return (
    <div className="game">
      
   <div className="info">
     <div>
     <h1>Computer Choice :{computer} </h1>
     <h1>User Choice: {user}</h1>
     </div>
     <div>
      {/* <h1>User Score : {user_score}</h1> */}
      {/* <h1>Computer Score: {computer_score}</h1> */}
     </div>
   </div>
      <div>
        <div className="board" onLoad={() => {setComputer(infoComputer())}}>
        <div>
         <button>
        <img src={rock} alt="" className="rock" onClick={() => {setUser('rock')}}   />
         </button>
         <button>
         <img src={scissors} alt="" className="scissors" onClick={() => {setUser('scissor')}}  />
      
        </button>
        <button>
        <img src={paper} alt="" className="paper" onClick={() => {setUser('paper')}}   />
        </button>
        </div>
        </div>
      </div>
    </div>
  )
}
