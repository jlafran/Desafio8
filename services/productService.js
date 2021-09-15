const db= require('../configsql')
const dotenv= require('dotenv')
dotenv.config()

const getlAllProd=()=>{
    return db(process.env.contenedor).select('*')
}

const createProd=(prod)=>{
    return db(process.env.contenedor).insert(prod)
}

const updateProd=(prod)=>{
    return db(process.env.contenedor).where('id',prod.id).update(prod)
}

const deleteProd=(id)=>{
    return db(process.env.contenedor).where('id',id).del()
}

module.exports={getlAllProd,createProd,updateProd,deleteProd}