import * as mongoose from 'mongoose';

export const BookSchema = new mongoose.Schema({
  name: String,
  isbn: String,
  author: String,
});
