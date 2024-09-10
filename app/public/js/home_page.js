const { response } = require("express")


//DOM
const botaoLigado = document.getElementsByTagName('button')[0]
const botaoDesligado = document.getElementsByTagName('button')[1]

//EVENTOS
botaoLigado.addEventListener('click', ()=>{
    
    fetch('/led/on', {method:'POST'})
    .then(response => response.json())
    .then(data => console.log(data.status))
    .catch(error=> console.log('Erro: ', error))

})

botaoDesligado.addEventListener('click', ()=>{

    fetch('/led/off', {method: 'POST'})
    .then(response=> response.json())
    .then(data=> console.log(data.status))
    .catch(error=> console.log('Erro: ', error))
})
