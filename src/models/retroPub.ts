interface serv {name:String, photo:string, desc:String}

const services: Array<serv> = [
    {name:'Corte de Cabelo', photo:'maquina-de-cortar-cabelo.png', 
    desc:"Some quick example text to build on the card title and make up the bulk of the card's content"},
    {name:'Cuidado com a Barba', photo:'barba.png', 
    desc:"Some quick example text to build on the card title and make up the bulk of the card's content"},
    {name:'Pintura e Selagem do Cabelo', photo:'cabelo-masculino.png', 
    desc:"Some quick example text to build on the card title and make up the bulk of the card's content"},
    {name:'Cuidado com a Sobrancelha', photo:'sobrancelhas.png', 
    desc:"Some quick example text to build on the card title and make up the bulk of the card's content"}

]

interface emp {name:String, photo:String}

const employess: Array<emp> = [
    {name:'Jhon', photo:'p1.webp'}, 
    {name:'Laurence', photo:'p2.png'}, 
    {name:'Maicon', photo:'p3.png'}, 
    {name:'Laura', photo:'p4.png'}
] 

interface pri {name:String, price:String};

const prices: Array<pri> = [
    {name:'CORTE DE CABELO DEGRADE NA NAVALHA', price:'40,00'},
    {name:'CORTE DE CABELO DEGRADE NA MAQUINA', price:'40,00'},
    {name:'CORTE DE CABELO SOCIAL', price:'40,00'},
    {name:'TRATAMENTO PARA BARBA', price:'40,00'},
    {name:'SOBRANCELHA', price:'40,00'},
    {name:'PINTURA DE CABELO', price:'40,00'},
    {name:'SELAGEM DE CABELO', price:'40,00'}
]


export default {services, prices, employess}
