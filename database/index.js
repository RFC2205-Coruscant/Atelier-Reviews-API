const { Client } = require('pg');


const client = new Client({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.PORT || 5432,
  user: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'password1',
  database: process.env.DB_NAME || 'reviews'
});

client.connect();

client.query(`SELECT * from reviewdata`,(err, res) => {
  if(!err) {
    console.log(res.rows);
  } else {
    console.log(err.message);
  }
  client.end
})
// .then(() => console.log("Connected to postgres....."))
// .catch((err) => console.log(err))
