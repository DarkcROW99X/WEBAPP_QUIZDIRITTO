const quizData = [
  {
    question: "Chi è considerato il padre della storiografia?",
    options: ["Tucidide", "Erodoto", "Platone", "Aristotele"],
    answer: "Erodoto"
  },
  {
    question: "Quale storico ha scritto 'La guerra del Peloponneso' e basa il suo metodo sull'indagine critica escludendo il mito?",
    options: ["Cicerone", "Tucidide", "Erodoto", "Polibio"],
    answer: "Tucidide"
  },
  {
    question: "Quale filosofo rifiuta di demarcare una linea netta tra mito e indagine storica, affermando il mito come traccia di civiltà scomparse?",
    options: ["Platone", "Aristotele", "Voltaire", "Hegel"],
    answer: "Platone"
  },
  {
    question: "Chi critica la storiografia come priva di unitarietà, considerandola inferiore alla poesia?",
    options: ["Aristotele", "Cicerone", "Cartesio", "Dilthey"],
    answer: "Aristotele"
  },
  {
    question: "Quale storico descrive l'ascesa di Roma come successione di costituzioni e valorizza il ruolo della fortuna?",
    options: ["Polibio", "Voltaire", "Rickert", "Bayle"],
    answer: "Polibio"
  },
  {
    question: "Chi ha definito la storia come 'magistra vitae', con finalità pedagogico-morali?",
    options: ["Cicerone", "Polibio", "Vico", "Humboldt"],
    answer: "Cicerone"
  },
  {
    question: "Nella concezione storica giudaica dell'Antico Testamento, qual è l'obiettivo principale?",
    options: ["Giustificare il ritorno in Israele", "Predire la venuta del Messia", "Analizzare le leggi naturali", "Valorizzare la fortuna"],
    answer: "Giustificare il ritorno in Israele"
  },
  {
    question: "Nella concezione storica cristiana, dove si colloca la venuta del Messia?",
    options: ["Nel futuro", "Nel passato continuo nel presente", "In un tempo ciclico", "All'inizio dei tempi"],
    answer: "Nel passato continuo nel presente"
  },
  {
    question: "Chi distingue tra 'città di Dio' e 'città terrena' nella sua opera 'La città di Dio'?",
    options: ["Agostino d'Ippona", "Gioacchino Da Fiore", "Kant", "Hegel"],
    answer: "Agostino d'Ippona"
  },
  {
    question: "Chi ha proposto la teoria della Trinità temporale, con tempi dei laici, chierici e monaci?",
    options: ["Gioacchino Da Fiore", "Machiavelli", "Robertello", "Bayle"],
    answer: "Gioacchino Da Fiore"
  },
  {
    question: "Chi considera la storia uno strumento per imitare gli esempi degli antichi, affermando il ruolo di Fortuna e virtù?",
    options: ["Machiavelli", "Voltaire", "Kant", "Dilthey"],
    answer: "Machiavelli"
  },
  {
    question: "Chi definisce il campo della storia come l'esposizione di fatti in ordine cronologico?",
    options: ["Francesco Robortello", "Franco Baudouin", "White", "Danto"],
    answer: "Francesco Robortello"
  },
  {
    question: "Chi rigetta l'associazione tra retorica e historia, sostenendo la narrazione del vero?",
    options: ["Francesco Patrizi", "Arnauld", "Rickert", "Vico"],
    answer: "Francesco Patrizi"
  },
  {
    question: "Chi ha integrato storia e diritto per valutare l'attendibilità delle prove?",
    options: ["François Baudouin", "Bayle", "Cartesio", "Hegel"],
    answer: "François Baudouin"
  },
  {
    question: "Chi ha introdotto un metodo deduttivo-matematico nelle scienze, escludendo testimonianze altrui?",
    options: ["Cartesio", "Kant", "Voltaire", "Dilthey"],
    answer: "Cartesio"
  },
  {
    question: "Chi è noto per il pirrorismo, sostenendo l'impossibilità di ricostruzioni storiche certe?",
    options: ["La Mothe Le Vayer", "Pierre Bayle", "Antoine Arnauld", "Hempel"],
    answer: "La Mothe Le Vayer"
  },
  {
    question: "Chi afferma che la storia presuppone fatti reali, distinguendola dalla finzione filosofica?",
    options: ["Pierre Bayle", "Bayle", "Vico", "White"],
    answer: "Pierre Bayle"
  },
  {
    question: "Chi identifica criteri di probabilità per valutare la verità di un avvenimento?",
    options: ["Antoine Arnauld", "Danto", "Ricoeur", "Rickert"],
    answer: "Antoine Arnauld"
  },
  {
    question: "Chi è l'autore della 'Scienza nuova' e distingue tre fasi per fare della storia una scienza?",
    options: ["Giambattista Vico", "Kant", "Herder", "Mink"],
    answer: "Giambattista Vico"
  },
  {
    question: "Chi storicizza la cronologia biblica e vede la storia regolata da leggi umane e progresso cosmopolita?",
    options: ["Voltaire", "Hegel", "Dilthey", "Gift"],
    answer: "Voltaire"
  },
  {
    question: "Chi parla di un diritto cosmopolitico e progresso morale in 'Idea per una storia universale'?",
    options: ["Immanuel Kant", "Humboldt", "Arnauld", "White"],
    answer: "Immanuel Kant"
  },
  {
    question: "Chi critica l'universalismo dell'Illuminismo sottolineando l'individualità storica di ogni popolo?",
    options: ["Herder", "Hegel", "Dilthey", "Danto"],
    answer: "Johann Gottfried Herder"
  },
  {
    question: "Chi elabora una visione dialettica della storia come astuzia della ragione?",
    options: ["Hegel", "Rickert", "Windelband", "Vico"],
    answer: "Hegel"
  },
  {
    question: "Chi distingue tra scienze nomotetiche e idiografiche, difendendo l'autonomia delle scienze umane?",
    options: ["Wilhelm Windelband", "Dilthey", "Hempel", "Ricoeur"],
    answer: "Wilhelm Windelband"
  },
  {
    question: "Chi ha precisato che la storia seleziona dati sulla base di valori teorici, non leggi universali?",
    options: ["Heinrich Rickert", "Hempel", "White", "Barthes"],
    answer: "Heinrich Rickert"
  },
  {
    question: "Chi ha applicato il modello del covering-law alla spiegazione storica?",
    options: ["Carl Gustav Hempel", "Paul Ricoeur", "La Mothe Le Vayer", "Aristotele"],
    answer: "Carl Gustav Hempel"
  },
  {
    question: "Chi ha sottolineato il ruolo costitutivo della scrittura nella rappresentazione del passato?",
    options: ["Paul Ricoeur", "Louis Mink", "Barthes", "Danto"],
    answer: "Paul Ricoeur"
  },
  {
    question: "Chi ha teorizzato la storia come forma narrativa con codici e coinvolgimento del lettore?",
    options: ["Roland Barthes", "Mink", "Danto", "White"],
    answer: "Roland Barthes"
  },
  {
    question: "Chi sostiene che la forma narrativa è uno strumento cognitivo nella conoscenza storica?",
    options: ["Louis Mink", "White", "Hegel", "Kant"],
    answer: "Louis Mink"
  },
  {
    question: "Chi difende l'autonomia della storia come attività dello spirito umano, diversa dalle scienze naturali?",
    options: ["Arthur Danto", "Rickert", "Hegel", "Arnauld"],
    answer: "Arthur Danto"
  },
  {
    question: "Chi afferma che ogni narrazione storica utilizza tropi letterari e che l'oggettività è un'illusione?",
    options: ["Hayden White", "Danto", "Barthes", "Hempel"],
    answer: "Hayden White"
  }
  {
    question: "Qual è la distinzione metodologica introdotta da Wilhelm Windelband?",
    options: ["Scienze naturali vs scienze sociali", "Scienze nomotetiche vs scienze idiografiche", "Scienze deduttive vs scienze induttive", "Scienze empiriche vs scienze umane"],
    answer: "Scienze nomotetiche vs scienze idiografiche"
  },
  {
    question: "Cosa rappresenta il principio del 'verum-factum' in Giambattista Vico?",
    options: ["L'importanza delle fonti scritte", "La superiorità del metodo deduttivo", "L'identità tra conoscenza e costruzione dei fatti", "La distinzione tra storia sacra e profana"],
    answer: "L'identità tra conoscenza e costruzione dei fatti"
  },
  {
    question: "Nella teoria della storia di Paul Ricoeur, quale fase riguarda la selezione e l'organizzazione delle tracce del passato?",
    options: ["Ricerca documentaria", "Spiegazione e comprensione", "Scrittura", "Rappresentazione"],
    answer: "Ricerca documentaria"
  },
  {
    question: "Secondo Roland Barthes, cosa sono i 'codici' nella narrazione storica?",
    options: ["Leggi generali che governano gli eventi", "Strutture narrative e reti di significato", "Criteri di autenticità delle fonti", "Categorie causali della storiografia"],
    answer: "Strutture narrative e reti di significato"
  },
  {
    question: "Qual è la funzione della fase di 'scrittura' secondo Paul Ricoeur?",
    options: ["Verificare le testimonianze", "Applicare leggi generali", "Preparare e presentare la rappresentazione del passato", "Distinguere mito e storia"],
    answer: "Preparare e presentare la rappresentazione del passato"
  }


      
    
    
  
  








];

// Mescola tutte le domande all'inizio
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffle(quizData); // randomizza l'ordine

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
