//index.js
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// importing database 
const database = require('./database')
// importing routes
const spacesRouter = require('./routes/spaces-routes')

// dotenv config
require('dotenv').config();

// app and port config
const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(cors());
app.use(bodyParser.json());

// DB connection
database.on('error', console.error.bind(console, 'MongoDB failed to connect'))

app.use('/', spacesRouter)

// listening to port
app.listen(port, () => console.log(`Currently server is running at http://localhost:${port}`))
