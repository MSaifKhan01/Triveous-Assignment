const express=require("express")
const cors=require("cors")
const { Database } = require("./Config/config")
const { userRouter } = require("./Routes/user.routes")
const { productRouter } = require("./Routes/product.routes")
const { categoryRouter } = require("./Routes/category.routes")
const { cartRouter } = require("./Routes/cart.routes")
const { Auth } = require("./Middleware/auth")
const { orderRouter } = require("./Routes/order.routes")
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const app=express()
require("dotenv").config()
app.use(express.json())
app.use(cors())


// --------->>>>>> Swagger <<<<<<---------\\

const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Triveous Ecommerce Backend",
        version: "1.0.0",
        description:
          "This e-commerce app allows users to register, log in, browse and purchase products by category. Users can view product details, manage their shopping cart, and securely complete transactions",
      },
      servers: [
        {
          url: "http://localhost:5038",
        },
      ],
    },
    apis: ["./ApiDocs/*.js"],
  };
  const specs = swaggerJsDoc(options);
  app.use("/docs", swaggerUI.serve, swaggerUI.setup(specs));

  app.get('/', (req, res) => {
    res.send('Welcome to our e-commerce website');
  });
app.use("/user",userRouter)
app.use("/product",productRouter)
app.use("/category",categoryRouter)

app.use("/cart",Auth, cartRouter)
app.use("/order",Auth, orderRouter)


app.listen(process.env.port,async()=>{
    try {
        await Database
        console.log("Connected to Database Succesfully");
    } catch (error) {
       
        console.log("error Occured while connectng to db",error);
    }
    console.log("server is connected to port");
})