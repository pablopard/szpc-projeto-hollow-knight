// alert('olá'); mensagem que aparece na tela, é somente 1 linha

/* abertura e fechamento de um cometario*/


    //passo 1 - pegar o html dos botoes
    const botoesCarrossel = document.querySelectorAll('.botao');
    const imagens = document.querySelectorAll('.imagem');

    //passo 2 - indentificar o clique no botão
    botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        

        //passo 3 - desmarcar o botao selecionado anteriormente
        desativarboatoselecionado();

        //passo 4 - marcar o botao clicado como selecionado
        selecionarbotaocarrossel(botao);

        //passo 5 - escoder a imagem ativa de fundo
        esconderimagemativa();

        //passo 6 - fazer a imagem de fundo mudar de acordo com o botão clicado
        mostrarimagemdefundo(indice);

    })



 })
    //parte 6
    function mostrarimagemdefundo(indice) {
    imagens[indice].classList.add('ativa');
}

    //parte 4  
    function selecionarbotaocarrossel(botao) {
    botao.classList.add('selecionado');
}
    //parte 5
    function esconderimagemativa() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

    //parte do passo 3 para ser melhor de entender 
    function desativarboatoselecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

