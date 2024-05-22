import questions from "./questions.js";
console.log(questions)
const startBtn = document.getElementById('start');
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

let score = 0;
let currentQuestionIndex = 0;
let myInterval1;
let time1 = 10;

startBtn.addEventListener('click', startQuiz);
// hallInput.addEventListener('keydown', showInputValue2);
// backButton.addEventListener('click',backbtn);
// playagainBtn.addEventListener('click',playAgain);
// hallbtn.addEventListener('click', fame);
// next.addEventListener('click', nextQ);
// inputBtn.addEventListener('click', saveHighScore);
// musictxt.addEventListener('click', changeSrc);

function startQuiz() {
    
    startPage.style.display = "none";
    quizBox.style.display = "block";
    quizQuestions.style.display = 'block';
    startTimer();
    questionnum.innerHTML = `Question ${currentQuestionIndex} of 5 shuffled from 10`;
    // currentQuestionIndex = 0;
    // score = 0;
    selectQuestions();
    // presentScore.innerHTML = 0;
    // next.innerHTML = 'Next';
    showQuestion();
}

function selectQuestions(){
    questions.sort(() => Math.random() - 0.5);
    console.log(questions);
    const selectedQuestions = questions.slice(0, 5);
    questions.splice(0, questions.length, ...selectedQuestions);
}
let currentQuestion = questions[currentQuestionIndex];
function showQuestion(){  
    console.log('hello');
    // removeAnswerBtns();
    console.log(currentQuestion.answers);
    // let questionNo = currentQuestionIndex +1;
    question.innerHTML = currentQuestion.question;
    currentQuestion.answers.forEach(function(currentAnswer){
        console.log(currentAnswer.text);
        const ansbtn = document.createElement('button');
        ansbtn.setAttribute('correct', currentAnswer.correct);
        ansbtn.innerText = currentAnswer.text;
        answerButtons.appendChild(ansbtn);
        let trueorfalse = ansbtn.getAttribute('correct')
        ansbtn.addEventListener('click',function checkCorrectAns(){
                    Array.from(answerButtons.children).forEach(button => {
                        if (button.getAttribute('correct') === 'true') {
                            button.classList.add('correct');            
                        button.disabled = true;
                        }
                    })  

            stopTimer();
            if(trueorfalse === 'true'){
                console.log('right')
                ansbtn.classList.add('correct');
            }else{
                console.log('wrong');
                ansbtn.classList.add('incorrect');

            }
        })

    } )
}

    // function checkCorrectAns(){
    //     console.log('aaa')
    //     console.log(currentQuestion.answers)
    //     // currentQuestion.answers.forEach(function(currAns){
    //     // })

    //     Array.from(answerButtons.children).forEach(button => {
    //         if(button.correct === 'true'){
    //             console.log('right');

    //         }else{
    //             console.log('wrong')
    //         }

    //         // if (button.dataset.correct === 'true') {
    //         //     button.classList.add('correct');
    //         // }
    //         // button.disabled = true;
    //     });
    
    // }
    

    // currentQuestion.answers.forEach(answer => {
    //     const button = document.createElement('button');
    //     button.innerHTML = answer.text;
    //     button.classList.add('btn');
    //     answerButtons.appendChild(button);
    //     if(answer.correct){
    //         button.dataset.correct =answer.correct;
    //         // clearTimeout(mytimeout);
    //     }
    // button.addEventListener('click',selectAnswer);
    // });
    // next.style.display = 'none';


// function backbtn(){
//     console.log('back');
//     startPage.style.display = "block";
//     inputBtn.style.display = 'none';
//     hallInput.style.display = 'none';
//     quizBox.style.display = "none";
//     highScoreElement.style.display = 'none';
//     playagainBtn.style.display = 'none';
// }

// function playAgain(){
//     console.log('back');
//     hallInput.style.display = 'none';
//     inputBtn.style.display = 'none';
//     highScoreElement.style.display = 'none';
//     startPage.style.display = "block";
//     quizBox.style.display = "none"; 
//     playagainBtn.style.display = 'none';
// }

// function saveHighScore() {
//     let highScoreName = hallInput.value.trim();
//     if (highScoreName) {
//         const highScores = getHighScores();
//         highScores.push({ name: highScoreName, score: score });
//         highScores.sort((a, b) => b.score - a.score);
//         highScores.splice(5);   
//         localStorage.setItem('highScores', JSON.stringify(highScores));
//         displayHighScores();
//     }

//     inputBtn.style.display = 'none';
//     hallInput.style.display = 'none';
// }

// function getHighScores() {
//     const scores = localStorage.getItem('highScores');
//     return scores ? JSON.parse(scores) : [];
// }

// function displayHighScores() {
//     const highScores = getHighScores().slice(0, 5);  
//     const highScoreElements = [highScore1, highScore2, highScore3, highScore4, highScore5];
//     highScores.forEach((score, index) => {
//         if (highScoreElements[index]) {
//             highScoreElements[index].textContent = `${Object.values(score)[0]}: ${Object.values(score)[1]}`;
//         }
//     });

//     for (let i = highScores.length; i < highScoreElements.length; i++) {
//         if (highScoreElements[i]) {
//             highScoreElements[i].textContent = '';
//         }
//     }
// }

// function fame() {
//     console.log('Hall of Fame');
//     quizBox.style.display = 'none';
//     startPage.style.display = 'none';
//     highScoreElement.style.display = 'block'; 
//     displayHighScores();
// } 

// function time() {
//     timer.innerHTML = 'Time left:' + countdown + 's';
//     countdown -= 1; 
//     if (countdown < 0) {
//         timer.innerHTML = 'Oops! Time\'s up'; 
//         Array.from(answerButtons.children).forEach(button => {
//             if (button.dataset.correct === 'true') {
//                 button.classList.add('correct');
//             }
//             button.disabled = true;
//         });
//         next.style.display = 'block';
//     } else {
//        let mytimeout = setTimeout(time, 1000);
//         // mytimeout;
//     }
// }

// function times(){
//      intervalId = setInterval(() => {
//         timer.innerHTML = 'Time left:' + countdown + 's';
//         console.log('tick');
//         if (countdown === 0) {
//             Array.from(answerButtons.children).forEach(button => {
//                 if (button.dataset.correct === 'true') {
//                     button.classList.add('correct');
//                 }
//                 button.disabled = true;
//             });
//             next.style.display = 'block';
//             timer.innerHTML = 'Oops! Time\'s up'; 
//             clearInterval(intervalId);
//         } else {
//             countdown--;
//         }
//     }, 1000);
// }
function startTimer() {
    myInterval1 = setInterval(myTimerFunc, 1000);
} 

function myTimerFunc() {
    timer.innerHTML = 'Time left:' + time1 + 's';
    if(time1 === 0) {
        Array.from(answerButtons.children).forEach(button => {
            if (button.getAttribute('correct') === 'true') {
                button.classList.add('correct');
            }
            button.disabled = true;
        });

        timer.innerHTML = 'Oops! Time\'s up'; 
        clearInterval(myInterval1);

    }
        time1--; 
}

function stopTimer() { 
    clearInterval(myInterval1);
} 



// function showInputValue2(e){
//         if (e.key === 'Enter') {
//             hallInput.style.display = 'none';
//             inputBtn.style.display = 'none';
//         }   

//     }
    

// function removeAnswerBtns(){
//     while(answerButtons.firstChild){
//         answerButtons.removeChild(answerButtons.firstChild)
//     }
// }

// function selectAnswer(e){
//     const selectedBtn = e.target;
//     const isCorrect = selectedBtn.dataset.correct === 'true';
//     if(isCorrect){
//         selectedBtn.classList.add('correct');
//         score++;
//     }else{
//         selectedBtn.classList.add('incorrect');
//     }

//     Array.from(answerButtons.children).forEach(button => {
//         if(button.dataset.correct === 'true'){
//             button.classList.add('correct');
//         }
//         button.disabled = true;

//     }); 
//     timer.style.display ='none';
//     next.style.display = 'block';
// }
     
// function showScore() {
//     quizQuestions.style.display = 'none';
//     inputBtn.style.display = 'block';
//     const totalScore = document.createElement('h1');
//     totalScore.setAttribute('id', 'total-score');
//     quizBox.appendChild(totalScore);
//     totalScore.innerHTML = `You scored ${score} out of ${questions.length}!`;
//     if (!document.getElementById('hall-of-fame-btn')) {
//         const hallOfFameBtn = document.createElement('button');
//         hallOfFameBtn.setAttribute('id', 'hall-of-fame-btn');  // Add an ID to the button
//         hallOfFameBtn.innerText = 'Hall of Fame';
//         hallOfFameBtn.classList.add('btn');
//         hallOfFameBtn.addEventListener('click', fame);
//         quizBox.appendChild(hallOfFameBtn);
//     }
//     playagainBtn.style.display = 'block';
//     next.style.display = 'none';
//     quizBox.appendChild(next);
// }

// function handleNxtbtn() {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         clearTimeout(mytimeout);
//         showQuestion();
//     } else {
//         hallInput.style.display = 'block';
//         timer.style.display= 'none';
//         clearTimeout(mytimeout);
//         console.log('quiz end')
//         showScore();
//     }
// }

// function nextQ(){
//     clearTimeout(mytimeout);
//     timer.innerHTML = '';
//     presentScore.innerHTML = score;
//     if (currentQuestionIndex < questions.length) {
//         handleNxtbtn();
//         countdown = 10;
//         time();

//     } else {
//         clearTimeout(mytimeout);
//         startQuiz();
//         clearTimeout(mytimeout);
//         timer.style.display='block';
//         countdown = 10;
//         time();
    
//     }
// }

// function changeSrc() {
//     console.log(musicSrc);

//     let changeattribute = musicSrc.getAttribute('src');
//     console.log(changeattribute);
//     if (changeattribute.includes('./music/French Montana - Ain\'t Worried About Nothin (Explicit).mp3')) {
//         console.log('ayra');
//         musicSrc.setAttribute("src", './music/Rema-Calm-Down.mp3');
//         console.log(musicSrc);
//         musicSrc.play();
//     } else {
//         console.log('french');
//         musicSrc.setAttribute("src", "./music/French Montana - Ain\'t Worried About Nothin (Explicit).mp3");
//         musicSrc.play();
//     }
// }

