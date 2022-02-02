import { Connection } from 'mongoose';
import { AuthorSchema } from '../author.schema';

export const authorsProviders = [
  {
    provide: 'AUTHOR_MODEL',
    useFactory: (connection: Connection) =>
      connection.model('Author', AuthorSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
