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

var div = document.getElementById("question");
var p = document.createElement("p");
var li=document.createElement("li");
var li1=document.createElement("li");
var li2=document.createElement("li");
var li3=document.createElement("li");

var ul=document.getElementById("choice-list");


document.getElementById("quiz-message").style.display = 'none';
//displayCurrentQuestion();

function displayNext() {
    /*Write your code here */
    if(index>0 && index < questions.length) {
        if (document.getElementById("r1").checked) {
            if (document.getElementById("r1").value == questions[index].correctAnswer) {
                correctAnswers++;
            }
        }
        else if (document.getElementById("r2").checked) {
            if (document.getElementById("r2").value == questions[index].correctAnswer) {
                correctAnswers++;
            }
        }
        else if (document.getElementById("r3").checked) {
            if (document.getElementById("r3").value == questions[index].correctAnswer) {
                correctAnswers++;
            }
        }
        else if (document.getElementById("r4").checked) {
            if (document.getElementById("r4").value == questions[index].correctAnswer) {
                correctAnswers++;
            }
        }
    }
    console.log("correct answr value: "+ correctAnswers);
    console.log("ques:" + questions.length);
    console.log("in click "+index);
    index++;
    if(index < questions.length){
        console.log("index: "+index);
        displayCurrentQuestion();
        div.clear;
        ul.clear;
        hideScore();
    }
    else if(index==3){
        console.log("in else");
        displayScore();
        resetQuiz();
    }
}

function displayCurrentQuestion() {
    /*Write your code here */
    p.innerText=questions[index].question;
    div.appendChild(p);

     li.innerHTML='<input id="r1" type="radio" name="answer" value=0>'+questions[index].choices[0];

    li1.innerHTML='<input id="r2" type="radio" name="answer" value=1>'+questions[index].choices[1];

    li2.innerHTML='<input id="r3" type="radio" name="answer" value=2>'+questions[index].choices[2];

    li3.innerHTML='<input id="r4" type="radio" name="answer" value=3>'+questions[index].choices[3];

    ul.appendChild(li);
    ul.appendChild(li1);
    ul.appendChild(li2);
    ul.appendChild(li3);
}

function resetQuiz() {
    console.log("in reset quiz");
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
    console.log("in hide score");
}