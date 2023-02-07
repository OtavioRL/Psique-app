import express from 'express';
import { addProductController, getAllProductsController, getProductByIdController } from '../Controllers/Products.controller';

const router = express.Router();

router.get('/', getAllProductsController);
router.get('/:id', getProductByIdController);
router.post('/add', addProductController);

export default router;