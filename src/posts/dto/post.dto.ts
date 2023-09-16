import { IsString, MaxLength, MinLength } from 'class-validator';
import { Post } from '../entities/post.entity';

export class PostDto extends Post {
  @IsString()
  @MinLength(1)
  @MaxLength(200)
  content: string;
}
