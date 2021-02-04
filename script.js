document.querySelector(".rock").addEventListener("click", () => {
    playersChoice("rock");
});
document.querySelector(".paper").addEventListener("click", () => {
    playersChoice("paper");
});
document.querySelector(".scissors").addEventListener("click", () => {  
    playersChoice("scissors");
});

const choices = ["rock", "paper", "scissors"];
const playersChoice = (choice) =>
{
    const randomNumber = Math.floor(Math.random() * 3)
    const randomComputerChoice = choices[randomNumber]
    console.log("My choice:", choice, " Computer's choice: ", randomComputerChoice)
    document.querySelector("#player1").classList.add("shake");
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
        setTimeout(() => {
            determineWinner(choice, randomComputerChoice)
        }, 500)
    });
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

const playerWon = () => {
    document.querySelector("#win").classList.remove("hidden");
}
const playerLost = () => {
    document.querySelector("#lose").classList.remove("hidden");
}
const playerTied = () => {
    document.querySelector("#draw").classList.remove("hidden");
}
