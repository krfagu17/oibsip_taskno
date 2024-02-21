import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './authRoutes.js';
import connectMongodb from './db/connectMongodb.js';

const app = express();
const port = 3000;

app.use(cors());
dotenv.config();
app.use(express.json());

app.use('/api/auth',authRoutes);

app.listen(port, () => {
    connectMongodb();
  console.log(`Server is running on port ${port}`);
  
});
