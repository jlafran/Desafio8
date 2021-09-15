const express =require('express')

const router=express.Router()
const controller= require('../controller/productController')

const {Server : HttpServer} =require('http')
const {Server : IOServer}= require('socket.io')

const httpServer= new HttpServer(app)

const io=new IOServer(httpServer,{
    cors:{
        origin:'http://localhost:3000'
    }
})

router.post('/',controller.getAll)
router.get('/',controller.save)

// Socket Chat
const { timeStamp } = require("console")
io.on('connection',async(socket)=>{
    const messages= await controller.getAll()
    console.log(emoji.get("pizza")," Usuario conectado");

    socket.emit('messageBackend',messages)
    
    socket.on('disconnect',()=>{
        console.log(emoji.get("fire")," Usuario desconectado"); 
    })

    socket.on('messageFront',(data,mai)=>{
        console.log(data,mai);
        chats.save({
            mail: mai,
            fecha: new Date().toLocaleString(),
            text:data
        })
        io.sockets.emit('messageBackend',messages)
    })
})

module.exports= router