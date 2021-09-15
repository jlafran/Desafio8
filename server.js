const productRoutes= require('./routes/productRoutes')
const messagesRoutes= require('./routes/messagesRoutes')
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
app.use('/mensajes',messagesRoutes)

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