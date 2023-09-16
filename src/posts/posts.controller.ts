import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
  Req,
} from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostDto } from './dto/post.dto';
import { UserRequest } from '../interfaces/userRequest';
import { IsPublic } from '../auth/decorators/is-public.decorator';

@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @Post()
  create(@Body() data: PostDto, @Req() request: UserRequest) {
    return this.postsService.create(data, request.user.id);
  }

  @IsPublic()
  @Get()
  findAll() {
    return this.postsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string, @Req() request: UserRequest) {
    return this.postsService.findOne(id, request.user.id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Req() request: UserRequest,
    @Body() data: PostDto,
  ) {
    return this.postsService.update(id, request.user.id, data);
  }

  @Get('find/user')
  findAllByUser(@Req() request: UserRequest) {
    return this.postsService.findAllByUserId(request.user.id);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() request: UserRequest) {
    return this.postsService.remove(id, request.user.id);
  }
}
