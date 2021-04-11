'use strict';
const express = require('express');
const router = express.Router();

const realTimeChat = require('../controllers/real-time-chat');


router.post('/', realTimeChat.create);

router.put('/:socketId', realTimeChat.update);

router.get('/', realTimeChat.findAll);

module.exports = router;
