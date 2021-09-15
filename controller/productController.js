const services= require('../services/productService')

const getAll= async(req,res)=>{
    try{
        const products= await services.getlAllProd()
    }
    catch(error){
        res.status(400).json(error.message)
    }
}
const save= async(req,res)=>{
    try{
        const prod=req.body
        const products= await services.createProd(prod)
        res.redirect('/')
    }
    catch(error){
        res.status(400).json(error.message)
    }
}
module.exports={
    getAll,
    save
}