const express = require('express');
const router = express.Router();
const cheatmealsCtrl = require('../controllers/cheatmeals');

router.get('/cheatmeals/new', cheatmealsCtrl.new);
router.post('/cheatmeals', cheatmealsCtrl.create);

router.post('/workouts/:id/cheatmeals', cheatmealsCtrl.addToMeal);

module.exports = router;