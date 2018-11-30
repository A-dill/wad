var questions = [{
    question : "When a user views a page containing a JavaScript program, which machine actually executes the script?",
    choices : [ "The User's machine running a Web browser",
        "The Web server",
        "A central machine deep within Netscape's corporate offices",
        "None of the above"],
    correctAnswer : 0
},{
    question : "Which of the following can't be done with client-side JavaScript?",
    choices : [ "Validating a form",
        "Sending a form's contents by email",
        "Storing the form's contents to a database file on the server",
        "None of the above"],
    correctAnswer : 2
},{
    question : "Using _______ statement is how you test for a specific condition",
    choices : [ "select",
        "if",
        "for",
        "none of the above"],
    correctAnswer : 1
}];
var index=-1;
var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;
var button=document.getElementById("next-btn");
var button1=document.getElementById("next-btn");

function displayNext() {
    /*Write your code here */
    if(currentQuestion<questions.length)
    {
        button.innerText="Next Question";
        displayCurrentQuestion();
        currentQuestion++;
    }
    else
    {
        displayScore();
        button.innerText="Reset Quiz";
        button.onClick(resetQuiz());
    }
}

function displayCurrentQuestion() {
    /*Write your code here */
    var i=0;
    var ques = document.getElementById("question");
    var option=document.getElementById("choice-list");
    ques.innerText=questions[currentQuestion].question;
    for (i = 0 ; i < 4;i++)
    {
        option.innerHTML=option.innerHTML+ '<li> <input type="radio" name="option" id="R">'+ questions[currentQuestion].choices[i] + '</li>';
    }
var x=questions[currentQuestion.correctAnswer];
    var x1 = document.getElementById("R").value;
    if(x==x1)
    {
        correctAnswers++;
    }
}

function resetQuiz() {
    currentQuestion = 0;
    index=-1;
    correctAnswers = 0;
}
function displayScore() {
    document.getElementById("result").innerText = "you scored: " + correctAnswers + " out of: " + questions.length;
    document.getElementById("result").style.display = 'block';
}
function hideScore() {
    document.getElementById("result").style.display = 'none';

}