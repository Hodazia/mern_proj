import express from 'express'
import cors from 'cors'

import dotenv from 'dotenv'
import userRoutes from './routes/user.routes.js';
import blogRoutes from './routes/blog.routes.js';
import { connectDB } from './config/connectDB.js';
dotenv.config();

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
//
app.use('/images',express.static("uploads"))
app.get('/', (req,res) => {
    res.send("Hello to a route");
})

app.use('/user', userRoutes);
app.use('/blog', blogRoutes);

app.listen(3000,() => {
    connectDB();
    console.log("port is being listened");
})


