// Global Variables
let questoesData = [];
let indiceQuestaoAtual = 0;
let pontuacao = 0;

// Fetch questions data and start the quiz
fetch('script.json')
    .then(response => response.json())
    .then(dados => {
        questoesData = dados.questoes;
        carregarQuestao(indiceQuestaoAtual);
    })
    .catch(erro => console.error('Erro ao carregar as questões:', erro));

// Function to load the current question
function carregarQuestao(indiceQuestao) {
    const questaoData = questoesData[indiceQuestao];
    document.getElementById('texto-questao').innerText = questaoData.textoPergunta;
    document.getElementById('numero-questao').innerText = indiceQuestao + 1;

    const containerAlternativas = document.getElementById('alternativas');
    containerAlternativas.innerHTML = '';

    // Create answer buttons
    questaoData.opcoes.forEach((opcao, indice) => {
        const alternativaButton = document.createElement('button');
        alternativaButton.classList.add('alternativa');
        alternativaButton.innerText = opcao;

        // Click event for checking answer
        alternativaButton.addEventListener('click', () => {
            if (indice === questaoData.respostaCorreta) {
                pontuacao++;
                mostrarModalCorreto();
            } else {
                mostrarModalIncorreto(questaoData.opcoes[questaoData.respostaCorreta]);
            }
        });

        containerAlternativas.appendChild(alternativaButton);
    });
}

// Function to show correct answer modal
function mostrarModalCorreto() {
    document.getElementById('modal-correct').style.display = 'flex';
}

// Function to show incorrect answer modal with correct answer info
function mostrarModalIncorreto(respostaCorreta) {
    document.getElementById('texto-incorreto').innerText = `Errado! A resposta correta é: ${respostaCorreta}`;
    document.getElementById('modal-incorrect').style.display = 'flex';
}

// Function to close modal and proceed to the next question
function fecharModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
    proximaQuestao();
}

// Load next question or show final score
function proximaQuestao() {
    setTimeout(() => {
        if (indiceQuestaoAtual < questoesData.length - 1) {
            indiceQuestaoAtual++;
            carregarQuestao(indiceQuestaoAtual);
        } else {
            exibirPontuacao();
        }
    }, 500);
}

// Function to display the final score
function exibirPontuacao() {
    document.getElementById('texto-questao').style.display = 'none';
    document.getElementById('alternativas').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('pontuacao').innerText = `Pontuação: ${pontuacao} de ${questoesData.length}`;
}

// Reset quiz on restart
document.getElementById('reiniciar').addEventListener('click', () => {
    indiceQuestaoAtual = 0;
    pontuacao = 0;
    document.getElementById('texto-questao').style.display = 'block';
    document.getElementById('alternativas').style.display = 'block';
    document.getElementById('resultado').style.display = 'none';
    carregarQuestao(indiceQuestaoAtual);
});
