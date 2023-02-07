import express from 'express';
import { addProductController, getAllProductsController } from '../Controllers/Products.controller';

const router = express.Router();

router.get('/', getAllProductsController);
router.post('/add', addProductController);

export default router;