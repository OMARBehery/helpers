const Helper=require('../models/Helper')




const getAllHelpers=async(req,res)=>{
    try{
        const helpers=await Helper.find()
        res.status(200).json(helpers)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}


const addHelper=async(req, res)=>{
    try{
        const helper=await Helper.create(req.body)
        res.status(200).json(helper)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
const updateHelper=async(req, res)=>{
    try{
        const {id}=req.params
        const helper=await Helper.findByIdAndUpdate(id, req.body)
        if(!helper){
            return res.status(404).json({message:'Helper not found'})
        }
        const updatedHelper=await Helper.findById(id)
        res.status(200).json(updatedHelper)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

const deleteHelper=async(req, res)=>{
    try{
        const {id}=req.params
        const helper=await Helper.findByIdAndDelete(id)
        if(!helper){
            return res.status(404).json({message:'Helper not found'})
        }
        res.status(200).json({message:'Helper deleted successfully'})
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
const getHelperById=async(req, res)=>{
    try{
        const {id}=req.params
        const helper=await Helper.findById(id)
        if(!helper){
            return res.status(404).json({message:'Helper not found'})
        }
        res.status(200).json(helper)
    }catch(error){
        res.status(500).json({message:error.message})
    }
}
module.exports={
    getAllHelpers,
    addHelper,
    updateHelper,
    deleteHelper,
    getHelperById
}