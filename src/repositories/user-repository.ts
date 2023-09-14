import { User } from 'src/user/entities/user.entity';

export interface UserRepository {
  create(data: User): Promise<User>;
  findByEmail(email: string): Promise<User>;
}
