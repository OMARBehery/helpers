const express=require('express')
const hc=require('../controllers/helperController')
const router=express.Router()


// handle helper routes

router.get('/allhelpers',hc.getAllHelpers)
router.post('/addhelper', hc.addHelper)
router.put('/updatehelper/:id', hc.updateHelper)
router.delete('/deletehelper/:id', hc.deleteHelper)
router.get('/:id', hc.getHelperById) 

module.exports=router