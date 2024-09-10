const express = require('express')
const ledController = require('./controllers/led_controller')

const app = express()

const port = 3000

app.use(express.static('public/css'))
app.use(express.static('public/js'))

app.set('view engine', 'pug')

app.get('/', (req, res)=>{
    res.render('index', {
        title:'23140 - João Pedro Valderrama dos Santos', 
        message: 'Esta é a página que você controlará o Arduino!',
        cssfile:'index.css',
        jsfile:'home_page.js'
    })
})

app.post('/led/on', ledController.turnOn)
app.post('led/off', ledController.turnOff)

app.listen(port, ()=>{
    console.log(`App está escutando na porta ${port}`)
})


