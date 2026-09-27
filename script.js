let startBtn = document.querySelector('.startBtn');
let infoBox = document.querySelector('.infoBox');
let exitBtn = document.querySelector('.exitBtn');
let continueBtn = document.querySelector('.continueBtn');
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
let totalQuestionIndicator = document.querySelector('.totalQuestionIndicator');


let currentQuestionIndex = 0;
let userScore = 0;

let timeLineInterval = null;
let progressBarInterval = null;


const TickIcon =
    `<div class="icon tick"><i class="fa-solid fa-check"></i></div>`;

const CrossIcon =
    `<div class="icon cross"><i class="fa-solid fa-xmark"></i></div>`;


// ================= START QUIZ =================

startBtn.addEventListener('click', () => {
    infoBox.classList.add('activeInfoBox');
});


// ================= EXIT INFO BOX =================

exitBtn.addEventListener('click', () => {
    infoBox.classList.remove('activeInfoBox');
});


// ================= CONTINUE QUIZ =================

continueBtn.addEventListener('click', () => {

    infoBox.classList.remove('activeInfoBox');

    quizBox.classList.add('activeQuizBox');

    if (totalQuestionIndicator) {
        totalQuestionIndicator.innerText = questions.length;
    }

    currentQuestionIndex = 0;

    showQuestion(currentQuestionIndex);

    timeLineTitle.innerText = 'Time Left';

    handleTIming(15);
    handleProgressBar();
});


// ================= QUIT QUIZ =================

quitQuiz.addEventListener('click', () => {

    restart();

    resultBox.classList.remove('activeResultBox');
});


// ================= REPLAY QUIZ =================

replayQuiz.addEventListener('click', () => {

    restart();

    resultBox.classList.remove('activeResultBox');

    quizBox.classList.add('activeQuizBox');

    showQuestion(currentQuestionIndex);

    timeLineTitle.innerText = 'Time Left';

    handleTIming(15);
    handleProgressBar();
});


// ================= SHOW QUESTION =================

const showQuestion = (index) => {

    const currentQuestion = questions[index];

    questionText.innerText =
        currentQuestion.numb + '. ' +
        currentQuestion.question;


    for (let i = 0; i < allOptions.length; i++) {

        // Remove old classes
        allOptions[i].classList.remove('correct');
        allOptions[i].classList.remove('incorrect');
        allOptions[i].classList.remove('disabled');


        // Remove old icons
        const oldIcon =
            allOptions[i].querySelector('.icon');

        if (oldIcon) {
            oldIcon.remove();
        }


        // Set option text
        allOptions[i].innerText =
            currentQuestion.options[i];
    }


    // Current question number
    currentQuestionIndicator.innerText =
        index + 1;
};


// ================= TIMER =================

const handleTIming = (time) => {

    // Stop previous timer
    clearInterval(timeLineInterval);

    let timeValue = time;

    // Initial time
    timeline.innerText =
        timeValue < 10
            ? '0' + timeValue
            : timeValue;


    timeLineInterval = setInterval(() => {

        timeValue--;


        // Update timer
        timeline.innerText =
            timeValue < 10
                ? '0' + timeValue
                : timeValue;


        // Time over
        if (timeValue <= 0) {

            clearInterval(timeLineInterval);

            clearInterval(progressBarInterval);

            timeline.innerText = '00';

            timeLineTitle.innerText = 'Time Off';

            // Show next button
            nextBtn.classList.add('active');


            const correctAnswer =
                questions[currentQuestionIndex].answer;


            // Disable options
            for (let i = 0; i < allOptions.length; i++) {

                allOptions[i].classList.add('disabled');


                // Show correct answer
                if (
                    allOptions[i].innerText === correctAnswer
                ) {

                    allOptions[i].classList.add('correct');


                    // Avoid duplicate icon
                    if (
                        !allOptions[i].querySelector('.icon')
                    ) {

                        allOptions[i].insertAdjacentHTML(
                            'beforeend',
                            TickIcon
                        );
                    }
                }
            }
        }

    }, 1000);
};


// ================= PROGRESS BAR =================

const handleProgressBar = () => {

    clearInterval(progressBarInterval);

    progressBar.style.width = '0%';

    let currentPercentage = 0;


    progressBarInterval = setInterval(() => {

        currentPercentage += (1 / 15);

        progressBar.style.width =
            currentPercentage + '%';


        if (currentPercentage >= 100) {

            clearInterval(progressBarInterval);
        }

    }, 10);
};


// ================= OPTION CLICK =================

const optionClickHandler = (e) => {

    // Don't allow click after disabled
    if (
        e.currentTarget.classList.contains('disabled')
    ) {
        return;
    }


    // Stop timer
    clearInterval(timeLineInterval);

    // Stop progress bar
    clearInterval(progressBarInterval);


    // Show next button
    nextBtn.classList.add('active');


    const userAnswer =
        e.currentTarget.innerText;


    const correctAnswer =
        questions[currentQuestionIndex].answer;


    console.log(
        'Correct:',
        correctAnswer,
        'User:',
        userAnswer
    );


    // ================= CORRECT =================

    if (userAnswer === correctAnswer) {

        userScore++;

        e.currentTarget.classList.add('correct');

        e.currentTarget.insertAdjacentHTML(
            'beforeend',
            TickIcon
        );

    }


    // ================= WRONG =================

    else {

        e.currentTarget.classList.add('incorrect');

        e.currentTarget.insertAdjacentHTML(
            'beforeend',
            CrossIcon
        );
    }


    // Disable all options
    for (let i = 0; i < allOptions.length; i++) {

        allOptions[i].classList.add('disabled');


        // Show correct answer
        if (
            userAnswer !== correctAnswer &&
            allOptions[i].innerText === correctAnswer
        ) {

            allOptions[i].classList.add('correct');


            if (!allOptions[i].querySelector('.icon')) {

                allOptions[i].insertAdjacentHTML(
                    'beforeend',
                    TickIcon
                );
            }
        }
    }
};


// ================= OPTION EVENT LISTENER =================

allOptions.forEach((option) => {

    option.addEventListener(
        'click',
        optionClickHandler
    );

});


// ================= RESTART =================

const restart = () => {

    // Stop timers
    clearInterval(timeLineInterval);
    clearInterval(progressBarInterval);


    // Reset score
    userScore = 0;


    // Reset question
    currentQuestionIndex = 0;


    // Reset timer
    timeline.innerText = '15';


    // Reset title
    timeLineTitle.innerText = 'Time Left';


    // Hide next button
    nextBtn.classList.remove('active');


    // Reset progress
    progressBar.style.width = '0%';


    // Reset options
    for (let i = 0; i < allOptions.length; i++) {

        allOptions[i].classList.remove('correct');
        allOptions[i].classList.remove('incorrect');
        allOptions[i].classList.remove('disabled');


        const oldIcon =
            allOptions[i].querySelector('.icon');

        if (oldIcon) {
            oldIcon.remove();
        }
    }
};


// ================= SHOW RESULT =================

const handleShowResult = () => {

    scoreText.innerHTML = `
        <span>
            and nice 😎, You got
            <p>${userScore}</p>
            out of
            <p>${questions.length}</p>
        </span>
    `;
};


// ================= NEXT QUESTION =================

nextBtn.addEventListener('click', () => {

    if (currentQuestionIndex < questions.length - 1) {

        // Move to next question
        currentQuestionIndex++;

        // Show next question
        showQuestion(currentQuestionIndex);

        // Hide next button
        nextBtn.classList.remove('active');

        // Reset title
        timeLineTitle.innerText = 'Time Left';

        // Start timer
        handleTIming(15);

        // Start progress bar
        handleProgressBar();

    } else {

        // Quiz completed

        clearInterval(timeLineInterval);
        clearInterval(progressBarInterval);

        quizBox.classList.remove('activeQuizBox');

        resultBox.classList.add('activeResultBox');

        handleShowResult();
    }
});