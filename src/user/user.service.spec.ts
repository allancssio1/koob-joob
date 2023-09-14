import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { UserModule } from './user.module';

describe('Testing UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
      imports: [UserModule],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it.skip('should be defined', () => {
    expect(service).toBeDefined();
  });
});
