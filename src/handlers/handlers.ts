import pg from "pg"
import { createRepository } from "../db/repository.js"
import { registerService } from "../services/register.js"
import { loginService } from "../services/login.js"
import { checkService } from "../services/check.js"
import { createCookie, getTokenFromCookies } from "../utils/cookie.js"
import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js"
import { RegisterRequest } from "../proto/grpc/RegisterRequest.js"
import { RegisterReply } from "../proto/grpc/RegisterReply.js"
import { LoginReply } from "../proto/grpc/LoginReply.js"
import { LoginRequest } from "../proto/grpc/LoginRequest.js"
import { CheckReply } from "../proto/grpc/CheckReply.js"
import { CheckRequest } from "../proto/grpc/CheckRequest.js"

export const Handlers = (database: pg.Pool) => {
    const repository = createRepository(database)

    async function Register(call: ServerUnaryCall<RegisterRequest, RegisterReply>, callback: sendUnaryData<RegisterReply>) {
        const { email, password } = call.request;
        try {
            if (!email || email?.length === 0) throw new Error("email length error")
            if (!password || password?.length === 0) throw new Error("password length error")
            const user = await registerService(repository, { email, password })
            callback(null, {
                user: {
                    id: user.id,
                    email: user.email,
                },
                authToken: user.authToken
            });
        } catch (error) {
            callback(null, {
                error: error
            });
        }

    }

    async function Login(call: ServerUnaryCall<LoginRequest, LoginReply>, callback: sendUnaryData<LoginReply>) {
        const { email, password } = call.request;
        try {
            if (!email || email?.length === 0) throw new Error("email length error")
            if (!password || password?.length === 0) throw new Error("password length error")
            const user = await loginService(repository, { email, password })
            callback(null, {
                user: {
                    id: user.id,
                    email: user.email,
                },
                authToken: user.authToken
            });
        } catch (error) {
            callback(null, {
                error: error
            });
        }
    }

    async function Check(call: ServerUnaryCall<CheckRequest, CheckReply>, callback: sendUnaryData<CheckReply>) {
        const { cookie } = call.request;
        try {
            if (!cookie) throw new Error("cookies not found")
            const authToken = getTokenFromCookies(cookie)
            const user = await checkService(repository, { authToken })
            callback(null, {
                user: {
                    id: user.id,
                    email: user.email,
                },
            });
        } catch (error) {
            callback(null, {
                error: error
            });
        }
    }

    return {
        Register,
        Login,
        Check
    }
}