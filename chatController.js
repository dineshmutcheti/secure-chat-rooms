const db = require('../models/db');

exports.createChatRoom = async (req, res) => {
  if (!req.user.isPrime) {
    return res.status(403).json({ message: 'Only prime members can create chat rooms' });
  }

  const { roomName, roomPassword } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(roomPassword, 10);

    await db.query(
      'INSERT INTO chatrooms (creatorId, roomName, roomPassword) VALUES (?, ?, ?)',
      [req.user.userId, roomName, hashedPassword]
    );

    res.status(201).json({ message: 'Chat room created successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error creating chat room', error: err.message });
  }
};
