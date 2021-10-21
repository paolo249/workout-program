const express = require('express');
const router = express.Router();
const passport = require('passport');


// Welcome/landing page route
router.get('/', function(req, res, next) {
  res.render('home', {title:"Home Page"});
});

router.get(
  '/auth/google',
  passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  )
);

// Google OAuth callback route
router.get(
  '/oauth2callback',
  passport.authenticate(
    'google',
    {
      successRedirect: '/',
      failureRedirect: '/'
    }
  )
);

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

// app.get(
//   "/auth/google",
//   passport.authenticate(
//       "google",
//       {
//           scope: ["profile", "email"],
//           prompt: "select_account"
//       }
//   )
// );

module.exports = router;

