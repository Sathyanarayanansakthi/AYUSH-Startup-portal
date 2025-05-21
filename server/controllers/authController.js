import User from '../models/userModel.js'
import bcrpt from 'bcrypt'

export const signUp = async (req,res) =>{
    try {
        const {username,email,password} =req.body;
        if(!username || !email || !password) {
            return res.status(400).json({error:"Fill all the fields"})
        }
        if (password.length < 6) {
            return res.status(400).json({error:"Password Need to be 6 char long"})
        }

    } catch (error) {
        
    }
}