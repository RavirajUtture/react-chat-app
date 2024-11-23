import User from "../models/user.model.js";
import bcrypt from "bcryptjs"; //for hashing password.
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    // console.log("signupUser");
    const { fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      res.status(400).json({ error: "password Don't match" });
    }

    const user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ error: "username already exists" });
    }
    //hash password here.
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    //add the new user data

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });

    if (!fullName || !username || !password || !confirmPassword || !gender) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (newUser) {
      //generate JWT token
      generateTokenAndSetCookie(newUser._id, res);

      console.log("saving user data to database.");
      //save to database
      await newUser.save();
      console.log("user data is saved successfully.");

      return res.status(201).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePic: newUser.profilePic,
        gender: newUser.gender,
      });
    } else {
      res.status.json("Invalid user data.");
    }
  } catch (error) {
    console.log("error in signup controller ", error.message);
    res.status(400).json({ error: "internal Server error" });
  }
};

export const login = async (req, res) => {
  // console.log("loginUser");
  // res.send("login successfull");
  try {
    //get user data
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || " "
    ); //if no password found then bcrypt willl return  null string..

    //validation
    if (!user || !isPasswordCorrect) {
      res.status(400).json({ error: "Invalid username or password." });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(201).json({
      success: true,
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePic: user.profilePic,
      gender: user.gender,
    });
  } catch (error) {
    console.log("error in login controller ", error.message);
    res.status(400).json({ error: "internal Server error" });
  }
};

export const logout = async (req, res) => {
  // console.log("logoutUser");
  try {
    res.clearCookie("jwt", {
      maxAge: 0,
      httpOnly: true, //to prevent xss attacks cross scripting attacks
      sameSite: true, //to prevent CSRF attacks cross site-request forgery attacks
      secure: process.env.NODE_ENV !== "development", //will change in production
    });
    res.status(200).json({message:"Logged out successfully"});
  } catch (error) {
    console.log("error in logout controller ", error.message);
    res.status(400).json({ error: "internal Server error" });
  }
};
