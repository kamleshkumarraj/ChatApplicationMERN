import express from 'express';
import cookieParser from 'cookie-parser'; 
import cors from  'cors'
import { authenticationRouter } from './routes/authentication/authentication.router.js';

export const app = express();

app.use(express.json({
    limit : '1000kb'
}))

app.use(cookieParser())

app.use(cors({
    origin : 'http://localhost:5173',
    credentials : true,
    methods : ['GET','POST','PUT','DELETE']
}))
// now we define all routing.
app.use('/api/v1/auth',authenticationRouter)


//create middleware for error handling.
app.use((err , req ,res ,next) => {
    err.message = err.message || "Interval server error"
    err.status = err.status || 500

    res.status(err.status).json({
        success : false,
        message : err.message
    })
})