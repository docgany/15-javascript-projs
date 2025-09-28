//First step is to cache the DOM by declaring variables
// that store the DOM element.
//declare and initialise both user and computer score values to 0

let userScore = 0;
let compScore = 0;

// Access and store in variables the html element that displays
//both the user and computer score which are in a span element.

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("comp-score");

//Access and store in variable both the scoreboard div and result div

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

// Access and store the rock,paper, scissors buttons in variables

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

// Add Eventlisteners to each button
// check if it works by console logging a message within your function


function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "p") return "Paper";
    if (letter === "r") return "Rock";
    return "Scissors";
}


function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord} . You win! 🔥`;
    userChoice_div.classList.add("green-glow");
    setTimeout(() => { userChoice_div.classList.remove('green-glow') }, 1000);
}

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    compScore++;
    userScore_span.innerHTML = userScore;
    compScore_span.innerHTML = compScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to  ${convertToWord(computerChoice)}${smallCompWord} . You lost.....😭 `;
    userChoice_div.classList.add("red-glow");
    setTimeout(() => { userChoice_div.classList.remove('red-glow') }, 1000);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord} . It is a draw 😏`;
    userChoice_div.classList.add("gray-glow");
    setTimeout(() => { userChoice_div.classList.remove('gray-glow') }, 1000);

}

function game(userChoice) {
    /*console.log(" 💩 💩 💩    " + userChoice);*/
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            /*console.log('USER WINS.');*/
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            /*console.log('USER LOSES.');*/
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            /*console.log('It is a draw.');*/
            draw(userChoice, computerChoice);
            break;
    }
}



function main() {
    rock_div.addEventListener('click', () => {
        /*console.log("hey you clicked on rock");*/
        game("r");

    })

    paper_div.addEventListener('click', () => {
        /*console.log('hey you clicked on paper');*/
        game("p");
    })

    scissors_div.addEventListener('click', () => {
        /*console.log('hey you clicked on scissors.');*/
        game("s");
    })  
}

//Invoke the function called 'main' after defining it.

main();

//We create a function called 'game' which can take parameters: r, p, s
// After creating the function, we invoke it in the function body
//that has our evenlisteners, so when we click on individual buttons,
// the function executes with the individual parameter consistent with the btn.
// First, we create  a function called 'main'and embed all the above in it.
/*We define our function 'game' which takes the user choice so whenever each button is clicked, the value of button clicked is gotten and then compared to the computer choice and the get the result back */