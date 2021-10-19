const express = require('express');
const router = express.Router();
const reviewsCtrl = require('../controllers/reviews');

// POST /workouts/:id/reviews
router.post('/workouts/:id/reviews', reviewsCtrl.create);
router.delete('/reviews/:id', reviewsCtrl.delete);

module.exports = router;
