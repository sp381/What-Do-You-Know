var buttonEl = document.querySelector("#quiz");
var possibleAnswerEl = document.querySelector("#possible-answer");

buttonEl.addEventListener("click", function() {
    var listItemEl = document.createElement("li");
    listItemEl.className = "answer-list";
    listItemEl.textContent = "multiple choice answer";
    possibleAnswerEl.appendChild(listItemEl)
});