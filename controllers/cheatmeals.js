const Cheatmeal = require('../models/cheatmeal');
const Workout = require('../models/workout');

module.exports = {
    new: newCheatmeal,
    create,
    addToMeal
};

function addToMeal(req, res) {
    Workout.findById(req.params.id, function(err, workout) {
      console.log(req.body);
      workout.cheatmeals.push(req.body.cheatmealId);
      workout.save(function(err) {
        res.redirect(`/workouts/${workout._id}`);
      });
    });
  }
  
  function create(req, res) {
    Cheatmeal.create(req.body, function (err, cheatmeal) {
      console.log(err);
      res.redirect('/cheatmeals/new');
    });
    
  }
  
  function newCheatmeal(req, res) {
    Cheatmeal.find({})
      .sort('name')
      .exec(function (err, cheatmeals) {
      res.render('cheatmeals/new', {
        title: 'Add cheatmeal',
        cheatmeals
      });
    })
  }
