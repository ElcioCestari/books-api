import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { AuthorsController } from './authors.controller';
import { authorsProviders } from './providers/author.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [AuthorsController],
  providers: [AuthorsService, ...authorsProviders],
})
export class AuthorsModule {}
