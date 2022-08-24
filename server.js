const express = require('express');
const path = require('path');
const logger = require('morgan');
const cors = require('cors')


require('dotenv').config();
require('./config/database.js')

const app = express();


//Middleware
app.use(logger('dev'));
app.use(express.json());
app.use(cors());


//Routes
app.use('/api/jobs', require('./routes/api/jobs'))




//Catch-All Route
app.get('/*', function (req, res) {
    res.sendFile(path.join(_dirname, 'build', 'index.html'))
});








const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`APPlied Backend on ${port}`)
})