const pool = require('../index.js');

module.exports = (reviewID) => {
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

// module.exports updateHelpful