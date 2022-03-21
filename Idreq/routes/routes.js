

const express = require('express');

const controller = require('../controller/controller');

const router = express.Router();

router.post("/sendReq",controller.sendReq);
router.get("/ReqList",controller.getReqList);
router.get("/getDets",controller.getReqDetail);
router.get("/getReqDetails",controller.getReqsDets);
router.get("/addn",controller.getAddn);
router.get("/",controller.getIndex);

module.exports = router;