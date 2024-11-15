// Variáveis globais
let questoesData = [];
let indiceQuestaoAtual = 0;
let pontuacao = 0;

// Função para exibir o modal
function exibirModal(mensagem) {
    const modal = document.getElementById('modal-feedback');
    const mensagemModal = document.getElementById('mensagem-modal');
    const botaoFechar = document.getElementById('fechar-modal');

    mensagemModal.innerText = mensagem; // Define a mensagem no modal
    modal.style.display = 'block'; // Mostra o modal

    // Evento para fechar o modal ao clicar no botão "x"
    botaoFechar.onclick = () => {
        modal.style.display = 'none';
    };

    // Fecha o modal ao clicar fora dele
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

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
                exibirModal('Correto!');
                pontuacao++;
            } else {
                alternativaButton.style.backgroundColor = 'red';
                exibirModal(`Errado! A resposta correta é: ${questaoData.opcoes[questaoData.respostaCorreta]}`);
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
    }, 1000); // Pequeno delay para transição
}

// Função para exibir a pontuação final
function exibirPontuacao() {
    document.getElementById('texto-questao').style.display = 'none';
    document.getElementById('alternativas').style.display = 'none';
    document.getElementById('resultado').style.display = 'block';
    document.getElementById('pontuacao').innerText = `Pontuação: ${pontuacao} de ${questoesData.length}`;
}

// Função para reiniciar o quiz
function reiniciarQuiz() {
    indiceQuestaoAtual = 0;
    pontuacao = 0;
    document.getElementById('texto-questao').style.display = 'block';
    document.getElementById('alternativas').style.display = 'block';
    document.getElementById('resultado').style.display = 'none';
    carregarQuestao(indiceQuestaoAtual);
}

// Carrega as questões do arquivo JSON e inicia o quiz
fetch('script.json')
    .then(response => response.json())
    .then(dados => {
        questoesData = dados.questoes;
        carregarQuestao(indiceQuestaoAtual);
    })
    .catch(erro => console.error('Erro ao carregar as questões:', erro));

// Inicializa o evento de clique no botão "Reiniciar"
document.getElementById('reiniciar').addEventListener('click', reiniciarQuiz);
// Função para exibir o modal com mensagens dinâmicas
function exibirModal(mensagem, tipo) {
    const modal = document.getElementById('modal-feedback');
    const mensagemModal = document.getElementById('mensagem-modal');
    const botaoFechar = document.getElementById('fechar-modal');

    // Define a mensagem e o estilo com base no tipo
    if (tipo === 'correto') {
        mensagemModal.innerHTML = `✅ ${mensagem}`;
    } else if (tipo === 'errado') {
        mensagemModal.innerHTML = `❌ ${mensagem}`;
    }

    modal.style.display = 'block'; // Mostra o modal

    // Evento para fechar o modal ao clicar no botão "x"
    botaoFechar.onclick = () => {
        modal.style.display = 'none';
    };

    // Fecha o modal ao clicar fora dele
    window.onclick = (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    };
}

// Atualiza a lógica de feedback nas alternativas
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
                exibirModal('Correto!', 'correto');
                pontuacao++;
            } else {
                alternativaButton.style.backgroundColor = 'red';
                exibirModal(`Errado! A resposta correta é: ${questaoData.opcoes[questaoData.respostaCorreta]}`, 'errado');
            }
            proximaQuestao();
        });

        containerAlternativas.appendChild(alternativaButton);
    });
}
