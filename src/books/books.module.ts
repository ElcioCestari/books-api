import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { BooksService } from './services/books.service';
import { BooksController } from './controllers/books.controller';
import { booksProviders } from './providers/book.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [BooksService, ...booksProviders],
})
export class BooksModule {}
