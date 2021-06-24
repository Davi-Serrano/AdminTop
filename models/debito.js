const mongoose = require("mongoose")
const Schema = mongoose.Schema

const debito = new Schema ({
  
    Descricao:{
        type: String,
        required: true
    },
   Valor: {
        type: Number,
        required: true
    }
})



mongoose.model("debito", debito)