var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', paraText: 'This is the first para' });
});

router.get('/about', (req, res, next) => {
  res.render('about', { title: 'About Us' })
});

module.exports = router;
