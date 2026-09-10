function abrirPaginas() {
    document.getElementById('tela1').style.display = 'none';
    document.getElementById('tela2').style.display = 'block';
}

function fecharPaginas() {
    document.getElementById('tela1').style.display = 'flex';
    document.getElementById('tela2').style.display = 'none';
}

function trocarCor(corFundoTela, corPagina, corTexto = '#111111') {
    // Altera o fundo da tela principal para o tom claro
    document.getElementById('tela2').style.backgroundColor = corFundoTela;

    // Ajusta o fundo e a cor das letras das páginas
    const paginas = document.querySelectorAll('.pagina-quadro');
    paginas.forEach(pagina => {
        pagina.style.backgroundColor = corPagina;
        pagina.style.color = corTexto;
    });
}