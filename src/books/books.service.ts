import { Book } from './entities/book.entity';
import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BooksService {
  constructor(@InjectModel('Book') private readonly bookModel: Model<Book>) {}

  async create(createBookDto: CreateBookDto) {
    const b = new Book();
    b.author = createBookDto.author;
    b.isbn = createBookDto.isbn;
    b.name = createBookDto.name;

    const bookCreated = new this.bookModel(b);
    return await bookCreated.save();
  }

  async findAll() {
    return await this.bookModel.find().exec();
  }

  async findOne(id: string) {
    return await this.bookModel.findById(id);
  }

  async update(id: string, updateBookDto: UpdateBookDto) {
    const book = new Book();
    book.author = updateBookDto.author;
    book.isbn = updateBookDto.isbn;
    book.name = updateBookDto.name;
    await this.bookModel.updateOne({ _id: id }, book).exec();
    return this.bookModel.findById(id);
  }

  remove(id: string) {
    return `This action removes a #${id} book`;
  }
}
