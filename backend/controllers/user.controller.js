import User from "../models/user.model.js";

export const getUsersforSidebar = async(req,res)=>{
    try{
        const loggedInUserId = req.user._id;
        const filteredUsers = await User.find({
            _id: { $ne: loggedInUserId }
          }).select("-password");
          
        // const filteredUsers = await User.find();
        res.status(200).json(filteredUsers);

    }
    catch(error){
        console.log("error in getUsersforSidebar controller ", error.message);
        res.status(400).json({ error: "internal Server error" });
    }
}