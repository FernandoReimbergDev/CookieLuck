// const phrases =  [
//     "A vida trará coisas boas se tiver paciência.",
//     "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
//     "Não compense na ira o que lhe falta na razão.",
//     "Defeitos e virtudes são apenas dois lados da mesma moeda.",
//     "A maior de todas as torres começa no solo.",
//     "Não há que ser forte. Há que ser flexível.",
//     "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
//     "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
//     "A juventude não é uma época da vida, é um estado de espírito.",
//     "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
//     "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida",
// ]

const phrases = [
    "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. - Provérbios 3:5",
    "O Senhor é o meu pastor, nada me faltará. - Salmos 23:1",
    "Entrega o teu caminho ao Senhor; confia nele, e ele tudo fará. - Salmos 37:5",
    "Porque sou eu que conheço os planos que tenho para vocês, diz o Senhor, planos de fazê-los prosperar e não de causar dano, planos de dar a vocês esperança e um futuro. - Jeremias 29:11",
    "Pois Deus não nos deu espírito de covardia, mas de poder, de amor e de equilíbrio. - 2 Timóteo 1:7",
    "O Senhor é bom, um refúgio em tempos de angústia. Ele protege os que nele confiam. - Naum 1:7",
    "Peça-a, porém, com fé, em nada duvidando; porque o que duvida é semelhante à onda do mar, que é levada pelo vento e lançada de uma para outra parte. - Tiago 1:6",
    "E o meu Deus, de acordo com a sua riqueza em glória, há de suprir em Cristo Jesus, tudo aquilo de que vocês necessitam. - Filipenses 4:19",
    "Não temas, porque eu sou contigo; não te assombres, porque eu sou o teu Deus; eu te fortaleço, e te ajudo, e te sustento com a destra da minha justiça. - Isaías 41:10",
    "Mas os que esperam no Senhor renovarão as suas forças, subirão com asas como águias; correrão, e não se cansarão; caminharão, e não se fatigarão. - Isaías 40:31",
    "Clama a mim, e responder-te-ei, e anunciar-te-ei coisas grandes e firmes, que não sabes. - Jeremias 33:3",
    "Alegrai-vos na esperança, sede pacientes na tribulação, perseverai na oração. - Romanos 12:12",
    "O choro pode durar uma noite, mas a alegria vem pela manhã. - Salmos 30:5",
    "Sede fortes e corajosos. Não temais, nem vos assusteis, porque o Senhor vosso Deus é quem vai convosco; não vos deixará nem vos desamparará. - Deuteronômio 31:6",
    "Bendito o homem que confia no Senhor, e cuja confiança é o Senhor. - Jeremias 17:7",
    "O Senhor é a minha luz e a minha salvação; a quem temerei? - Salmos 27:1",
    "Eu sou o caminho, a verdade e a vida. Ninguém vem ao Pai, senão por mim. - João 14:6",
    "Deleita-te também no Senhor, e ele te concederá o que deseja o teu coração. - Salmos 37:4",
    "O Senhor está perto de todos os que o invocam, de todos os que o invocam em verdade. - Salmos 145:18",
    "Não te deixes vencer do mal, mas vence o mal com o bem. - Romanos 12:21",
    "Venham a mim, todos os que estão cansados e sobrecarregados, e eu lhes darei descanso. - Mateus 11:28",
    "O Senhor te abençoe e te guarde; o Senhor faça resplandecer o seu rosto sobre ti e te conceda graça; o Senhor volte para ti o seu rosto e te dê paz. - Números 6:24-26",
    "Porque a palavra do Senhor é reta; e todas as suas obras são fiéis. - Salmos 33:4",
    "E conhecerão a verdade, e a verdade os libertará. - João 8:32",
    "Aqueles que semeiam com lágrimas, com cantos de alegria colherão. - Salmos 126:5",
    "Eu te amei com amor eterno; com amor leal te atraí. - Jeremias 31:3",
    "Tudo posso naquele que me fortalece. - Filipenses 4:13",
    "Se Deus é por nós, quem será contra nós? - Romanos 8:31",
    "Em paz me deito e logo adormeço, pois só tu, Senhor, me fazes viver em segurança. - Salmos 4:8",
    "Pois estou convencido de que nem morte nem vida, nem anjos nem demônios, nem o presente nem o futuro, nem quaisquer poderes, nem altura nem profundidade, nem qualquer outra coisa na criação será capaz de nos separar do amor de Deus que está em Cristo Jesus, nosso Senhor. - Romanos 8:38-39"
];


let randomNumber = Math.round(Math.random() * 30)
const btnCookie = document.querySelector('#btnLuck')
const btnReset = document.querySelector('#btnReset')
const scrennOpen = document.querySelector('.scrennOpen')
const scrennLuck = document.querySelector('.scrennLuck')
const luckPhrase = document.querySelector('#luckPhrase')

//functions

function toggleScrenn(){
    scrennOpen.classList.toggle('hide')
    scrennLuck.classList.toggle('hide')
    randomNumber = Math.round(Math.random() * 30)
}

function openPhrases(){
    if(randomNumber >= 0 && randomNumber <=30){
        luckPhrase.innerText = phrases[randomNumber]
    }
}

//events
btnCookie.addEventListener('click', ()=>{
    openPhrases()
    toggleScrenn()
    
})

btnReset.addEventListener('click', toggleScrenn)









