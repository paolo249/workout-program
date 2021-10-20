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
// DELETE /workouts/:id
router.delete('/:id', isLoggedIn, workoutsCtrl.delete);
// GET /posts/:id  SHOW maybe?
 router.get('/:id', workoutsCtrl.show);
 router.get('/:id/edit', workoutsCtrl.edit);
router.put('/:id', workoutsCtrl.update);







module.exports = router;
