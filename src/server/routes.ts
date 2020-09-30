import { Router } from 'express';

import messagesController from './controllers/MessagesController';

const router = Router();

router.post('/messages', messagesController.create);

export default router;
