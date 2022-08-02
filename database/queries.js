// const { Pool } = require('pg');
const pool  = require('./index');


//SELECT REVIEW DATA
const getReviews = function () {

  // const pool = new Pool({
  //   host: process.env.DB_HOST || 'localhost',
  //   port: process.env.PORT || 5432,
  //   user: process.env.DB_USER || 'shirleynguyen',
  //   password: process.env.DB_PASS,
  //   database: process.env.DB_NAME || 'reviews'
  // });

  // pool.connect();

pool.query(`SELECT  DISTINCT
reviewdata.id AS review_id,
reviewdata.rating,
reviewdata.summary,
reviewphotos.url,
reviewdata.recommend,
reviewdata.response,
reviewdata.body,
reviewdata.date,
reviewdata.reviewer_name,
reviewdata.helpfulness
FROM reviewdata
LEFT JOIN reviewphotos ON reviewdata.id = reviewphotos.review_id
LIMIT 5;`, (err, res) => {
    if (!err) {
      let newArr = []
      res.rows.forEach(row => {
        let filtered = newArr.filter(element => element.review_id === row.review_id)
        if (filtered.length === 0) {
          let curObj = row
          curObj.photos = row.url ? [{ "id": 1, "url": row.url }] : []
          delete curObj.url
          newArr.push(curObj)
        } else if (row.url) {
          let index = newArr.findIndex(element => element.review_id === row.review_id)
          newArr[index].photos.push({ "id": newArr[index].photos.length + 1, "url": row.url })
        }
      })
      // newArr.forEach(element=> console.log({"id": element.review_id, "photos" : element.photos}))
      console.log({ "results": newArr })
    } else {
      console.log(err.message);
    }
    pool.end
  })
}

getReviews();

//UPDATE HELPFULNESS
const updateHelpful = function (reviewID) {

  const query =
  `UPDATE 'reviewdata'
   SET 'HELPFULNESS' = 'HELPFULNESS' + 1
   WHERE 'ID' = ${reviewID}
  `;

  return pool.connect().then((client) => {
    return client
    .query(query)
    .then((res) => {
      client.release();
      return res;
    })
    .catch((err) => {
      client.release();
      return err;
    })
  })

}

//UPDATE REPORTED
const updateReported = function (reviewID) => {
  const query =
  `UPDATE 'reviewdata'
   SET 'REPORTED' = ${true}
   WHERE 'ID' = ${reviewID}
  `;

  return pool.connect().then((client) => {
    return client
    .query(query)
    .then((res) => {
      client.release();
      return res;
    })
    .catch((err) => {
      client.release();
      return err;
    })
  })

}




// module.exports = ({productID, page, count, sort}) => {

  // const query =
  // `SELECT
  //  id AS review_id,
  //  rating,
  //  summary,
  //  recommend,
  //  response,
  //  body,
  //  date,
  //  reviewer_name,
  //  helpfulness
  //  FROM 'reviewdata'
  //  SELECT *
  //  FROM 'reviewphotos'
  //  WHERE 'product_id' = ${productID}
  //  LIMIT 1
  // `;

//   return pool.connect().then((client) => (
//     client
//     .query(query)
//     .then((res) => {
//       client.release();
//       return res;
//     })
//     .catch((err) => {
//       client.release();
//       return err;
//     });
//   ));

// };
