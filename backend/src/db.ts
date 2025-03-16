import { Schema, model, connect } from "mongoose";

connect("mongodb://localhost:27017/");

const userSchema = new Schema({
  username: String,
  password: String,
  fname: String,
  lname: String,
});

const userPreferencesSchema = new Schema({
  username: String,
  pref: [String]
})

const userModel = model("User", userSchema);
const userPreferencesModel = model("Pref", userPreferencesSchema);

export { userModel, userPreferencesModel };
