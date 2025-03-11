import Fastify from "fastify"
import { LoginValidationScheme, RegisterValidationScheme } from "./schemes.js"
import { createRepository } from "../db/repository.js"
import { registerService } from "../services/register.js"
import { loginService } from "../services/login.js"
import { checkService } from "../services/check.js"
import { createCookie, getTokenFromCookies } from "../utils/cookie.js"

export const router = (fastify: Fastify.FastifyInstance) => {
    const repository = createRepository(fastify.db)

    fastify.post<{ Body: { email: string, password: string } }>(
        "/register",
        RegisterValidationScheme,
        async (req, rep) => {
            const { email, password } = req.body;
            try {
                const user = await registerService(repository, { email, password })
                rep.header("set-cookie", createCookie(user.authToken)).send(user)
            } catch (error) {
                rep.status(400).send(error)
            }
        }
    )

    fastify.post<{ Body: { email: string, password: string } }>(
        "/login",
        LoginValidationScheme,
        async (req, rep) => {
            const { email, password } = req.body;
            try {
                const user = await loginService(repository, { email, password })
                rep.header("set-cookie", createCookie(user.authToken)).send(user)
            } catch (error) {
                rep.status(400).send(error)
            }
        }
    )

    fastify.get("/check", async (req, rep) => {
        try {
            if (!req.headers.cookie) throw new Error("cookies not found")
            const authToken = getTokenFromCookies(req.headers.cookie)
            const user = await checkService(repository, { authToken })
            rep.send(user)
        } catch (error) {
            rep.status(400).send(error)
        }
    })
}