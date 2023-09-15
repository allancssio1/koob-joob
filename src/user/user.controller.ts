import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { IsPublic } from '../auth/decorators/is-public.decorator';

@Controller()
export class UserController {
  constructor(private readonly userService: UserService) {}

  @IsPublic()
  @Post('user')
  create(@Body() createUserDto: CreateUserDto) {
    return 'foi';
    // return this.userService.create(createUserDto);
  }

  @IsPublic()
  @Get()
  getHello() {
    return 'foi';
  }
}
