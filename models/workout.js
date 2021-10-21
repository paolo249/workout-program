const mongoose = require('mongoose');
const Schema = mongoose.Schema; 



const reviewSchema = new Schema({
    content: String,
    rating: {type: Number, min: 1, max: 5, default: 5},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    userName: String,
    userAvatar: String
  }, {
    timestamps: true
  });


const workoutSchema = new Schema({
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
    typeOfWorkout: {
        type: String, 
        enum: ['STRENGTH','FLEXIBILITY','AEROBIC']
    },
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    targetBody: {
        type: String, 
        required: true
    },
    workout: {
        type: String,
        required: true
    },
    completed: { type: Boolean, default: false },
    reviews: [reviewSchema],
    cheatmeals: [{
        type: Schema.Types.ObjectId,
        ref: "Cheatmeal"
    }]
}, {
   timestamps: true
});

module.exports = mongoose.model('Workout', workoutSchema);