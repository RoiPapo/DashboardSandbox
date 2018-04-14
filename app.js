var express = require('express');
var app = express();
const path = require('path')
const data = require('./assets/data.json');
const bodyParser = require('body-parser');
const cors = require('cors');

//Middleware for CORS
app.use(cors());

app.use(express.static(path.join(__dirname, 'public')));
var port = process.env.port || 3000;


app.get('/api', function (req, res) {
    res.json(data);
});


app.listen(port, () => {
    console.log("server Is ON :D");
});