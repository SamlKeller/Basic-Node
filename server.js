//Created by Samuel Stankiewicz, 2024

import { } from 'dotenv/config';

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(express.static(path.join(__dirname + '../static')));
app.use(express.static('static'));
app.use(express.static('static/css'));
app.use(express.static('static/images'));

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("*", (req, res) => {
    console.log("Request from " + req.protocol + '://' + req.get('host') + req.originalUrl);
});

app.get('/', (req, res) => {
    console.log("Got index request");
    res.render('index');
});

app.listen(3000 || process.env.PORT, function () {
    console.log("Starting server...");
});