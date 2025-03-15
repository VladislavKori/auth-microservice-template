import type * as grpc from '@grpc/grpc-js';
import type { MessageTypeDefinition } from '@grpc/proto-loader';

import type { AuthClient as _grpc_AuthClient, AuthDefinition as _grpc_AuthDefinition } from './grpc/Auth';

type SubtypeConstructor<Constructor extends new (...args: any) => any, Subtype> = {
  new(...args: ConstructorParameters<Constructor>): Subtype;
};

export interface ProtoGrpcType {
  grpc: {
    Auth: SubtypeConstructor<typeof grpc.Client, _grpc_AuthClient> & { service: _grpc_AuthDefinition }
    CheckReply: MessageTypeDefinition
    CheckRequest: MessageTypeDefinition
    Error: MessageTypeDefinition
    LoginReply: MessageTypeDefinition
    LoginRequest: MessageTypeDefinition
    RegisterReply: MessageTypeDefinition
    RegisterRequest: MessageTypeDefinition
    UserDTO: MessageTypeDefinition
  }
}

