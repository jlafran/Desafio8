import { text } from "express"
import messageDb from "../server/messageDb"

const getAll= async (req,res)=>{
    const messages=await messageDb.getlAllMes()
    res.send(messages)
}
const post= async(req,res)=>{
    const message= req.body
    const messages=await messageDb.writeMes(message)
    res.send(messages)
}
export default {
    getAll:getAll,
    post:post
}