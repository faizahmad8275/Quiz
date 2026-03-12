let welcomeText = document.querySelector('.welcomeText');
let startBtn = document.querySelector('.startBtn');
let infoBox = document.querySelector('.infoBox');
let exitBtn =document.querySelector('.exitBtn');
let continueBtn =document.querySelector('.continueBtn');
let quizBox = document.querySelector('.quiz-box');
let questionText = document.querySelector('.questionText');
let allOptions = document.querySelectorAll('.options');
let nextBtn = document.querySelector('.nextBtn');
let timeline = document.querySelector('.timeline');
let currentQuestionIndicator = document.querySelector('.currentQuestionIndicator');
let progressBar = document.querySelector('.progressBar');
let timeLineTitle = document.querySelector('.timelineTiltle');
let quitQuiz = document.querySelector('.Quit_Quiz');
let replayQuiz = document.querySelector('.replay_Quiz');
let resultBox = document.querySelector('.result-box');
let scoreText = document.querySelector('.score_text');





let currentQuestionIndex =0;
let userScore = 0;
let timeLineInterval = null;
let progressBarInterval = null;
const TickIcon = `<div class="icon tick"><i class="fa-solid fa-check"></i></div`;
const CrossIcon = `<div class="icon cross"><i class="fa-solid fa-xmark"></i></div`;




startBtn.addEventListener('click', () => {  
    infoBox.classList.add('activeInfoBox');  

});

exitBtn.addEventListener('click',()=>{
    infoBox.classList.remove('activeInfoBox');
});

continueBtn.addEventListener('click', () => {
    infoBox.classList.remove('activeInfoBox');
    quizBox.classList.add('activeQuizBox');
    showQuestion(currentQuestionIndex);
    handleTIming(15);
    handleProgressBar();
    timeLineTitle.innerText = 'Time Left';
});

nextBtn.addEventListener('click',()=>{
    if(currentQuestionIndex<9){
        currentQuestionIndex = currentQuestionIndex+1;
        //reset the timer
        handleTIming(15);
        //reset the progress bar
        handleProgressBar();
        showQuestion(currentQuestionIndex);
        nextBtn.classList.remove('active');
        timeLineTitle.innerText = 'Time Left';
    }
    else{
        clearInterval(progressBarInterval);
        clearInterval(timeLineInterval);
        quizBox.classList.remove('activeQuizBox');
        resultBox.classList.add('activeResultBox');
        handleShowResult();
    }
});

quitQuiz.addEventListener('click',()=>{
    restart();
    resultBox.classList.remove('activeResultBox');
});

replayQuiz.addEventListener('click',()=>{
    restart();
    resultBox.classList.remove('activeResultBox');
    quizBox.classList.add('activeQuizBox');
    showQuestion(currentQuestionIndex);
    handleTIming(15);
    handleProgressBar();
    timeLineTitle.innerText = 'Time Left'; 
});




//function to show questions 
const showQuestion=(index)=>{
    questionText.innerText =
        '' + questions?.[index].numb + '. ' + questions?.[index].question;

    for(let i=0; i<allOptions?.length; i++){
        allOptions[i].innerText = questions?.[index].options?.[i];
        allOptions[i].classList.remove('correct');
        allOptions[i].classList.remove('incorrect');
        allOptions[i].classList.remove('disabled');

        if(index===0){
            allOptions[i]?.addEventListener('click',optionClickHandler);
        }
        
    }

    currentQuestionIndicator.innerText = index + 1;

};


const handleTIming = (time) => {
    clearInterval(timeLineInterval);
    timeline.innerText = time;
    let timeValue = time;
    timeLineInterval = setInterval(()=>{
        timeValue--;
        
        if(timeValue<10){
            timeline.innerText = '0' + timeValue;
        }else{
            timeline.innerText = timeValue;
        }


        if(timeValue===0){
            //you crossed the time
            timeLineTitle.innerText = 'Time Off';
            clearInterval(timeLineInterval);
            //mark next button visible
            nextBtn.classList.add('active');
            const correctAnswer = questions[currentQuestionIndex].answer;
            for(let i=0; i<allOptions?.length; i++){   
                allOptions[i].classList.add('disabled'); 
        
                if(allOptions[i].innerText===correctAnswer){
                    allOptions[i].classList.add('correct');
                    allOptions[i].insertAdjacentHTML('beforeend',TickIcon);
                }
            }

        }
    },1000);
};


const handleProgressBar = () => {
    clearInterval(progressBarInterval);
    progressBar.style.width = '0%';
    let currentPercentage = 0;
    progressBarInterval = setInterval(() =>{
        currentPercentage+=(1/15);
        progressBar.style.width = currentPercentage + '%';

        if(currentPercentage>=100){
            clearInterval(progressBarInterval);
        }
    },10);
};


const optionClickHandler = (e) => {
    clearInterval(progressBarInterval);
    clearInterval(timeLineInterval);
    nextBtn.classList.add('active');
    const userAnswer = e.target.innerText;
    const correctAnswer = questions[currentQuestionIndex].answer;
    console.log(correctAnswer,userAnswer);
    
    if(userAnswer===correctAnswer){
        userScore++;
        e.target.classList.add('correct');
        e.target.insertAdjacentHTML('beforeend',TickIcon);
    }else{
        e.target.classList.add('incorrect');
        e.target.insertAdjacentHTML('beforeend',CrossIcon);
    }

    for(let i=0; i<allOptions?.length; i++){   
        allOptions[i].classList.add('disabled'); 
        
        if(userAnswer!==correctAnswer && allOptions[i].innerText===correctAnswer){
            allOptions[i].classList.add('correct');
            allOptions[i].insertAdjacentHTML('beforeend',TickIcon);
        }
    }
};


const restart =()=>{
    clearInterval(progressBarInterval);
    clearInterval(timeLineInterval);
    userScore = 0;
    currentQuestionIndex = 0;
    timeLineTitle.innerText = 'Time Left'; 
};


const handleShowResult=()=>{
    scoreText.innerHTML=`
    <span>
        and nice 😎, You got
        <p>${userScore}</p>
        out of
        <p>${questions?.length}</p>
    </span>`;
    
    
};