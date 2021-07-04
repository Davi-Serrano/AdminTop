const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/credito")
const Credito = mongoose.model("credito")
require("../models/debito")
const Debito = mongoose.model("debito")
require("../models/PL")
const PL = mongoose.model("PL")


//Faz o cadastro de crédito e débito
router.get("/", (req, res) => {

    res.render("../views/cadConta");
})

//Posta Crédito 
router.post("/saveC", (req, res) => {

    const newCred = {
        Descricao: req.body.descricaoCred,
        Valor: req.body.valorCred
    }
    new Credito(newCred).save().then(() => {
        console.log("Salvo com sucesso")
        res.redirect("/")
    }).catch((err) => {
        console.log(err)
        res.redirect("/")
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
        res.redirect("/")
    }).catch((err) => {
        console.log(err)
        res.redirect("/")
    })

})

router.post("/savePL", (req, res) => {

    const newPL = {
        Descricao: req.body.descricaoPL,
        Valor: req.body.valorPL
    }
    new PL(newPL).save().then(() => {
        console.log("Salvo com sucesso")
        res.redirect("/")
    }).catch((err) => {
        console.log(err)
        res.redirect("/")
    })

})

//Pag de visualização do balanço
router.get('/balanco', (req, res) => {

    PL.find().lean().then((pl) => {

        Debito.find().lean().then((debito) => {

            Credito.find().lean().then((credito) => {

                res.render("../views/balanco", {
                    credito: credito,
                    debito: debito,
                    pl: pl
                })
            }).catch((err) => {
                console.log(err)
            }).catch((err) => {
                console.log(err)
            })

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
router.post("/delD", (req, res) => {

    Debito.deleteOne({
        _id: req.body.id
    }).then(() => {
        res.redirect("/balanco")
    }).catch((err) => {
        res.redirect("/balanco")
    })
})

//Deleta PL
router.post("/delPL", (req, res) => {

    PL.deleteOne({
        _id: req.body.id
    }).then(() => {
        res.redirect("/balanco")
    }).catch((err) => {
        res.redirect("/balanco")
        console.log(err)
    })
})

//Razonete

router.get("/razonete", (req, res) =>{

    PL.find().lean().then((pl) => {

        Debito.find().lean().then((debito) => {

            Credito.find().lean().then((credito) => {

                res.render("../views/razonete", {
                    credito: credito,
                    debito: debito,
                    pl: pl
                })
            }).catch((err) => {
                console.log(err)
            }).catch((err) => {
                console.log(err)
            })

        })
    })

})




module.exports = router