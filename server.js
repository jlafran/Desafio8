const productRoutes= require('./routes/productRoutes')
const express=require("express")
const emoji= require('node-emoji')
const {Server : HttpServer} =require('http')
const {Server : IOServer}= require('socket.io')

const app= express()
const httpServer= new HttpServer(app)

const io=new IOServer(httpServer,{
    cors:{
        origin:'http://localhost:3000'
    }
})

const PORT=8080

app.use(express.json())
app.use(express.urlencoded({extend:true}))
app.use('/public',express.static('./public'))

httpServer.listen(PORT,()=>{
    console.log("Server activo en "+ PORT)
})

app.use('/productos',productRoutes)

//handlebars
const handlebars=require('express-handlebars')

app.set('view engine','hbs')
app.engine('hbs', handlebars({
    layoutsDir: __dirname+'/views',
    extname:'hbs',
    defaultLayout:'LayoutFrame'
    })
)

app.get('/',(req,res)=>{
    async function productostotales(){
        res.render('bodyForm',{
            layout:'layoutFrame'})
    }
    productostotales()
})

// Socket Chat
// const { timeStamp } = require("console")
// io.on('connection',async(socket)=>{
//     const products= await contenedor.getAll()
//     const messages= await chats.getAll()
//     console.log(emoji.get("pizza")," Usuario conectado");

//     socket.emit('messageBackend',messages)

//     socket.emit('ProductsBackend',products)
    
//     socket.on('disconnect',()=>{
//         console.log(emoji.get("fire")," Usuario desconectado"); 
//     })

//     socket.on('messageFront',(data,mai)=>{
//         console.log(data,mai);
//         chats.save({
//             mail: mai,
//             fecha: new Date().toLocaleString(),
//             text:data
//         })
//         io.sockets.emit('messageBackend',messages)
//     })
// })