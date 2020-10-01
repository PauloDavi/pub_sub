import { Router } from 'express';

import messageController from './controllers/MessageController';

const router = Router();

router.get('/messages/:id', messageController.find);
router.get('/messages', messageController.list);
router.delete('/messages/:id', messageController.delete);

export default router;
