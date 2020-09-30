import { Request, Response } from 'express';

import pubsub from '../../services/pubsub';

class MessagesController {
  public async create(req: Request, res: Response): Promise<Response> {
    const { topicName, message } = req.body;

    const dataBuffer = Buffer.from(message);

    const messageId = await pubsub.topic(topicName).publish(dataBuffer);
    return res.json({ messageId });
  }
}

export default new MessagesController();
