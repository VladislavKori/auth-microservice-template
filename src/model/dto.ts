import { IUser, IUserDTO } from "./index.js";

export const userToDTO = (user: IUser): IUserDTO => {
    return {
        id: user.id,
        email: user.email
    }
}