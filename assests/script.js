const startButton = document.getElementById('start-btn')
const questionContainerElement = document.getElementById ('question-container')
const pageContent = document.getElementById('page-content')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const timerEl = document.getElementById('countdown');
let currentQuestionIndex
var startCountdown
const timer = document.getElementById('timer')
var counter  
startButton.addEventListener('click', startGame)

function startGame() {
    //call on timer function here
    pageContent.setAttribute("class", "show")
    console.log('Started')
    currentQuestionIndex = 0
    setNextQuestion()
    counter = 60
    var countdown = function() {
    //console.log(counter);
    timer.textContent = counter
    counter--;
    if(counter <= -1){
        clearInterval (startCountdown);
    } 
};
    startCountdown = setInterval(countdown, 1000);
}

function setNextQuestion() {
    resetState()
    showQuestion(questions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    //console.log(question.answers)
    question.answers.forEach (answer => {
        //console.log(answer)
        const button = document.createElement('button')
        button.value = answer.correct 
        button.innerText = answer.text
        button.classList.add('btn')
        //if (answer.correct) {
          //  button.dataset.correct = answer.correct
        // } else {
        //     console.log('wrong answer');
        // }
        button.addEventListener('click',(e)=>{
            console.log(e.target.value)
            if(e.target.value === "false") {
                console.log('incorrect')
                counter = counter - 10
            }
            if(currentQuestionIndex === questions.length) {
                clearInterval (startCountdown);
                alert('End of Quiz')
                pageContent.setAttribute("class", "hide")
                //call on an end quiz function here
            } else {
                //console.log(currentQuestionIndex)
                setNextQuestion()
            }
        })
        answerButtonsElement.appendChild(button)
    })
    currentQuestionIndex= currentQuestionIndex+1
}

function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    console.log(e)
    if(currentQuestionIndex === questions.length) {
        clearInterval (startCountdown);
        initials()
            for (vari=0;i<correct.answer;i++) {
                if(true[i] == correct)
                count = count + 1;
            }
            document.write(initials + correctAnswers);
            var myScore = prompt("Please eneter your name and how many you got correct")


        alert('End of Quiz')
        pageContent.setAttribute("class", "hide")
        //call on an end quiz function here
    } else {
        //console.log(currentQuestionIndex)
        setNextQuestion()
    }

}
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

    function initials() {
        var myScore =
    document.getElementById("question").value;
        localStorage.setItem("myScore", myScore);
    }
    function mySave() {
        var myScore = localStorage.getItem("myScore");
        document.getElementById("question").value = myScore;
        console.log(myScore)
    }
initials()

 