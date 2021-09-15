const express =require('express')

const router=express.Router()
const controller= require('../controller/messagesController')

router.post('/',controller.getAll)
router.get('/',controller.save)

module.exports= router