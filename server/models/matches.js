const mongoose=require('mongoose')

const matchS= new mongoose.Schema({
    helper:{
        type:String,
        required:true
    },
    client:{
        type:String,
        required:true
    }

})

const Match=mongoose.model('Match',matchS)