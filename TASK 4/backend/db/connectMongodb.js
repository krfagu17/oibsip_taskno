import mongoose from "mongoose";

const connectMongodb = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI,{ serverSelectionTimeoutMS: 5000 })
        console.log("Connected to MongoDB")
    } catch (error) {
        console.log("error while connecting mongodb",error)
    }
}

export default connectMongodb;