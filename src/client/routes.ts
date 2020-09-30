import { Router } from 'express';

import messageListenController from './controllers/MessageListenController';

const router = Router();

router.post('/listen', messageListenController.create);

export default router;
