import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name:String,
  age:Number,
  body:String
})

export default mongoose.model("ExampleSchema",schema)