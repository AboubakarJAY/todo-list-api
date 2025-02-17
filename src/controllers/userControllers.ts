import { Request, Response } from "express";
import User from "../models/User";
import { generateToken } from "../utils/generateToken";
import { hashPassword } from "../utils/hachePassword";

const bcrypt = require("bcryptjs");

export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;

    //verifie si l'utilisateur existe deja
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    const hashedPassword = await hashPassword(password);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    const token = generateToken(newUser._id.toString(), newUser.email);
    res.status(201).json(token);
  } catch (error) {
    res.status(500).json({ error: "server errors" });
  }
};

export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isMatch = await bcrypt.compare(password, user.password);
    console.log(user.password);
    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }
    const token = generateToken(user._id.toString(), user.email);
    res.status(200).json(token);
  } catch (error) {
    res.status(500).json({ error: "server errors" });
  }
};
