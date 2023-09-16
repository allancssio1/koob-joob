import { Injectable } from '@nestjs/common';
import { PostDto } from './dto/post.dto';
import { PrismaService } from '../prisma/prisma.service';
import { Post } from '@prisma/client';

@Injectable()
export class PostsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(data: PostDto, userId: string) {
    const post = await this.prisma.post.create({
      data: {
        ...data,
        userId,
      },
    });
    return post ?? null;
  }

  async findAll() {
    const posts: Post[] = await this.prisma.post.findMany();
    return posts ?? [];
  }

  async findOne(id: string, userId: string) {
    try {
      return await this.prisma.post.findUnique({ where: { id, userId } });
    } catch (error) {
      return 'Post not found, check if the user is logged in correctly.';
    }
  }

  async findAllByUserId(userId: string) {
    const posts = await this.prisma.post.findMany({
      where: { userId },
    });

    return posts ?? 'Post not found, check if the user is logged in correctly.';
  }

  async update(id: string, userId: string, data: PostDto) {
    try {
      return await this.prisma.post.update({
        where: { id, userId },
        data,
      });
    } catch (error) {
      return 'Post not updated, check if the user is logged in correctly.';
    }
  }

  async remove(id: string, userId: string) {
    try {
      await this.prisma.post.delete({ where: { id, userId } });

      return 'Post deleted.';
    } catch (error) {
      return 'Post not found to delete, check if the user is logged in correctly.';
    }
  }
}
