import bcrypt from 'bcrypt'

//Hashing Password 

export const hashPassword = async (password) =>{
    try {
        const salt = await bcrypt.genSalt(12)
        const hash = await bcrypt.hash(password,salt)
        return hash
    } catch (error) {
        throw new Error (`Error hashing Password`)
        
    }
}

//Compare Password 

export const comparePassword = async (password,hased) =>{
    try {
        const isMatch =await bcrypt.compare(password,hashed) 
        return isMatch
    } catch (error) {
        throw new Error (`Error Compare Password `)
    }
}