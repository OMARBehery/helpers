const express=require('express')
const cc=require('../controllers/clientController')
const router=express.Router()


// handle client routes

router.get('/allclients',cc.getAllClients)
router.get('/:id', cc.getClient)
router.post('/addclient', cc.addClient)
router.put('/updateclient/:id', cc.updateClient)
router.delete('/deleteclient/:id', cc.deleteClient) 

module.exports=router