const express = require('express');
const connectDB = require('./db/db_connection'); // Make sure path is correct
const User = require('./models/userModel');  // Ensure this path is correct

const app = express();

// Connect to MongoDB
connectDB();

// Function to add user
const addUser = async () => {
  try {
    const newUser = await User.create({
      name: "zeeshan",
      email: "noemail@gmail.com"
    });
    console.log("User added:", newUser);
  } catch (error) {
    console.log("Error adding user:", error);
  }
};

// Add user on start
addUser();

app.listen(3000, () => {
  console.log("Server is running on port 2000");
});
