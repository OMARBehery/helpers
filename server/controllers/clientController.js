const client=require('../models/Client')




const getAllClients=async(req,res)=>{
    try {
        const clients=await client.find()
        res.status(200).json(clients)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const getClient=async(req, res)=>{
    try {
        const {id}=req.params
        const clients=await client.findById(id)
        res.status(200).json(clients)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
const addClient=async(req, res)=>{
    try {
        const clients=await client.create(req.body)
        res.status(200).json(clients)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const updateClient=async(req, res)=>{
    try {
        const {id}=req.params
        const clients=await client.findByIdAndUpdate(id,req.body)
        res.status(200).json(clients)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}

const deleteClient=async(req, res)=>{
    try {
        const {id}=req.params
        const clients=await client.findByIdAndDelete(id)
        res.status(200).json(clients)
    } catch (error) {
        res.status(500).json({msg:error})
    }
}
module.exports={
    getAllClients, 
    getClient,
    addClient,
    updateClient,
    deleteClient
}