const {config}=require('./config.js')
const knex = require('knex')(config)
console.log(config);

;(
    async function(){
        try {
            const exist= await knex.schema.hasTable('messages')
            console.log(exist);
            if (exist){
                await knex.schema.dropTable('messages')
            }
            await knex.schema.createTable('messages',table=>{
                table.string('user',40).notNullable()
                table.string('message',150).notNullable()
            })
        } catch (error) {
            console.log(error);
        } finally{
            knex.destroy()
        }
    } 
)()
