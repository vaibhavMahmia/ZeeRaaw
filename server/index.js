import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import cors from 'cors';
import {connectionDB}  from './config/db.js';
import userRoutes from './routes/user.js'

// configure env
dotenv.config();

// database config
connectionDB();

// rest object
const app = express();

// middlewares
app.use(express.json({ limit: '30mb', extended: true }));
app.use(express.urlencoded({ limit: '30mb', extended: true }));
//app.use(morgan('dev'));
app.use(cors());
// routes
app.use('/user', userRoutes);

// rest api
app.get('/', (req, res)=>{
    res.status(200).json({
        message:"Welcome to ZeeRaaw"
    });
});

//PORT
const PORT = process.env.PORT || 8080;

//run listen
app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`.yellow);
});