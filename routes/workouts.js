var express = require('express');
var router = express.Router();
const workoutsCtrl = require('../controllers/workouts');
const isLoggedIn = require('../config/auth');

//  GET /workouts 
router.get('/', workoutsCtrl.index);
// GET /workouts/new
router.get('/new', isLoggedIn, workoutsCtrl.new);
// POST /workouts/new
router.post('/', isLoggedIn, workoutsCtrl.create);
// GET /posts/:id  SHOW maybe?
// router.get('/:id', workoutsCtrl.show);



module.exports = router;
