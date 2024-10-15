import express from 'express';
import { getSholtenUrl,addShortenUrl } from '../controller/shorternController.js';
const router = express.Router();

router.route('/').post(addShortenUrl)
                 

export default router