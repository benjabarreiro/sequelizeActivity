var express = require('express');
var router = express.Router();
var moviesController = require("../controllers/moviesController");

router.get('/', moviesController.list);

router.get('/detail/:id', moviesController.detail);

router.get('/new', moviesController.new);

router.get('/recommended', moviesController.recommended);

module.exports = router;