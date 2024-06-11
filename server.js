const express = require('express');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const chatRoutes = require('./routes/chatRoutes');
const profileRoutes = require('./routes/profileRoutes');
const friendRequestRoutes = require('./routes/friendRequestRoutes');
const db = require('./models/db');
const { WebSocketServer } = require('ws');

const app = express();
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api', chatRoutes);
app.use('/api', profileRoutes);
app.use('/api', friendRequestRoutes);

const server = app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

const wss = new WebSocketServer({ server });

wss.on('connection', ws => {
  ws.on('message', message => {
    // Broadcast the message to all clients
    wss.clients.forEach(client => {
      if (client !== ws && client.readyState === WebSocket.OPEN) {
        client.send(message);
      }
    });
  });
});
