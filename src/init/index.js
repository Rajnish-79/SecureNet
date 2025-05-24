const mongoose = require("mongoose");
const initData = require("./data.js");
const Guard = require("../models/Guard.js");
const dotenv = require('dotenv');
const connectDB = require("../config/db.js");


dotenv.config();
connectDB();



const initDB = async () => {
  await Guard.deleteMany({});
  await Guard.insertMany(initData.data);
  console.log("data was initialized");
};
initDB();