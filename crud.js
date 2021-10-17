require('dotenv').config();
require('./config/database');

const Workout = require('./models/workout');

let workouts;
Workout.find({}, function(err, workoutDocs) {
  workouts = workoutDocs;
});


