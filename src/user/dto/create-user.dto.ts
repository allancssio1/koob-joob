import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsEmail()
  email: string;

  @IsString()
  name: string;

  @IsString()
  @MinLength(0)
  @MaxLength(200, {
    message: 'character limit exceeded',
  })
  bio?: string;
}
