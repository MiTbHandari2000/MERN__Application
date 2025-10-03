import asyncHandler from "express-async-handler";
import mongoose from "mongoose";
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGODB_CONNECTION_URI);
    //   console.log(connect);

    console.log(`MONGODB CONNECTED SUCCESSFULLY ${connect.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

export default connectDb;
