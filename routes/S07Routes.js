const express = require('express');
const s07Controller = require('./../controllers/s07Controller');
const router = express.Router();

const controller = require('./../controllers/s07Controller');
const s07Middleware = require('./../middlewares/s07Middleware');
const middleware = require('./../middlewares/s07Middleware');

router.post('/phone', s07Controller.add);
router.get('/phones', s07Controller.get);
router.put('/phone', s07Middleware.checkId, s07Controller.set);
router.delete('/phone', s07Middleware.checkId, s07Controller.delete);

module.exports = router;