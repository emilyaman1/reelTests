const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection( {
    host: 'database-1.c1m4ekg4o6v6.us-east-1.rds.amazonaws.com',
    user: 'admin',
    password: 'Eea12190!',
    database: 'reelRepoDB'
});

db.connect(err => {
    if(err){
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database');
});

app.get('/api/data', (req, res) => {
    db.query('SELECT * FROM users', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

app.post('/api/data', (req, res) => {
    const newData = req.body;
    db.query('INSERT INTO users SET ?', newData, (error, results) => {
        if (error) throw error;
        res.send('Data added successfully');
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});