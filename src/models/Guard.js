const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const guardSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  experties: String,
  image: {
    type:String,
    default: "https://5.imimg.com/data5/SELLER/Default/2021/8/WE/EZ/TG/124413545/35181dc7-5f52-42ab-8d73-7d5caa9f7609-500x500.jpg",
    set: (v) =>
      v === ""
        ? "https://5.imimg.com/data5/SELLER/Default/2021/8/WE/EZ/TG/124413545/35181dc7-5f52-42ab-8d73-7d5caa9f7609-500x500.jpg"
        : v,
  },
  phone: Number,
  address: String,
  city: String,
});

const Guard = mongoose.model("Guard", guardSchema);
module.exports = Guard;