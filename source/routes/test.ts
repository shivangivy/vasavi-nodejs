import express from 'express';
import controller from '../controllers/test.controller';

const router = express.Router();

router.get('/test', controller.serverHealthCheck);

export = router;
