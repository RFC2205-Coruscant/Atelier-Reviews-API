// const { Pool } = require('pg');
const pool = require('./index');


//GET REVIEW DATA
const getReviews = function () {

  pool.connect();

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


//POST REVIEW
const addReview = function (review) {
  let query =
    `INSERT INTO 'reviewdata'
  ("product_id",
   "rating",
   "date",
   "summary",
   "body",
   "recommend",
   "reviewer_name",
   "review_email",
   "helpfulness")
   VALUES
   (${review.product_id},
    ${review.rating},
    CURRENT_TIMESTAMP,
    ${review.summary},
    ${review.body},
    ${review.recommend},
    ${review.reviewer_name},
    ${review.reviewer_email})
    RETURNING
    review_id`

  return pool.connect().then((client) => {
    return client
      .query(query)
      .then((res) => {
        if (review.photos !== []) {
          let insertPhoto = ``;
          photosData = review.photos
          photosData
        }
      })
      .catch((err) => {
        client.release();
        return err;
      })
  })
}

//UPDATE HELPFULNESS
const updateHelpful = function (reviewID) {

  let query =
    `UPDATE 'reviewdata'
   SET 'helpfulness' = 'helpfulness' + 1
   WHERE 'id' = ${reviewID}
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
const updateReported = function (reviewID) {
  let query =
    `UPDATE 'reviewdata'
   SET 'reported' = ${true}
   WHERE 'id' = ${reviewID}
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





