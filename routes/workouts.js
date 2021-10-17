var express = require('express');
var router = express.Router();
const workoutsCtrl = require('../controllers/workouts');


//  GET /workouts 
router.get('/', workoutsCtrl.index);
// GET /workouts/new
router.get('/new', workoutsCtrl.new);
// POST /workouts/new
router.post('/', workoutsCtrl.create);
// GET /posts/:id  SHOW maybe?




module.exports = router;
