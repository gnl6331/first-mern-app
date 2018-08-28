var express = require('express');
var router = express.Router();

// Getting the homepage
router.get('/', function(req, res, next) {
  res.send('Express REST API');
});

module.exports = router;