import { Book } from '../entities/book.entity';
import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { CreateBookDto } from '../dto/create-book.dto';
import { UpdateBookDto } from '../dto/update-book.dto';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
  //constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}
  constructor(@Inject('BOOK_MODEL') private bookModel: Model<Book>) {}

  async create(createBookDto: CreateBookDto) {
    const bookCreated = new this.bookModel(createBookDto);
    return await bookCreated.save();
  }

  async findAll() {
    return await this.bookModel.find().exec();
  }

  async findOne(id: string) {
    const content: Book = await this.bookModel.findById(id);
    if (!content) {
      throw new HttpException(
        `Book with ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    }
    return content;
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    const book: Book = await this.bookModel.findByIdAndUpdate(id, {
      name: updateBookDto.name,
      isbn: updateBookDto.isbn,
      author: updateBookDto.author,
    });
    if (!book)
      throw new HttpException(
        `Book with ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    return book;
  }

  async remove(id: string) {
    const book: Book = await this.bookModel.findByIdAndRemove(id);
    if (!book)
      throw new HttpException(
        `Book with ${id} not found`,
        HttpStatus.NOT_FOUND,
      );
    return book;
  }
}
