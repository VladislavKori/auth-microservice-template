import pg from "pg";
import { dbConfig } from "../config/config.js";
const { Pool } = pg

export const createDatabase = async (): Promise<pg.Pool> => {
    const pool = new Pool({
        user: dbConfig.user,
        password: dbConfig.password,
        host: dbConfig.host,
        port: dbConfig.port,
        database: dbConfig.database,
    })
    await pool.query('SELECT NOW()')
    return pool
}