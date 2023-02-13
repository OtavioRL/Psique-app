import express from 'express';
import { addProductController, getAllProductsController, getProductByIdController, deleteProductByIdController, updateProductByIdController } from '../Controllers/Products.controller';

const router = express.Router();

router.get('/', getAllProductsController);
router.get('/:id', getProductByIdController);
router.post('/add', addProductController);
router.delete('/:id', deleteProductByIdController);
router.put('/:id', updateProductByIdController);

export default router;