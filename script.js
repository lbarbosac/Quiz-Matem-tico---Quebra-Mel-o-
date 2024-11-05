// Variáveis globais
let questoesData = [];
let indiceQuestaoAtual = 0;
let pontuacao = 0;

// Carrega os dados das questões do arquivo JSON e inicia o quiz
fetch('script.json')
    .then(response => response.json())
    .then(dados => {
        questoesData = dados.questoes;
        carregarQuestao(indiceQuestaoAtual);
    })
    .catch(erro => console.error('Erro ao carregar as questões:', erro));

// Função para carregar a questão atual
function carregarQuestao(indiceQuestao) {
    const questaoData = questoesData[indiceQuestao];
    document.getElementById('texto-questao').innerText = questaoData.textoPergunta;
    document.getElementById('numero-questao').innerText = indiceQuestao + 1;

    const containerAlternativas = document.getElementById('alternativas');
    containerAlternativas.innerHTML = ''; // Limpa as alternativas anteriores

    // Cria botões de alternativas
    questaoData.opcoes.forEach((opcao, indice) => {
        const alternativaButton = document.createElement('button');
        alternativaButton.classList.add('alternativa');
        alternativaButton.innerText = opcao;

        // Verifica se a resposta está correta e dá feedback
        alternativaButton.addEventListener('click', () => {
            if (indice === questaoData.respostaCorreta) {
                alternativaButton.style.backgroundColor = 'green';
                alert('Correto!');
                pontuacao++;
            } else {
                alternativaButton.style.backgroundColor = 'red';
                alert(`Errado! A resposta correta é: ${questaoData.opcoes[questaoData.respostaCorreta]}`);
            }
            proximaQuestao();
        });

        containerAlternativas.appendChild(alternativaButton);
    });
}

// Função para carregar a próxima questão ou exibir a pontuação final
function proximaQuestao() {
    setTimeout(() => {
        if (indiceQuestaoAtual < questoesData.length - 1) {
            indiceQuestaoAtual++;
            carregarQuestao(indiceQuestaoAtual);
        } else {
            exibirPontuacao();
        }
    }, 500); // Pequeno delay para transição
}

// Função para exibir a pontuação final
function exibirPontuacao() {
    document.getElementById('texto-questao').style.display = 'none';
    document.getElementById('alternativas').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('pontuacao').innerText = `Pontuação: ${pontuacao} de ${questoesData.length}`;
}

// Reinicia o quiz ao clicar no botão "Reiniciar"
document.getElementById('reiniciar').addEventListener('click', () => {
    indiceQuestaoAtual = 0;
    pontuacao = 0;
    document.getElementById('texto-questao').style.display = 'block';
    document.getElementById('alternativas').style.display = 'block';
    document.getElementById('resultado').style.display = 'none';
    carregarQuestao(indiceQuestaoAtual);
});
