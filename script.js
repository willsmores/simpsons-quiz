 // document ready begins

$(document).ready(function(){


// define answerKey array

const answerKey = [
    `q1B`,
    `q2D`,
    `q3A`,
    `q4D`,
    `q5C`,
    `q6A`,
    `q7B`,
    `q8D`,
    `q9C`,
    `q10C`
];


// define variables

let userScore = 0;
let wrongGuesses = 0;

const intro = new Audio(`./media/Theme_Song.mp3`);
const doh = new Audio(`./media/Doh_Sound_Effect.mp3`);
const okily = new Audio(`./media/okliy.mp3`);
const woohoo = new Audio(`./media/homer-woohoo.mp3`);
const excellent = new Audio(`./media/Mr_Burns_Excellent_Sound_Effect.mp3`);
const haha = new Audio(`./media/the-simpsons-nelsons-haha.mp3`);


// cache selectors

const $button = $(`button`);
const $score = $(`.score`);
const $wrongGuesses = $(`.wrongGuesses`);
const $clickToPlay = $(`.clickToPlay`);
const $goTo2 = $(`.goTo2`);
const $goTo3 = $(`.goTo3`);
const $goTo4 = $(`.goTo4`);
const $goTo5 = $(`.goTo5`);
const $goTo6 = $(`.goTo6`);
const $goTo7 = $(`.goTo7`);
const $goTo8 = $(`.goTo8`);
const $goTo9 = $(`.goTo9`);
const $goTo10 = $(`.goTo10`);
const $header = $(`#header`);
const $q1 = $(`#q1`);
const $q2 = $(`#q2`);
const $q3 = $(`#q3`);
const $q4 = $(`#q4`);
const $q5 = $(`#q5`);
const $q6 = $(`#q6`);
const $q7 = $(`#q7`);
const $q8 = $(`#q8`);
const $q9 = $(`#q9`);
const $q10 = $(`#q10`);
const $goToScore = $(`.goToScore`);
const $scoreboard = $(`#scoreboard`);
const $grade = $(`.grade`);
const $clickToPlayAgain = $(`.clickToPlayAgain`);


// event listener to get button id and class

$button.on(`click`, function() {
    
    const userSelection = $(this).attr(`id`); // add id from clicked button to variable
    const buttonClass = $(this).first().attr('class').split(' ')[0]; // add class from clicked button to variable - split 0 grabs only the first class e.g. q1Button (not buttonHover)


// compare clicked button id to answerKey array

    if (answerKey.includes(userSelection) === true) {
        woohoo.play();
        userScore = userScore + 1;
        $score.text(userScore);
        $(this).addClass(`correct`).attr(`disabled`, `disabled`).removeClass(`buttonHover`); // highlight correct answer
        $(`.${buttonClass}`).attr(`disabled`, `disabled`).removeClass(`buttonHover`); // deactivate all buttons on current question
    } else if (answerKey.includes(userSelection) === false) {
        doh.play();
        userScore = userScore - 1;
        wrongGuesses = wrongGuesses + 1;
        $score.text(userScore);
        $wrongGuesses.text(wrongGuesses);
        $(this).addClass(`incorrect`).attr(`disabled`, `disabled`).removeClass(`buttonHover`); // highlight incorrect answer
    };
});


// event listener to make q1 appear

$clickToPlay.on(`click`, function() {
    intro.play();
    $header.css(`display`, `none`);
    $q1.removeClass(`question1`);
});


// event listener to make q2 appear

$goTo2.on(`click`, function() {
    $q1.css(`display`, `none`);
    $q2.removeClass(`question2`);
});


// event listener to make q3 appear

$goTo3.on(`click`, function() {
    $q2.css(`display`, `none`);
    $q3.removeClass(`question3`);
});


// event listener to make q4 appear

$goTo4.on(`click`, function() {
    $q3.css(`display`, `none`);
    $q4.removeClass(`question4`);
});


// event listener to make q5 appear

$goTo5.on(`click`, function() {
    $q4.css(`display`, `none`);
    $q5.removeClass(`question5`);
});


// event listener to make q6 appear

$goTo6.on(`click`, function() {
    $q5.css(`display`, `none`);
    $q6.removeClass(`question6`);
});


// event listener to make q7 appear

$goTo7.on(`click`, function() {
    $q6.css(`display`, `none`);
    $q7.removeClass(`question7`);
});


// event listener to make q8 appear

$goTo8.on(`click`, function() {
    $q7.css(`display`, `none`);
    $q8.removeClass(`question8`);
});


// event listener to make q9 appear

$goTo9.on(`click`, function() {
    $q8.css(`display`, `none`);
    $q9.removeClass(`question9`);
});


// event listener to make q10 appear

$goTo10.on(`click`, function() {
    $q9.css(`display`, `none`);
    $q10.removeClass(`question10`);
});


// event listener to make final score appear

$goToScore.on(`click`, function() {
    $q10.css(`display`, `none`);
    $scoreboard.removeClass(`finalScore`);
    
    // calc final grade

    if (userScore >= 6) {
        $grade.text(`EXCELLENT!`);
        excellent.play();
    } else if (userScore === 5) {
        $grade.text(`OKILY DOKILY!`);
        okily.play();
    } else if (userScore <= 4) {
        $grade.text(`HAHA!`);
        haha.play();
    }
});


// event listener to make page refresh

$clickToPlayAgain.on(`click`, function() {
    location.reload();
});


// document ready ends

});