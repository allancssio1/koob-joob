import { ExecutionContext, createParamDecorator } from '@nestjs/common';
import { AuthRequest } from '../models/AuthRequest';
import { User } from '../../user/entities/user.entity';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext): User => {
    const request = context.switchToHttp().getRequest<AuthRequest>();
    console.log('🚀 ~ file: current-user.decorator.ts:8 ~ request:', request);

    return request.user;
  },
);
