// cores de fundo principal
const coresFundo = {
    preto: '#1E1E1E',
    azul: '#0051cc',
    roxo: '#782C77',
    amarelo: '#E0C600'
};

// cores das caixas da pagina
const coresCaixa = {
    preto: '#BCBCBC', 
    azul: '#A0ACF9', 
    roxo: '#D9A0F9', 
    amarelo: '#FCFFA6'
};

function abrirPagina() {
    document.getElementById('tela-inicial').classList.add('oculto');
    document.getElementById('pagina-conteudo').classList.remove('oculto');
    mudarCor('preto');
}

function voltarPagina() {
    document.getElementById('pagina-conteudo').classList.add('oculto');
    document.getElementById('tela-inicial').classList.remove('oculto');
}

function mudarCor(cor) {
    const container = document.getElementById('pagina-conteudo');
    
    // troca a cor de  fundo
    if (coresFundo[cor]) {
        container.style.backgroundColor = coresFundo[cor];
    }

    // esconde todas as abas
    const abas = document.querySelectorAll('.aba-conteudo');
    abas.forEach(aba => aba.classList.remove('active'));

    // mostra a pagina clicada
    const abaSelecionada = document.getElementById(`aba-${cor}`);
    if (abaSelecionada) {
        abaSelecionada.classList.add('active');

        // muda a cor das pagina com a caixa de ler
        const caixasTexto = abaSelecionada.querySelectorAll('.caixa-texto');
        caixasTexto.forEach(caixa => {
            caixa.style.backgroundColor = coresCaixa[cor];
        });
    }
}