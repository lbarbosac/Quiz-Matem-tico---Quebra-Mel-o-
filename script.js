const dadosPerguntas = {
    perguntas: [
      {
        textoPergunta: "Qual time tem a maior quantidade de títulos da Copa Libertadores?",
        opcoes: ["Grêmio", "Flamengo", "Palmeiras", "Internacional"],
        respostaCorreta: 2
      },
      {
        textoPergunta: "Qual é o principal rival do Internacional?",
        opcoes: ["Corinthians", "Grêmio", "Flamengo", "Palmeiras"],
        respostaCorreta: 1
      },
      {
        textoPergunta: "Em que ano o Flamengo venceu a Copa Libertadores pela primeira vez?",
        opcoes: ["1980", "1981", "1982", "1983"],
        respostaCorreta: 1
      },
      {
        textoPergunta: "Qual time é conhecido como Verdão?",
        opcoes: ["Juventude", "Palmeiras", "Atlético Mineiro", "Grêmio"],
        respostaCorreta: 1
      },
      {
        textoPergunta: "Qual jogador é ídolo histórico do Corinthians?",
        opcoes: ["Ronaldo", "Pelé", "Socrates", "Zico"],
        respostaCorreta: 2
      },
      {
        textoPergunta: "Quantos títulos do Brasileirão o Grêmio tem?",
        opcoes: ["1", "2", "3", "4"],
        respostaCorreta: 2
      },
      {
        textoPergunta: "Qual estádio é conhecido como Maracanã?",
        opcoes: ["Beira-Rio", "Morumbi", "Mineirão", "Maracanã"],
        respostaCorreta: 3
      },
      {
        textoPergunta: "Qual time gaúcho joga no Alfredo Jaconi?",
        opcoes: ["Internacional", "Juventude", "Grêmio", "Brasil de Pelotas"],
        respostaCorreta: 1
      },
      {
        textoPergunta: "Em que ano o Atlético Mineiro venceu a Copa Libertadores?",
        opcoes: ["2010", "2012", "2013", "2015"],
        respostaCorreta: 2
      },
      {
        textoPergunta: "Qual desses times é conhecido como Mengão?",
        opcoes: ["Corinthians", "Palmeiras", "Flamengo", "Atlético Mineiro"],
        respostaCorreta: 2
      },
      {
        textoPergunta: "Qual é o mascote do Palmeiras?",
        opcoes: ["Galo", "Porco", "Urubu", "Mosqueteiro"],
        respostaCorreta: 1
      },
      {
        textoPergunta: "Qual jogador é conhecido como Rei do Drible no Grêmio?",
        opcoes: ["Ronaldinho Gaúcho", "Pelé", "Zico", "Socrates"],
        respostaCorreta: 0
      },
      {
        textoPergunta: "Qual time venceu o Brasileirão de 2021?",
        opcoes: ["Flamengo", "Atlético Mineiro", "Corinthians", "Palmeiras"],
        respostaCorreta: 1
      },
      {
        textoPergunta: "Quantos títulos de Copa do Brasil tem o Internacional?",
        opcoes: ["1", "2", "3", "4"],
        respostaCorreta: 1
      },
      {
        textoPergunta: "Qual time tem o apelido de Timão?",
        opcoes: ["Grêmio", "Internacional", "Corinthians", "Atlético Mineiro"],
        respostaCorreta: 2
      },
      {
        textoPergunta: "Em que estádio o Internacional joga?",
        opcoes: ["Maracanã", "Beira-Rio", "Arena Corinthians", "Mineirão"],
        respostaCorreta: 1
      },
      {
        textoPergunta: "Qual desses jogadores é um ídolo histórico do Palmeiras?",
        opcoes: ["Pelé", "Zico", "Ademir da Guia", "Socrates"],
        respostaCorreta: 2
      },
      {
        textoPergunta: "Quantos títulos de Libertadores tem o Grêmio?",
        opcoes: ["1", "2", "3", "4"],
        respostaCorreta: 2
      },
      {
        textoPergunta: "Qual time tem a Arena do Grêmio como estádio?",
        opcoes: ["Palmeiras", "Juventude", "Grêmio", "Atlético Mineiro"],
        respostaCorreta: 2
      },
      {
        textoPergunta: "Qual desses times é conhecido como Galo?",
        opcoes: ["Atlético Mineiro", "Corinthians", "Flamengo", "Internacional"],
        respostaCorreta: 0
      }
    ]
  };
  
  let indicePerguntaAtual = 0;
  
  function carregarPergunta(indicePergunta) {
    const perguntaAtual = dadosPerguntas.perguntas[indicePergunta];
    document.getElementById("texto-pergunta").innerText = perguntaAtual.textoPergunta;
    document.getElementById("numero-questao").innerText = indicePergunta + 1;
  
    const containerAlternativas = document.getElementById("container-alternativas");
    containerAlternativas.innerHTML = "";
  
    perguntaAtual.opcoes.forEach((opcao, indice) => {
      const alternativaDiv = document.createElement("div");
      alternativaDiv.classList.add("alternativa");
      alternativaDiv.innerText = opcao;
  
      alternativaDiv.addEventListener("click", function () {
        if (indice === perguntaAtual.respostaCorreta) {
          alternativaDiv.classList.add("correta");
          setTimeout(() => carregarProximaPergunta(), 1000);
        } else {
          alternativaDiv.classList.add("incorreta");
        }
      });
  
      containerAlternativas.appendChild(alternativaDiv);
    });
  }
  
  function carregarProximaPergunta() {
    indicePerguntaAtual++;
    if (indicePerguntaAtual < dadosPerguntas.perguntas.length) {
      carregarPergunta(indicePerguntaAtual);
    } else {
      alert("Quiz finalizado! Clique em 'Reiniciar' para recomeçar.");
    }
  }
  
  function reiniciarQuiz() {
    indicePerguntaAtual = 0;
    carregarPergunta(indicePerguntaAtual);
  }
  
  document.addEventListener("DOMContentLoaded", () => carregarPergunta(indicePerguntaAtual));
  