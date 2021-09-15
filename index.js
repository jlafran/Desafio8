import express from 'express'
import emoji from 'node-emoji'

import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
    cors:{
        origin:'http://localhost:3000'
    }
})

import { config } from './configsql.js';
import knex from 'knex'
console.log(config)
const db = knex(config)

const app= express()

const PORT=8080

app.use(express.json())
app.use(express.urlencoded({extend:true}))

httpServer.listen(PORT,()=>{
    console.log("Server activo en "+ PORT)
})

app.use('/public',express.static('./public'))


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


import handlebars from 'express-handlebars';
import timeStamp from 'console'

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.set('view engine','hbs')
app.engine('hbs', handlebars({
    layoutsDir: __dirname+'/views',
    extname:'hbs',
    defaultLayout:'LayoutFrame'
    })
)

//formulario en la ruta raiz

app.get('/',(req,res)=>{
    // async function productostotales(){
    //     res.render('bodyForm',{
    //         layout:'layoutFrame'})
    // }
    // productostotales()
    product()
})
async function product(){
    const cont = await db.from('contenedor').select('*')
    return cont
}

// Socket Chat

// io.on('connection',async(socket)=>{
//     const cont = db.from('contenedor').select('*')
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