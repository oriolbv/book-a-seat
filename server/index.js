//index.js
const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

// importing database 
const database = require('./database')

// dotenv config
require('dotenv').config();

// app and port config
const app = express();
const port = process.env.PORT || 4000;

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(bodyParser.json());
