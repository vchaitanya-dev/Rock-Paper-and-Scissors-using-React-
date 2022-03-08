import rock from './img/rock.png';
import paper from './img/paper.png';
import scissors from './img/scissors.png';
import Game from "./Game";
import React, { Component } from 'react'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state = {
     value: null,
    }
  }
  computerInput(){
    let choices = ["rock","scissors","paper"];
    let num = Math.floor(Math.random()*3);
    let computer_choice = choices[num]
    return computer_choice;
  };

userInput(){
   let input = this.state.value;
   let user_choice = input;
   
   return user_choice;
};
  render() {
     
    return (
     
      <div>
      <div>
        <h1>ROCK PAPER AND SCISSOR</h1>
      </div>
     <div>
     <div className="game">
      <h1 className="computer">Computer choicse is {this.computerInput()} </h1>
      <h1 className="user">user choicse is {this.userInput()} </h1>
<Game input={this.userInput()} computer={this.computerInput()} ></Game>
   <div className="board">
   <button>
      <img src={rock} alt="" className="rock"
      onClick={() => this.setState({value:'rock'})}
    
      />
      
     </button>
     <button>
       <img src={scissors} alt="" className="scissors" 
        onClick={() => this.setState({value:'scissor'})}
       
       />
      
     </button>
     <button>
       <img src={paper} alt="" className="paper" 
        onClick={() => this.setState({value:'paper'})} 
       
        />
        
     </button>
      </div>
       </div>
   </div>
  </div>
    )
  }
}
