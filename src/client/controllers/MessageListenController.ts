/* eslint-disable no-console */
import { Request, Response } from 'express';

import pubsub from '../../services/pubsub';

interface DataMessage {
  id: string;
  data: string;
  attributes: string;
  ack(): void;
}

class MessageLitenController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { subscriptionName, timeout = 60 } = req.body;

    const subscription = pubsub.subscription(subscriptionName);

    const messages: DataMessage[] = [];

    const messageHandler = (message: DataMessage) => {
      console.log(`Received message ${message.id}:`);
      console.log(`\tData: ${message.data}`);
      console.log(`\tAttributes: ${message.attributes}`);
      messages.push(message);
      message.ack();
    };

    subscription.on('message', messageHandler);

    setTimeout(() => {
      subscription.removeListener('message', messageHandler);
      console.log(`${messages.length} message(s) received.`);
    }, timeout * 1000);

    return res.json({ listen: 'OK' });
  }
}

export default new MessageLitenController();
