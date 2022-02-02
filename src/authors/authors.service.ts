import { Author } from './entities/author.entity';
import { Model } from 'mongoose';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';

@Injectable()
export class AuthorsService {
  constructor(@Inject('AUTHOR_MODEL') private authorModel: Model<Author>) {}

  async create(createAuthorDto: CreateAuthorDto) {
    const author = new this.authorModel(createAuthorDto);
    return await author.save();
  }

  async findAll() {
    return await this.authorModel.find().exec();
  }

  async findOne(id: string) {
    const content = await this.authorModel.findById(id);
    if (!content) {
      throw new HttpException(
        `Author with ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return content;
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto) {
    const author: Author = await this.authorModel.findByIdAndUpdate(id, {
      name: this.authorModel.name,
    });
    if (!author)
      throw new HttpException(
        `Author with ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    return author;
  }

  async remove(id: string) {
    const author: Author = await this.authorModel.findByIdAndRemove(id);
    if (!author)
      throw new HttpException(
        `Book with ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    return author;
  }
}
