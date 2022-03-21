

const express = require('express');

const controller = require('../controller/controller');

const router = express.Router();

router.get("/docDetail/",controller.getDocDetail);
router.get("/",controller.getIndex);

module.exports = router;