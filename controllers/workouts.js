const Workout = require('../models/workout');
const Cheatmeal = require('../models/cheatmeal');
module.exports = {
    index, 
    new: newWorkout,
    create,
    delete: deleteWorkout, 
    show, 
    edit, 
    update
}


function show(req, res) {
    Workout.findById(req.params.id)
      .populate('cheatmeals')
      .exec(function (err, workout) {
        Cheatmeal.find(
          // query object
          {_id: {$nin: workout.cheatmeals}},
          function(err, cheatmeals) {
            console.log(cheatmeals)
            res.render('workouts/show', { title: 'Workout Detail', workout, cheatmeals });
          }
        );
      });
  }


function deleteWorkout(req,res) {
    Workout.findByIdAndDelete(req.params.id, function(err) {
        res.redirect(`/workouts`);
    });
}


function create(req, res) {
    const workout = new Workout(req.body);
    // workout.user=req.user._id;
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

function edit(req, res) {
Workout.findById(req.params.id, function (err, workout) {
    if (err) {
    res.redirect(`/workouts/${req.params.id}`);
    }
    res.render("workouts/edit", {
    workout,
    title: "Edit Workouts",
    workoutlist: workout.scheduleYear.toISOString().slice(0, 16),
    });
});
}

function update(req, res) {
Workout.findByIdAndUpdate(req.params.id, req.body, function (err, workout) {
    if (err) {
    res.render("workouts/edit", { workout, title: "Edit Workout" });
    }
    res.redirect(`workouts/${workout._id}`);
});
}