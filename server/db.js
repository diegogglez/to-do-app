const Pool = require('pg').Pool;
const env = require('./environment');

console.log(env.USERNAME);

const pool = new Pool({
  user: env.USERNAME,
  password: env.PASSWORD,
  host: env.HOST,
  port: env.DBPORT,
  database: 'todoapp'
});

module.exports = pool;