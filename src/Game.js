import React from 'react'
export default function Game({input, computer}) {
console.log(input);
console.log(computer);
    let user_score = 0;
let computer_score = 0;
// if(choices_object[input][computer]){
//     if('win'){
//         user_score++
//     }
//     else if('lose'){
//         computer_score++
//     }else{
//         <h1>draw</h1>
//     }
// }
// switch(choices_object[input][computer]){
//     case 'win':
        
//         user_score++;
//         break;
//     case 'lose':
        
//         computer_score++;
//         break;
//     default:
//         console.log(user_score)
//         break;
// }

// i am facing an error where i can't compare the values of user input and computer
//  The above switch condition help me to determine the point for user or computer
//  its showing uncaught error again and again 
// please resolve this error or bug 

   return (
        <>
         <h1 className="score">user: {user_score}</h1>
         <h1 className="score">computer: {computer_score}</h1>
        </>
    )
}
