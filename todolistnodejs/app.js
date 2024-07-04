const express = require('express');
const path = require('path');

const app = express();
const port = 3000; // Choose any port you prefer

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'src')));

// Handle requests to the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// API endpoint to test server functionality
app.get('/api/test', (req, res) => {
    res.json({ message: 'Node.js server is running and API is working!' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});