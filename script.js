const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "com que Frequência voce utiliza cosméticos no seu dia a dia ?"
        alternativas:
            {
                texto:"diariamente".
                afirmacao:"isso indica que os cosméticos fazem parte da sua rotina de cuidados pessoais".
            },
            {
                texto:"apenas em ocasiões especiais".
                afirmacao:voce valoriza o uso pontual de cosméticos, priorizando naturalidade no dia a dia".
            }
        ]
    },
 enunciado: "o que mais influencia na sua escolha por um cosmético?".
            {
                texto: "qualidade e benefícios para a pele".
                afirmacao: "voce prioriza produtos que cuidam da saúde da sua pele a longo prazo".
            },
            {
                texto: "preço acessível".
                afirmacao: "voce busca equilíbrio entre beleza e economia, preferindo opções mais em conta".
            }
        ]
    },
    {
        enunciado: "onde voce costuma comprar seus cosméticos?".
        alternativas: [
            {texto: lojas físicas".
                afirmacao: "voce prefere experimentar os produtos antes de comprar e receber orientação direta".
            }
            {
                texto: "lojas online",
                afirmacao: "voce valoriza praticidade e variedade na hora der escolher cosméticos."
            }
        ]
    },
    {
        enunciado: "que tipo de cosmético voce usa com mais frequencia? ",
        alternativas:
            {
                texto: "produtos para a pele",
                afirmação:"sua prioridade esta no cuidado com a pele e prevenção de danos."
            },
            {
                texto: "maquiagem, batom, máscara.",
                afirmacao: "voce gosta de destacar sua aparẽncia com maquiagem no dia a dia ou em eventos."

            } enunciado: "o que mais pesa na sua decisão de continuar usando um cosmético? ",
        alternativas: [
            {
                texto: " resultados visíveis e satisfação pessoal ",
                afirmacao: "voce valoriza produtos eficazes e que entregam o que prometem."
            },
            {
                texto:" indicação de amigos,influenciadores ou profissionais ",
                afirmacao: " voce confia na opinião de outras pessoas ao escolher e manter o uso de um cosmético. "
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();