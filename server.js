const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors')


require('dotenv').config();
require('./config/database.js')

const app = express();


//Middlewear
app.use(logger('dev'));
app.use(express.json());
app.use(cors());








const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`APPlied on ${PORT}`)
})