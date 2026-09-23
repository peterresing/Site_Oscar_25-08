// Cores de fundo com transparência (RGBA) para mostrar os planetas no fundo
const coresFundo = {
    preto: 'rgba(32, 32, 32, 0.85)',
    azul: 'rgba(0, 102, 204, 0.85)',
    roxo: 'rgba(134, 53, 138, 0.85)',
    amarelo: 'rgba(240, 207, 0, 0.85)'
};

// Cores claras ajustadas para as caixas de texto de cada aba
const coresCaixa = {
    preto: '#c6c6c6',
    azul: '#80bfff',
    roxo: '#d9b3ff',
    amarelo: '#fff3a8'
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
    
    // Troca o fundo aplicando transparência
    if (coresFundo[cor]) {
        container.style.backgroundColor = coresFundo[cor];
    }

    // Esconde as abas
    const abas = document.querySelectorAll('.aba-conteudo');
    abas.forEach(aba => aba.classList.remove('active'));

    // Mostra a aba selecionada
    const abaSelecionada = document.getElementById(`aba-${cor}`);
    if (abaSelecionada) {
        abaSelecionada.classList.add('active');

        // Aplica a cor clara temática nas caixas de texto
        const caixasTexto = abaSelecionada.querySelectorAll('.caixa-texto');
        caixasTexto.forEach(caixa => {
            caixa.style.backgroundColor = coresCaixa[cor];
        });
    }
}