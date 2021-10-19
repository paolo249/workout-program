const mongoose = require('mongoose');
const Schema = mongoose.Schema; 



const cheatmealSchema = new Schema({
    name: {type: String, required: true, unique: true},
    cal: Number
  }, {
    timestamps: true
  });



module.exports = mongoose.model('Cheatmeal', cheatmealSchema);