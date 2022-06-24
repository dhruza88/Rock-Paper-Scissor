var compChoice= ["P", "S","R"]
var comp = compChoice[Math.floor(Math.random()*compChoice.length)]
var gameflag= true;
var w =0;
var l =0;
var t=0;

while(gameflag){

 if(confirm("Would you like to play")){
    var user= prompt("Please Choice R, P, or S")
    } else
    {
        gameflag=false;
    }
 
    user = user.toLocaleUpperCase();

    if (user == "R") 
    {
      if (compChoice == "R") 
      {
       alert("You Chose Rock, Comp chose Rock, You Tied!");
       t++
      } 
      else if (compChoice == "P") 
      {
       alert("You Chose Paper, Comp chose Rock, You Lose!");
       l++
      }
      else {
       alert("You Chose Rock, Comp chose Rock, You Win!");
       w++
      };
      }
      else if (user == "P")
       {
       if (compChoice == "R") 
       {
        alert("You Chose Paper, Comp chose Rock, You Win!");
        r++
       } 
       else if (compChoice == "P") 
       {
        alert("You Chose Paper, Comp chose Rock, You Tied!");
        t++
      }
       else {
        alert("You Chose Paper, Comp chose Rock, You Lose!");
        l++
       };
     } else if (user == "S") {
       if (compChoice == "R") {
        alert("You Chose Scissor, Comp chose Rock, You Lose!");
        l++
       } else if (compChoice == "P") {
        alert("You Chose Scissor, Comp chose Paper, You Win!");
        w++
      } else {
        alert("You Chose Scissor, Comp chose Scissor, You Tie!");
        t++
       };
     } else {
       alert("Invalid Input");
     }

     if (confirm(`Total Wins: ${w}\nTotal Loses: ${l}\nTotal Ties: ${t}\nOk to play\nCancel to End`)) {
      game = true;
    } else {
      game = false;
    }
    }
