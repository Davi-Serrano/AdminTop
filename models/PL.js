const mongoose = require("mongoose")
const Schema = mongoose.Schema

var data = new Date()
var dia     = data.getDate();
var mes     = data.getMonth();
var ano4    = data.getFullYear(); 
var str_data =  dia < 9 ?  '0' + dia : dia + '/' + '0' + (mes+1) + '/' + ano4;


const PL = new Schema ({
  
    Descricao:{
        type: String,
        required: true
    },
   Valor: {
        type: Number,
        required: true
    },
    Date: {
        type: String,
        default: str_data
    }
})

mongoose.model("PL", PL)