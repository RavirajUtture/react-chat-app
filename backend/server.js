import express from "express";
import dotenv from "dotenv"; //env
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js"

import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const PORT = process.env.PORT || 8000;
const app = express();

app.get("/", (req, res) => {
  res.send("server is ready!!!");
});

//****  auth routes */
// app.get("/api/auth/login",(req,res)=>{
//     console.log("login route...");
// });

// app.get("/api/auth/signup",(req,res)=>{
//     console.log("signup route...");
// });

// app.get("/api/auth/logout",(req,res)=>{
//     console.log("logout route...");
// });


//middleware for getting data from frontend.
app.use(express.json());
app.use(cookieParser());


//to avoid this use middleware
app.use("/api/auth", authRoutes);
app.use("/api/messages",messageRoutes);

// app.listen(PORT, () =>
//   console.log(`Server is running on the port ${PORT}`)

// );



app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server is running on the port ${PORT}`);
});
