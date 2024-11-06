const dadosPerguntas = {
    perguntas: [
        { textoPergunta: "Qual time tem a maior quantidade de títulos da Copa Libertadores?", 
          opcoes: ["Grêmio", "Internacional", "Vasco", "Fluminense"], 
          respostaCorreta: 0 },
        { textoPergunta: "Em que ano o Flamengo venceu a Copa Libertadores pela primeira vez?", 
          opcoes: ["1980", "1981", "1982", "1983"], 
          respostaCorreta: 1 },
        { textoPergunta: "Qual jogador é ídolo histórico do Corinthians?", 
          opcoes: ["Ronaldo", "Pelé", "Paulo Nunes", "Zico"], 
          respostaCorreta: 0 },
        { textoPergunta: "Qual time gaúcho joga no Alfredo Jaconi?", 
          opcoes: ["Internacional", "Juventude", "Grêmio", "Brasil de Pelotas"], 
          respostaCorreta: 1 },
        { textoPergunta: "Em que ano o Grêmio venceu a sua ultima Copa Libertadores?", 
          opcoes: ["2010", "2012", "2017", "2015"], 
          respostaCorreta: 2 },
        { textoPergunta: "Qual time venceu o Brasileirão de 2021?", 
          opcoes: ["Flamengo", "Atlético Mineiro", "Corinthians", "Palmeiras"], 
          respostaCorreta: 1 },
        { textoPergunta: "Quantos títulos de Copa do Brasil tem o Internacional?", 
          opcoes: ["1", "2", "3", "4"], 
          respostaCorreta: 0 },
        { textoPergunta: "Em que estádio o Internacional joga?", 
          opcoes: ["Maracanã", "Beira-Rio", "Arena Corinthians", "Mineirão"], 
          respostaCorreta: 1 },
        { textoPergunta: "Qual desses jogadores é um ídolo histórico do Grêmio?", 
          opcoes: ["Pelé", "Zico", "Renato Gaucho", "Socrates"], 
          respostaCorreta: 2 },
        { textoPergunta: "Quantos títulos de Libertadores tem o Grêmio?", 
          opcoes: ["1", "2", "3", "4"], 
          respostaCorreta: 2 },
    ]
};

let indicePerguntaAtual = 0;
let pontuacao = 0;

function carregarPergunta(indicePergunta) {
    const perguntaAtual = dadosPerguntas.perguntas[indicePergunta];
    document.getElementById("texto-pergunta").innerText = perguntaAtual.textoPergunta;
    document.getElementById("numero-questao").innerText = indicePergunta + 1;
    document.getElementById("pontuacao").innerText = `Pontuação: ${pontuacao}`;

    const containerAlternativas = document.getElementById("container-alternativas");
    containerAlternativas.innerHTML = "";

    perguntaAtual.opcoes.forEach((opcao, indice) => {
        const alternativaDiv = document.createElement("div");
        alternativaDiv.classList.add("alternativa");
        alternativaDiv.innerText = opcao;

        alternativaDiv.addEventListener("click", function () {
            if (indice === perguntaAtual.respostaCorreta) {
                alternativaDiv.classList.add("correta");
                pontuacao++;
            } else {
                alternativaDiv.classList.add("incorreta");
                alert(`Resposta incorreta! A resposta correta é: ${perguntaAtual.opcoes[perguntaAtual.respostaCorreta]}`);
            }
            document.getElementById("pontuacao").innerText = `Pontuação: ${pontuacao}`;
            setTimeout(() => carregarProximaPergunta(), 1000);
        });

        containerAlternativas.appendChild(alternativaDiv);
    });
}

function carregarProximaPergunta() {
    indicePerguntaAtual++;
    if (indicePerguntaAtual < dadosPerguntas.perguntas.length) {
        carregarPergunta(indicePerguntaAtual);
    } else {
        exibirResultadoFinal();
    }
}

function exibirResultadoFinal() {
    document.getElementById("container-alternativas").style.display = "none";
    document.getElementById("container-numero-questao").style.display = "none";
    document.getElementById("texto-pergunta").style.display = "none";

    const containerResultado = document.getElementById("container-resultado");
    document.getElementById("mensagem-resultado").innerText = `Você acertou ${pontuacao} de ${dadosPerguntas.perguntas.length} perguntas!`;
    containerResultado.style.display = "block";
}

function reiniciarQuiz() {
    indicePerguntaAtual = 0;
    pontuacao = 0;

    document.getElementById("container-resultado").style.display = "none";

    document.getElementById("container-alternativas").style.display = "block";
    document.getElementById("container-numero-questao").style.display = "block";
    document.getElementById("texto-pergunta").style.display = "block";
    document.getElementById("pontuacao").innerText = `Pontuação: ${pontuacao}`;

    carregarPergunta(indicePerguntaAtual);
}

document.addEventListener("DOMContentLoaded", () => carregarPergunta(indicePerguntaAtual));
