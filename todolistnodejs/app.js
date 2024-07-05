const express = require('express');
const path = require('path');

const app = express();
const port = 3000; 

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src')));

// Handle requests to the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});