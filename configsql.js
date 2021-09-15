const dotenv=require('dotenv')
dotenv.config()
const knex= require('knex')({
    client:'mysql2',
    connection:{
        host:process.env.HOST,
        user:process.env.USERDB,
        password:process.env.PASSWORDDB,
        database:process.env.DATABASE
    }
})

module.exports=knex