const Workout = require('../models/workout');

module.exports = {
    index, 
    new: newWorkout,
    create,

}

function index(req, res) {
    Workout.find({}, function(err, workouts) {
        res.render('workouts/index', {title: 'All Workouts', workouts });
    });
}



function newWorkout(req,res) {
    res.render('workouts/new', { title: 'Add Workout' });
}

function create(req, res) {
    const workout = new Workout(req.body);
    workout.save(function (err) {
        if(err) return res.redirect('/workouts/new');
        console.log(workout);
        res.redirect(`/workouts/${workout._id}`);
    });
}