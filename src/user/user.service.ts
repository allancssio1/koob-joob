import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.prisma.user.create({ data: createUserDto });

    return {
      ...user,
    };
  }

  async findByEmail(email: string) {
    console.log(
      '🚀 ~ file: user.service.ts:18 ~ UserService ~ findByEmail ~ email:',
      email,
    );
    const user = await this.prisma.user.findUnique({ where: { email } });
    console.log(
      '🚀 ~ file: user.service.ts:19 ~ UserService ~ findByEmail ~ user:',
      user,
    );
    return user || null;
  }
}
