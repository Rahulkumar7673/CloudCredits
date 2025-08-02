const questions = [
  {
    question: "What does HTML stand for?",
    answers: [
      { text: "HyperText Markup Language", correct: true },
      { text: "Hyperlinks and Text Markup Language", correct: false },
      { text: "Home Tool Markup Language", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question: "Which company developed JavaScript?",
    answers: [
      { text: "Microsoft", correct: false },
      { text: "Netscape", correct: true },
      { text: "Sun Microsystems", correct: false },
      { text: "Oracle", correct: false },
    ],
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    answers: [
      { text: "//", correct: true },
      { text: "/* */", correct: false },
      { text: "#", correct: false },
      { text: "<!-- -->", correct: false },
    ],
  },
  {
    question: "How do you declare a variable in JavaScript?",
    answers: [
      { text: "var myVar", correct: true },
      { text: "int myVar", correct: false },
      { text: "myVar = 0", correct: false },
      { text: "let = myVar", correct: false },
    ],
  },
  {
    question: "Which keyword is used to create a function?",
    answers: [
      { text: "func", correct: false },
      { text: "function", correct: true },
      { text: "define", correct: false },
      { text: "create", correct: false },
    ],
  },
];

const questionElement = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextButton = document.getElementById("next-btn");
const resultBox = document.getElementById("result");
const scoreSpan = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  resultBox.classList.add("hide");
  document.getElementById("quiz").classList.remove("hide");
  nextButton.textContent = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    if (answer.correct) {
      button.dataset.correct = true;
    }
    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
  });
}

function resetState() {
  nextButton.style.display = "none";
  answersContainer.innerHTML = "";
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  if (isCorrect) {
    selectedButton.classList.add("correct");
    score++;
  } else {
    selectedButton.classList.add("wrong");
  }

  Array.from(answersContainer.children).forEach((btn) => {
    btn.disabled = true;
    if (btn.dataset.correct === "true") {
      btn.classList.add("correct");
    }
  });

  nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz").classList.add("hide");
  resultBox.classList.remove("hide");
  scoreSpan.textContent = `${score} / ${questions.length}`;
}

// Start quiz on page load
startQuiz();

// Dark Mode Toggle
const toggleDarkBtn = document.getElementById("toggle-dark");
toggleDarkBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleDarkBtn.textContent = document.body.classList.contains("dark")
    ? "☀️ Light Mode"
    : "🌙 Dark Mode";
});
