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
app.use(express.static(path.join(__dirname, 'build')))

//check for token
app.use(require('./config/checkToken'));


//Routes
app.use('/api/jobs', require('./routes/api/jobs'))
app.use('/api/users', require('./routes/api/users'))




//Catch-All Route
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
});








const port = process.env.PORT || 3001

app.listen(port, () => {
    console.log(`APPlied Backend on ${port}`)
})