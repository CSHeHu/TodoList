<h1>To-Do List Application</h1>

<p>A simple Node.js application that allows you to manage your to-do list. The app includes a frontend to display and interact with tasks, and a backend API to load and save tasks to a local JSON file.</p>

<hr>

<h2>🚀 Features</h2>
<ul>
  <li>Interactive to-do list where you can add, mark as completed, and filter tasks.</li>
  <li>Data persistence through a local JSON file.</li>
  <li>API endpoints to load and save the to-do list.</li>
</ul>

<hr>

<h2>🛠️ Dependencies</h2>
<ul>
  <li><code>express</code>: Web framework for Node.js.</li>
  <li><code>path</code>: Utilities for handling file and directory paths.</li>
  <li><code>fs.promises</code>: Promises API for file system operations (used to read/write the to-do list data).</li>
</ul>
<p>Install all dependencies by running:</p>
<pre><code>npm install</code></pre>

<hr>

<h2>🌐 API Endpoints</h2>

<ul>
  <li><code>/api/loadtodos</code></li>
  <ul>
    <li>Method: GET</li>
    <li>Response: JSON array containing the to-do list items.</li>
  </ul>

  <li><code>/api/todos</code></li>
  <ul>
    <li>Method: POST</li>
    <li>Request Body: JSON array of to-do items (with description and completed status).</li>
    <li>Response: A success message indicating the to-do list was saved.</li>
  </ul>
</ul>

<hr>

<h2>🗂️ Project Structure</h2>

<pre>
.
├── src/
│   ├── index.html        # The main frontend HTML page
│   ├── script.js         # Frontend JavaScript to interact with the to-do list
│   └── styles.css        # Styling for the to-do list
├── data.json             # Local JSON file to store the to-do list
└── app.js                # Main backend application logic
</pre>

<hr>

<h2>⚙️ Environment Variables</h2>
<p>This project does not require any environment-specific configurations or .env file for basic operation.</p>

<hr>

<h2>🖥️ Running the Application</h2>
<ol>
  <li>Install the dependencies by running:</li>
  <pre><code>npm install</code></pre>
  <li>Start the server:</li>
  <pre><code>node app.js</code></pre>
  <li>Visit the application in your browser at: <a href="http://localhost:3000" target="_blank">http://localhost:3000</a></li>
</ol>

<hr>

<h2>📝 Notes</h2>
<ul>
  <li>The to-do list data is stored in a local JSON file, <code>data.json</code>.</li>
  <li>You can add new tasks, mark tasks as completed, and filter tasks based on their status.</li>
  <li>Tasks are saved to <code>data.json</code> upon clicking the "Save" button, and loaded when the page is refreshed.</li>
</ul>
