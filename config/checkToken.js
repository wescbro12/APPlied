const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    //checking for the token being sent in a header or query parameter
    let token = req.get('Authorization') || req.query.token;
    if (token) {
        token = token.replace('Bearer', '');
        //checking if token is valid and not expired
        jwt.verify(token, process.env.SECRET, function (err, decoded) {
            req.user = err ? null : decoded.user;
            req.exp = err ? null : new Date(decoded.exp * 1000);
        });
        return next();
    } else {
        //this means no token was sent
        req.user = null;
        return next();
    }
};