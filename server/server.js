const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000; // Change to your desired port

app.use(cors());
app.use(express.json()); // Enable JSON request body parsing

// Define a route to handle POST requests for email capture
app.post('/create-reminder', (req, res) => {
  const { email, dateTime, message, numMessages } = req.body; // Assuming the request contains an "email" field in the JSON body
  console.log('Received POST request:', req.body);


  // Process the email data as needed (e.g., save it to the database, send a confirmation email, etc.)
  
  // Respond with a success or error message
  res.json({ message: 'Remind.me Notification Saved' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});