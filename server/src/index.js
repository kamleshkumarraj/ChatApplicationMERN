import { app } from "./app.js";
import dotenv from 'dotenv'
import { databaseConnect } from "./db/dbConnection.js";
import cloudinary from 'cloudinary'



//configuration of env file.
dotenv.config({
    path : '.env'
})

cloudinary.config({
    cloud_name : process.env.CLOUDINARY_NAME,
    api_key : process.env.CLOUDINARY_API_KEY,
    api_secret : process.env.CLOUDINARY_API_SECRET
})

//initially route.
app.get('/', (req , res ) => {
    res.json({
        success : true,
        message : 'Everything is right'
    })
})

//connect db then start server.
databaseConnect()
.then(() => {
    app.listen(process.env.PORT , () => {
        console.log(`App is listening on port ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log(`Server can't be start becuase database connection is failed.`)
})