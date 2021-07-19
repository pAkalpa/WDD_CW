// array of questions and answers fore the quiz  questions

// referance: udamy video tutorials
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
const a_quiz = document.getElementById('a_quiz');
const b_quiz = document.getElementById('b_quiz');
const c_quiz = document.getElementById('c_quiz');
const d_quiz = document.getElementById('d_quiz');
const submitButton = document.getElementById('submit');


let currentQuestion = 0;
let correct = 0;
let score = 0;
let timeSecond = 60;

const  times = document.querySelector("h4")
// const times = document.getElementById("display-time");

load_Quiz();

// loading questions
function load_Quiz(){
    deselectAnswers();
    timeSecond = 60;
    showTime(60);
    document.getElementById("quiz").classList.remove("quiz-container-wrong");
    document.getElementById("quiz").classList.remove("quiz-container-right");
    document.getElementById("quiz").classList.add("quiz-container");

    const currentQuestionData = quizData[currentQuestion]
    questionElements.innerText = currentQuestionData.question
    a_quiz.innerText = currentQuestionData.a
    b_quiz.innerText = currentQuestionData.b
    c_quiz.innerText = currentQuestionData.c
    d_quiz.innerText = currentQuestionData.d
}


// deselecting the default selector
function deselectAnswers(){
    answerElements.forEach(answerElements => answerElements.checked = false)
}

// sellecting the ansers
function select(){
    let answer

    answerElements.forEach(answerElements => {
        if (answerElements.checked){
            answer = answerElements.id
        }
    })
    return answer
}


// changeing the background 
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


//  change the question when clicking the reload button, and if the number of questions are greater the index of the last question in the arry user will get the final marks
submitButton.addEventListener('click',()=>{
    const answer = select()

    if (answer){
        if (answer === quizData[currentQuestion].correct){
            correct++   
            score += 2   
    
        } else{
            score -= 1
           
        }
        checkScore();
        currentQuestion++

        if(currentQuestion < quizData.length){
            load_Quiz();
        }else{
            quiz.innerHTML =`
                <h2> You answered correctly at ${correct}
                /${quizData.length} questions </h2>
                <h3>Finale Score = ${score}</h3>

                <button id="submit" onclick="location.reload()">Reload</button>
            `
        }

    }
})

// checking the score
function checkScore(){
    if (score < 0){
        score = 0;
    }
}


// --------------------------------------------- timer --------------------------------
// referance: github.com

const countDown = setInterval(()=>{
    timeSecond--;
    showTime(timeSecond);
    if (timeSecond == 0 || timeSecond < 1){
        endCount();
        clearInterval(countDown);
    }
},1000);
 
// display the time to the user 
function showTime(second) {
    const min = Math.floor(second / 60);
    const sec = Math.floor(second % 60);
    times.innerHTML =`
    ${(min < 10)? '0' : ''}${min}:${(sec < 10)? '0' : ''}${sec}
    `;
}

// load the next question if the time limit ends 
function endCount(){
    score-=1;
    currentQuestion++;
    checkScore();
    if(currentQuestion < quizData.length){
        load_Quiz();
        timeSecond = 60;

    }else{
        quiz.innerHTML =`
            <h2 class="Quiz-final-h2"> You answered correctly at ${correct}
            /${quizData.length} questions </h2>
            <h3 class="Quiz-final-h3">Finale Score = ${score}</h3>

            <button class="submit" onclick="location.reload()">Reload</button>
        `
    }
}