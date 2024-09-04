const mongoose=require('mongoose')


const clientSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    city:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    }
})

const Client =new mongoose.model('Client',clientSchema)

module.exports=Client



