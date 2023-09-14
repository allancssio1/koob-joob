import { IsEmail, IsString, MaxLength, MinLength } from 'class-validator';
import { User } from '../entities/user.entity';

export class CreateUserDto extends User {
  @IsEmail()
  email: string;

  @IsString()
  @MinLength(1)
  @MaxLength(200, {
    message: 'character limit exceeded',
  })
  password: string;
}
