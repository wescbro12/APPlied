const User = require('../../models/Users');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { restart } = require('nodemon');

module.exports = {
    create,
    login,
    checkToken

}

async function create(req, res) {
    try {
        const user = await User.create(req.body);
        const token = createJWT(user); // token will be a string then send back the token as a string wich we need to account for in the client
        res.status(200).json(token)

    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
}

async function login(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) throw new Error();
        const match = await bcrypt.compare(req.body.password, user.password);
        if (!match) throw new Error();
        res.status(200).json(createJWT(user));
    } catch (err) {
        res.status(400).json({ msg: err.message })
    }
}

function checkToken(req, res) {
    res.status(200).json(req.exp);
    console.log('req.user', req.user);
}

/* Helper function*/

function createJWT(user) {
    return jwt.sign(
        //the data payload
        { user },
        process.env.SECRET,
        { espiresIn: '24h' }
    )
}