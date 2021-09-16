const {config}=require('./config.js')
const knex = require('knex')(config)
console.log(config);

const getlAllProd= async ()=>{
    let product={}
    try{
        product= await knex.from('contenedor').select()
        console.log(product)
    }
    catch(error){
        console.log(error);
    }finally{
        knex.destroy()
    }
    return product
}
const writeProd= async (prod)=>{
    let product={}
    try{
        product= await knex.from('contenedor').insert(prod)
        console.log(product)
    }
    catch(error){
        console.log(error);
    }finally{
        knex.destroy()
    }
    return prod
}
const replaceProd= async (prod,id)=>{
    let product={}
    try{
        product= await knex.from('contenedor').where('id',id).update(prod)
        console.log(product)
    }
    catch(error){
        console.log(error);
    }finally{
        knex.destroy()
    }
    return prod
}

const deleteProd= async (id)=>{
    let product={}
    try{
        product= await knex.from('contenedor').where('id',id).del()
        console.log(product)
    }
    catch(error){
        console.log(error);
    }finally{
        knex.destroy()
    }
    return id
}
module.exports={getlAllProd,writeProd,replaceProd,deleteProd}