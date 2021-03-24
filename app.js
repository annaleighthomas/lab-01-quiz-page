import { isYes } from './utils.js';


const quizButton = document.getElementById('quiz-button');
const resultsDivDisplay = document.getElementById('results-div');




quizButton.addEventListener('click', () => {
    alert('Welcome to The Smiths Quiz');

    const wantsToTakeTheQuiz = confirm('Are you sure you want to take this quiz??');

    if (wantsToTakeTheQuiz === false) {
        alert('Okay, okay, remember to still listen to The Smiths');
        return;
    }

    const name = prompt('What is your name?');
    let score = 0;

    const firstAnswer = prompt('Are The Smiths from Manchester?');
    const secondAnswer = prompt('Is Morrissey the drummer of The Smiths?');
    const thirdAnswer = prompt('Are The Smiths the greatest band of all time?');

    if (isYes(firstAnswer)) {
        score++;
    }

    if (!isYes(secondAnswer)) {
        score++;
    }

    if (isYes(thirdAnswer)) {
        score++;        
    }

    const resultsString = `Hi ${name} you scored a ${score} out of three.`;

    resultsDivDisplay.textContent = resultsString;
});
