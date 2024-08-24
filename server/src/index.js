import { app } from "./app.js";
import dotenv from 'dotenv'
import { databaseConnect } from "./db/dbConnection.js";

//configuration of env file.
dotenv.config({
    path : '.env'
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