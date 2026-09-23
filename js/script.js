const coresFundo = {
    preto: '#202020',
    azul: '#0066cc',
    roxo: '#86358a',
    amarelo: '#f0cf00'
};

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
    
    if (coresFundo[cor]) {
        container.style.backgroundColor = coresFundo[cor];
    }

    const abas = document.querySelectorAll('.aba-conteudo');
    abas.forEach(aba => aba.classList.remove('active'));

    const abaSelecionada = document.getElementById(`aba-${cor}`);
    if (abaSelecionada) {
        abaSelecionada.classList.add('active');

        const caixasTexto = abaSelecionada.querySelectorAll('.caixa-texto');
        caixasTexto.forEach(caixa => {
            caixa.style.backgroundColor = coresCaixa[cor];
        });
    }
}