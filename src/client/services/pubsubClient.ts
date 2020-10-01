import { PubSub } from '@google-cloud/pubsub';
import { resolve } from 'path';
import Message from '../schemas/Message';

interface DataMessage {
  id: string;
  data: string;
  attributes: string;
  ack(): void;
}

interface IPubSub {
  init(): void;
}

class ClientPubSub implements IPubSub {
  public pubsub: PubSub;

  constructor() {
    this.init();
  }

  init() {
    this.pubsub = new PubSub({
      keyFilename: resolve(__dirname, '..', '..', '..', 'key.json'),
    });

    const subscription = this.pubsub.subscription(
      process.env.SUBSCRIPETION_NAME || '',
    );

    const messageHandler = async (message: DataMessage) => {
      await Message.create({
        id: message.id,
        data: message.data,
      });
      message.ack();
    };

    subscription.on('message', messageHandler);
  }
}

export default new ClientPubSub();
