import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    minLength:4
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  gender: {
    type: String,
    require: true,
    enum: ["male", "female"]
  },
  profilePic: {
    type: String,
    default: "",
  },
  //createdAt,updatedAt =>Member since (created At)
},{timestamps:true});

const User = mongoose.model("User",userschema);

export default User;
