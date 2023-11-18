const express = require('express');
const cors = require('cors');
const mysql = require('mysql2'); // Add this line
const app = express();
const port = 3000;

// Create a MySQL database connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_mysql_username',
  password: 'your_mysql_password',
  database: 'your_database_name',
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
