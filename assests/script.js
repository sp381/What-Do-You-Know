const startButton = document.getElementById('start-btn')
//const nextButton = document.getElementById ('next-btn')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timerEl = document.getElementById('countdown');
let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    //call on timer function here
    console.log('Started')
    currentQuestionIndex = 0
    setNextQuestion()
    var counter = 60
    var countdown = function() {
    console.log(counter);
    counter--;
    if(counter === 0){
        clearInterval(startCountdown)
    } 
};
    var startCountdown = setInterval(countdown, 1000);
}

//Study set Interval and clear Interval 
function setNextQuestion() {
    resetState()
    showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    console.log(question.answers)
    question.answers.forEach (answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        } else {
            console.log('wrong answer');
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
    currentQuestionIndex= currentQuestionIndex+1
}

function resetState() {
   // nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer() {
    if(currentQuestionIndex === questions.length) {
        alert('End of Quiz')
        //call on an end quiz function here
    }
    console.log('hello world')
    console.log(currentQuestionIndex)
    setNextQuestion()
}
//create end quiz function
    //clear interval for timer
    //Hide Elements to display end screen
//Create save score function 
const questions = [
    {
        question: '1. Which of the following functions is a valid type of function that javascript supports?',
        answers: [
            {text:' A. Named function', correct: false},
            {text: 'B. Anonymous function', correct: false},
            {text: 'C. Both A and B are true', correct: true},
            {text: 'D. None of the above', correct: false},
        ]
    },

    {
        question: '2. Which method returns the character at the specified index?',
        answers: [
            {text: 'A characterAt()', correct: false},
            {text: 'B. getCharAt()', correct: false},
            {text: 'C. charAt()', correct: true},
            {text: 'D. None of the above', correct: false},
        ]
    },

    {
        question: '3. Which of the following is not a mouse event?',
        answers: [
            {text: 'A. onmousescroller', correct: true},
            {text: 'B. onclick', correct: false},
            {text: 'C. onmouseover', correct: false},
            {text: 'D. onmousemove', correct: false},
        ]
    },

    {
        question: '4. The opposite of onmouseover is_____?',
        answers: [
            {text: 'A. onmouseoff', correct: false},
            {text: 'B. onmouseout', correct: true},
            {text: 'C. onmouseunder', correct: false},
            {text: 'D. onnotmouseover', correct: false},
        ]
    },
    
]

var saveScore = function() {
    localStorage.setItem("score",score);
}

 