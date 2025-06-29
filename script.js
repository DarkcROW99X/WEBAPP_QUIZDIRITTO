
const quizData = [
  {
    question: "Quale tra questi è un presupposto per l'annullabilità del matrimonio?",
    options: ["Bigamia", "Violenza o timore", "Incapacità naturale", "Parentela"],
    answer: "Violenza o timore"
  },
  {
    question: "Il trust è uno strumento di...?",
    options: ["Tutela dei minori", "Separazione dei beni", "Gestione patrimoniale", "Adozione"],
    answer: "Gestione patrimoniale"
  },
  {
    question: "Che cos'è la responsabilità in vigilando?",
    options: ["La responsabilità di vigilare sui figli", "Un diritto del minore", "Una forma di mantenimento", "Una misura interdittiva"],
    answer: "La responsabilità di vigilare sui figli"
  },
  {
    question: "Qual è l'effetto dell'addebito nella separazione?",
    options: ["Perdita del diritto al mantenimento", "Perdita della genitorialità", "Annullamento del matrimonio", "Adozione del figlio"],
    answer: "Perdita del diritto al mantenimento"
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const questionData = quizData[currentQuestion];
  document.getElementById("question").textContent = questionData.question;
  const optionsDiv = document.getElementById("options");
  optionsDiv.innerHTML = "";
  questionData.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      if (option === questionData.answer) {
        alert("✔️ Corretto!");
      } else {
        alert("❌ Sbagliato! Risposta corretta: " + questionData.answer);
      }
    };
    optionsDiv.appendChild(btn);
  });
}

function nextQuestion() {
  currentQuestion = (currentQuestion + 1) % quizData.length;
  loadQuestion();
}

window.onload = loadQuestion;
