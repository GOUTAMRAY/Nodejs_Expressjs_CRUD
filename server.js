
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import studentRouter from "./routes/student.js";
import staffRouter from "./routes/staff.js";
import userRouter from "./routes/user.js";
import customerRouter from "./routes/customer.js";
import productRouter from "./routes/product.js";
import EJSlayout from "express-ejs-layouts"; 

// env variable
dotenv.config();


// port config
const PORT = process.env.PORT || 6060;

// init express
const app = express();

// use express middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}));

// ejs setup
app.set("view engine","ejs");  
app.use(EJSlayout);

// static folder 
app.use(express.static("public"));


// app routes 
app.use(studentRouter);
app.use(staffRouter);
app.use(userRouter);
app.use(customerRouter);
app.use(productRouter);



// listen server
app.listen(PORT , ()=> {
  console.log(`Server is running on port${PORT}`.bgGreen.black);
});






















