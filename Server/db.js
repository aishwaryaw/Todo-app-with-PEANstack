const Pool = require('pg').Pool;

const pool = new Pool({
    user : "postgres",
    password : "postgres",
    port : 5432,
    host : "localhost",
    database : "peanstack"

});

module.exports = pool;