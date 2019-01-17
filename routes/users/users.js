var express = require('express');
var router = express.Router();

var userController = require('./controller/userController');

const validateRegisterInput = require('../utils/validation/register'); 

const passport = require('passport');

/* GET users listing. */
router.get('/',function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/createuser', function(req, res, next) {

  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  } else {
    userController.register(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err));
  }
})

router.post('/loginuser', function(req, res, next) {

  userController.login(req.body)
    .then(user => res.json(user))
    .catch(err => res.json(err))

})

router.get('/checkauth', passport.authenticate('jwt', {session: false}), function(req, res, next) {
  res.json({
    payload: req.user
  })

})

module.exports = router;
