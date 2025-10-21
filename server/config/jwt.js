import jwt from 'jsonwebtoken'

const JWT_SECRET=process.env.JWT_SECRET 
const JWT_EXPRIE_IN='7d'

export const generateToken = (user) => {
    return jwt.sign({
        id:user_id,
        email:user.email,
    username:user.username  },
JWT_SECRET,{expiresIn:JWT_EXPRIE_IN})
}