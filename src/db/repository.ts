import pg from "pg"
import { IUser } from "../model/index.js";

export type RepositoryMethods = {
    createUser: (email: string, hashPassword: string) => Promise<IUser | null>;
    getUserByEmail: (email: string) => Promise<IUser | null>;
    getUserById: (id: number) => Promise<IUser | null>;
}

export const createRepository = (database: pg.Pool): RepositoryMethods => {
    const createUser = async (email: string, hashPassword: string) => {
        const query = `insert into users(email, password) values ($1, $2) returning *;`;
        try {
            const result = await database.query<IUser>(query, [email, hashPassword]);
            return result.rows[0]
        } catch (error) {
            console.error(error)
        }
        return null
    }

    const getUserByEmail = async (email: string) => {
        const query = `select id, email, password from users where email=$1;`;
        try {
            const result = await database.query<IUser>(query, [email]);
            return result.rows[0] || null
        } catch (error) {
            console.error(error)
        }
        return null
    }

    const getUserById = async (id: number) => {
        const query = `select id, email, password from users where id=$1;`;
        try {
            const result = await database.query<IUser>(query, [id]);
            return result.rows[0] || null
        } catch (error) {
            console.error(error)
        }
        return null
    }
    
    return {
        createUser,
        getUserByEmail,
        getUserById
    }
}