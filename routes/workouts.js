var express = require('express');
var router = express.Router();
const workoutsCtrl = require('../controllers/workouts');


//  GET /workouts 
router.get('/', workoutsCtrl.index);






module.exports = router;
