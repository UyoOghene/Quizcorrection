let score = 0;
let currentQuestionIndex = 0;
const answerButtons = document.getElementById('answer-buttons');
const quizQuestions = document.querySelector('.quizquestions');
const question = document.getElementById('question');
const questionnum = document.querySelector('.question-num')
const next = document.getElementById('next');
const presentScore= document.getElementById('presentScore');
const timer = document.querySelector('.timer');
const musictxt = document.querySelector('#musictxt');
const music = document.querySelector('.music');
const musicSrc = document.querySelector('#music-src');
const startPage = document.querySelector('#start-page');
const startBtn = document.getElementById('start');
const hallbtn = document.querySelector('#hall');
const quizBox = document.querySelector('.quizbox');
const backButton = document.querySelector('#back');
const highScoreElement = document.querySelector('#high-scores');
const highScore1 = document.querySelector('#high1');
const highScore2 = document.querySelector('#high2');
const highScore3 = document.querySelector('#high3');
const highScore4 = document.querySelector('#high4');
const highScore5 = document.querySelector('#high5');
const hallInput = document.querySelector('#hallinput');
const inputBtn = document.querySelector('#inputBtn');
const playagainBtn = document.querySelector('#playagainbtn');


const questions =[
    {
        question:"Which of these is not a starter pokemon?",
        answers: [
            {text: 'torchic', correct: false},
            {text: 'cyndaquil', correct: false},
            {text: 'golem', correct: true},
            {text: 'totodile', correct: false},
        ]
    },
    {
        question:"Which of these has psychic abilities?",
        answers: [
            {text: 'scyther', correct: false},
            {text: 'houndoom', correct: false},
            {text: 'exeggutor', correct: true},
            {text: 'ivysaur', correct: false},
        ]
    },
    {
        question:"Which of these is in its most evolved version?",
        answers: [
            {text: 'bellosom', correct: true},
            {text: 'nidorina', correct: false},
            {text: 'golbat', correct: false},
            {text: 'poliwhirl', correct: false},
        ]
    },
    {
        question:"Which of these moves is supereffective against a water pokemon?",
        answers: [
            {text: 'giga drain', correct: true},
            {text: 'seismic toss', correct: false},
            {text: 'horn attack', correct: false},
            {text: 'dreameater', correct: false},
        ]
    },
    {
        question:"Which of these pokemon does not evolve?",
        answers: [
            {text: 'kabuto', correct: false},
            {text: 'dragonair', correct: false},
            {text: 'tropius', correct: true},
            {text: 'sentret', correct: false},
        ]
    },
    {
        question:"Which of these do i use to increase the level of the pokemon?",
        answers: [
            {text: 'red shard', correct: false},
            {text: 'black glasses', correct: false},
            {text: 'moon stone', correct: false },
            {text: 'rare candy', correct: true},
        ]
    },
    {
        question:"Which of these gym leaders specialize in grass type?",
        answers: [
            {text: 'lt surge', correct: false},
            {text: 'misty', correct: false},
            {text: 'erika', correct: true},
            {text: 'koga', correct: false},
        ]
    },
    {
        question:"Which of these pokemon has a weakness for pschic moves?",
        answers: [
            {text: 'jynx', correct: false},
            {text: 'tyrogue', correct: true},
            {text: 'starmie', correct: false},
            {text: 'bellsprout', correct: false},
        ]
    },
    {
        question:"Which pokemon is eevee's psychic evolution?",
        answers: [
            {text: 'umbreon', correct: false},
            {text: 'flareon', correct: false},
            {text: 'espeon', correct: true},
            {text: 'glaceon', correct: false},
        ]
    },
    {
        question:"Which of these moves is supereffective against jynx?",
        answers: [
            {text: 'earthquake', correct: false},
            {text: 'water gun', correct: false},
            {text: 'hyper fang', correct: false},
            {text: 'bite', correct: true},
        ]
    }
]
let countdown = 10; 
let highScoreName = hallInput.value;
let mytimeout = setTimeout(time, 2000);

startBtn.addEventListener('click', startQuiz);
hallInput.addEventListener('keydown', showInputValue2);
backButton.addEventListener('click',backbtn);
playagainBtn.addEventListener('click',playAgain);
hallbtn.addEventListener('click', fame);
next.addEventListener('click', nextQ);
inputBtn.addEventListener('click', saveHighScore);
// musictxt.addEventListener('click', changeSrc);

function starterPageFunc(){
}

function startQuiz() {
    startPage.style.display = "none";
    console.log('Starting quiz');
    quizBox.style.display = "block";
    quizQuestions.style.display = 'block';
    inputBtn.style.display = 'none';
    highScoreElement.style.display = 'none'; 
    countdown = 10;
    time(); 
    currentQuestionIndex = 0;
    score = 0;
    presentScore.innerHTML = 0;
    questions.sort(() => Math.random() - 0.5);
    const selectedQuestions = questions.slice(0, 5);
    questions.splice(0, questions.length, ...selectedQuestions);
    next.innerHTML = 'Next';
    showQuestion();
}

function backbtn(){
    console.log('back');
    startPage.style.display = "block";
    inputBtn.style.display = 'none';
    hallInput.style.display = 'none';
    quizBox.style.display = "none";
    highScoreElement.style.display = 'none';
    playagainBtn.style.display = 'none';
}

function playAgain(){
    console.log('back');
    hallInput.style.display = 'none';
    inputBtn.style.display = 'none';
    // hallOfFameBtn.style.display = 'none';

    highScoreElement.style.display = 'none';
    startPage.style.display = "block";
    quizBox.style.display = "none"; 
    playagainBtn.style.display = 'none';
}

function saveHighScore() {
    let highScoreName = hallInput.value.trim();
    if (highScoreName) {
        const highScores = getHighScores();
        highScores.push({ name: highScoreName, score: score });
        highScores.sort((a, b) => b.score - a.score);
        highScores.splice(5);
        localStorage.setItem('highScores', JSON.stringify(highScores));
        displayHighScores();
    }
}

function getHighScores() {
    const scores = localStorage.getItem('highScores');
    return scores ? JSON.parse(scores) : [];
}

function displayHighScores() {
    const highScores = getHighScores().slice(0, 5);  
    const highScoreElements = [highScore1, highScore2, highScore3, highScore4, highScore5];
    highScores.forEach((score, index) => {
        if (highScoreElements[index]) {
            highScoreElements[index].textContent = `${Object.values(score)[0]}: ${Object.values(score)[1]}`;
        }
    });

    for (let i = highScores.length; i < highScoreElements.length; i++) {
        if (highScoreElements[i]) {
            highScoreElements[i].textContent = '';
        }
    }
}

function fame() {
    console.log('Hall of Fame');
    quizBox.style.display = 'none';
    startPage.style.display = 'none';
    highScoreElement.style.display = 'block'; 
    displayHighScores();
} 

function time() {
    timer.innerHTML = 'Time left:' + countdown + 's' ; 
    countdown -=1; 
    if (countdown < 0) {
        timer.innerHTML = 'Oops! Time\'s up'; 
        Array.from(answerButtons.children).forEach(button => {
            if (button.dataset.correct === 'true') {
                button.classList.add('correct');
            }
            button.disabled = true;
        });
        next.style.display = 'block';
    } else {
        mytimeout = setTimeout(time, 2000);
    }
}
 
function showInputValue2(e){

        if (e.key === 'Enter'  ) {
            console.log('Enter key was pressed.');
            inputBtn.style.display = 'none';
            console.log(hallInput.value);
            hallInput.style.display = 'none';
        }
        
    }
    

function showQuestion(){
    
    clearTimeout(mytimeout);
    timer.style.display ='block';
    resetState();
    countdown = 10;
    time();
    let currentQuestion =questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionnum.innerHTML ='Question' + ' ' + questionNo + ' ' + 'out of 5 shuffled from 10';
    question.innerHTML =questionNo +'. '+ currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct =answer.correct;
            clearTimeout(mytimeout);

        }
    button.addEventListener('click',selectAnswer);
    });
    next.style.display = 'none';
}

function resetState(){
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild)
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === 'true';
    if(isCorrect){
        selectedBtn.classList.add('correct');
        score++;
    }else{
        selectedBtn.classList.add('incorrect');
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === 'true'){
            button.classList.add('correct');
        }
        button.disabled = true;

    }); 
    timer.style.display ='none';
    next.style.display = 'block';
}
     
function showScore() {
    console.log('showscore')
    console.log(hallInput.value)
    quizQuestions.style.display = 'none';
    inputBtn.style.display = 'block'
    const totalScore = document.createElement('h1');
    totalScore.setAttribute('id', 'total-score');
    quizBox.appendChild(totalScore);
    totalScore.innerHTML = `You scored ${score} out of ${questions.length}!`;
    const hallOfFameBtn = document.createElement('button');
    hallOfFameBtn.innerText = 'Hall of Fame';
    hallOfFameBtn.classList.add('btn');
    hallOfFameBtn.addEventListener('click', fame);
    playagainBtn.style.display = 'block';
    next.style.display = 'none';
    quizBox.appendChild(hallOfFameBtn); 
    quizBox.appendChild(next);
}

function handleNxtbtn() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        clearTimeout(mytimeout);
        showQuestion();
    } else {
        hallInput.style.display = 'block';
        timer.style.display= 'none';
        clearTimeout(mytimeout);
        console.log('quiz end')
        showScore();
    }
}


function nextQ(){
    clearTimeout(mytimeout);
    timer.innerHTML = '';
    presentScore.innerHTML = score;
    if (currentQuestionIndex < questions.length) {
        handleNxtbtn();
        countdown = 10;
        time();

    } else {
        clearTimeout(mytimeout);
        startQuiz();
        clearTimeout(mytimeout);

        timer.style.display='block';
        countdown = 10;
        time();
    
    }
}


function changeSrc() {
    console.log(musicSrc);

    let changeattribute = musicSrc.getAttribute('src');
    console.log(changeattribute);
    if (changeattribute.includes('./music/French Montana - Ain\'t Worried About Nothin (Explicit).mp3')) {
        console.log('ayra');
        musicSrc.setAttribute("src", './music/Rema-Calm-Down.mp3');
        console.log(musicSrc);
        musicSrc.play();
    } else {
        console.log('french');
        musicSrc.setAttribute("src", "./music/French Montana - Ain\'t Worried About Nothin (Explicit).mp3");
        musicSrc.play();
    }
}

