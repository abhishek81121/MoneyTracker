import mongoose from "mongoose";
import { models } from "mongoose";
const credentials = new mongoose.Schema({
  First_Name: String,
  Last_Name: String,
  Email: String,
  Password: String,
});
export const User = mongoose.models.User || mongoose.model("User", credentials);
