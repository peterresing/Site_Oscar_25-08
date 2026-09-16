
function abrirPagina() {

    const container = document.getElementById('conteudo-principal');

    container.innerHTML = `
        
        <div class="pagina-conteudo">

            <button class="btn-fechar" onclick="voltarPagina()">X</button>

            <div class="conteudo-topo">

                <div class="caixa-texto" id="texto-esquerda">
                    <h1>Big Bang: a Descoberta à Teoria</h1>

                    <p>
                        Desde os tempos antigos, a humanidade busca entender a origem do Universo.
                        Antes da ciência moderna, diferentes povos criavam mitos e histórias para
                        explicar o surgimento do mundo. Durante séculos, acreditou-se que o Universo
                        era eterno e imutável.
                    </p>

                    <p>
                        Com o avanço da ciência, especialmente pelos estudos de Nicolau Copérnico,
                        Galileu Galilei, Johannes Kepler e Isaac Newton, a humanidade passou a
                        compreender melhor o funcionamento do cosmos. Newton mostrou que os mesmos
                        princípios físicos governavam a Terra e os corpos celestes, reforçando a
                        ideia de um Universo organizado e permanente.
                    </p>

                    <p>
                        Essa visão dominou por séculos, até que novas descobertas no século XX
                        mostraram que o Universo não era estático.
                    </p>
                </div>


                <div class="caixa-texto" id="texto-direita">

                    <p>
                        No início do século XX, Albert Einstein começou a desenvolver ideias que
                        transformariam a compreensão do Universo. Em 1915, apresentou a Teoria da
                        Relatividade Geral, na qual mostrou que a gravidade não era apenas uma força
                        invisível, mas uma consequência da curvatura do espaço-tempo causada pela
                        matéria e pela energia.
                    </p>

                    <p>
                        Sua teoria explicou fenômenos que a física de Newton não conseguia descrever
                        completamente, como o comportamento da luz ao passar por grandes massas e a
                        existência de fenômenos como os buracos negros.
                    </p>

                    <p>
                        Porém, ao aplicar suas equações ao Universo inteiro, Einstein percebeu que
                        elas indicavam um Universo em movimento, que poderia estar se expandindo ou
                        se contraindo. Como naquela época a maioria dos cientistas acreditava em um
                        Universo estático, Einstein adicionou a constante cosmológica às suas
                        equações para impedir essa mudança.
                    </p>

                </div>

            </div>


            <div class="paleta">

                <button class="cor preto"
                    onclick="mudarCor('preto')">
                </button>

                <button class="cor azul"
                    onclick="mudarCor('azul')">
                </button>

                <button class="cor roxo"
                    onclick="mudarCor('roxo')">
                </button>

                <button class="cor amarelo"
                    onclick="mudarCor('amarelo')">
                </button>

            </div>

        </div>
    `;
}

function mudarCor(cor) {

    const container = document.querySelector('.pagina-conteudo');
    const esquerda = document.getElementById('texto-esquerda');
    const direita = document.getElementById('texto-direita');

    if (cor === 'preto') {

        container.style.backgroundColor = '#202020';

        esquerda.innerHTML = `
            <h1>Big Bang: a Descoberta à Teoria</h1>

            <p>
                Desde os tempos antigos, a humanidade busca entender a origem do Universo.
                Antes da ciência moderna, diferentes povos criavam mitos e histórias para
                explicar o surgimento do mundo. Durante séculos, acreditou-se que o Universo
                era eterno e imutável.
            </p>

            <p>
                Com o avanço da ciência, especialmente pelos estudos de Nicolau Copérnico,
                Galileu Galilei, Johannes Kepler e Isaac Newton, a humanidade passou a
                compreender melhor o funcionamento do cosmos. Newton mostrou que os mesmos
                princípios físicos governavam a Terra e os corpos celestes, reforçando a
                ideia de um Universo organizado e permanente.
            </p>

            <p>
                Essa visão dominou por séculos, até que novas descobertas no século XX
                mostraram que o Universo não era estático.
            </p>
        `;

        direita.innerHTML = `
            <p>
                No início do século XX, Albert Einstein começou a desenvolver ideias que
                transformariam a compreensão do Universo. Em 1915, apresentou a Teoria da
                Relatividade Geral, na qual mostrou que a gravidade não era apenas uma força
                invisível, mas uma consequência da curvatura do espaço-tempo causada pela
                matéria e pela energia.
            </p>

            <p>
                Sua teoria explicou fenômenos que a física de Newton não conseguia descrever
                completamente, como o comportamento da luz ao passar por grandes massas e a
                existência de fenômenos como os buracos negros.
            </p>

            <p>
                Porém, ao aplicar suas equações ao Universo inteiro, Einstein percebeu que
                elas indicavam um Universo em movimento, que poderia estar se expandindo ou
                se contraindo. Como naquela época a maioria dos cientistas acreditava em um
                Universo estático, Einstein adicionou a constante cosmológica às suas
                equações para impedir essa mudança.
            </p>
        `;
    }

    else if (cor === 'azul') {

        container.style.backgroundColor = '#0066cc';

        esquerda.innerHTML = `
            <h1>Georges Lemaître e o Universo em Expansão</h1>

            <p>
                Enquanto Einstein tentava manter o Universo estático em seus cálculos,
                Georges Lemaître analisou as mesmas equações de uma forma diferente.
                Matemático, físico e padre, ele percebeu que a expansão do Universo era
                uma possibilidade real.
            </p>

            <p>
                Em 1927, publicou um estudo afirmando que o Universo estava se expandindo
                e que, no passado, toda a matéria teria estado concentrada em um estado
                extremamente pequeno, quente e denso, chamado por ele de "átomo primordial".
            </p>

            <p>
                Sua ideia sugeria, pela primeira vez, que o Universo tinha uma origem física.
                Porém, quando apresentou sua teoria a Einstein, recebeu críticas, pois o
                cientista ainda não aceitava essa interpretação.
            </p>

            <p>
                Faltava uma prova observacional que confirmasse qual dos dois estava correto.
            </p>
        `;

        direita.innerHTML = `
            <h1>Edwin Hubble e a Expansão</h1>

            <p>
                Na década de 1920, os telescópios se tornaram mais avançados, permitindo
                novas descobertas sobre o Universo. Edwin Hubble, trabalhando no Observatório
                do Monte Wilson com o telescópio Hooker, estudou pequenas manchas luminosas
                que muitos cientistas acreditavam fazer parte da Via Láctea.
            </p>

            <p>
                Após suas observações, descobriu que elas eram, na verdade, outras galáxias
                inteiras, formadas por bilhões de estrelas, revelando que o Universo era
                muito maior do que se imaginava.
            </p>

            <p>
                Além disso, ao analisar a luz dessas galáxias, Hubble percebeu que quase
                todas apresentavam o desvio para o vermelho, indicando que estavam se
                afastando da Terra.
            </p>
        `;
    }

    else if (cor === 'roxo') {

        container.style.backgroundColor = '#86358a';

        esquerda.innerHTML = `
            <h1>Georges Lemaître e o Universo em Expansão</h1>

            <p>
                Enquanto Einstein tentava manter o Universo estático em seus cálculos,
                Georges Lemaître analisou as mesmas equações de uma forma diferente.
                Matemático, físico e padre, ele percebeu que a expansão do Universo era
                uma possibilidade real.
            </p>

            <p>
                Em 1927, publicou um estudo afirmando que o Universo estava se expandindo
                e que, no passado, toda a matéria teria estado concentrada em um estado
                extremamente pequeno, quente e denso, chamado por ele de "átomo primordial".
            </p>

            <p>
                Sua ideia sugeria, pela primeira vez, que o Universo tinha uma origem física.
                Porém, quando apresentou sua teoria a Einstein, recebeu críticas, pois o
                cientista ainda não aceitava essa interpretação.
            </p>

            <p>
                Faltava uma prova observacional que confirmasse qual dos dois estava correto.
            </p>
        `;

        direita.innerHTML = `
            <h1>Edwin Hubble e a Lei da Expansão</h1>

            <p>
                Na década de 1920, os telescópios se tornaram mais avançados, permitindo
                novas descobertas sobre o Universo. Edwin Hubble, trabalhando no Observatório
                do Monte Wilson com o telescópio Hooker, estudou pequenas manchas luminosas
                que muitos cientistas acreditavam fazer parte da Via Láctea.
            </p>

            <p>
                Após suas observações, descobriu que elas eram, na verdade, outras galáxias
                inteiras, formadas por bilhões de estrelas, revelando que o Universo era
                muito maior do que se imaginava.
            </p>

            <p>
                Além disso, ao analisar a luz dessas galáxias, Hubble percebeu que quase
                todas apresentavam o desvio para o vermelho, indicando que estavam se
                afastando da Terra.
            </p>

            <p>
                Ele descobriu que quanto mais distante uma galáxia estava, mais rapidamente
                ela se afastava.
            </p>
        `;
    }

    else if (cor === 'amarelo') {

        container.style.backgroundColor = '#f0cf00';

        esquerda.innerHTML = 
        `
            <h1>A Revolução da Cosmologia</h1>

            <p>
                A descoberta do afastamento das galáxias mudou a ciência para sempre.
                Cientistas como Albert Einstein precisaram revisar suas próprias teorias
                sobre o Cosmos.
            </p>

            <h2>Consequências Científicas</h2>

            <p>
                • O erro de Einstein: O físico removeu a "constante cosmológica" de suas
                equações. Ele a chamou de seu maior erro científico.
            </p>

            <p>
                • Idade do Universo: Cientistas começaram a calcular o tempo desde o início
                da expansão. Descobriu-se que o Cosmos tem bilhões de anos.
            </p>

            <p>
                • Novos telescópios: A necessidade de ver mais longe gerou telescópios
                espaciais como o Hubble e o James Webb.
            </p>    
        `
    ;

        direita.innerHTML = 
        `
            <h1>O Próximo Passo: A Energia Escura</h1>

            <p>
                • Expansão acelerada: Nos anos 1990, astrônomos descobriram que o Universo
                se afasta cada vez mais rápido.
            </p>

            <p>
                • Força misteriosa: A energia escura foi proposta para explicar essa
                aceleração contínua.
            </p>

            <p>
                • Destino final: O Cosmos continuará se expandindo até se tornar um lugar
                frio e escuro.
            </p>

            <p>
                Podemos explorar mais a fundo essa evolução da astronomia. Se você quiser,
                posso detalhar:
            </p>
            `
        ;
    }
}

function voltarPagina() {

    const container = document.getElementById('conteudo-principal');

    container.innerHTML = `

        <div class="box-titulo">
            <h1>Big Bang: A<br>Descoberta à Teoria</h1>
        </div>

        <div class="box-criadores">
            <p>Criadores:<br>Peter e Rodrigo</p>
        </div>

        <button class="btn-acessar" onclick="abrirPagina()">
            Acessar<br>Páginas
        </button>
        `
    ;
}