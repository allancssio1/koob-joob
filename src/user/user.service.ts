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
    const user = await this.prisma.user.findFirst({ where: { email } });
    return user || null;
  }
}
