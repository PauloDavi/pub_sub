import mongoose, { Mongoose } from 'mongoose';

interface IDatabase {
  init(): Promise<void>;
}

class Database implements IDatabase {
  public mongoConnection: Mongoose;

  constructor() {
    this.init();
  }

  async init() {
    this.mongoConnection = await mongoose.connect(
      process.env.URI_CONNECTION || '',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      },
    );
  }
}

export default new Database();
