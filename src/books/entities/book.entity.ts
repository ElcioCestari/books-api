import { Document } from 'mongoose';

export class Book extends Document {
  name: string;
  isbn: string;
  author: string;
}
