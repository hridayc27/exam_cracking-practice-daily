const questions = [
  {
    question: "Who is the Father of Indian Constitution?",
    options: ["Mahatma Gandhi", "B.R. Ambedkar", "Nehru", "Subhash Bose"],
    answer: "B.R. Ambedkar"
  },
  {
    question: "Capital of India?",
    options: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
    answer: "New Delhi"
  }
];

let currentQuestion = 0;
let score = 0;
let timeLeft = 60;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const timerEl = document.getElementById("timer");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.innerText = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    button.classList.add("option-btn");
    button.onclick = () => selectAnswer(option);
    optionsEl.appendChild(button);
  });
}

function selectAnswer(option) {
  if (option === questions[currentQuestion].answer) {
    score++;
  }
}

function nextQuestion() {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  questionEl.innerHTML = "";
  optionsEl.innerHTML = "";
  resultEl.innerHTML = "Your Score: " + score + "/" + questions.length;
}

function startTimer() {
  const timer = setInterval(() => {
    timeLeft--;
    timerEl.innerText = "Time Left: " + timeLeft + "s";
    if (timeLeft <= 0) {
      clearInterval(timer);
      showResult();
    }
  }, 1000);
}

loadQuestion();
startTimer();