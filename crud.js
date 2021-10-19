require('dotenv').config();
require('./config/database');
const Cheatmeal = require('./models/cheatmeal');
const data = require('./data');


Cheatmeal.deleteMany({})
  .then(function (results) {
    console.log(results);
    return Cheatmeal.create(data.cheatmeals);
  })
  .then(function(results) {
    console.log(results);
    process.exit();
  });