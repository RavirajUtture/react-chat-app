import mongoose from "mongoose";

const connectToMongoDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_DB_URI);
    console.log("Database connected successfully.");
  } catch (error) {
    console.log("Error in connecting database.", error.message);
  }
};

export default connectToMongoDB;
