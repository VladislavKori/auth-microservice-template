import grpc from "@grpc/grpc-js"
import protoLoader from "@grpc/proto-loader"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { ProtoGrpcType } from "./proto/auth.js";
import { Handlers } from "./handlers/handlers.js";
import { createDatabase } from "./db/database.js";
import { Port, Host } from "./config/config.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PROTO_PATH = __dirname + "/../proto/auth.proto";

const packageDefinition = protoLoader.loadSync(
    PROTO_PATH,
    {
        keepCase: true,
        longs: String,
        enums: String,
        defaults: true,
        oneofs: true
    });
const authProto = (grpc.loadPackageDefinition(
    packageDefinition
) as unknown) as ProtoGrpcType;

var server = new grpc.Server();

const { Register, Login, Check } = Handlers(await createDatabase())

server.addService(authProto.grpc.Auth.service, {
    login: Login,
    register: Register,
    check: Check
});

server.bindAsync(`${Host}:${Port}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`server started on: ${Host}:${port}`)
});