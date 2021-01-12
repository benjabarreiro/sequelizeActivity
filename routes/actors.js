var express = require('express');
var router = express.Router();
var actorsController = require("../controllers/actorsController");

router.get('/', actorsController.list);

router.get('/detail/:id', actorsController.detail);

router.get('/create', actorsController.add);

router.post('/create', actorsController.create);

router.get('/edit/:id', actorsController.edit);

router.post('/edit/:id', actorsController.saved);

router.post('/delete/:id', actorsController.delete);

module.exports = router;