// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const config = require('./config'); // Adjust path as needed
const cors = require('cors'); // Add this line

const app = express();
const port = process.env.PORT || 8000;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Add this line

// MySQL Connection
const db = mysql.createConnection({
  host: config.DB_HOST,
  user: config.DB_USER,
  password: config.DB_PASSWORD,
  database: config.DB_DATABASE,
  port: config.DB_PORT,
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL database:', err);
    return;
  }
  console.log('Connected to MySQL database');
});

// Routes
app.post('/register', (req, res) => {
  const { email, password, name } = req.body;

  console.log('Received registration request:', req.body);

  // Check if email already exists
  const checkEmailSql = 'SELECT * FROM users WHERE email = ?';
  db.query(checkEmailSql, [email], (err, results) => {
    if (err) {
      console.error('Error checking email:', err);
      res.status(500).send('Error checking email');
      return;
    }

    if (results.length > 0) {
      console.log('Email is already registered:', email);
      res.status(409).send('Email is already registered');
      return;
    }

    // Insert new user
    const insertUserSql = 'INSERT INTO users (email, password, name) VALUES (?, ?, ?)';
    db.query(insertUserSql, [email, password, name], (err, result) => {
      if (err) {
        console.error('Error registering user:', err);
        res.status(500).send('Error registering user');
        return;
      }
      console.log('User registered successfully:', result);
      res.status(200).send('User registered successfully');
    });
  });
});

// Start Server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
