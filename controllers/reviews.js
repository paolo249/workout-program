const Workout = require('../models/workout');

module.exports = {
    create,
    delete: deleteReview,
}
function create(req,res) {
    Workout.findById(req.params.id, function(err, workout) {
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        workout.reviews.push(req.body);
        workout.save(function(err) {
            res.redirect(`/workouts/${workout._id}`);
        });
    });
}

async function deleteReview(req,res) {
    const workout = await Workout.findOne({'reviews._id': req.params.id});
    const review = workout.reviews.id(req.params.id);
    if (!review.user.equals(req.user._id)) return res.redirect(`/workouts/${workout._id}`);
    review.remove();
    await workout.save();
    res.redirect(`/workouts/${workout._id}`);
}