const mongoose=require('mongoose')


const helperSchema=new mongoose.Schema({
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

const Helper =new mongoose.model('Helper',helperSchema)

module.exports=Helper