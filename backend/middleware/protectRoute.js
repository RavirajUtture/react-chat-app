import jwt from "jsonwebtoken"
import User from "../models/user.model.js";

export const protectRoute = async (req,res,next)=>{
  try{
    console.log("Cookies: ", req.cookies);



    const token = req.cookies.jwt;
    console.log("################token =====>",token);
    if(!token){
        return res.status(401).json({error:"Unauthorized, No token provided."});
    }
    const decoded = jwt.verify(token,process.env.JWT_SECRET);
    console.log("################token =====>",decoded);
    

    console.log("Cookies:", req.cookies);
    console.log("Decoded Token:", decoded);
    console.log("User:", req.user);





    if(!decoded){
        return res.status(401).json({error:"Unauthorized, Invalid token."});
    }
    const user = await User.findById(decoded.userId).select("-password"); //because we passes {userId} for creating web token
    if(!user){
        return res.status(401).json({error:"user not found."});
    }

    //if all is correct then set req.body = user
    req.user = user;
    //call next function
    next(); // means  router.post('/send/:id',protectRoute,sendMessage); sendMessage will get called..
    
  }
  catch(error){
    console.log("error in protectRoute controller ", error.message);
    res.status(400).json({ error: "internal Server error" });
  }
}

export default protectRoute;