import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
// import { InMemoryModule } from '../repositories/inMemory/inMemoryUser.module';
import { User } from './entities/user.entity';
import { randomUUID } from 'crypto';

describe.skip('Testing UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
      // imports: [InMemoryModule],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', async () => {
    const user: User = {
      name: 'Allan Cássio',
      email: 'allan.cassio1@gmail.com',
      id: await randomUUID(),
    };
    service.create(user);
  });
});
