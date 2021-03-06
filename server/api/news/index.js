'use strict';

var express = require('express');
var controller = require('./news.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.delete('/:id', controller.destroy);

module.exports = router;