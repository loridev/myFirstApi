const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.get('/list', userController.list);
router.get('/profile/:userId?', userController.profile); //INTERROGANTE = OPCIONAL

module.exports = router;