import { text } from "express"
import productDb from "../server/productDb"

const getAll= async (req,res)=>{
    const productos=await productDb.getlAllProd()
    res.send(productos)
}
const post= async(req,res)=>{
    const producto= req.body
    const productos=await productDb.writeProd(producto)
    res.send(productos)
}
const replaceId= async(req,res)=>{
    let {id}=req.params
    id=parseInt(id,10)
    const producto= req.body
    const product=await productDb.replaceProd(producto,id)
    res.send(product)
}
const deleteId= async(req,res)=>{
    let {id}=req.params
    id=parseInt(id,10)
    const product=await productDb.deleteProd(id)
    res.send("eliminado")
}
export default {
    getAll:getAll,
    post:post,
    replaceId:replaceId,
    deleteId:deleteId
}