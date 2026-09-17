const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "CANTO I - THE TROY SAGA: As portas de Tróia caíram. Diante do bebê Astyanax, qual decisão você toma para o futuro do seu reino?",
        alternativas: [
            {
                texto: "Escolho a misericórdia: poupo a criança e recuso tornar-me um monstro.",
                afirmacao: [
                    "Sua compaixão em Tróia manteve sua alma pura,",
                    "Você buscou a empatia antes da brutalidade da guerra,",
                    "Sua recusa em matar um inocente demonstrou a nobreza de um rei,"
                ]
            },
            {
                texto: "Escolho a implacabilidade (Ruthlessness): faço o necessário para proteger Ítaca.",
                afirmacao: [
                    "Você aprendeu que a sobrevivência exige escolhas frias,",
                    "A implacabilidade tornou-se sua maior arma contra os deuses,",
                    "Sua determinação em voltar para casa superou qualquer hesitação,"
                ]
            }           
        ]
    },
    {
        enunciado: "CANTO II - THE OCEAN SAGA: Poseidon surge nas águas escuras exigindo retribuição. Como enfrenta o Deus dos Mares?",
        alternativas: [
            {
                texto: "Tento dialogar e implorar pela razão dos olímpicos.",
                afirmacao: [
                    "mas tentar dobrar Poseidon com palavras quase afundou toda a sua frota.",
                    "embora apelar para a misericórdia divina tenha custado a vida de muitos marinheiros.",
                    "mesmo que o oceano não aceitasse desculpas de um mortal."
                ]
            },
            {
                texto: "Comando as naus a avançar com força total contra as ondas.",
                afirmacao: [
                    "e sua coragem ao desafiar o oceano provou sua determinação lendária.",
                    "desafiando as tempestades com a garra de quem recusa ser derrotado.",
                    "mostrando que nem a fúria do Deus dos Mares fecharia o seu caminho."
                ]
            }
        ]
    },
    {
        enunciado: "CANTO III - THE CIRCE SAGA: Na ilha de Aiaia, seus homens viraram feras. Hermes lhe entrega a flor Moly. Qual a sua estratégia?",
        alternativas: [
            {
                texto: "Uso a magia divina para subjugar a feitiçaria de Circe.",
                afirmacao: [
                    "A astúcia aliada à flor divina libertou seus companheiros do feitiço,",
                    "Sua mente afiada superou a deusa e conquistou uma aliada valiosa,",
                    "Superando a magia com inteligência, você garantiu a passagem de sua tripulação,"
                ]
            },
            {
                texto: "Avanço com lâmina em riste e imponho respeito pela força.",
                afirmacao: [
                    "Sua audácia em combater uma divindade rendeu-lhe o respeito dos deuses,",
                    "O confronto direto provou o valor dos guerreiros de Ítaca,",
                    "Sua coragem inabalável abriu caminho através das feitiçarias da ilha,"
                ]
            }
        ]
    },
    {
        enunciado: "CANTO IV - THE THUNDER SAGA: Diante de Scylla, a criatura exige seis vidas para permitir a passagem do navio. Como procede?",
        alternativas: [
            {
                texto: "Aceito o sacrifício inevitável de seis homens para salvar o restante da frota.",
                afirmacao: [
                    "carregando o peso de sacrifícios dolorosos em nome do retorno ao lar.",
                    "assumindo o fardo de um capitão que faz o que precisa ser feito.",
                    "deixando cicatrizes profundas em sua consciência pela vida de seus homens."
                ]
            },
            {
                texto: "Tento lutar contra a criatura para não entregar nenhum companheiro.",
                afirmacao: [
                    "provando que sua lealdade aos marinheiros valia qualquer risco mortal.",
                    "recusando-se a aceitar a morte de seus companheiros sem resistir.",
                    "lutando com todas as forças contra o destino inevitável dos mares."
                ]
            }
        ]
    },
    {
        enunciado: "CANTO V - THE ITACA SAGA: Após dez anos de provações, os penhascos de Ítaca surgem. Qual é a sua mensagem final?",
        alternativas: [
            {
                texto: "O amor por Penélope e Telêmaco foi a única luz que me guiou pela escuridão.",
                afirmacao: [
                    "E no fim, a esperança e a humanidade triunfaram sobre todas as tempestades."
                ]
            },
            {
                texto: "Tornei-me o próprio monstro que temia para reivindicar meu trono e proteger minha família.",
                afirmacao: [
                    "E no fim, a implacabilidade garantiu o seu retorno como o lendário Rei de Ítaca."
                ]
            }
        ]
    }
];

let atual = 0; 
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = aleatorio(opcaoSelecionada.afirmacao);
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "O DESTINO DE ODISSEU";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = ""; 
}

function aleatorio(lista) {
    const posicao = Math.floor(Math.random() * lista.length);
    return lista[posicao];
}

mostraPergunta();