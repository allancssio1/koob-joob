import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { User } from '../user/entities/user.entity';
import { UserService } from 'src/user/user.service';
import { UserPayload } from './models/UserPayload';
import { JwtService } from '@nestjs/jwt';
import { UserToken } from './models/UserToken';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UserService,
    private readonly jwtService: JwtService,
  ) {}

  login(user: User): UserToken {
    console.log(' login ~ user:', user);
    const payload: UserPayload = {
      email: user.email,
      sub: user.id,
    };

    const jwtToken = this.jwtService.sign(payload);

    return {
      access_token: jwtToken,
    };
  }

  async validateUser(email: string) {
    console.log(
      '🚀 ~ file: auth.service.ts:31 ~ AuthService ~ validateUser ~ email:',
      email,
    );
    const user = await this.userService.findByEmail(email);
    console.log(
      '🚀 ~ file: auth.service.ts:31 ~ AuthService ~ validateUser ~ user:',
      user,
    );

    if (!user || typeof user === 'undefined' || user === null) {
      throw new Error('Email or password is incorrect.');
    }

    return {
      ...user,
    };
  }
}
