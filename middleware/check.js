const jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {

    const token = req.headers.authorization;


    try {
        const decoded = jwt.verify(token, process.env.TOKEN_KEY);
        req.userData = decoded;
        next();
    } catch (error) {
        return res.status(401).json({
            message: "auth failed",
            err: error
        })
    }



}