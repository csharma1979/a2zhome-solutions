const Identity = require("../Models/Identity");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.loginUser = async (email , password) => {
  // const { email, password } = req.body; 

  try {
    console.log("Checking for user:", email)
    // Find the user by email
    const user = await Identity.findOne({ email });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or password" });
    }

    // Create a JWT token
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET || "your_jwt_secret",
      {
        expiresIn: "5h", // Token expiration time
      }
    );
    
    return { token };
    //res.json({ token });
  } catch (error) {
    console.error(error);
   return res.status(500).json({ message: "Server error" });
  }
};
