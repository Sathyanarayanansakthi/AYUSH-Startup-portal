import express from 'express'
import {signUp} from '../controllers/authController.js'
import User from '../models/userModel.js'

const router=express.Router

router.post('/signup',signUp)


export default router ;