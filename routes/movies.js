var express = require('express');
var router = express.Router();
var moviesController = require("../controllers/moviesController");

router.get('/', moviesController.list);

router.get('/detail/:id', moviesController.detail);

router.get('/new', moviesController.new);

router.get('/recommended', moviesController.recommended);

router.get('/create', moviesController.add);

router.post('/create', moviesController.create);

router.get('/edit/:id', moviesController.edit);

router.post('/edit/:id', moviesController.saved);

router.post('/delete/:id', moviesController.delete);

module.exports = router;