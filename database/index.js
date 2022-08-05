const pg  = require('pg');


const pool = new pg.Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.PORT || 5432,
  user: process.env.DB_USER || 'shirleynguyen',
  password: process.env.DB_PASS,
  database: process.env.DB_NAME || 'reviews'
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err)
  process.exit(-1)
})

module.exports = pool;


