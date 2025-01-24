import mongoose from "mongoose";

const dbConnection = async () =>{
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected successfully on host: ${connectionInstance.connection.host}`);
    } catch (error) {
        console.error(`Error connecting to the database: ${error.message}`);
        process.exit(1); // Exit the process with a failure code
    }
}

export default dbConnection