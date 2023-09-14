import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UserRepository } from 'src/repositories/user-repository';

@Injectable()
export class UserService {
  constructor(private readonly repository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const data = {
      ...createUserDto,
    };

    const user = await this.repository.create(data);

    return {
      ...user,
    };
  }

  async findByEmail(email: string) {
    const user = await this.repository.findByEmail(email);
    return user || null;
  }
}
