const jwt = require("jsonwebtoken");
require("dotenv").config();

const Auth = (req, res, next) => {
    const token = req.headers.authorization;
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
            if (decoded) {
                req.userID = decoded.userID;
                next();
            } else {
                res.status(400).json({
                    status: 400,
                    success: false,
                    message: "Please Login First",
                });
            }
        } catch (error) {
            res.status(400).json({
                status: 400,
                success: false,
                message: "Invalid Token",
            });
        }
    } else {
        res.status(400).json({
            status: 400,
            success: false,
            message: "Token is Missing",
        });
    }
};

module.exports = {
    Auth
};
