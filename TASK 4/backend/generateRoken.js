import  jwt from "jsonwebtoken";

function generateToken() {
  return jwt.sign({name:"sam"}, "kumar", { expiresIn: "7h" });
}

export default generateToken;
