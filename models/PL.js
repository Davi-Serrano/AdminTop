const mongoose = require("mongoose")
const Schema = mongoose.Schema

const PL = new Schema ({
  
    Descricao:{
        type: String,
        required: true
    },
   Valor: {
        type: Number,
        required: true
    }
})

mongoose.model("PL", PL)