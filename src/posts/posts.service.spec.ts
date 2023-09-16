import { Test, TestingModule } from '@nestjs/testing';
import { PostsService } from './posts.service';
import { randomUUID } from 'crypto';
import { Post } from '@prisma/client';
import { PrismaService } from '../prisma/prisma.service';

const users = [
  {
    id: randomUUID(),
  },
  {
    id: randomUUID(),
  },
];

const posts: Post[] = [
  {
    id: randomUUID(),
    content: 'content-mock-1',
    userId: users[0].id,
    created_at: new Date(),
  },
  {
    id: randomUUID(),
    content: 'content-mock-2',
    userId: users[0].id,
    created_at: new Date(),
  },
  {
    id: randomUUID(),
    content: 'content-mock-3',
    userId: users[1].id,
    created_at: new Date(),
  },
];

const db = {
  post: {
    findMany: jest.fn().mockResolvedValue(posts),
    findUnique: jest.fn().mockResolvedValue(posts[0]),
    create: jest.fn().mockReturnValue(posts[0]),
    update: jest.fn().mockResolvedValue({
      ...posts[0],
      content: 'content-mock-4',
    }),
    delete: jest.fn().mockResolvedValue('Post Deleted'),
  },
};

describe.skip('PostsService', () => {
  let service: PostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PostsService,
        {
          provide: PrismaService,
          useValue: db,
        },
      ],
    }).compile();

    service = module.get<PostsService>(PostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('Should be create post', async () => {});
  it('Should be get all posts', async () => {});
  it('Should be get post by post id', async () => {});
  it('Should be get all posts from user id', async () => {});
  it('Should be update post ', async () => {});
  it('Should be delete post', async () => {});
});
