const questionsData = {
  // Lista de perguntas e respostas com suas opções
  "questions": [
    {
      // Texto da pergunta
      "questionText": "Qual é o valor de x na equação 2x + 3 = 11?",
      
      "options": [
        "x = 4 ",
        "x = 5", 
        "x = 6", 
        "x = 7"  
      ],
      
      "correctAnswer": 0
    },
    {
      "questionText": "Qual é o valor da expressão (2 + 3) × 5?",
      "options": [
        "10", 
        "15", 
        "20", 
        "25"  
      ],
      "correctAnswer": 3 
    },
    {
      "questionText": "Qual é o valor de √49?",
      "options": [
        "6",  
        "7",  
        "8",  
        "9"   
      ],
      "correctAnswer": 1 // A segunda opção é a correta
    },
    {
      "questionText": "Se um triângulo tem lados de 3 cm, 4 cm e 5 cm, qual é o tipo deste triângulo?",
      "options": [
        "Equilátero", 
        "Isósceles",  
        "Escaleno",   
        "Retângulo"   
      ],
      "correctAnswer": 3 
    },
    {
      "questionText": "Qual é o perímetro de um quadrado com lados de 5 cm?",
      "options": [
        "10 cm", 
        "15 cm", 
        "20 cm", 
        "25 cm"  
      ],
      "correctAnswer": 2 
    },
    {
      "questionText": "Simplifique a fração 8/16.",
      "options": [
        "1/2", 
        "2/3", 
        "3/4", 
        "1/4"  
      ],
      "correctAnswer": 0 
    },
    {
      "questionText": "Qual é o valor de π arredondado para duas casas decimais?",
      "options": [
        "3.12", 
        "3.14", 
        "3.16", 
        "3.18"  
      ],
      "correctAnswer": 1 // Valor de π = 3.14, segunda opção
    },
    {
      "questionText": "Qual é o valor de x se 3x = 15?",
      "options": [
        "x = 3", // Primeira opção
        "x = 4", // Segunda opção
        "x = 5", // Terceira opção
        "x = 6"  // Quarta opção
      ],
      "correctAnswer": 2 // x = 15 / 3 = 5, terceira opção
    },
    {
      "questionText": "Qual é o ângulo de um triângulo equilátero?",
      "options": [
        "30°", // Primeira opção
        "45°", // Segunda opção
        "60°", // Terceira opção
        "90°"  // Quarta opção
      ],
      "correctAnswer": 2 // Ângulo = 60°, terceira opção
    },
    {
      "questionText": "Qual é o produto de 7 e 8?",
      "options": [
        "48", // Primeira opção
        "54", // Segunda opção
        "56", // Terceira opção
        "64"  // Quarta opção
      ],
      "correctAnswer": 2 // 7 * 8 = 56, terceira opção
    },
    {
      "questionText": "Se um círculo tem raio de 10 cm, qual é a área aproximada do círculo? (Use π = 3.14)",
      "options": [
        "314 cm²",   // Primeira opção
        "3140 cm²",  // Segunda opção
        "31.4 cm²",  // Terceira opção
        "31400 cm²"  // Quarta opção
      ],
      "correctAnswer": 0 // Área = πr² ≈ 314 cm², primeira opção
    },
    {
      "questionText": "Qual é o valor de 2³?",
      "options": [
        "6",  // Primeira opção
        "8",  // Segunda opção
        "9",  // Terceira opção
        "12"  // Quarta opção
      ],
      "correctAnswer": 1 // 2³ = 8, segunda opção
    },
    {
      "questionText": "Resolva a equação: 5x - 4 = 16.",
      "options": [
        "x = 2", // Primeira opção
        "x = 3", // Segunda opção
        "x = 4", // Terceira opção
        "x = 5"  // Quarta opção
      ],
      "correctAnswer": 3 // x = 5, quarta opção
    },
    {
      "questionText": "Se dois ângulos de um triângulo medem 45° e 90°, qual é o valor do terceiro ângulo?",
      "options": [
        "30°", // Primeira opção
        "45°", // Segunda opção
        "60°", // Terceira opção
        "90°"  // Quarta opção
      ],
      "correctAnswer": 1 // Terceiro ângulo = 45°, segunda opção
    },
    {
      "questionText": "Qual é a razão entre 50 e 10?",
      "options": [
        "3", // Primeira opção
        "4", // Segunda opção
        "5", // Terceira opção
        "6"  // Quarta opção
      ],
      "correctAnswer": 2 // Razão = 50 / 10 = 5, terceira opção
    }
  ]
};

let currentQuestionIndex = 0; // Índice da pergunta atual

function loadQuestion(questionIndex) {
  const questionData = questionsData.questions[questionIndex]; // Pega os dados da pergunta atual

  // Define o texto da pergunta no elemento HTML com id 'question-text'
  document.getElementById('question-text').innerText = questionData.questionText;

  // Mostra o número da pergunta (começando de 1)
  document.getElementById('question-number').innerText = questionIndex + 1;

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
