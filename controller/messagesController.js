const services= require('../services/messagesService')

const getAll= async(req,res)=>{
    try{
        const messages= await services.getlAllProd()
    }
    catch(error){
        res.status(400).json(error.message)
    }
}
const save= async(req,res)=>{
    try{
        const mes=req.body
        const messages= await services.createMes(mes)
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