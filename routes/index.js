const express = require('express');
const router = express.Router();

const readPsdController = require('../controllers/readPsdController')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/read_psd', readPsdController.read);

module.exports = router;
