const express =require('express')

const router=express.Router()
const controller= require('../controller/productController')

router.post('/',controller.getAll)
router.get('/',controller.save)

module.exports= router