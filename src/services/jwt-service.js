import jwt from "jsonwebtoken";

const generateAccessToken = (workshop) =>
  jwt.sign(workshop, process.env.JWT_TOKEN_SECRET, { expiresIn: "ID" });

const verifyAccessToken = (token) =>
  jwt.verify(token, process.env.JWT_TOKEN_SECRET);

export default {
  generateAccessToken,
  verifyAccessToken,
};
