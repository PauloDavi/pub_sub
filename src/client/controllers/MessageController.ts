/* eslint-disable no-console */
import { Request, Response } from 'express';
import Message from '../schemas/Message';

class MessageController {
  public async find(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    const message = await Message.findOne({ id });

    return res.json(message);
  }

  public async list(req: Request, res: Response): Promise<Response> {
    const { data, createdAt, updatedAt } = req.body;

    const queryParams = {};

    if (data) Object.assign(queryParams, { data: new RegExp(data, 'i') });
    if (createdAt) Object.assign(queryParams, { createdAt });
    if (updatedAt) Object.assign(queryParams, { updatedAt });

    const messages = await Message.find(queryParams, null, {
      limit: 10,
    });

    return res.json(messages);
  }

  public async delete(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;

    await Message.findOneAndDelete({ id });

    return res.json({ message: 'mensagem apagada' });
  }
}

export default new MessageController();
