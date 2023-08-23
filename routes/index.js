var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.render('index', { title: 'Express-Generator' });
});

router.get('/about', (req, res) => res.render('about'));
router.get('/portfolio', (req, res) => res.render('portfolio'));


module.exports = router;
