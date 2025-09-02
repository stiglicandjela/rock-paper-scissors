
var humanScore=0;
var computerScore=0;

do{

var choice = prompt("Enter your choice: (rock,paper or scissors)");

var human = choice.toLowerCase();

alert("Human choice " + human);

function getComputerChoice(min,max){
    return Math.floor(Math.random()*((max-min+1)+min));
}

var computerChoice = getComputerChoice(0,1);

if(computerChoice==1){
    var computer = "rock";
}else if (computerChoice == 2){
    var computer = "paper";
}else if (computerChoice == 0){
    var computer="scissors";
}

alert("Computer choice " + computer);

function Compare(computer,human){
    if(computer==human){
        alert("It's a tie!");
    }else if((computer=="rock" && human=="scissors") || (computer=="scissors" && human=="paper") || (computer=="paper" && human=="rock")){
        computerScore++;
        alert("You lose, " + computer + " beats " + human + "!" + "\n Your score: " + humanScore + "\n Computer score: " + computerScore);
    }else if ((human=="rock" && computer=="scissors") || (human=="scissors" && computer=="paper") || (human=="paper" && computer=="rock")){
        humanScore++;
        alert("You win, " + human + " beats " + computer + "!" + "\n Your score: " + humanScore + "\n Computer score: " + computerScore);

    }
}

Compare(computer,human);
}while(computerScore<5 && humanScore<5);

if(computerScore>humanScore){
    alert("You lose! " + computerScore + ":" + humanScore + " Better luck next time!");
}else{
    alert("You won! " + humanScore + ":" + computerScore + " Good game!")
}