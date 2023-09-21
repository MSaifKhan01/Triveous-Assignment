const mongoose=require("mongoose")

require("dotenv").config()

const Database=mongoose.connect(process.env.DatabaseUrl)

module.exports={Database}