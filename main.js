const phrases =  [
    "A vida trará coisas boas se tiver paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verá que a paz nasce dentro de si.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Todos os dias organiza os seus cabelos, por que não faz o mesmo com o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos.",
    "Dê toda a atenção á formação dos seus filhos, sobretudo com bons exemplos da sua própria vida",
]

let randomNumber = Math.round(Math.random() * 10)
const btnCookie = document.querySelector('#btnLuck')
const btnReset = document.querySelector('#btnReset')
const scrennOpen = document.querySelector('.scrennOpen')
const scrennLuck = document.querySelector('.scrennLuck')
const luckPhrase = document.querySelector('#luckPhrase')

//functions

function toggleScrenn(){
    scrennOpen.classList.toggle('hide')
    scrennLuck.classList.toggle('hide')
    randomNumber = Math.round(Math.random() * 10)
}

function openPhrases(){
    if(randomNumber >= 0 && randomNumber <=10){
        luckPhrase.innerText = phrases[randomNumber]
    }
}

//events
btnCookie.addEventListener('click', ()=>{
    openPhrases()
    toggleScrenn()
    
})

btnReset.addEventListener('click', toggleScrenn)









