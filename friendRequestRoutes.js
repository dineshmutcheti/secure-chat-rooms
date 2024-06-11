const express = require('express');
const { sendFriendRequest } = require('../controllers/friendRequestController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.post('/friend-requests', authenticateToken, sendFriendRequest);

module.exports = router;
