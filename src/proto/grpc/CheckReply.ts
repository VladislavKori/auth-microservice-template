// Original file: proto/auth.proto

import type { UserDTO as _grpc_UserDTO, UserDTO__Output as _grpc_UserDTO__Output } from '../grpc/UserDTO';
import type { Error as _grpc_Error, Error__Output as _grpc_Error__Output } from '../grpc/Error';

export interface CheckReply {
  'user'?: (_grpc_UserDTO | null);
  'error'?: (_grpc_Error | null);
}

export interface CheckReply__Output {
  'user': (_grpc_UserDTO__Output | null);
  'error': (_grpc_Error__Output | null);
}
