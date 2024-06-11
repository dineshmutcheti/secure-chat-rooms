const db = require('../models/db');

exports.sendFriendRequest = async (req, res) => {
  const { receiverId } = req.body;

  try {
    await db.query(
      'INSERT INTO friend_requests (senderId, receiverId) VALUES (?, ?)',
      [req.user.userId, receiverId]
    );

    res.status(201).json({ message: 'Friend request sent' });
  } catch (err) {
    res.status(500).json({ message: 'Error sending friend request', error: err.message });
  }
};
