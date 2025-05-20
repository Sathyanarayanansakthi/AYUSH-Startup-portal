import express from 'express'
import dotenv from "dotenv";
import mongoose from 'mongoose';

const app =express()

// Port  Settings 
dotenv.config()
const PORT=process.env.PORT || 4000
app.listen (PORT,()=>console.log(`This Server is Running on ${PORT}`))