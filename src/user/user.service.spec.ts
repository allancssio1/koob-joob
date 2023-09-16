import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { randomUUID } from 'crypto';
import { PrismaService } from '../prisma/prisma.service';
import { User } from './entities/user.entity';

const users: User[] = [
  {
    id: randomUUID(),
    name: 'mock-name-1',
    email: 'mock-email-1@email.com',
    password: 'password-mock-1' || null,
    bio: 'bio-mock-1' || null,
    birthDate: new Date('1991-01-26T22:23:04.209Z') || null,
    created_at: new Date(),
  },
  {
    id: randomUUID(),
    name: 'mock-name-2',
    email: 'mock-email-2@email.com',
    password: 'password-mock-2' || null,
    bio: 'bio-mock-2' || null,
    birthDate: new Date('1991-01-26T22:23:04.209Z') || null,
    created_at: new Date(),
  },
  {
    id: randomUUID(),
    name: 'mock-name-3',
    email: 'mock-email-3@email.com',
    password: 'password-mock-3' || null,
    bio: 'bio-mock-3' || null,
    birthDate: new Date('1991-01-26T22:23:04.209Z') || null,
    created_at: new Date(),
  },
];

const db = {
  user: {
    findMany: jest.fn().mockResolvedValue(users),
    findUnique: jest.fn().mockResolvedValue(users[0]),
    findFirst: jest.fn().mockResolvedValue(users[0]),
    create: jest.fn().mockReturnValue(users[0]),
    update: jest.fn().mockResolvedValue({
      ...users[0],
      name: 'mock-name-4',
      bio: 'bio-mock-4',
    }),
    delete: jest.fn().mockResolvedValue('User Deleted'),
  },
};

describe('Testing UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService, { provide: PrismaService, useValue: db }],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', async () => {
    expect(service).toBeDefined();
  });

  it('Should be get user by email', async () => {
    const user = await service.findByEmail('mock-email@email.com');
    expect(user).toEqual(
      expect.objectContaining({
        email: 'mock-email-1@email.com',
      }),
    );
  });

  it('Should be create user', async () => {
    const user = await service.create({
      name: 'mock-name-1',
      email: 'mock-emai1-1@email.com',
      password: 'passwor-mock',
    });

    expect(user.id).toEqual(expect.any(String));
    expect(user).toEqual(
      expect.objectContaining({
        name: 'mock-name-1',
        email: 'mock-email-1@email.com',
        password: null,
      }),
    );
  });

  it('Should be get all users', async () => {
    const usersArray = await service.findAll();

    expect(usersArray).toEqual([
      expect.objectContaining({
        name: 'mock-name-1',
        email: 'mock-email-1@email.com',
      }),
      expect.objectContaining({
        name: 'mock-name-2',
        email: 'mock-email-2@email.com',
      }),
      expect.objectContaining({
        name: 'mock-name-3',
        email: 'mock-email-3@email.com',
      }),
    ]);
  });

  it('Should be get user by id', async () => {
    const user = await service.findUserById(users[0].id);

    expect(user).toEqual(
      expect.objectContaining({
        name: 'mock-name-1',
      }),
    );
  });

  it('Should be update user', async () => {
    const user = await service.update(users[0].id, {
      name: 'mock-name-4',
      bio: 'bio-mock-4',
    });

    expect(user).toEqual(
      expect.objectContaining({
        name: 'mock-name-4',
        bio: 'bio-mock-4',
      }),
    );
  });

  it('Should be possible delete user', async () => {
    const response = await service.remove(users[0].id);

    expect(response).toEqual('User Deleted');
  });
});
