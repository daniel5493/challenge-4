var startSection = document.querySelector("#start-section")
var quizSection = document.querySelector("#quiz-section")
var highSection = document.querySelector("#highscore-section")

var startbtn= document.querySelector("#start-button")
var restartbtn= document.querySelector("#restart-button")
var index=-1

startbtn.addEventListener("click", function(){
    startSection.style="display:none"
    quizSection.style="display:block"
    next_question()
})
restartbtn.addEventListener("click", function(){
    highSection.style="display:none"
    quizSection.style="display:block"
    index=-1
    next_question()
})

var timerEl= document.querySelector("#timerEl")
var question=document.querySelector("#question")
var button1=document.querySelector("#btn1")
var button2=document.querySelector("#btn2")
var button3=document.querySelector("#btn3")
var button4=document.querySelector("#btn4")



var highscores=document.querySelector("#highscores")


var questions=[ 
    {
        question:"what color is the sky?",
        option1:"blue",
        option2:"green",
        option3:"purple",
        option4:"rainbow",
        correct:"blue"
    },
    {
        question:"how many months in a year?",
        option1:"1",
        option2:"5",
        option3:"8",
        option4:"12",
        correct:"12"
    },
    {
        question:"is water wet?",
        option1:"yes",
        option2:"no",
        option3:"maybe",
        option4:"idk",
        correct:"yes"
    },
]

button1.addEventListener("click", next_question)
button2.addEventListener("click", next_question)
button3.addEventListener("click", next_question)
button4.addEventListener("click", next_question)

function next_question(){
    index++
    if(index==questions.length){
        quizSection.style="display:none"
        highSection.style="display:block"
        var instials=prompt("enter your intials")
        var li=document.createElement("li")
        li.textContent=60
        highscores.appendChild(li)
    }
    else{
    question.textContent=questions[index].question
    button1.textContent=questions[index].option1
    button2.textContent=questions[index].option2
    button3.textContent=questions[index].option3
    button4.textContent=questions[index].option4
    }
}


