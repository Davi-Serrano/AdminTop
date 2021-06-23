const express = require('express')
const app = express()
const mongoose = require("mongoose")
require("./models/credito")
const Credito= mongoose.model("credito")

mongoose.connect('mongodb://localhost/Balance', {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true}).then(()=> {
    console.log('MongoDB conectado')
}).catch((err)=> {
    console.log('Erro ao se conectar: ' + err)
})


// Config  ejs
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.get("/", (req, res) => {

    res.render("../views/index");
})


app.listen(8000, () => {
    console.log("Servidor rodando")
})