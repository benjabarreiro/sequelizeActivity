var express = require('express');
var router = express.Router();
var actorsController = require("../controllers/actorsController");

router.get('/', actorsController.list);

router.get('/detail/:id', actorsController.detail);

module.exports = router;