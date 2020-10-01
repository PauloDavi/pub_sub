import mongoose from 'mongoose';

interface MessageData {
  id: string;
  data: string;
}

const MessageSchema = new mongoose.Schema<MessageData>(
  {
    id: {
      type: String,
      require: true,
    },
    data: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model('Message', MessageSchema);
