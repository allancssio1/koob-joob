import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-local';
import { AuthService } from '../auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authService: AuthService) {
    super({ usernameField: 'email' });
  }

  validate(email: string) {
    console.log(
      '🚀 ~ file: local.strategy.ts:13 ~ LocalStrategy ~ validate ~ email:',
      email,
    );
    return this.authService.validateUser(email);
  }
}
