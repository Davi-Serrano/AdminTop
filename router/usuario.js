const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/credito")
const Credito= mongoose.model("credito")
require("../models/debito")
const Debito= mongoose.model("debito")






router.get("/", (req, res) => {

    res.render("../views/index");
})

router.post("/show", (req, res)=>{

        const newCred = {
            Descricao: req.body.descricaoCred,
            Valor: req.body.valorCred
        }
        new Credito(newCred).save().then(()=>{
            console.log("Salvo com sucesso")
            res.redirect("/ler")
        }).catch((err) =>{
            console.log(err)
        })
    })

router.post("/save", (req, res) => {
        
    const newDeb = {
            Descricao: req.body.descricaoDeb,
            Valor: req.body.valorDeb
        }
        new Debito(newDeb).save().then(()=>{
            console.log("Salvo com sucesso")
            res.redirect("/ler")
        }).catch((err) =>{
            console.log(err)
        })
    
})

router.get('/ler',  (req, res) => {
 

    Debito.find().lean().then((debito) =>{
    
        Credito.find().lean().then((credito) =>{
        
            res.render("../views/ler", {credito: credito, debito:debito})
        }).catch((err) =>{
            console.log(err)
                }).catch((err) =>{
                    console.log(err)
                    })
            
             })

    })

router.post("/del", (req, res) =>{
    
    Credito.deleteOne({_id: req.body.id}).then(() => {
            res.redirect("/ler")
        }).catch((err) =>{
            res.redirect("/ler")
        })
    })




module.exports = router