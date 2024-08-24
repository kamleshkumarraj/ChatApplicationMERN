import mongoose from 'mongoose';

export const databaseConnect = async () => {
    try { 
       const connect = await mongoose.connect(process.env.MONGODB_URL)
       console.log(`Database Connect successfully on port ${connect.connection.port} and host ${connect.connection.host}`)
    }
    catch (error){
        console.log(`Database Connect failed on due to error : ${error}`)
    }
}