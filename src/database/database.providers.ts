import * as mongoose from 'mongoose';

export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect('mongodb+srv://elcio:elcio@cluster0.0wakd.mongodb.net/books-db?retryWrites=true&w=majority'),
  },
];
