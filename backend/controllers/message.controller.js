import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  // console.log("message sent successfully.", req.params.id);

  try {
    console.log("debugging start.......");

    console.log("########### Full request body:", req.body);

    const { message } = req.body;
    console.log("########### printing message", { message });

    const receiverId = req.params.id; //renaming id to receiver id
    console.log("########### printing reveiver", receiverId);

    const senderId = req.user._id; //we have added this in middleware protected route.
    console.log("########### printing senderId", senderId);
    console.log("Sender ID:", senderId);
    console.log("Receiver ID:", receiverId);
    console.log("Message:", message);

    console.log("Sender ID:", senderId);
    console.log("Receiver ID:", receiverId);

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    //if there is no conversation then add sender and receiver id.
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      //create object of message
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      
      conversation.messages.push(newMessage._id); // Then add it to the conversation
    }


    //this wont run in parallel
    // await newMessage.save(); // Save the message first
    // await conversation.save();

    //SOCKET IO FUNCTIONALITY WILL GO HERE..

    await Promise.all([newMessage.save(),conversation.save()]); //this will run in parallel.


    return res.status(201).json(newMessage);
  } catch (error) {
    console.log("error in sendMessage controller ", error.message);
    res.status(400).json({ error: "internal Server error" });
  }
};


//get message

export const getMessages = async(req,res)=>{
  try{
    const{id:userToChatId} = req.params;
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
      participants: { $all:[senderId,userToChatId]},
    }).populate("messages");   //acutal messages

    if(!conversation){
      return res.status(200).json([]);
    }
 
    res.status(200).json(conversation.messages);
    

  }
  catch(error){
    console.log("error in sendMessage controller ", error.message);
    res.status(400).json({ error: "internal Server error" });
  }
}
