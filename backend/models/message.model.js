import mongoose from "mongoose";
import User from "./user.model.js";

const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },

  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: User,
    required: true,
  },
  
  message: {
    type: String,
    require: true,
  },

  //createdAt , updatedAt => message.createAt(); will give when message is created 
},{timestamps:true});


//create model
const Message = mongoose.model("Message",messageSchema);
export default Message;