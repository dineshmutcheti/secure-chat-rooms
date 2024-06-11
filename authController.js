const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models/db');

exports.register = async (req, res) => {
  const { userId, deviceId, name, phone, availCoins, password, isPrime } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    await db.query(
      'INSERT INTO users (userId, deviceId, name, phone, availCoins, password, isPrime) VALUES (?, ?, ?, ?, ?, ?, ?)',
      [userId, deviceId, name, phone, availCoins, hashedPassword, isPrime]
    );

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering user', error: err.message });
  }
};

exports.login = async (req, res) => {
  const { phone, password } = req.body;

  try {
    const [rows] = await db.query('SELECT * FROM users WHERE phone = ?', [phone]);
    if (rows.length === 0) {
      return res.status(401).json({ message: 'Invalid phone or password' });
    }

    const user = rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid phone or password' });
    }

    const token = jwt.sign({ userId: user.userId, isPrime: user.isPrime }, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in', error: err.message });
  }
};
