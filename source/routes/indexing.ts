import { Router } from 'express';
const router = Router();

import { indexWelcome } from '../controllers/indexController';

router.route('/testingpost').get(indexWelcome);

export default router;
