import { RepositoryMethods } from "../db/repository.js";
import { userToDTO } from "../model/dto.js";
import { hashPassword } from "../utils/password.js";
import { createJWTToken } from "../utils/token.js";

export const registerService = async (
    repo: RepositoryMethods,
    data: {
        email: string;
        password: string;
    }
) => {
    if (await repo.getUserByEmail(data.email)) {
        throw new Error("email busy")
    }

    const result = await repo.createUser(data.email, await hashPassword(data.password))
    if (result === null) {
        throw new Error("creation error")
    };

    return {
        ...userToDTO(result),
        authToken: createJWTToken(userToDTO(result)),
    }
}