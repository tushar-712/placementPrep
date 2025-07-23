import express from"express";
import cors from "cors";
import 'dotenv/config'
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";
import authRouter from "./routes/authRoutes.js"
import userRouter from "./routes/userRouts.js"


const app= express();

const port=process.env.PORT ||3000
connectDB();

app.use(express.json());
app.use(cookieParser());

const allowedOrigins=['http://localhost:5173']
app.use(cors({origin: allowedOrigins ,credentials : true}))

// api endpoint
app.get('/',(req,res)=>{ res.send('Hello World') })
app.use('/api/auth',authRouter)
 app.use('/api/user',userRouter)


app.listen(port,()=>console.log(`server runnig at ${port}`))
