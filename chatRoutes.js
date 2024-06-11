const express = require('express');
const { createChatRoom } = require('../controllers/chatController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/chatrooms', authenticateToken, createChatRoom);

module.exports = router;
