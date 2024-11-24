import JWT from "jsonwebtoken";

const generateTokenAndSetCookie = (userId, res) => {
  const token = JWT.sign({ userId }, process.env.JWT_SECRET, {  // we will use this token for authorization
    expiresIn: "15d",
  });

  res.cookie("jwt", token, {
    maxAge: 15 * 24 * 60 * 60,
    httpOnly: true, //to prevent xss attacks cross scripting attacks
    sameSite: true, //to prevent CSRF attacks cross site-request forgery attacks
    secure: process.env.NODE_ENV !== "development" //will change in production
  });
};
export default generateTokenAndSetCookie;
