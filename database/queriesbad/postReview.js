const pool = require('../index.js')

module.exports = ({productID, rating, summary, body, recommend, name, email}) => {
  const query =
  `INSERT INTO "reviewdata"
  ("product_id", "rating", "date", "summary", "body", "recommend", "reviewer_name", "review_email", "HELPFULNESS") VALUES (${product_id}, ${RATING}, CURRENT_TIMESTAMP, '${SUMMARY}',  )
  `
}