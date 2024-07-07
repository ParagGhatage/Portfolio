import mongoose from "mongoose";

export async function ConnectDB(){
    try {
        mongoose.connect(`${process.env.NEXT_PUBLIC_MONGO_URI}${process.env.NEXT_PUBLIC_DB_NAME}`)
        const connection = mongoose.connection
        connection.on('connected',() =>{
            console.log("MongoDB connected!")
        })
        connection.on('error',(err) =>{
            console.log('MongoDB connection error!')
            console.log('Please make sure DB is up and running.',err)
            process.exit()
        })
    } catch (error) {
        console.log("Something went wrong in connecting to DB")
        console.log(error)
    }
}