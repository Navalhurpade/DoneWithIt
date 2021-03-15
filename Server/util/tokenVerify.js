require('dotenv').config();
const jwt = require("jsonwebtoken");

module.exports = (token) => {
    if(!token) return false;

    try {
        const payload = jwt.verify(token, process.env.SECRET);
        return true;
    }
    catch (error) {
        console.log("Token is invalid for socket:", error);
        return false;
    }
}   