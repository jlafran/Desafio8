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

httpServer.listen(PORT,()=>{
    console.log("Server activo en "+ PORT)
})

app.use('/public',express.static('./public'))

const Contenedor= require('./src/contenedor.js')
let contenedor= new Contenedor('./src/productos.json')

let chats= new Contenedor('./src/chats.json')

//guarda el producto
app.post('/',(req,res)=>{
    const producto= req.body
    async function agregarproducto(){
        const cont = await db.from('contenedor').insert(producto)
        res.redirect('/')
    }
    agregarproducto()
})

//handlebars
const handlebars=require('express-handlebars')
const { timeStamp } = require("console")

app.set('view engine','hbs')
app.engine('hbs', handlebars({
    layoutsDir: __dirname+'/views',
    extname:'hbs',
    defaultLayout:'LayoutFrame'
    })
)

//formulario en la ruta raiz

app.get('/',(req,res)=>{
    async function productostotales(){
        res.render('bodyForm',{
            layout:'layoutFrame'})
    }
    productostotales()
})
async function product(){
    let productos = await contenedor.getAll()
    return productos
}

// Socket Chat

io.on('connection',async(socket)=>{
    const products= await contenedor.getAll()
    const messages= await chats.getAll()
    console.log(emoji.get("pizza")," Usuario conectado");

    socket.emit('messageBackend',messages)

    socket.emit('ProductsBackend',products)
    
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