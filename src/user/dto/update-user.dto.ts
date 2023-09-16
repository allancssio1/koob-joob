import { IsDateString, IsString, MaxLength } from 'class-validator';

export class UpdateUserDto {
  @IsString()
  name?: string;

  @IsString()
  @MaxLength(150, { message: 'maximum characters exceeded' })
  bio?: string;

  @IsDateString()
  birthDate?: Date;
}
