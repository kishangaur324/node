var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    console.log(__dirname);
    res.sendFile('index.html', { root: __dirname });
});

app.get('/list', (req, res) => { 
    res.json([
        {name: 'sourabh', age: 26},
        {name: 'sameer', age: 23},
        {name: 'saurabh', age: 30},
    ]);
});

var port = process.env.port || 8080;

app.listen(port, () => {
    console.log(`Server is running at port: ${port}`);
});