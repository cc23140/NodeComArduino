const  five = require('johnny-five')
let placa = new five.Board()
let led //LED está na porta digital 2

placa.on('ready', ()=>{
    led = new five.Led(2)
})

const turnOn = async(req, res)=>{
    try{
        if(led){
            led.on()
            res.json({status:'on'})
        }
        else{
            res.status(500).json({error:'LED n está configurado'})
        }
    }
    catch(e){
        res.status(500).json({error:'Erro inesperado ao ligar LED!'})
    }
    
}

const turnOff = async(req, res)=>{
    try{
        if(led){
            led.off()
            res.json({status:'off'})
        }
        else{
            res.status(500).json({error:'LED n está configurado'})
        }
    }
    catch(e){
        res.status(500).json({error:'Erro inesperado ao ligar LED!'})
    }
    
}

module.exports = {
    turnOn,
    turnOff
}