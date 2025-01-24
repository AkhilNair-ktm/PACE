const startBtn = document.querySelector(`.start-btn`);
const popupInfo = document.querySelector(`.popup-info`);
const exitBtn = document.querySelector(`.exit-btn`);
const main = document.querySelector(`.main`);
const continueBtn = document.querySelector(`.continue-btn`);
const quizSection = document.querySelector(`.Quiz-section`);
const quizBox = document.querySelector(`.quiz-box`);
const resultBox = document.querySelector(`.result-box`);
const tryAgainBtn = document.querySelector(`.tryAgain-btn`);
const goHomeBtn = document.querySelector(`.goHome-btn`);
const nextBtn = document.querySelector(`.next-btn`);
const optionList = document.querySelector(`.option-list`);

let questions = [
  {
    numb: 1,
    question:
      "What is the primary objective of the PACE satellite in ocean monitoring?",
    answer: "c. To monitor phytoplankton and ocean color",
    options: [
      `a. To study tectonic plate movements`,
      `b. To measure sea surface temperatures`,
      `c. To monitor phytoplankton and ocean color`,
      `d. To track marine life migration patterns`,
    ],
  },
  {
    numb: 2,
    question:
      "How does the PACE satellite help in studying the Earth's atmosphere?",
    answer: "b. By measuring aerosol particles and cloud cover",
    options: [
      `a. By tracking thunderstorms and hurricanes`,
      `b. By measuring aerosol particles and cloud cover`,
      `c. By detecting volcanic eruptions`,
      `d. By predicting weather patterns`,
    ],
  },
  {
    numb: 3,
    question:
      "Why is the measurement of ocean color important for the PACE satellite's mission?",
    answer: "d. It provides insights into phytoplankton populations",
    options: [
      `a. It indicates ocean depth`,
      `b. It reveals the presence of pollutants`,
      `c. It helps track ocean currents`,
      `d. It provides insights into phytoplankton populations`,
    ],
  },
  {
    numb: 4,
    question:
      "In what way does the PACE satellite contribute to climate change research?",
    answer:
      "c. By measuring how aerosols and clouds impact global temperatures",
    options: [
      `a. By monitoring volcanic ash clouds`,
      `b. By analyzing changes in ice caps`,
      `c. By measuring how aerosols and clouds impact global temperatures`,
      `d. By tracking forest fires`,
    ],
  },
  {
    numb: 5,
    question: "How does PACE improve our understanding of air quality?",
    answer: "c. By measuring aerosol particles that affect air quality",
    options: [
      `a. By detecting carbon emissions from vehicles`,
      `b. By monitoring deforestation`,
      `c. By measuring aerosol particles that affect air quality`,
      `d. By tracking CO2 levels in the upper atmosphere`,
    ],
  },
  {
    numb: 6,
    question:
      "Which type of data does PACE primarily collect to monitor ocean ecosystems?",
    answer: "a. Optical data",
    options: [
      `a. Optical data`,
      `b. Acoustic data`,
      `c. Satellite temperature data`,
      `d. Magnetic field data`,
    ],
  },
  {
    numb: 7,
    question:
      "What technology does the PACE satellite use to capture ocean color?",
    answer: "b. Spectral imaging",
    options: [
      `a. Infrared sensors`,
      `b. Spectral imaging`,
      `c. Laser altimetry`,
      `d. Radar altimetry`,
    ],
  },
  {
    numb: 8,
    question:
      "How does PACE's monitoring of phytoplankton contribute to food security?",
    answer: "d. It helps assess marine productivity",
    options: [
      `a. By tracking fish populations`,
      `b. By measuring water temperature`,
      `c. By monitoring ocean currents`,
      `d. It helps assess marine productivity`,
    ],
  },
  {
    numb: 9,
    question:
      "What is the expected lifespan of the PACE satellite once operational?",
    answer: "c. 5 years",
    options: [`a. 2 years`, `b. 3 years`, `c. 5 years`, `d. 10 years`],
  },
  {
    numb: 10,
    question:
      "Which other satellite program complements the objectives of the PACE mission?",
    answer: "b. NASA's Ocean Color Climate Change Initiative",
    options: [
      `a. The European Space Agency's Sentinel-3`,
      `b. NASA's Ocean Color Climate Change Initiative`,
      `c. The Global Precipitation Measurement Mission`,
      `d. The Soil Moisture Active Passive Mission`,
    ],
  },
  {
    numb: 10,
    question:
      "Which other satellite program complements the objectives of the PACE mission?",
    answer: "b. NASA's Ocean Color Climate Change Initiative",
    options: [
      `a. The European Space Agency's Sentinel-3`,
      `b. NASA's Ocean Color Climate Change Initiative`,
      `c. The Global Precipitation Measurement Mission`,
      `d. The Soil Moisture Active Passive Mission`,
    ],
  },
];

let questionCount = 0;
let questionNumb = 1;
let userScore = 0;

// Function Definitions
startBtn.onclick = () => {
  popupInfo.classList.add(`active`);
  main.classList.add(`active`);
};

exitBtn.onclick = () => {
  popupInfo.classList.remove(`active`);
  main.classList.remove(`active`);
};

continueBtn.onclick = () => {
  quizSection.classList.add(`active`);
  popupInfo.classList.remove(`active`);
  main.classList.remove(`active`);
  quizBox.classList.add(`active`);
  showQuestiions(0);
  questionCounter(1);
  headerScore();
};

tryAgainBtn.onclick = () => {
  quizBox.classList.add(`active`);
  resultBox.classList.remove(`active`);
  nextBtn.classList.remove(`active`);
  questionCount = 0;
  questionNumb = 1;
  userScore = 0;

  showQuestiions(questionCount);
  questionCounter(questionNumb);
  headerScore();
};

goHomeBtn.onclick = () => {
  quizSection.classList.remove(`active`);
  resultBox.classList.remove(`active`);
  nextBtn.classList.remove(`active`);
  questionCount = 0;
  questionNumb = 1;
  userScore = 0;
};

nextBtn.onclick = () => {
  if (questionCount < questions.length - 1) {
    questionCount++;
    showQuestiions(questionCount);
    questionNumb++;
    questionCounter(questionNumb);
    nextBtn.classList.remove(`active`);
  } else {
    showResultBox();
  }
};

function showQuestiions(index) {
  const questionText = document.querySelector(`.question-text`);
  questionText.textContent = `${questions[index].numb}. ${questions[index].question}`;
  let optionTag = questions[index].options
    .map((option) => `<div class="option"><span>${option}</span></div>`)
    .join("");

  optionList.innerHTML = optionTag;

  const option = document.querySelectorAll(`.option`);
  for (let i = 0; i < option.length; i++) {
    option[i].setAttribute(`onclick`, `optionSelected(this)`);
  }
}

function optionSelected(answer) {
  let userAnswer = answer.textContent;
  let correctAnswer = questions[questionCount].answer;
  let allOptions = optionList.children.length;

  if (userAnswer === correctAnswer) {
    answer.classList.add(`correct`);
    userScore++;
    headerScore();
  } else {
    answer.classList.add(`incorrect`);

    // Correct option
    for (let i = 0; i < allOptions; i++) {
      if (optionList.children[i].textContent === correctAnswer) {
        optionList.children[i].setAttribute(`class`, `option correct`);
      }
    }
  }

  // To choose only one option
  for (let i = 0; i < allOptions; i++) {
    optionList.children[i].classList.add(`disabled`);
  }
  nextBtn.classList.add(`active`);
}

function questionCounter(index) {
  const questionTotal = document.querySelector(`.question-total`);
  questionTotal.textContent = `${index} of ${questions.length} questions`;
}

function headerScore() {
  const headerScoreText = document.querySelector(`.header-score`);
  headerScoreText.textContent = `Score: ${userScore} / ${questions.length}`;
}

function showResultBox() {
  quizBox.classList.remove(`active`);
  resultBox.classList.add(`active`);

  const scoreText = document.querySelector(`.score-text`);
  scoreText.textContent = `Your Score is ${userScore} out of ${questions.length}`;

  const circularProgress = document.querySelector(`.circular-progress`);
  const progressValue = document.querySelector(`.progress-value`);

  let progressStartVal = -1;
  let progressEndVal = Math.floor((userScore / questions.length) * 100);
  let speed = 20;

  let progress = setInterval(() => {
    progressStartVal++;
    progressValue.textContent = `${progressStartVal}%`;
    circularProgress.style.background = `conic-gradient(#245c38 ${
      progressStartVal * 3.6
    }deg, rgba(255, 255, 255, .1) 0deg)`;

    if (progressStartVal === progressEndVal) {
      clearInterval(progress);
    }
  }, speed);
}
