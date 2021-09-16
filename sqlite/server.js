import express from 'express'
const app = express()
const PORT= 8080

import messageRouter from './src/routes/messageRoutes'

app.use(express.json())
app.use(express.urlencoded({extend:true}))

app.get('/',(req,res)=>{
    res.send('Server funcionando')
})

app.listen(PORT,()=>{
    console.log(`Server funcionado en puerto ${PORT}`)
})

app.use('/messages',messageRouter)