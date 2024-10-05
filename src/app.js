import express from 'express';
import  authRouter from "./routers/auth";
import { connectDB } from './config/db';
import dotenv from "dotenv";
import morgan  from 'morgan';

dotenv.config();
const app = express();
//midleware
app.use(express.json());
app.use(morgan("dev"));

//connect db
connectDB(process.env.DB_URI)

//routers
app.use('/api',authRouter);

export const viteNodeApp = app;