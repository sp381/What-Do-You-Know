const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById ('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer() {

}

const questions = [
    {
        question: '1. Which of the following functions is a valid type of function that javascript supports?',
        answers: [
            {text:'A. Named function', correct: false},
            {text: 'B. Anonymous function', correct: false},
            {text: 'C. Both A and B are true', correct: true},
            {text: 'D. None of the above', correct: false},
        ]
    }
    
]



//var buttonEl = document.querySelector("#quiz");
//var possibleAnswerEl = document.querySelector("#possible-answer");

// buttonEl.addEventListener("click", function() {
//     var listItemEl = document.createElement("li");
//     listItemEl.className = "answer-list";
//     listItemEl.textContent = "multiple choice answer";
//     possibleAnswerEl.appendChild(listItemEl)

    
//     var answerInput = document.querySelector("#answer-input");
//     var answerInputclick = document.querySelector("#answer-input");

//     answerInputClick.addEventListener("click", insertAnswer);

// });


 