import 'dotenv/config'

export const dbConfig = {
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT || '3211'),
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
};

export const keyName = process.env.COOKIE_KEY_NAME || "auth_token"
export const secretKey = process.env.JWT_SECRET_KEY || "secretkey"
export const saltRounds = parseInt(process.env.SALT_ROUNDS || "10")