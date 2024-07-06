const express = require('express');
const path = require('path');
const fs = require('fs');

const app = express();
const port = 3000; 

// Middleware to parse JSON bodies
app.use(express.json());

// Serve static files from the 'src' directory
app.use(express.static(path.join(__dirname, 'src')));

// Handle requests to the root URL
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

// Endpoint to save the to-do list
app.post('/api/todos', (req, res) => {
    const todos = req.body;
    fs.writeFile('data.json', JSON.stringify(todos), (err) => {
        if (err) {
            return res.status(500).json({ message: 'Error saving to-do list' });
        }
        res.status(200).json({ message: 'To-do list saved successfully' });
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


app.get('/api/loadtodos', (req, res) => {
    fs.readFile('data.json', (err, data) => {
        if (err) {
            return res.status(500).json({ message: 'Error loading to-do list' });
        }
        const todos = JSON.parse(data.toString());
        res.status(200).json(todos);
    });
});
