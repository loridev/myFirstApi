const express = require('express');
const router = express.Router();

const controller = require('./../controllers/s06Controller');
const middleware = require('./../middlewares/s06Middleware');

router.get('/randomNum/:num', middleware.checkNumEx01, controller.randomNum);
router.put('/multList', middleware.checkNumEx02, controller.multList);

module.exports = router;