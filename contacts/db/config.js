require('dotenv').config();
const DB_CONFIG = process.env.DB_CONFIG || 'postgresql://contacts:contacts@localhost:5432/contacts';
const { Pool } = require('pg');

console.log(`connect ${DB_CONFIG}`);

const pgconn = new Pool({
    connectionString: DB_CONFIG,
    ssl: false,
});

//const pgconn = DB_CONFIG;
  
module.exports = { pgconn, DB_CONFIG }