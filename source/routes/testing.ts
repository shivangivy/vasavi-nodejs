import express from 'express';
import controller from '../controllers/testing';

const router = express.Router();

router.get('/Message', controller.serverHealthCheck);

export = router;
