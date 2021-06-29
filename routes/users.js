const { Router } = require('express');
var express = require('express');
var router = express.Router();

let usersController = require('../controllers/usersController');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('USERS');
});

router.get('/login',usersController.formLogin);
router.get('/register',usersController.formRegister);


module.exports = router;
