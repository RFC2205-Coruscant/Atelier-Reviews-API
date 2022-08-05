const express = require('express');
const router = express.Router();

router.get('/reviews/:product_id');
router.get('/reviews/:product_id/meta');
router.post('/reviews/:product_id');
router.put('/reviews/:review_id/helpful');
router.put('/reviews/:review_id/reported')

module.exports = router;