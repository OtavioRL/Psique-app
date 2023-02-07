import express from 'express';
import addProductController from '../Controllers/Products.controller';

const router = express.Router();

router.post('/add', addProductController);

export default router;