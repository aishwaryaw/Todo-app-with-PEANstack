const Pool = require('pg').Pool;

const pool = new Pool({
    user : "username here",
    password : "password here",
    port : 5432,
    host : "localhost",
    database : "database name here"

});

module.exports = pool;
