import mongoose from "mongoose";

require("dotenv").config();

const connecteDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (error) {
    console.error("Connetion error : ", error);
    process.exit(1);
  }
};

export default connecteDB;
