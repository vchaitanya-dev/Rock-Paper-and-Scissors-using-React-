import rock from './img/rock.png';
import paper from './img/paper.png';
import scissors from './img/scissors.png';
// import Game from './Game';

import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      rock: "",
      paper: "",
      scissors:"",
    }
  }
  
  render() {
    
    function handleRock(event){
    const{rock, value} = event.target;
    this.setState({
      [rock]: value
    })
    }
    function handlePaper(event){
      const {paper, value} = event.target;
      this.setState({
        [paper]:value
      })
    }
    function handleScissors(event){
      const{scissors, value} = event.target;
      this.setState({
        [scissors]:value
      })
    }
    return (
      <div>
      <div>
        <h1>ROCK PAPER AND SCISSOR</h1>
      </div>
      <div className="game">
      <h1>Computer choicse is  </h1>
   <div className="board">
   <button>
      <img src={rock} alt="" className="rock"
      onClick={handleRock}
      />
     </button>
     <button>
       <img src={scissors} alt="" className="scissors"  onClick={handleScissors}/>
     </button>
     <button>
       <img src={paper} alt="" className="paper"  onClick={handlePaper} />
     </button>
      </div>
   </div>
{/* <Game input={input} ></Game> */}
    </div>
    )
  }
}

