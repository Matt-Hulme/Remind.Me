const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const app = express();
const port = 3000;

const dotenv = require('dotenv');
dotenv.config();

// Create a MySQL database connection
const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD, 
  database: process.env.DB_DATABASE 
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
  } else {
    console.log('Connected to MySQL database');
  }
});

app.use(cors());
app.use(express.json());

app.post('/create-reminder', (req, res) => {
  const { email, dateTime, message, numMessages } = req.body;

  // Define your MySQL query to insert data
  const sql = 'INSERT INTO reminders (email, dateTime, message, numMessages) VALUES (?, ?, ?, ?)';
  const values = [email, dateTime, message, numMessages];

  // Execute the query
  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Error inserting reminder into MySQL:', err);
      res.status(500).json({ message: 'Internal Server Error' });
    } else {
      console.log('Reminder saved to MySQL database:', req.body);
      res.json({ message: 'Remind.me Notification Saved' });
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
