const express = require("express");
const app = express();
const mongoose = require("mongoose");
// const Listing = require("./models/listing.js");
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const dotenv = require('dotenv');
const connectDB = require("./src/config/db.js");
const methodOverride = require("method-override");
const ejsMate =require("ejs-mate");

// const User = require('./src/models/user.js');

const PORT = process.env.PORT || 8080;












app.set("view engine","ejs");
app.set("views",path.join(__dirname,"src/views"));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname,"/src/public")));
app.use(express.json());


app.get("/" ,(req,res) =>{
    res.render("./index/index.ejs");
});
app.get("/about" ,(req,res) =>{
    res.render("./index/about.ejs");
});
app.get("/services" ,(req,res) =>{
    res.render("./index/service.ejs");
});
app.get("/guards" ,(req,res) =>{
    res.render("./index/guard.ejs");
});
app.get("/contact" ,(req,res) =>{
    res.render("./index/contact.ejs");
});

app.listen( PORT, ()=>{
    console.log(`Server is listening to port ${PORT} `);
});