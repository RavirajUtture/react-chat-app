import User from "../models/user.model.js";

export const signup = async (req, res) => {
  try {
    // console.log("signupUser");
    const {fullName, username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) {
      res.status(400).json({ error: "password Don't match" });
    }

    const user = await User.findOne({username});
    if (user) {
      return 
      res.status(400).json({ error: "username already exists" });
    }
    //hash password here.

    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    //add the new user data
    const newUser = new User({
      fullName,
      username,
      password,
      gender,
      profilePic: gender === "male" ? boyProfilePic : girlProfilePic,
    });
    //save to database
    await newUser.save();
    res.status(201).json({
      _id: newUser._id,
      username: newUser.username,
      profilePic: newUser.profilePic,
      gender: newUser.gender,
    });
  } catch (error) {
    console.log("error in signup controller ", error.message);
    res.status().json({ error: "internal Server error" });
  }
};

export const login = async (req, res) => {
    
  console.log("loginUser");
  res.send("login successfull");
};

export const logout = async (req, res) => {
  console.log("logoutUser");
};
