var buttonEl = document.querySelector("#quiz");
var possibleAnswerEl = document.querySelector("#possible-answer");

buttonEl.addEventListener("click", function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "answer-list";
    listItemEl.textContent = "multiple choice answer";
    possibleAnswerEl.appendChild(listItemEl)

    
    var answerInput = document.querySelector("#answer-input");
    var answerInputclick = document.querySelector("#answer-input");

    answerInputClick.addEventListener("click", insertAnswer);

});


 