const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: 'Username and password required' });

  // Check if user exists
  const [users] = await db.query('SELECT * FROM Users WHERE username = ?', [username]);
  if (users.length > 0)
    return res.status(400).json({ message: 'User already exists' });

  // Hash password
  const hashed = await bcrypt.hash(password, 10);

  // Insert into MySQL
  try {
    await db.query('INSERT INTO Users (username, password) VALUES (?, ?)', [username, hashed]);
    res.json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Database error', error: err.message });
  }
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    return res.status(400).json({ message: 'Username and password required' });

  try {
    const [users] = await db.query('SELECT * FROM Users WHERE username = ?', [username]);
    if (users.length === 0)
      return res.status(400).json({ message: 'Invalid credentials' });

    const user = users[0];
    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, username: user.username });
  } catch (err) {
    res.status(500).json({ message: 'Login failed' });
  }
});



// Get all books
app.get('/api/books', async (req, res) => {
  try {
    const [rows] = await db.query('SELECT * FROM Books');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Start server
const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
