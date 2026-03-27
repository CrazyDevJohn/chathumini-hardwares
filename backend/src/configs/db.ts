import mongoose, { connect } from "mongoose";

const connectToDatabase = async (startServer: () => void) => {
    try {
        await connect(process.env.DATABASE_URL as string);
        startServer();
    } catch (error) {
        console.log("Error in connecting to database", error);
    }
};

export default connectToDatabase;
