// Carrega as questões a partir do arquivo JSON
fetch('questoes.json')
    .then(response => response.json())
    .then(dados => {
        let questoesData = dados.questoes;
        let indiceQuestaoAtual = 0;

        function carregarQuestao(indiceQuestao) {
            const questaoData = questoesData[indiceQuestao];
            document.getElementById('texto-questao').innerText = questaoData.textoPergunta;
            document.getElementById('numero-questao').innerText = indiceQuestao + 1;

            const containerAlternativas = document.getElementById('alternativas');
            containerAlternativas.innerHTML = ''; // Limpa opções anteriores

            questaoData.opcoes.forEach((opcao, indice) => {
                const alternativaDiv = document.createElement('div');
                alternativaDiv.classList.add('alternativa');
                alternativaDiv.innerHTML = `<a href="#">${opcao}</a>`;

                // Verifica a resposta correta
                alternativaDiv.addEventListener('click', function () {
                    if (indice === questaoData.respostaCorreta) {
                        alternativaDiv.style.backgroundColor = 'green';
                        alert('Correto!');
                        setTimeout(() => {
                            if (indiceQuestaoAtual < questoesData.length - 1) {
                                indiceQuestaoAtual++;
                                carregarQuestao(indiceQuestaoAtual);
                            }
                        }, 1000);
                    } else {
                        alternativaDiv.style.backgroundColor = 'red';
                        alert('Errado! Tente novamente.');
                    }
                });

                containerAlternativas.appendChild(alternativaDiv);
            });
        }

        // Carrega a primeira questão
        carregarQuestao(indiceQuestaoAtual);
    })
    .catch(erro => console.error('Erro ao carregar as questões:', erro));
