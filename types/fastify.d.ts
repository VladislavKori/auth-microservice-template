import { FastifyInstance } from "fastify";
import pg from "pg"

declare module 'fastify' {
    interface FastifyInstance {
        db: pg.Pool
    }
}