const pool = require('../index.js')

module.exports = ({productID, rating, summary, body, recommend, name, email}) => {
  const query =
  `INSERT INTO "reviewdata"
  ("PRODUCT_ID", "RATING", "DATE", "SUMMARY", "BODY", "RECOMMEND, "REVIEWER_NAME", "REVIEWER_EMAIL", "HELPFULNESS") VALUES (${PRODUCT_ID}, ${RATING}, CURRENT_TIMESTAMP, '${SUMMARY}',  )
  `
}