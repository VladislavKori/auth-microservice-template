// Original file: proto/auth.proto

import type { Long } from '@grpc/proto-loader';

export interface UserDTO {
  'id'?: (number | string | Long);
  'email'?: (string);
}

export interface UserDTO__Output {
  'id': (string);
  'email': (string);
}
