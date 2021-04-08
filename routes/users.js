var express = require('express');
var router = express.Router();
const puppeteer = require('puppeteer')

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
	res.json([{
		id: 1,
		username: "samsepi03"
	}, {
		id: 2,
		username: "masalib4"
	}]);
});

const tempFunc = async () => {
	console.log('[Info] ■■■ Puppeteer test Start ■■■');
}

module.exports = router;