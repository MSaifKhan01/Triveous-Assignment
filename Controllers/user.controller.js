const express = require('express');
const jwt = require('jsonwebtoken');

const bcrypt = require("bcrypt");
const { userModel } = require('../Models/user.model');
require("dotenv").config()



const Register= async (req, res) => {
    const { username, email, password} = req.body
    try {
        const user = await userModel.findOne({email})
        if(user){
           return res.status(400).send({ "msg": "You are already registered" })
        }
        bcrypt.hash(password, 5, async (err, hash) => {
            const user = new userModel({ username, email, password: hash})
            await user.save()
            res.status(200).send({ "msg": "registration done succesfully" })
        })

    } catch (err) {
        return res.status(500).send({ "msg": "registration failed" })
    }

}
const Login= async (req, res) => {
    let { email, password } = req.body
    try {
        const user = await userModel.findOne({email})
        if (user) {
            bcrypt.compare(password, user.password, (err, result) => {
                if (result) {
                    res.status(200).send({ "msg": "login succesful","name":user.name,user, "token": jwt.sign({ "userID":user._id }, process.env.JWT_SECRET_KEY, { expiresIn: '3h' }) })
                } else {
                    res.status(401).send({ "msg": "login failed" })
                }
            })

        }

    } catch (err) {
        return res.status(500).send({ "msg": err.massage })
    }

}

module.exports={
    Register,Login
}