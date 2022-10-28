
import User from "../models/userModel.js";

// Register a User
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  // checking if user has given password and email both

  if (!email || !password) {
    console.log("Please Enter Email & Password");
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    console.log("Invalid email or password");
  }
  
  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    console.log("Invalid email or password");
  }
  else{
    console.log("loggedIn")
  }
};
