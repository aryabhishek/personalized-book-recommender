import { Schema, model, connect } from "mongoose";

connect("mongodb://localhost:27017/");

const userSchema = new Schema({
  username: String,
  password: String,
  fname: String,
  lname: String,
});

const userModel = model("User", userSchema);

export { userModel };
