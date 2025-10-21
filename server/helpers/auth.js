// Import bcrypt
import bcrypt from 'bcrypt';

// Hashing Password
export const hashPassword = async (password) => {
    try {
        const saltRounds = 12;
        const hash = await bcrypt.hash(password, saltRounds);
        return hash;
    } catch (error) {
        throw new Error(`Error hashing password: ${error.message}`);
    }
};

// Compare Password
export const comparePassword = async (password, hashedPassword) => {
    try {
        const isMatch = await bcrypt.compare(password, hashedPassword);
        return isMatch;
    } catch (error) {
        throw new Error(`Error comparing password: ${error.message}`);
    }
};
