const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/credito")
const Credito = mongoose.model("credito")
require("../models/debito")
const Debito = mongoose.model("debito")


//Faz o cadastro de crédito e débito
router.get("/", (req, res) => {

    res.render("../views/index");
})

//Posta Crédito 
router.post("/saveC", (req, res) => {

    const newCred = {
        Descricao: req.body.descricaoCred,
        Valor: req.body.valorCred
    }
    new Credito(newCred).save().then(() => {
        console.log("Salvo com sucesso")
        res.redirect("/balanco")
    }).catch((err) => {
        console.log(err)
    })
})

//Posta Débito
router.post("/saveD", (req, res) => {

    const newDeb = {
        Descricao: req.body.descricaoDeb,
        Valor: req.body.valorDeb
    }
    new Debito(newDeb).save().then(() => {
        console.log("Salvo com sucesso")
        res.redirect("/balanco")
    }).catch((err) => {
        console.log(err)
    })

})

//Pag de visualização do balanço
router.get('/balanco', (req, res) => {


    Debito.find().lean().then((debito) => {

        Credito.find().lean().then((credito) => {

            res.render("../views/balanco", {
                credito: credito,
                debito: debito
            })
        }).catch((err) => {
            console.log(err)
        }).catch((err) => {
            console.log(err)
        })

    })

})

//Deleta Crédito
router.post("/delC", (req, res) => {

    Credito.deleteOne({
        _id: req.body.id
    }).then(() => {
        res.redirect("/balanco")
    }).catch((err) => {
        res.redirect("/balanco")
    })
})

//Deleta Débito
router.post("/delB", (req, res) => {

    Debito.deleteOne({
        _id: req.body.id
    }).then(() => {
        res.redirect("/balanco")
    }).catch((err) => {
        res.redirect("/balanco")
    })
})




module.exports = router