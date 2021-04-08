var express = require('express');
var router = express.Router();
const tempFunc = require('../function/index')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([{
  	id: 1,
  	username: "samsepi0l"
  }, {
  	id: 2,
  	username: "masalib"
  }]);
});

/* GET users listing. */
router.get('/about', function (req, res, next) {
	tempFunc()
	res.json([
		{
			id: 1,
			username: "完了"
		},
	]);
});

module.exports = router;