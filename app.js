
const express = require('express');
const bodyParser = require('body-parser');


const app = express();


app.use(bodyParser.json());




app.post('/api/users/register', (req, res) => {
   
    res.json({ message: 'User registered successfully' });
});


app.get('/api/users/:userId/profile', (req, res) => {
    const userId = req.params.userId;
 
    res.json({ userId, name: 'John Doe', phone: '1234567890' });
});


app.post('/api/chatrooms/create', (req, res) => {
   
    res.json({ message: 'Chat room created successfully' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
