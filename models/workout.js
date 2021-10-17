const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const workoutSchema = new Schema({
    allworkouts: {
        type: String, 
        required: true
    },
    nameWorkout: {
        type: String,
        required: true
    },
    scheduleYear: {
        type: Date,
        default: function() {
            d = new Date();
            let year = d.getFullYear();
            let month = d.getMonth();
            let day = d.getDate();
            let c = new Date(year + 1, month, day);
            return c; 
        }
    },
    typeOfWorkout: String,
    targetBody: {
        type: String, 
        required: true
    },
    workout: {
        type: String,
        required: true
    },
    completed: { type: Boolean, default: false },
}, {
   timestamps: true
});

module.exports = mongoose.model('Workout', workoutSchema);