import { RepositoryMethods } from "../db/repository.js";
import { userToDTO } from "../model/dto.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import { createJWTToken } from "../utils/token.js";

export const loginService = async (
    repo: RepositoryMethods, 
    data: {
        email: string;
        password: string;
    }
) => {
        const findedUser = await repo.getUserByEmail(data.email)
        if (findedUser === null) {
            throw new Error("user not found")
        }
        
        if (!await comparePassword(findedUser.password, data.password)) {
            throw new Error("incorrect password")
        }

        return {
            ...userToDTO(findedUser),
            authToken: createJWTToken(userToDTO(findedUser)),
        }
}