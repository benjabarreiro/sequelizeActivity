var express = require('express');
var router = express.Router();
var genresController = require("../controllers/genresController");

router.get('/', genresController.list);

router.get('/detail/:id', genresController.detail);

module.exports = router;