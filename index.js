const express = require('express')
const app = express()
const mongoose = require("mongoose")

const usuarios = require("./router/usuario")

app.use(express.static(__dirname + '/views/CSS'));
app.use(express.static(__dirname + '/views/JS'));


//config mongoose
mongoose.connect('mongodb://localhost/Balance', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true}).then(()=> {
    console.log('MongoDB conectado')
}).catch((err)=> {
    console.log('Erro ao se conectar: ' + err)
})


// Config  ejs
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.use("/", usuarios)



app.listen(8000, () => {
    console.log("Servidor rodando")
})