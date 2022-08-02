const pg  = require('pg');


const pool = new pg.Pool({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.PORT || 5432,
  user: process.env.DB_USER || 'shirleynguyen',
  password: process.env.DB_PASS,
  database: process.env.DB_NAME || 'reviews'
});

pool.connect();

module.exports = pool;

// pool.query(`SELECT id AS review_id, rating, summary, recommend, response, body, date, reviewer_name, helpfulness FROM reviewdata WHERE "product_id" = 641268`,(err, res) => {
//   if(!err) {
//     console.log(res.rows);
//   } else {
//     console.log(err.message);
//   }
//   pool.end
// })
// .then(() => console.log("Connected to postgres....."))
// .catch((err) => console.log(err))
