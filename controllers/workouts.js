const Workout = require('../models/workout');

module.exports = {
    index, 
    new: newWorkout,
    create,
    delete: deleteWorkout, 
    show
}


function show(req, res) {
    Workout.findById(req.params.id, function(err, workout) {
        res.render('workouts/show', {
            title: "Workout Details",
            workout,
        });
    });
}


function deleteWorkout(req,res) {
    Workout.findByIdAndDelete(req.params.id, function(err) {
        res.redirect(`/workouts`);
    });
}




function create(req, res) {
    const workout = new Workout(req.body);
    workout.save(function (err) {
        console.log(err);
        if(err) return res.render('workouts/new', { title: 'Add Workout' });
        console.log(workout);
        res.redirect(`/workouts`);
    });
}

            
function newWorkout(req,res) {
    res.render('workouts/new', { title: 'Add Workout' });
    }



function index(req, res) {
    Workout.find({}, function(err, workouts) {
    res.render('workouts/index', {title: 'All Workouts', workouts });
        });
    }