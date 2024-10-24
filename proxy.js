const fs = require('fs');
const https = require('https');
const express = require('express');
const proxy = require('express-http-proxy');
require('dotenv').config();

const app = express();

const options = {
    key: fs.readFileSync(process.env.KEY),
    cert: fs.readFileSync(process.env.CERT),
};

app.use('/cms/', proxy('http://localhost:1337/api/'));

https.createServer(options, app).listen(3000, () => {
    console.log('HTTPS proxy server is running on port 3000');
});
