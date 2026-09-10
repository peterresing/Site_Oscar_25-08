function abrirPaginas() {
    document.getElementById('tela1').style.display = 'none';
    document.getElementById('tela2').style.display = 'block';
}

function fecharPaginas() {
    document.getElementById('tela1').style.display = 'flex';
    document.getElementById('tela2').style.display = 'none';
}

function trocarCor(corFundoTela, corPagina, corTexto = '#111111') {
    // altera o fundo da tela principal
    document.getElementById('tela2').style.backgroundColor = corFundoTela;

    // ajusta o fundo e a cor das letras das paginas
    const paginas = document.querySelectorAll('.pagina-quadro');
    paginas.forEach(pagina => {
        pagina.style.backgroundColor = corPagina;
        pagina.style.color = corTexto;
    });
}