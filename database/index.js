const { Pool } = require('pg');


const pool = new Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS,
  database: process.env.DB_NAME || 'reviews'
});

pool.connect();

pool.query(`SELECT * from reviewdata WHERE "PRODUCT_ID" = 641268 LIMIT 20`,(err, res) => {
  if(!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  pool.end
})
// .then(() => console.log("Connected to postgres....."))
// .catch((err) => console.log(err))
