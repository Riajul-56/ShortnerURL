import mongoose from "mongoose";
console.log(process.env.MONGO_URI);


const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI); 
    console.log("MongoDB Connected");
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
