import { config } from './configsql.js';
import knex from 'knex'
console.log(config)
const db = knex(config)
; (
    async function(){
        try{
            const exist =await db.schema.hasTable('contenedor')
            if (!exist){
                await db.schema.createTable('contenedor',(table)=>{
                    table.increments('id').primary().notNullable()
                    table.string('title',50).notNullable()
                    table.integer('price').notNullable()
                    table.string('url').notNullable()
                })
            }
            console.log('tabla creada');
        }
        catch(error){
            console.log(error);
        }
        finally{
            db.destroy()
        }
    }
)()