import { IsString } from 'class-validator';

export class CreateBookDto {
  @IsString()
  name: string;

  @IsString()
  isbn: string;

  @IsString()
  author: string;
}
