var express = require('express');
var router = express.Router();




// define the home page route
router.get('/', function(req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!'});
});
// define the about route
router.post('/auction', function(req, res) {
    console.log(req.body);
    res.send(req.body);
});

module.exports = router;