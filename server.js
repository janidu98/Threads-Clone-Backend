import express, { json } from 'express';
import dotenv from 'dotenv';
import connectDB from './db/connectDB.js';
import cookieParser from 'cookie-parser';
import userRoutes from './routes/userRoutes.js';
import postRoutes from './routes/postRoutes.js';

dotenv.config();

connectDB();

const app = express();

// to parse the JSON data in the req.body
app.use(express.json()) 
// to parse form data in the req.body
app.use(express.urlencoded( { extended: true } ));
app.use(cookieParser());

//routes
app.use('/api/users', userRoutes);
app.use("/api/posts", postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`)); 