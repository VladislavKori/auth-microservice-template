import bcrypt from "bcrypt";
import { saltRounds } from "../config/config.js";

export const hashPassword = async (password: string): Promise<string> => {
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt)
}

export const comparePassword = async (hashPassword: string, password: string): Promise<boolean> => {
    return await bcrypt.compare(password, hashPassword)
} 