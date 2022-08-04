const express= require('express')
const app= express(); 
const bodyParser= require('body-parser');
const cors= require('cors');
const  mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();
const Razorpay = require('razorpay');
const PORT= process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());


const url = "mongodb+srv://pranjalsingh:Pranshu2001@cluster0.kylbz.mongodb.net/user"

mongoose.connect(url);

app.use("/",require("./route/adminRoute"));

app.use("/razorpay",require("./route/RazorpayRoute"))

app.listen(PORT,function(){
    console.log("server is running on server",PORT)
});