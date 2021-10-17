const Workout = require('../models/workout');

module.exports = {
    index
}

function index(req, res) {
    Workout.find({}, function(err, workouts) {
        res.render('workouts/index', {title: 'All Workouts', workouts });
    });
}