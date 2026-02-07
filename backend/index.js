require('dotenv').config();
const express = require('express');
const app = express();
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});


// Middleware
app.use(express.json());

// Routes
app.get('/api/projects', (req, res) => {
    res.json({ message: "Get All Projects" });
});

// Start server
const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

