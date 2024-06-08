const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host : process.env.HOST_NAME,
    user :  process.env.USER,
    password : process.env.PASSWORD,
    port : process.env.DB_PORT,
    database : process.env.DB 
});

module.exports = pool;