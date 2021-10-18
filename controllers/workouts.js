const Workout = require('../models/workout');

module.exports = {
    index, 
    new: newWorkout,
    create,
    // show
}

function index(req, res) {
    Workout.find({}, function(err, workouts) {
        res.render('workouts/index', {title: 'All Workouts', workouts });
    });
}



function create(req, res) {
    const workout = new Workout(req.body);
    workout.save(function (err) {
        if(err) return res.render('/workouts/new');
        console.log(workout);
        res.redirect(`/workouts`);
    });
}

// function show(req, res) {
//     Workout.findById(req.params.id, function (err, workout) {
//         res.render("workouts/show", {
//             workout,
//             title: "Details",
//         });
//     })
// }

function newWorkout(req,res) {
    res.render('workouts/new', { title: 'Add Workout' });
}