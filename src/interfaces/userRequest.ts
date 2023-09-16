import { Request } from 'express';
import { UserFromJwt } from 'src/auth/models/UserFromJwt';

export interface UserRequest extends Request {
  user: UserFromJwt;
}
