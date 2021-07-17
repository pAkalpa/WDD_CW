const  quizData = [
    {
        question: "Who won the last 'copa america'?",
        a:"Brazil National FootBall Team ",
        b:"France National FootBall Team",
        c:"Argentina National FootBall Team",
        d:"Portugal National FootBall Team",
        correct:"c",
    },
    {
        question: "Who is the best football player in 2020?",
        a:"Lionel Messi ",
        b:"Cristiano Ronaldo",
        c:"Neymar da Silva",
        d:"Paul Pogba",
        correct:"a",
    },
    {
        question: "Who is the manager of FC Barcelona?",
        a:"Cristiano Ronaldo ",
        b:"Ronald Koeman",
        c:"Ronaldinho",
        d:"Lionel Scaloni",
        correct:"b",
    },
    {
        question: "FIFA is stand for?",
        a:"Federation Intercontinal Football Association",
        b:"Federation Internationale de Football Association",
        c:"Federation of International  Football Agency",
        d:"Federation in International  Football Alliance",
        correct:"b",
    },
    {
        question: "How is the official sponsor of 2018  FIFA World Cup?",
        a:"Adidas",
        b:"Hyundai",
        c:"Coca-Cola",
        d:"Hisense",
        correct:"d",
    },
    {
        question: "What is the current FIFA rank  of sri lanka national football team?",
        a:"99",
        b:"210",
        c:"204",
        d:"152",
        correct:"c",
    },
    {
        question: "What is the position of Neymar da Silva?",
        a:"Forward",
        b:"Midfielder",
        c:"Defender",
        d:"GoalKeeper",
        correct:"a",
    },
    {
        question: "What is the country that has the second place in FIFA ranking (current)?",
        a:"Portugal",
        b:"Argentina",
        c:"Brazil",
        d:"France",
        correct:"d",
    },
    {
        question: "What is the maximum capacity of the largest football stadium in the world?",
        a:"187,000 people",
        b:"150,000 people",
        c:"165,000 people",
        d:"145,000 people",
        correct:"b",
    },
    {
        question: "What is the metal that used to create the trophy of the FIFA world cup?",
        a:"20 carat gold",
        b:"14 carat gold",
        c:"18 carat gold",
        d:"24 carat gold",
        correct:"c",
    }


];

const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElements = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitButton = document.getElementById('submit');


let currentQuestion = 0;
let correct = 0;
let score = 0;
let timeSecond = 60;

const  times = document.querySelector("h4")

loadQuestions();


function loadQuestions(){
    deselectAnswers();
    timeSecond = 60;
    showTime(60);
    document.getElementById("quiz").classList.remove("quiz-container-wrong");
    document.getElementById("quiz").classList.remove("quiz-container-right");
    document.getElementById("quiz").classList.add("quiz-container");
    const currentQuestionData = quizData[currentQuestion]
    questionElements.innerText = currentQuestionData.question
    a_text.innerText = currentQuestionData.a
    b_text.innerText = currentQuestionData.b
    c_text.innerText = currentQuestionData.c
    d_text.innerText = currentQuestionData.d
}


function deselectAnswers(){
    answerElements.forEach(answerElements => answerElements.checked = false)
}

function select(){
    let answer

    answerElements.forEach(answerElements => {
        if (answerElements.checked){
            answer = answerElements.id
        }
    })
    return answer
}

submitButton.addEventListener('mouseover',()=>{
    const answer = select()

    if (answer){
        if (answer === quizData[currentQuestion].correct){
            document.getElementById("quiz").classList.remove("quiz-container-wrong")
            document.getElementById("quiz").classList.remove("quiz-container");
            document.getElementById("quiz").classList.add("quiz-container-right")
        } else{
            document.getElementById("quiz").classList.remove("quiz-container-right")
            document.getElementById("quiz").classList.remove("quiz-container");
            document.getElementById("quiz").classList.add("quiz-container-wrong")
        }
    }
})


submitButton.addEventListener('click',()=>{
    const answer = select()

    if (answer){
        if (answer === quizData[currentQuestion].correct){
            correct++   
            score += 2   // chech here if you want to change the background color
    
        } else{
            score -= 1
           
        }
        checkScore();
        currentQuestion++

        if(currentQuestion < quizData.length){
            loadQuestions();
        }else{
            quiz.innerHTML =`
                <h2> You answered correctly at ${correct}
                /${quizData.length} questions </h2>
                <h3>Finale Score = ${score}</h3>

                <button onclick="location.reload()">Reload</button>
            `
        }

    }
})


function checkScore(){
    if (score < 0){
        score = 0;
    }
}



const countDown = setInterval(()=>{
    timeSecond--;
    showTime(timeSecond);
    if (timeSecond == 0 || timeSecond < 1){
        endCount();
        clearInterval(countDown);
    }
},1000);
 
function showTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    times.innerHTML =`
    ${(min < 10)? '0' : ''}${min}:${(sec < 10)? '0' : ''}${sec}
    `;
}

function endCount(){
    score-=1;
    currentQuestion++;
    checkScore();
    if(currentQuestion < quizData.length){
        loadQuestions();
        timeSecond = 60;

    }else{
        quiz.innerHTML =`
            <h2> You answered correctly at ${correct}
            /${quizData.length} questions </h2>
            <h3>Finale Score = ${score}</h3>

            <button onclick="location.reload()">Reload</button>
        `
    }
}