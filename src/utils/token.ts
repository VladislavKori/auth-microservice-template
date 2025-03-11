import jwt from "jsonwebtoken"
import { IUserDTO } from "../model/index.js"
import { secretKey } from "../config/config.js"


export const createJWTToken = (userDTO: IUserDTO): string => {
    return jwt.sign(userDTO, secretKey, { expiresIn: "1Year" })
}

export const decodeJWTToken = (authToken: string) => {
    return jwt.verify(authToken, secretKey)
}