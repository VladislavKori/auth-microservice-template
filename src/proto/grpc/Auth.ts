// Original file: proto/auth.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CheckReply as _grpc_CheckReply, CheckReply__Output as _grpc_CheckReply__Output } from '../grpc/CheckReply';
import type { CheckRequest as _grpc_CheckRequest, CheckRequest__Output as _grpc_CheckRequest__Output } from '../grpc/CheckRequest';
import type { LoginReply as _grpc_LoginReply, LoginReply__Output as _grpc_LoginReply__Output } from '../grpc/LoginReply';
import type { LoginRequest as _grpc_LoginRequest, LoginRequest__Output as _grpc_LoginRequest__Output } from '../grpc/LoginRequest';
import type { RegisterReply as _grpc_RegisterReply, RegisterReply__Output as _grpc_RegisterReply__Output } from '../grpc/RegisterReply';
import type { RegisterRequest as _grpc_RegisterRequest, RegisterRequest__Output as _grpc_RegisterRequest__Output } from '../grpc/RegisterRequest';

export interface AuthClient extends grpc.Client {
  check(argument: _grpc_CheckRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_grpc_CheckReply__Output>): grpc.ClientUnaryCall;
  check(argument: _grpc_CheckRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_grpc_CheckReply__Output>): grpc.ClientUnaryCall;
  check(argument: _grpc_CheckRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_grpc_CheckReply__Output>): grpc.ClientUnaryCall;
  check(argument: _grpc_CheckRequest, callback: grpc.requestCallback<_grpc_CheckReply__Output>): grpc.ClientUnaryCall;
  
  login(argument: _grpc_LoginRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_grpc_LoginReply__Output>): grpc.ClientUnaryCall;
  login(argument: _grpc_LoginRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_grpc_LoginReply__Output>): grpc.ClientUnaryCall;
  login(argument: _grpc_LoginRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_grpc_LoginReply__Output>): grpc.ClientUnaryCall;
  login(argument: _grpc_LoginRequest, callback: grpc.requestCallback<_grpc_LoginReply__Output>): grpc.ClientUnaryCall;
  
  register(argument: _grpc_RegisterRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_grpc_RegisterReply__Output>): grpc.ClientUnaryCall;
  register(argument: _grpc_RegisterRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_grpc_RegisterReply__Output>): grpc.ClientUnaryCall;
  register(argument: _grpc_RegisterRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_grpc_RegisterReply__Output>): grpc.ClientUnaryCall;
  register(argument: _grpc_RegisterRequest, callback: grpc.requestCallback<_grpc_RegisterReply__Output>): grpc.ClientUnaryCall;
  
}

export interface AuthHandlers extends grpc.UntypedServiceImplementation {
  check: grpc.handleUnaryCall<_grpc_CheckRequest__Output, _grpc_CheckReply>;
  
  login: grpc.handleUnaryCall<_grpc_LoginRequest__Output, _grpc_LoginReply>;
  
  register: grpc.handleUnaryCall<_grpc_RegisterRequest__Output, _grpc_RegisterReply>;
  
}

export interface AuthDefinition extends grpc.ServiceDefinition {
  check: MethodDefinition<_grpc_CheckRequest, _grpc_CheckReply, _grpc_CheckRequest__Output, _grpc_CheckReply__Output>
  login: MethodDefinition<_grpc_LoginRequest, _grpc_LoginReply, _grpc_LoginRequest__Output, _grpc_LoginReply__Output>
  register: MethodDefinition<_grpc_RegisterRequest, _grpc_RegisterReply, _grpc_RegisterRequest__Output, _grpc_RegisterReply__Output>
}
