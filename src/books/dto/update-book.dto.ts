import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';
import { CreateBookDto } from './create-book.dto';

export class UpdateBookDto extends PartialType(CreateBookDto) {
  name?: string;
  isbn?: string;
  author?: string;
}
