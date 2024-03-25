import mongoose from "mongoose";

const credentials = new mongoose.Schema({
  First_Name: String,
  Last_Name: String,
  Email: String,
  Password: String,
});
export const User = mongoose.model("User", credentials);
