import { DatabaseModule } from './../database/database.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { BooksService } from './services/books.service';
import { BooksController } from './controllers/books.controller';
import { BookSchema } from './schemas/book.schema';
import { booksProviders } from './providers/book.providers';

@Module({
  //imports: [MongooseModule.forFeature([{ name: 'Book', schema: BookSchema }])],
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [BooksService, ...booksProviders],
})
export class BooksModule {}
