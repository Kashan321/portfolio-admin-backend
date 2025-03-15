import mongoose from "mongoose";

export const connectDb = () => {
    const Mongo_URI = process.env.MONGO_URI
    try {
        const db = mongoose.connect("mongodb+srv://kashan3241:kashan@cluster0.x5am9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log("db connected")
    } catch (error) {
        console.log("error connecting DB", error)
    }
}

connectDb()
export default connectDb
