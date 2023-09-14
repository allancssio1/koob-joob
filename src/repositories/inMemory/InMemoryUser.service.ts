import { randomUUID } from 'crypto';
import { User } from 'src/user/entities/user.entity';
import { UserRepository } from '../user-repository';

export class InMemoryUser implements UserRepository {
  users: User[] = [];

  async create(createUserDto: User) {
    const userAlreadyExists = this.findByEmail(createUserDto.email);

    if (userAlreadyExists) {
      throw new Error('User Already Exists');
    }

    const user: User = {
      ...createUserDto,
      created_at: createUserDto.created_at ?? new Date(),
      id: randomUUID(),
    };

    this.users.push({
      ...user,
    });

    return user;
  }
  async findByEmail(email: string): Promise<User | null> {
    const user = await this.users.find((user) => user.email === email);
    return user || null;
  }
}
