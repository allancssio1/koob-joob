import { Injectable } from '@nestjs/common';
import { Prisma, PrismaClient } from '@prisma/client';
import { UserRepository } from 'src/repositories/user-repository';

@Injectable()
export class PrismaService implements UserRepository {
  async create(data: Prisma.UserCreateInput) {
    return await new PrismaClient().user.create({ data });
  }
  async findByEmail(email: string) {
    return await new PrismaClient().user.findFirst({ where: { email } });
  }
  // async onModuleInit.skip() {
  //   await this.$connect();
  // }
}
