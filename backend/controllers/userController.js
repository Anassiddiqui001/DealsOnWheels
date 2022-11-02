import sendToken from "../utils/jwtToken.js";
import User from "../models/userModel.js";

// Register a User
export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
  });
  sendToken(user, 201, res);
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
    sendToken(user, 200, res);
    console.log("loggedIn")
  }
};

// Get User Detail
export const profile = async (req, res, next) => {
  const user = await User.findById(req.user.id);

  res.status(200).json({
    success: true,
    user,
  });
};

// Get all users(admin)
export const getAllUser = async (req, res, next) => {
  const users = await User.find();

  res.status(200).json({
    success: true,
    users,
  });
};
