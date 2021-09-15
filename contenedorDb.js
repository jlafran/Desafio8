import { config } from './configsql.js';
import knex from 'knex'
console.log(config)
const db = knex(config)

const getAllDb=async ()=> {
    try{
        const cont = db.from('contenedor').select('*')
        console.log(cont);
        return cont
        }
    catch(error){
        console.log(error);
        }
    finally{
        db.destroy()
        }
}
const saveProduct=async (product)=> {
    try{
        const cont = db.from('contenedor').insert(product)
        console.log(product);
        }
    catch(error){
        console.log(error);
        }
    finally{
        db.destroy()
        }
}

const deleteProd=async (product)=> {
    try{
        const cont = db.from('contenedor').where({ id: product.id }.del())
        console.log(product);
        }
    catch(error){
        console.log(error);
        }
    finally{
        db.destroy()
        }
}
const editProd=async (product)=> {
    try{
        const cont = db.from('contenedor').where({ id: product.id }.update({ title: product.title, price: product.price, url:product.url }))
        console.log(product);
        }
    catch(error){
        console.log(error);
        }
    finally{
        db.destroy()
        }
}

export default {
    getAllDb:getAllDb,
    saveProduct:saveProduct,
    deleteProd:deleteProd,
    editProd:editProd
}