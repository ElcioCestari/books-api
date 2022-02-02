import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseModule } from './database/database.module';
import { AuthorsModule } from './authors/authors.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://elcio:elcio@cluster0.0wakd.mongodb.net/books-db?retryWrites=true&w=majority'),
    BooksModule,
    DatabaseModule,
    AuthorsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
