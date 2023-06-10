import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyUserToken = async (req, res, next) => {
  // grab the cookie header created in login
  const token = req.cookies.accessToken;
  if (!token) {
    return res.status(401).json("Authentication failed. No linked user found");
  }
  try {
    // make sure the original token was not tampered
    const payload = jwt.verify(token, process.env.JWTkey);

    // set the request id to payload id (assigned id as payload when creating jwtToken in authentication.js)
    req.id = payload.id;
  } catch (error) {
    console.log(error);
    return res.status(403).json("Authorization failed. Cannot do that action!");
  }
  next();
};
