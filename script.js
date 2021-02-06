

//With a click, the player choses rock, paper or scissors
document.querySelector(".rock").addEventListener("click", () => {
    playersChoice("rock");
});
document.querySelector(".paper").addEventListener("click", () => {
    playersChoice("paper");
});
document.querySelector(".scissors").addEventListener("click", () => {  
    playersChoice("scissors");
});
//And array of choices to be used later by the computer randomly (in the next funcion).
const choices = ["rock", "paper", "scissors"];
//after the player clicks, we create the computer choice below
const playersChoice = (choice) =>
{
    //Math.random would give us a number with decimals included, and Math.floor takes that away.
    const randomNumber = Math.floor(Math.random() * 3)
    //Below is the computer's choice: a random choice (choices and randomNumber)
    const randomComputerChoice = choices[randomNumber]
    console.log("My choice:", choice, " Computer's choice: ", randomComputerChoice)
    //the hands shake  after the player's choice is executed.
    document.querySelector("#player1").classList.add("shake");
    //After the animation of shake starts, it also has to end, with one of the results.
    //for both player and computer.
    document.querySelector("#player1").addEventListener("animationend", () => {
        document.querySelector("#player1").classList.remove("shake");
        if (choice === "rock") {
            document.querySelector("#player1").classList.add("rock");
        }
        else if (choice === "scissors") {
            document.querySelector("#player1").classList.add("scissors");
        }
        else {
            document.querySelector("#player1").classList.add("paper");

        };
        // I added a delay in showing the Results' text.
        setTimeout(() => {
            determineWinner(choice, randomComputerChoice)
        }, 500)
    });
    //Same as above, but on the computer's side.
    document.querySelector("#player2").classList.add("shake");
    document.querySelector("#player2").addEventListener("animationend", () => {
        document.querySelector("#player2").classList.remove("shake");
        if (randomComputerChoice === "rock") {
            document.querySelector("#player2").classList.add("rock");
        }
        else if (randomComputerChoice === "scissors") {
            document.querySelector("#player2").classList.add("scissors");
        }
        else {
            document.querySelector("#player2").classList.add("paper");

        };
        setTimeout(() => {
            determineWinner(choice, randomComputerChoice)
        }, 500)
    });

};
// Whatever the player chose + whatever the computer chose so JS can determine the winner.
const determineWinner = (myChoice, compsChoice) => {
if (myChoice === compsChoice) {
    playerTied();
} 
if (myChoice === 'rock') {
    if (compsChoice === 'paper') {
        playerLost();
    }
    else if (compsChoice === 'scissors') {
        playerWon();
    }
}
if (myChoice === 'paper') {
    if (compsChoice === 'rock') {
        playerWon();
    }
    else if (compsChoice === 'scissors') {
        playerLost();
    }
}
if (myChoice === 'scissors') {
    if (compsChoice === 'rock') {
        playerLost();
    }
    else if (compsChoice === 'paper') {
        playerWon();
    }
}

};
// The text is hidden by default, and here I am removing that class so the respective text would appear.
const playerWon = () => {
    document.querySelector("#win").classList.remove("hidden");
}
const playerLost = () => {
    document.querySelector("#lose").classList.remove("hidden");
}
const playerTied = () => {
    document.querySelector("#draw").classList.remove("hidden");
}
