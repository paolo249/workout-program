const workout = require('workout');

workout.connect(process.env.DATABASE_URL);
  
  // shortcut variable
  const db = workout.connection;
  
  db.on('connected', function() {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);
  });
  