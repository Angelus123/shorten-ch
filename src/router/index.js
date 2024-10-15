import express from'express';
import shortenRoutes from'./shortenRoutes.js';
import getshortenRoutes from'./getShortenRoutes.js';

const routes = express.Router();
routes.use('/shorten', shortenRoutes)
routes.use('/', getshortenRoutes)

export default routes