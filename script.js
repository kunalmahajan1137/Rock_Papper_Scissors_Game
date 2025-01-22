let userScore = 0;
let computerScore = 0;
let userWin = true;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector('.msg');
const userScorePara = document.querySelector('.user-score');
const computerScorePara = document.querySelector('.comp-score'); 

const drawGame = () => {
    msg.innerText = "It's a tie. Play again.";
    msg.style.backgroundColor = "yellow";
    msg.style.color = "black";
};

const showWinner = (userWin, userchoice, compChoice) => {
    if (userWin) {
        userScore= userScore + 1;
        userScorePara.innerText = userScore;
        msg.innerText = `You win with ${userchoice} against ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        computerScore++;
        computerScorePara.innerText = computerScore;
        msg.innerText = `You lose. ${compChoice} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
    }
};

const genCompChoice = () => {
    const options = ['rock', 'paper', 'scissors'];
    const compChoice = options[Math.floor(Math.random() * 3)];
    return compChoice;
};

const playGame = (userchoice) => {
    console.log("User choice: ", userchoice);
    // Generate computer choice
    const compChoice = genCompChoice();
    console.log("Comp choice: ", compChoice);

    if (userchoice === compChoice) {
        // Draw game
        drawGame();
    } else {
        if (userchoice === 'rock') {
            // Scissors, paper
            compChoice === 'paper' ? userWin = false : userWin = true;
        } else if (userchoice === 'paper') {
            // Rock, scissors
            compChoice === 'scissors' ? userWin = false : userWin = true;
        } else {
            // Rock, paper
            compChoice === 'rock' ? userWin = false : userWin = true;
        }
        showWinner(userWin, userchoice, compChoice);
    }
};

choices.forEach(choice => {
    choice.addEventListener('click', () => {
        const userChoice = choice.getAttribute('id');
        playGame(userChoice);
    });
});
