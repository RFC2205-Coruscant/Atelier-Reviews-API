const pool = require('../index.js');

const updateReported = (reviewID) => {
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

module.exports updateReported
