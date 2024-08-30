import express, { urlencoded } from 'express';
import cookieParser from 'cookie-parser'; 
import cors from  'cors'
import { authenticationRouter } from './routes/authentication/authentication.router.js';
import { userRouter } from './routes/user/user.route.js';

export const app = express();

app.use(urlencoded({extended: true}))

app.use(express.json({
    limit : '1000kb'
}))

app.use(cookieParser())

app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true,
    methods : ['GET','POST','PUT','DELETE']
}))
// app.use(cors())
// now we define all routing.
app.use('/api/v1/auth',authenticationRouter)
app.use('/api/v1/user',userRouter)


//create middleware for error handling.
app.use((err , req ,res ,next) => {
    err.message = err.message || "Interval server error"
    err.status = err.status || 500

    res.status(err.status).json({
        success : false,
        message : err.message
    })
})