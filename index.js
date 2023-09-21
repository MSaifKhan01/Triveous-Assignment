const express=require("express")
const cors=require("cors")
const { Database } = require("./Config/config")
const { userRouter } = require("./Routes/user.routes")
const { productRouter } = require("./Routes/product.routes")
const app=express()
require("dotenv").config()
app.use(express.json())
app.use(cors())


app.use("/user",userRouter)
app.use("/product",productRouter)


app.listen(process.env.port,async()=>{
    try {
        await Database
        console.log("Connected to Database Succesfully");
    } catch (error) {
       
        console.log("error Occured while connectng to db",error);
    }
    console.log("server is connected to port");
})