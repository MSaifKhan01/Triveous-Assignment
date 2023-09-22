const jwt = require("jsonwebtoken")
require("dotenv").config()

const Auth = (req, res, next) => {
    const token = req.headers.authorization
    if (token) {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY)
        if (decoded) {
            req.body.userID = decoded.userID
            next()
        } else {
            // res.status(400).json({"Msz":"Plz Login First"})
            res.status(400).json({
                status: 400,
                success: true,
                message: "Plz Login First",

            });
        }
    } else {
        // res.status(400).send({"msz":"Didn't Login"})
        res.status(400).json({
            status: 400,
            success: true,
            message: "Didn't Login",

        });
    }
}



module.exports = {
    Auth
}