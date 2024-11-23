import express from "express"
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();
// router.post('/login',(req,res)=>{
//     console.log("login route...");
//     res.send("Login Route...");
// });

router.post('/signup',signup);
router.post('/login',login);
router.post('/logout',logout);


export default router;