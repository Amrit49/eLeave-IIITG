// server.js
const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcryptjs');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
    host: 'localhost',   // Replace with your DB host
    user: 'root',        // Replace with your DB user
    password: 'Amritjot@1232',// Replace with your DB password
    database: 'leavemanagementsystem'  // Replace with your DB name
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

// Login Route (to authenticate users)
app.post('/api/login', (req, res) => {
    const { email, password } = req.body;
    const query = 'SELECT * FROM users WHERE email = ?';

    db.query(query, [email], (err, result) => {
        if (err) return res.status(500).json({ error: err.message });

        if (result.length > 0) {
            // Check password with bcrypt
            bcrypt.compare(password, result[0].password, (err, isMatch) => {
                if (isMatch) {
                    // Password matches
                    res.json({ success: true, message: 'Login successful', user: result[0] });
                } else {
                    // Incorrect password
                    res.json({ success: false, message: 'Incorrect password' });
                }
            });
        } else {
            // No user found with this email
            res.json({ success: false, message: 'User not found' });
        }
    });
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
