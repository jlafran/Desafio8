const db= require('../configsql')
const dotenv= require('dotenv')
dotenv.config()

const getlAllMes=()=>{
    return db(process.env.contenedor).select('*')
}

const createMes=(mes)=>{
    return db(process.env.contenedor).insert(prod)
}

const updateMes=(mes)=>{
    return db(process.env.contenedor).where('id',prod.id).update(prod)
}

const deleteMes=(id)=>{
    return db(process.env.contenedor).where('id',id).del()
}

module.exports={getlAllMes,createMes,updateMes,deleteMes}