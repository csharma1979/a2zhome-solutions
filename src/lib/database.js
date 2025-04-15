const mongoose = require("mongoose");
require("dotenv").config();
const Identity = require("../Models/Identity");


console.log(process.env.MONGODB_URL, "process.env.MONGODB_URL");

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("A2Zhome-solutions DB Connected successfully");
    await createHardcodedUsers();
  } catch (error) {
    console.log("A2Zhome-solutions DB  Connection Failed");
    console.error(error);
    process.exit(1);
  }
};

const createHardcodedUsers = async () => {
  try {
    // Check if the user already exists
    const existingUser = await Identity.findOne({
      email: "anishakumari200023@gmail.com",
    });
    if (existingUser) {
      console.log("User already exists. Skipping hardcoded user creation.");
      return;
    }

    const users = [
      {
        firstname: "Anisha",
        lastname: "Singh",
        email: "anishakumari200023@gmail.com",
        password: "password123", // Store the hashed password
      },
    ];

    // Insert the hardcoded user into the collection
    await Identity.insertMany(users);
    console.log("Hardcoded users inserted!");
  } catch (error) {
    console.error("Error inserting users: ", error);
  }
};

export default dbConnect;