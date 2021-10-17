const mongoose = require('mongoose');
const Schema = mongoose.Schema; 

const workoutSchema = new Schema({
    allworkouts: {
        type: String, 
        required: true
    }
});

module.exports = mongoose.model('Workout', workoutSchema);