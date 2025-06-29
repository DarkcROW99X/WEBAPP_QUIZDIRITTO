
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
  },

  {
      question: "Qual è l'effetto dell’annullabilità di un contratto?",
      options: ["Il contratto è nullo fin dall'origine", "Il contratto è valido fino a pronuncia giudiziale", "Il contratto non produce alcun effetto", "Il contratto non può essere impugnato"],
      answer: "Il contratto è valido fino a pronuncia giudiziale"
    },
    {
      question: "Qual è la differenza fondamentale tra rescissione e risoluzione del contratto?",
      options: [
        "La rescissione è per eccessiva onerosità, la risoluzione per inadempimento",
        "La risoluzione è per eccessiva onerosità, la rescissione per inadempimento",
        "Entrambe per inadempimento",
        "Entrambe per eccessiva onerosità"
      ],
      answer: "La rescissione è per eccessiva onerosità, la risoluzione per inadempimento"
    },
    {
      question: "Quale causa può determinare la nullità del contratto ai sensi dell’art. 1418 c.c.?",
      options: [
        "Il difetto di causa",
        "Il vizio di volontà",
        "L’eccessiva onerosità sopravvenuta",
        "La promessa ad una futura donazione"
      ],
      answer: "Il difetto di causa"
    },
    {
      question: "In caso di rescissione giudiziale per eccessiva onerosità sopravvenuta (art. 1467 c.c.), quale è il termine per agire?",
      options: [
        "6 mesi dalla conoscenza del fatto",
        "1 anno dalla formazione del contratto",
        "3 anni dalla formazione del contratto",
        "Non vi è termine"
      ],
      answer: "6 mesi dalla conoscenza del fatto"
    },
    {
      question: "Quale tra i seguenti è un impedimento dirimente al matrimonio civile (art. 84 c.c.)?",
      options: [
        "Essere consanguinei in linea retta",
        "Divorzio consumato da oltre 5 anni",
        "Residenza in comuni diversi",
        "Promessa solenne di matrimonio"
      ],
      answer: "Essere consanguinei in linea retta"
    },
    {
      question: "Qual è la differenza tra matrimonio civile e concordatario?",
      options: [
        "Il primo è celebrato in Comune, il secondo in Chiesa con effetti civili",
        "Il primo è religioso, il secondo è laico",
        "Il primo richiede pubblicazioni, il secondo no",
        "Il primo è irrevocabile, il secondo no"
      ],
      answer: "Il primo è celebrato in Comune, il secondo in Chiesa con effetti civili"
    },
    {
      question: "Che cosa si intende per 'addebito della separazione'?",
      options: [
        "Attribuzione della colpa a uno dei coniugi",
        "Perdita dell’affidamento dei figli",
        "Divorzio immediato",
        "Matrimonio putativo"
      ],
      answer: "Attribuzione della colpa a uno dei coniugi"
    },
    {
      question: "Qual è l’effetto dell’addebito ai sensi dell’art. 151 c.c.?",
      options: [
        "Perdita del diritto al mantenimento",
        "Annullamento del matrimonio",
        "Riconoscimento dei figli",
        "Separazione dei beni"
      ],
      answer: "Perdita del diritto al mantenimento"
    },
    {
      question: "Quale regime patrimoniale è quello legale tra coniugi in mancanza di accordo diverso?",
      options: [
        "Comunione legale dei beni",
        "Separazione dei beni",
        "Fondo patrimoniale",
        "Trust"
      ],
      answer: "Comunione legale dei beni"
    },
    {
      question: "Cos’è il fondo patrimoniale ai sensi dell’art. 167 c.c.?",
      options: [
        "Un patrimonio costituito per soddisfare i bisogni della famiglia",
        "Un trust per i minori",
        "Un contratto tra coniugi",
        "Un tipo di separazione dei beni"
      ],
      answer: "Un patrimonio costituito per soddisfare i bisogni della famiglia"
    },
    {
      question: "In cosa consiste la promessa solenne di matrimonio?",
      options: [
        "Un contratto con effetti giuridici vincolanti",
        "Un atto unilaterale senza effetti giuridici",
        "Un accordo preparatorio all’adozione",
        "Un patto di famiglia"
      ],
      answer: "Un contratto con effetti giuridici vincolanti"
    },
    {
      question: "Qual è la disciplina dell’obbligo alimentare tra parenti?",
      options: [
        "È regolata dagli artt. 433‑448 c.c.",
        "Non esiste obbligo tra parenti",
        "È regolata dal diritto canonico",
        "Dipende dalla separazione"
      ],
      answer: "È regolata dagli artt. 433‑448 c.c."
    },
    {
      question: "Quando si può disconoscere la paternità secondo l’art. 233 c.c.?",
      options: [
        "Entro 300 giorni dalla nascita",
        "Entro 1 anno dalla nascita",
        "Solo se riconosciuto",
        "Mai"
      ],
      answer: "Entro 300 giorni dalla nascita"
    },
    {
      question: "Cos’è il mantenimento diretto?",
      options: [
        "Somministrazione diretta del vitto, alloggio e istruzione",
        "Pagamento in denaro al genitore affidatario",
        "Obbligo di feed morale",
        "Erogazione tramite fondo patrimoniale"
      ],
      answer: "Somministrazione diretta del vitto, alloggio e istruzione"
    },
    {
      question: "In caso di interdizione (art. 414 c.c.), cosa accade alla capacità di agire?",
      options: [
        "È totalmente esclusa",
        "Rimane intatta",
        "Si converge nel tutore",
        "Si converte in amministrazione di sostegno"
      ],
      answer: "È totalmente esclusa"
    },

    
      {
        question: "Qual è la causa di invalidità del contratto secondo l’art. 1427 c.c.?",
        options: ["Vizio del consenso", "Annullabilità", "Eccessiva onerosità", "Inadempimento"], 
        answer: "Vizio del consenso"
      },
      {
        question: "In quale caso è possibile il recesso unilaterale dal contratto?",
        options: ["Quando previsto dalle parti ", "Mai", "Solo nei contratti a titolo gratuito", "Solo in caso di nullità"], 
        answer: "Quando previsto dalle parti "
      },
      {
        question: "Che cosa si intende per vizio del negozio giuridico (art. 1427 c.c.)?",
        options: ["Errore, violenza, dolo", "Inadempimento, forza maggiore, eccessiva onerosità", "Nullità, annullabilità, risoluzione", "Separazione dei beni"], 
        answer: "Errore, violenza, dolo"
      },
      {
        question: "Quale effetto ha la risoluzione ex art. 1453 c.c.?",
        options: ["Estinzione delle obbligazioni future", "Nullità del contratto", "Annullamento", "Obbligo di esecuzione specifica"], 
        answer: "Estinzione delle obbligazioni future"
      },
      {
        question: "In quali rapporti sorge l'obbligo di alimenti tra affini?",
        options: ["Solo tra coniugi", "Tra parenti e affini in linea retta", "Solo tra genitori e figli", "Mai"], 
        answer: "Tra parenti e affini in linea retta"
      },
      {
        question: "Quale norma regola i tempi e le modalità di somministrazione del mantenimento?",
        options: ["Art. 156 c.c.", "Art. 1427 c.c.", "Art. 151 c.c.", "Art. 170 c.c."], 
        answer: "Art. 156 c.c."
      },
      {
        question: "Cos’è l’impresa familiare secondo l’art. 230 bis c.c.?",
        options: ["Impresa gestita da ascendente e discendenti", "Impresa individuale", "Trust familiare", "Comunione convenzionale"], 
        answer: "Impresa gestita da ascendente e discendenti"
      },
      {
        question: "Qual è l’effetto del patto di famiglia ai sensi del d.lgs. n. 208/2001?",
        options: ["Trasmissione anticipata dell’azienda", "Nullità del matrimonio", "Separazione dei beni", "Obbligo alimentare"], 
        answer: "Trasmissione anticipata dell’azienda"
      },
      {
        question: "Qual è la differenza tra promessa semplice e promessa solenne di matrimonio?",
        options: ["Nella promessa solenne vi è l’atto pubblico in Comune", "Solo la promessa semplice è vincolante", "Le due sono identiche", "Solo la promessa semplice produce effetti civili"], 
        answer: "Nella promessa solenne vi è l’atto pubblico in Comune"
      },
      {
        question: "Cosa comporta lo scioglimento del vincolo matrimoniale?",
        options: ["Separazione legale seguita da divorzio", "Nullità del matrimonio", "Morte del coniuge", "Promessa solenne annullata"], 
        answer: "Separazione legale seguita da divorzio"
      },
      {
        question: "Qual è la differenza tra impedimenti assoluti e relativi nel matrimonio concordatario?",
        options: ["Gli assoluti ostano sempre, i relativi se non sanati", "Gli assoluti posso essere sanati", "I relativi impediscono il civile", "Non esistono"], 
        answer: "Gli assoluti ostano sempre, i relativi se non sanati"
      },
      {
        question: "A cosa serve la pubblicazione di matrimonio?",
        options: ["Informare terzi e consentire opposizioni", "Celebrarlo", "Registrare nascita figli", "Costituire comunione"], 
        answer: "Informare terzi e consentire opposizioni"
      },
      {
        question: "Che cos’è un’unione civile secondo la legge n. 76/2016?",
        options: ["Formazione di coppia tra persone dello stesso sesso", "Matrimonio religioso", "Contratto di convivenza", "Separazione dei beni"], 
        answer: "Formazione di coppia tra persone dello stesso sesso"
      },
      {
        question: "Quando si configura un matrimonio irregolare?",
        options: ["Violazione delle forme prescritte", "Assenza di consenso", "Eccessiva onerosità", "Mancanza di testimoni"], 
        answer: "Violazione delle forme prescritte"
      },
      {
        question: "Qual è la differenza tra nullità e inesistenza del matrimonio?",
        options: ["L’inesistenza implica mai esistito", "Nullità è rimediabile", "Entrambi producono gli stessi effetti", "Non esiste inesistenza"], 
        answer: "L’inesistenza implica mai esistito"
      },
      {
        question: "Cos’è il matrimonio putativo?",
        options: ["Matrimonio ritenuto valido da buona fede anche se nullo", "Matrimonio religioso non registrato", "Unione civile non validata", "Separazione dei beni automatica"], 
        answer: "Matrimonio ritenuto valido da buona fede anche se nullo"
      },
      {
        question: "Quali obblighi coniugali sono codificati nell’art. 143 c.c.?",
        options: ["Femminilità e mascolinità", "Fedeltà, assistenza, coabitazione", "Solo mantenimento", "Solo supporto finanziario"], 
        answer: "Fedeltà, assistenza, coabitazione"
      },
      {
        question: "Qual è l’ambito del regime patrimoniale primario?",
        options: ["Diritti e doveri dei coniugi", "Obblighi alimentari", "Regole sulla capacità giuridica", "Negozi tra affini"], 
        answer: "Diritti e doveri dei coniugi"
      },
      {
        question: "Cosa prevede la comunione convenzionale?",
        options: ["Separazione patrimoniale volontaria", "Compravendita tra coniugi", "Fondo patrimoniale costituito", "Trust familiare"], 
        answer: "Separazione patrimoniale volontaria"
      },
      {
        question: "Quali sono gli effetti della separazione dei beni?",
        options: ["Ogni coniuge mantiene i beni acquistati", "Comproprietà automatica", "Comunione su tutte le acquisizioni", "Formazione di trust"], 
        answer: "Ogni coniuge mantiene i beni acquistati"
      },
      {
        question: "Come si costituisce un fondo patrimoniale?",
        options: ["Mediante atto pubblico e destinazione di beni per famiglia", "Contracto verbale", "Promessa solenne", "Iscrizione a registro"], 
        answer: "Mediante atto pubblico e destinazione di beni per famiglia"
      },
      {
        question: "Che cos’è un trust secondo il diritto italiano?",
        options: ["Vincolo pattizio di destinazione su beni", "Matrimonio putativo", "Negozi giuridici nulli", "Separazione dei beni"], 
        answer: "Vincolo pattizio di destinazione su beni"
      },
      {
        question: "La contestazione dello stato di figlio può essere promossa entro quale termine?",
        options: ["Entro 1 anno dal riconoscimento", "Sentenza di separazione", "Mai", "Solo in caso di adozione"], 
        answer: "Entro 1 anno dal riconoscimento"
      },
      {
        question: "Qual è lo scopo dell’adozione semplice?",
        options: ["Stabilire un rapporto di filiazione extragiudiziale", "Sciogliere il matrimonio", "Creare un trust", "Regolamentare alimenti"], 
        answer: "Stabilire un rapporto di filiazione extragiudiziale"
      },
      {
        question: "Cosa significa stato di abbandono ex art. 147 c.c.?",
        options: ["Figlio privo di cure genitoriali", "Separazione volontaria", "Matrimonio nullo", "Fondo patrimoniale"], 
        answer: "Figlio privo di cure genitoriali"
      },
      {
        question: "Quali sono i diritti e doveri del figlio secondo l’art. 147 c.c.?",
        options: ["Crescita, educazione, mantenimento", "Solo mantenimento", "Solo istruzione", "Solo alimenti"], 
        answer: "Crescita, educazione, mantenimento"
      },
      {
        question: "Quando scatta la sospensione della responsabilità genitoriale?",
        options: ["Per provvedimento giudiziario", "Sempre dopo i 18 anni", "Quando i figli sono maggiori", "Alla morte del genitore"], 
        answer: "Per provvedimento giudiziario"
      },
      {
        question: "Cos’è l’usufrutto legale?",
        options: ["Diritto attribuito dalla legge su beni ereditati", "Possesso illecito", "Comunione convenzionale", "Matrimonio concordatario"], 
        answer: "Diritto attribuito dalla legge su beni ereditati"
      },
      {
        question: "Qual è la differenza tra tutela e curatela?",
        options: ["La prima per minore e incapace, la seconda per parzialmente capace", "Non c’è differenza", "Sono identiche", "Solo la curatela è amministrazione"], 
        answer: "La prima per minore e incapace, la seconda per parzialmente capace"
      },
      {
        question: "Che cosa si intende per riconciliazione tra coniugi?",
        options: ["Ripresa della convivenza", "Annullamento della separazione", "Ritiro del ricorso di divorzio", "Fusione patrimoniale"], 
        answer: "Ripresa della convivenza"
      },
      {
        question: "Qual è la differenza tra separazione consensuale e giudiziale?",
        options: ["La consensuale è accordata tra coniugi, la giudiziale con sentenza", "Non esiste separazione giudiziale", "La giudiziale è più veloce", "La consensuale richiede tribunale"], 
        answer: "La consensuale è accordata tra coniugi, la giudiziale con sentenza"
      },
      {
        question: "Quali sono i tipi principali di divorzio?",
        options: ["Giudiziale e consensuale", "Unilaterale e segreto", "Concordatario e civile", "Putativo e nullità"], 
        answer: "Giudiziale e consensuale"
      },
      {
        question: "Qual è l’effetto dell'addebito nel divorzio?",
        options: ["Influenza sul mantenimento", "Annulla il matrimonio", "Modifica regime patrimoniale", "Attribuisce patria potestà"], 
        answer: "Influenza sul mantenimento"
      },
      {
        question: "A cosa si riferisce la capacità giuridica?",
        options: ["Attitudine ad essere titolari di diritti e doveri", "Forza contrattuale", "Nullità del negozio", "Separazione dei beni"], 
        answer: "Attitudine ad essere titolari di diritti e doveri"
      },
      {
        question: "Qual è la differenza tra capacità giuridica e capacità di agire?",
        options: ["La prima è status, la seconda è idoneità ad esercitare diritti", "Sono identiche", "La capacità di agire genera status", "Solo la giuridica serve per firmare contratti"], 
        answer: "La prima è status, la seconda è idoneità ad esercitare diritti"
      },
      {
        question: "Cos’è il possesso secondo l’art. 1158 c.c.?",
        options: ["Detenzione materiale come se fosse proprietario", "Proprietà condivisa", "Usufrutto", "Trust"], 
        answer: "Detenzione materiale come se fosse proprietario"
      },
      {
        question: "Quali sono le tipologie principali di successione ereditaria?",
        options: ["Legittima, testamentaria, necessaria", "Solo testamentaria", "Solo legittima", "Solo necessaria"], 
        answer: "Legittima, testamentaria, necessaria"
      },
      {
        question: "Quali tipologie di testamento prevede il codice civile?",
        options: ["Olografo, pubblico, segreto", "Pubblico e segreto solo", "Olografo e fiduciario", "Nessuna"], 
        answer: "Olografo, pubblico, segreto"
      },
      {
        question: "Cos’è l’anímus donandi nella donazione?",
        options: ["Volontà di donare senza corrispettivo", "Accordo matrimoniale", "Reciprocità di servizi", "Clausola di trust"], 
        answer: "Volontà di donare senza corrispettivo"
      },
      {
        question: "Quali caratteristiche deve avere una donazione per essere valida?",
        options: ["Atto pubblico, anima donandi, accettazione del donatario", "Solo scrittura privata", "Solo anima donandi", "Solo accettazione"], 
        answer: "Atto pubblico, anima donandi, accettazione del donatario"
      },
      {
        question: "Cos’è un’obbligazione?",
        options: ["Rapporto giuridico tra creditore e debitore", "Solo pagamento di somme", "Separazione dei beni", "Comunione legale"], 
        answer: "Rapporto giuridico tra creditore e debitore"
      },
      {
        question: "Qual è la funzione dell’azione di riduzione?",
        options: ["Tutela dei legittimari contro disposizioni testamentarie", "Azione di divorzio", "Azione di paternità", "Azione di alimenti"], 
        answer: "Tutela dei legittimari contro disposizioni testamentarie"
      },
      {
        question: "Quando si applica l'interdizione (art. 414 c.c.)?",
        options: ["In presenza di infermità mentale grave", "Sempre dopo i 18 anni", "Mai", "In caso di separazione"], 
        answer: "In presenza di infermità mentale grave"
      },
      {
        question: "A cosa serve l’inabilitazione (art. 415 c.c.)?",
        options: ["Limitare la capacità di agire di persone parzialmente capaci", "Interdire completamente", "Annullare matrimoni", "Separare comunione"], 
        answer: "Limitare la capacità di agire di persone parzialmente capaci"
      },
      {
        question: "Quali sono gli obiettivi dell’amministrazione di sostegno (art. 404 e ss. c.c.)?",
        options: ["Tutela delle persone temporaneamente o permanentemente incapaci", "Annullamento di negozi", "Separazione dei beni", "Trust familiare"], 
        answer: "Tutela delle persone temporaneamente o permanentemente incapaci"
      },

        {
          question: "Quali sono le caratteristiche della promessa di matrimonio semplice secondo il codice civile?",
          options: ["Non ha effetti giuridici obbligatori", "È valida solo se registrata in comune", "Ha gli stessi effetti di un contratto", "Deve essere fatta davanti a un pubblico ufficiale"],
          answer: "Non ha effetti giuridici obbligatori"
        },
        {
          question: "Cos’è la separazione consensuale?",
          options: ["Accordo tra i coniugi per separarsi e regolamentare i rapporti patrimoniali e personali", "Separazione decisa solo dal tribunale", "Separazione senza divisione dei beni", "Nulla separazione in assenza di testimoni"],
          answer: "Accordo tra i coniugi per separarsi e regolamentare i rapporti patrimoniali e personali"
        },
        {
          question: "Quali sono le cause di nullità del matrimonio?",
          options: ["Incapacità di uno dei coniugi, errore, violenza", "Mancanza di testimoni", "Matrimonio religioso non registrato", "Semplice separazione dei beni"],
          answer: "Incapacità di uno dei coniugi, errore, violenza"
        },
        {
          question: "In che modo si definisce il matrimonio concordatario?",
          options: ["Matrimonio celebrato con il rito religioso e riconosciuto dallo Stato", "Matrimonio civile con registrazione religiosa", "Solo matrimonio civile", "Unione civile"],
          answer: "Matrimonio celebrato con il rito religioso e riconosciuto dallo Stato"
        },
        {
          question: "Quali sono i requisiti per un matrimonio valido?",
          options: ["Consenso libero e capace, forma, mancanza di impedimenti", "Solo la forma deve essere rispettata", "Anche il divorzio è un requisito", "Solo l’amore tra i coniugi è sufficiente"],
          answer: "Consenso libero e capace, forma, mancanza di impedimenti"
        },
        {
          question: "Cosa prevede la separazione dei beni tra i coniugi?",
          options: ["Ogni coniuge conserva la proprietà dei beni acquistati", "Comunicazione dei beni coniugali", "Completamento di un trust", "Divisione automatica dei beni"],
          answer: "Ogni coniuge conserva la proprietà dei beni acquistati"
        },
        {
          question: "Cos’è l’adozione legittimante?",
          options: ["Trasformazione giuridica di un figlio naturale in figlio legittimo", "Adozione di un minore in stato di abbandono", "Adozione di un minore in famiglia", "Donazione con effetto retroattivo"],
          answer: "Trasformazione giuridica di un figlio naturale in figlio legittimo"
        },
        {
          question: "Quando si può parlare di matrimonio simulato?",
          options: ["Quando i coniugi dichiarano di sposarsi ma non convivevano", "Quando uno dei coniugi è già sposato", "Quando non è stato effettuato il rito civile", "Quando un coniuge è in procinto di divorziare"],
          answer: "Quando i coniugi dichiarano di sposarsi ma non convivevano"
        },
        {
          question: "Cosa si intende per affidamento predittivo?",
          options: ["Affidamento di un figlio in attesa di valutazione del tribunale", "Affidamento di un minore senza autorizzazione giuridica", "Inizio di una separazione dei coniugi", "Scelta di un tutore per un minore"],
          answer: "Affidamento di un figlio in attesa di valutazione del tribunale"
        },
        {
          question: "Quali sono le principali caratteristiche della comunione legale dei beni?",
          options: ["Tutti i beni acquistati dai coniugi durante il matrimonio sono comuni", "Ogni coniuge mantiene la piena proprietà dei suoi beni", "I beni non comuni possono essere venduti separatamente", "Solo i beni acquistati insieme sono comuni"],
          answer: "Tutti i beni acquistati dai coniugi durante il matrimonio sono comuni"
        },
        {
          question: "Cos’è il negozio giuridico?",
          options: ["L'atto giuridico che produce effetti giuridici voluti dalla parte", "Un contratto di lavoro", "Una separazione dei beni", "Un matrimonio religioso"],
          answer: "L'atto giuridico che produce effetti giuridici voluti dalla parte"
        },
        {
          question: "Che cos’è l’impresa familiare secondo l'art. 230-bis c.c.?",
          options: ["Un’impresa gestita e amministrata da un familiare", "Un’impresa gestita solo da genitori", "Un’impresa aperta per il matrimonio", "Un’attività che non necessita di formalizzazione"], 
          answer: "Un’impresa gestita e amministrata da un familiare"
        },
        {
          question: "Qual è il requisito fondamentale per la validità di un testamento olografo?",
          options: ["Deve essere scritto di mano del testatore", "Deve essere autenticato da un notaio", "Deve essere sottoscritto da almeno due testimoni", "Deve essere redatto davanti ad un pubblico ufficiale"], 
          answer: "Deve essere scritto di mano del testatore"
        },
        {
          question: "Qual è la funzione dell’interdizione?",
          options: ["Privare una persona della capacità di agire a causa di infermità mentale", "Limitare la capacità di donare", "Annullare un testamento", "Separare beni coniugali"], 
          answer: "Privare una persona della capacità di agire a causa di infermità mentale"
        },
        {
          question: "In quale situazione si può chiedere la decadenza della responsabilità genitoriale?",
          options: ["Quando i genitori non adempiono ai loro obblighi morali e materiali", "Quando il figlio compie 18 anni", "Quando uno dei genitori è straniero", "Quando i genitori sono separati"], 
          answer: "Quando i genitori non adempiono ai loro obblighi morali e materiali"
        },
        {
          question: "Cos’è un trust secondo la legge italiana?",
          options: ["Un rapporto giuridico che consente di trasferire beni da un soggetto a un altro per un fine determinato", "Un accordo tra coniugi per dividere i beni", "Un negozio giuridico di separazione dei beni", "Un contratto matrimoniale"], 
          answer: "Un rapporto giuridico che consente di trasferire beni da un soggetto a un altro per un fine determinato"
        },
        {
          question: "Quando è possibile chiedere l’annullamento del matrimonio?",
          options: ["Quando il matrimonio è stato contratto per errore, violenza o dolo", "Dopo la separazione legale", "Quando uno dei coniugi non ha compiuto 18 anni", "Quando i coniugi non adempiono agli obblighi patrimoniali"], 
          answer: "Quando il matrimonio è stato contratto per errore, violenza o dolo"
        },
        {
          question: "Cosa succede in caso di divorzio con addebito?",
          options: ["Il coniuge a cui è addebitato il fallimento del matrimonio perde il diritto al mantenimento", "Viene annullato il matrimonio", "Si stabilisce l'affido condiviso dei figli", "Si rinegozia la separazione dei beni"], 
          answer: "Il coniuge a cui è addebitato il fallimento del matrimonio perde il diritto al mantenimento"
        },
        {
          question: "Cosa accade in caso di separazione dei beni?",
          options: ["Ogni coniuge mantiene la proprietà esclusiva dei propri beni", "Si crea un fondo patrimoniale", "I beni sono divisi automaticamente tra i coniugi", "Non è possibile effettuare donazioni"], 
          answer: "Ogni coniuge mantiene la proprietà esclusiva dei propri beni"
        },
        {
          question: "Cos’è l’adozione internazionale?",
          options: ["Adozione di un minore da parte di una coppia residente in un altro Stato", "Adozione tra coppie dello stesso sesso", "Adozione di un figlio legittimo", "Adozione di un minore abbandonato nel proprio Paese"], 
          answer: "Adozione di un minore da parte di una coppia residente in un altro Stato"
        },
        {
          question: "Quali sono gli effetti giuridici della dissoluzione del vincolo matrimoniale?",
          options: ["Finisce il matrimonio con effetti patrimoniali e personali", "Le obbligazioni patrimoniali restano invarianti", "I figli restano a carico esclusivo del coniuge colpevole", "Non ci sono effetti legali"], 
          answer: "Finisce il matrimonio con effetti patrimoniali e personali"
        },
        {
          question: "Cos’è la nullità del matrimonio?",
          options: ["Un matrimonio che non ha prodotto effetti giuridici sin dall’inizio", "Un matrimonio che può essere annullato solo in caso di separazione", "Un matrimonio tra coniugi che non convivono", "Un matrimonio con separazione dei beni automatica"], 
          answer: "Un matrimonio che non ha prodotto effetti giuridici sin dall’inizio"
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
