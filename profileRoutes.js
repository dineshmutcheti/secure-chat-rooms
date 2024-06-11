const express = require('express');
const { getProfile } = require('../controllers/profileController');
const { authenticateToken } = require('../middlewares/authMiddleware');
const router = express.Router();

router.get('/profile/:userId', authenticateToken, getProfile);

module.exports = router;
