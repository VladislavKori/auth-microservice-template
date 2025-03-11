import { RepositoryMethods } from "../db/repository.js";
import { userToDTO } from "../model/dto.js";
import { comparePassword, hashPassword } from "../utils/password.js";
import { decodeJWTToken } from "../utils/token.js";

export const checkService = async (
    repo: RepositoryMethods,
    data: {
        authToken: string
    }
) => {
    const tokenData = decodeJWTToken(data.authToken);
    if (typeof tokenData === "string") {
        throw new Error("token decode error")
    }

    if (!("id" in tokenData)) {
        throw new Error("id not found")
    }

    const findedUser = await repo.getUserById(tokenData.id)
    if (findedUser === null) {
        throw new Error("user not found")
    }

    return userToDTO(findedUser)
}