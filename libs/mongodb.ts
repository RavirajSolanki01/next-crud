import mongoose from "mongoose"

const connectMongoDB = () => {
    try {
        mongoose.connect(process.env.MONGO_URI!)
        console.log("COnnected to DB");

    } catch (error) {
        console.log(error, "ERROR");

    }
}
export default connectMongoDB;