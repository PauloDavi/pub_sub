import { Request, Response } from 'express';

import pubsub from '../services/pubsubServer';

class MessagesController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { topicName, message } = req.body;

    const dataBuffer = Buffer.from(message);

    const messageId = await pubsub
      .topic(topicName || process.env.DEFAULT_TOPIC_NAME)
      .publish(dataBuffer);
    return res.json({ messageId });
  }
}

export default new MessagesController();
