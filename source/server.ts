import http from 'http';
import bodyParser from 'body-parser';
import express from 'express';
import logging from './config/logging';
import config from './config/config';
import sampleRoutes from './routes/sample';
import testRoutes from './routes/test';
import resourceRoutes from './routes/testing';
import indexRoutes from './routes/indexing';
import postRoutes from './routes/post.routes';
import userRoutes from './routes/user.routes';
import { dbConfig } from './config/sequelizeConfig';

const NAMESPACE = 'Server';
const router = express();

//dbConfig.sync;
// force: true will drop the table if it already exists

dbConfig.sync({ force: false }).then(() => {
    console.log('Drop and Resync Database with { force: true }');
    //initial();
});
/** Log the request */
router.use((req, res, next) => {
    /** Log the req */
    logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

    res.on('finish', () => {
        /** Log the res */
        logging.info(NAMESPACE, `METHOD: [${req.method}] - URL: [${req.url}] - STATUS: [${res.statusCode}] - IP: [${req.socket.remoteAddress}]`);
    });

    next();
});

/** Parse the body of the request */
router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

/** Rules of our API */
router.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }

    next();
});

/** Routes go here */
router.use('/api/sample', sampleRoutes);
router.use('/api/sample', testRoutes);
router.use('/api/sample', resourceRoutes);
router.use('/api/sample', indexRoutes);
router.use('/api/samples', postRoutes);
router.use('/api/user', userRoutes);

/** Error handling */
router.use((req, res, next) => {
    const error = new Error('Not found');

    res.status(404).json({
        message: error.message
    });
});

const httpServer = http.createServer(router);

httpServer.listen(config.server.port, () => logging.info(NAMESPACE, `Server is running ${config.server.hostname}:${config.server.port}`));
