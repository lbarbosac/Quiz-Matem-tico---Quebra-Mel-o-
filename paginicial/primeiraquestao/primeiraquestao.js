const questionsData = {
  // Lista de perguntas e respostas com suas opções
  "questions": [
    {
      // Texto da pergunta
      "questionText": "Qual ano o Grêmio ganhou sua primeira Libertadores?",
      // Opções de resposta para essa pergunta
      "options": [
        "1983", // Primeira opção
        "1995", // Segunda opção
        "2017", // Terceira opção
        "2023"  // Quarta opção
      ],
      // Índice da resposta correta (neste caso, a primeira opção)
      "correctAnswer": 0
    },
    {
      "questionText": "Quantas Copas do Brasil o Grêmio tem?",
      "options": [
        "3", // Primeira opção
        "6", // Segunda opção
        "7", // Terceira opção
        "5"  // Quarta opção
      ],
      "correctAnswer": 3 // A quarta opção é a correta
    },
    {
      "questionText": "Em que ano rolou o iconico 5x0 no GRE-NAL?",
      "options": [
        "2015",  // Primeira opção
        "2017",  // Segunda opção
        "2018",  // Terceira opção
        "2020"   // Quarta opção
      ],
      "correctAnswer": 0 // A primeira opção é a correta
    },
    {
      "questionText": "O Grêmio ganhou sua 5 Copa do Brasil quando?",
      "options": [
        "2016", // Primeira opção
        "2018",  // Segunda opção
        "2017",   // Terceira opção
        "2020"   // Quarta opção
      ],
      "correctAnswer": 0 // primeira opção
    },
    {
      "questionText": "Quem marcou o gol do título da Copa do Brasil de 2016?",
      "options": [
        "Geromel", // Primeira opção
        "Everton Cebolinha", // Segunda opção
        "Douglas", // Terceira opção
        "Pedro Rocha"  // Quarta opção
      ],
      "correctAnswer": 1 // Segunda opção
    },
    {
      "questionText": "Qual dupla de zaga foi essencial na sequência de títulos do Grêmio?",
      "options": [
        "Geromel e Kannemann", // Primeira opção
        "Luan e Artur", // Segunda opção
        "Jardel e Paulo Nunes", // Terceira opção
        "Roger Machado e Renato Gaúcho"  // Quarta opção
      ],
      "correctAnswer": 0 //primeira opção
    },
    {
      "questionText": "Quem é o maior ídolo do Grêmio?",
      "options": [
        "Cícero", // Primeira opção
        "Jael", // Segunda opção
        "Renato Gaúcho", // Terceira opção
        "Felipe Scolari"  // Quarta opção
      ],
      "correctAnswer": 2 // terceira opção
    },
    {
      "questionText": "Quantas vezes o Grêmio ganhou a Recopa Sul-Americana?",
      "options": [
        "2", // Primeira opção
        "1", // Segunda opção
        "0", // Terceira opção
        "3"  // Quarta opção
      ],
      "correctAnswer": 0 // Primeira opção
    },
    {
      "questionText": "Em que ano o Grêmio foi fundado?",
      "options": [
        "1901", // Primeira opção
        "1903", // Segunda opção
        "1910", // Terceira opção
        "1920"  // Quarta opção
      ],
      "correctAnswer": 1 // Segunda opção
    },
    {
      "questionText": "Como o Grêmio é conhecido?",
      "options": [
        "Tricolor Paulista", // Primeira opção
        "Gigante da Colina", // Segunda opção
        "Imortal Tricolor", // Terceira opção
        "Furacão"  // Quarta opção
      ],
      "correctAnswer": 2 //Terceira opção
    },
    {
      "questionText": "Em que ano o Grêmio venceu o Mundial de Clubes",
      "options": [
        "1983",   // Primeira opção
        "1985²",  // Segunda opção
        "1995",  // Terceira opção
        "2001"  // Quarta opção
      ],
      "correctAnswer": 0 // primeira opção
    },
    {
      "questionText": "Quem era o técnico do Grêmio na conquista da Libertadores de 2017?",
      "options": [
        "Luiz Felipe Scolari",  // Primeira opção
        "Renato Portaluppi",  // Segunda opção
        "Tite",  // Terceira opção
        "Mano Menezes"  // Quarta opção
      ],
      "correctAnswer": 1 //segunda opção
    },
    {
      "questionText": "Qual jogador ficou conhecido como 'Diabo Loiro' e é um dos ídolos do Grêmio?",
      "options": [
        "Tarciso", // Primeira opção
        "Alcindo", // Segunda opção
        "Tesourinha", // Terceira opção
        "Paulo Nunes"  // Quarta opção
      ],
      "correctAnswer": 3 // quarta opção
    },
    {
      "questionText": "Qual foi o placar da histórica 'Batalha do Aflitos' em 2005?",
      "options": [
        "1x0", // Primeira opção
        "2x1", // Segunda opção
        "3x2", // Terceira opção
        "0x0"  // Quarta opção
      ],
      "correctAnswer": 0 // Primeirq opção
    },
    {
      "questionText": "Em que ano o Grêmio conquistou sua primeira Copa do Brasil?",
      "options": [
        "1989", // Primeira opção
        "1994", // Segunda opção
        "1997", // Terceira opção
        "2001"  // Quarta opção
      ],
      "correctAnswer": 0// primeira opção
    }
  ]
};

let currentQuestionIndex = 0; // Índice da pergunta atual

function loadQuestion(questionIndex) {
  const questionData = questionsData.questions[questionIndex]; // Pega os dados da pergunta atual

  // Define o texto da pergunta no elemento HTML com id 'question-text'
  document.getElementById('Questão-texto').innerText = questionData.questionText;

  // Mostra o número da pergunta (começando de 1)
  document.getElementById('Questão-numero').innerText = questionIndex + 1;

  const alternativesContainer = document.getElementById('alternativas'); // Contêiner das opções de resposta
  alternativesContainer.innerHTML = ''; // Limpa o contêiner de alternativas

  // Para cada opção de resposta, cria um elemento <div> e adiciona ao contêiner
  questionData.options.forEach((option, index) => {
      const alternativeDiv = document.createElement('div'); // Cria o div de alternativa
      alternativeDiv.classList.add('alternativa'); // Adiciona uma classe CSS
      alternativeDiv.innerHTML = `<a href="#">${option}</a>`; // Insere o texto da opção

      // Adiciona o evento de clique para verificar se a resposta está correta
      alternativeDiv.addEventListener('click', function () {
          if (index === questionData.correctAnswer) {
              alert('Correto!'); // Resposta correta
          } else {
              alert('Errado! Tente novamente.'); // Resposta errada
          }

          // Se a resposta estiver correta e houver mais perguntas, carrega a próxima pergunta
          if (index === questionData.correctAnswer && currentQuestionIndex < questionsData.questions.length - 1) {
              currentQuestionIndex++; // Incrementa o índice da pergunta
              loadQuestion(currentQuestionIndex); // Carrega a próxima pergunta
          }
      });

      alternativesContainer.appendChild(alternativeDiv); // Adiciona o div ao contêiner
  });
}

// Carrega a primeira pergunta ao iniciar
loadQuestion(currentQuestionIndex);
