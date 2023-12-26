const question = [
    {
        question: "Which is largest animal?",
        answers: [
            {text:"shark", correct:false},
            {text:"blue whale", correct:true},
            {text:"elephant", correct:false},
            {text:"giraffe", correct:false},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {text:"kalhari", correct:false},
            {text:"gobi", correct:true},
            {text:"sahara", correct:false},
            {text:"antarctica", correct:false},
        ]
    },
    {
        question: "Which is the largest desert in the world?",
        answers: [
            {text:"asia", correct:false},
            {text:"australia", correct:true},
            {text:"arctic", correct:false},
            {text:"africa", correct:false},
        ]
    },
    {
        question: "Which is the smallest country in the world?",
        answers: [
            {text:"vatican city", correct:true},
            {text:"bhutan", correct:false},
            {text:"nepal", correct:false},
            {text:"sri lanka", correct:false},
        ] 
    }
];

const questionsElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const newButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
} 

function showQuestion(){
    resetState();
    let currentQuestion = question[currentQuestionIndex];
    let questionsElement = currentQuestionIndex + 1;
    questionsElement.innerHTML = questionNo + " . " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
    });
}
        if(answer.correct){
            button.dataset.correct = answer.correct 
        }
        button.addEventListener("click",selectAnswer);
   
function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn,classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionsElement.innerHTML = 'you scored ${score} out of ${questions.length}!';
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore()
    }
}

nextButton.add.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }

});

 startQuiz();
