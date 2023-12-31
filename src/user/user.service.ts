import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from '../prisma/prisma.service';
import { hash } from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
      password: await hash(createUserDto.password, 6),
    };

    const user = await this.prisma.user.create({
      data,
    });

    return {
      ...user,
      password: null,
    };
  }

  async findByEmail(email: string) {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return user || null;
  }

  async findUserById(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });
    return user ?? null;
  }

  async findAll() {
    const user = await this.prisma.user.findMany();
    return user ?? null;
  }

  async update(id: string, data: UpdateUserDto) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) throw new Error('User not found!');

    const userUpdated = await this.prisma.user.update({
      where: { id },
      data,
    });

    return userUpdated ?? null;
  }

  async remove(id: string) {
    const user = await this.prisma.user.findUnique({ where: { id } });

    if (!user) throw new Error('User not found!');

    await this.prisma.user.delete({ where: { id } });

    return 'User Deleted';
  }
}
