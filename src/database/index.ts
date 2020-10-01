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
      'mongodb+srv://pauloDavi:50paulo50@cluster0.iimhn.mongodb.net/test?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useFindAndModify: true,
        useUnifiedTopology: true,
      },
    );
  }
}

export default new Database();
