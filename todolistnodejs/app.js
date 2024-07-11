const express = require('express');
const path = require('path');
const fs = require('fs').promises;

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


// Endpoint to load the to-do list
app.get('/api/loadtodos', async (req, res) => {
    try {
        const data = await fs.readFile('data.json');
        const todos = JSON.parse(data.toString());
        res.status(200).json(todos);
    }
    catch (err) {
        return res.status(500).json({ message: 'Error loading to-do list' });
    }

});

// Endpoint to save the to-do list
app.post('/api/todos', async (req, res) => {
    try {
        const todos = req.body;
        await fs.writeFile('data.json', JSON.stringify(todos));
        res.status(200).json({ message: 'To-do list saved successfully' });
        
    }
    catch (err) {
        res.status(500).json({ message: 'Error saving to-do list' });
    }
    
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


