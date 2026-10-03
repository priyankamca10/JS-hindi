let randomNumber = parseInt (Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHigh = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p')

let prevGuess = []
let numGuess = 1   //no of guesses done 

let playGame = true

if(playGame){
    submit.addEventListener('click', function(e){
        e.preventDefault();
        const guess = parseInt(userInput.value);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    // it will validate whether the user input is between the 1 to 100 number
    if (isNaN(guess)){
        alert('Please enter a valid number')
    }else if(guess < 1){
        alert('Please enter a number more than 1')
    }else if(guess > 100){
        alert('Please enter a number less than 100')
    }else{
        prevGuess.push(guess)
        if(numGuess === 11){
            displayGuess(guess)
            displayMessage(`Game Over . Random number was ${randomNumber}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }

}

function checkGuess(guess){
    // it will check guesses of user whether it is matching with random number then display the msg using displayMessage method
    //it will check whether the guess of user is low of high compare to random number

    if(guess === randomNumber){
        displayMessage(`You guesses it right`);
        endGame()
    
    } else if(guess < randomNumber){
        displayMessage(`Your number is too low`);
    }else if(guess > randomNumber){
        displayMessage(`Your number is tooo high`);
    }
}

function displayGuess(guess){
    // it will clear the input field of user and also it will upadate previous guess and remaining guess
    userInput.value = ''
    guessSlot.innerHTML += `${guess} ,`
    numGuess++ ;
    remaining.innerHTML = `${11 - numGuess}`;

}

function displayMessage(message){
    // it will display low or high value of guesses in element
   lowOrHigh.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    //
    userInput.value = ''
    userInput.setAttribute('disabled', '')
    p.classList.add('button')
    p.innerHTML = `<h2 id = "newGame">Start New Game </h2>`
    startOver.append(p)
    playGame = false;
    newGame()
}

function newGame(){
    //
    const newGameButton = document.querySelector('#newGame')
    newGameButton.addEventListener('click', function(e){
        randomNumber = parseInt (Math.random() * 100 + 1);
        prevGuess = []
        numGuess = 1 
        remaining.innerHTML = `${11 - numGuess}`
        guessSlot.innerHTML = ''
        userInput.removeAttribute('disabled');
        startOver.removeChild(p);
        playGame = true;
    })
}