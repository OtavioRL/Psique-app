import { addProductService, getAllProdutsService } from '../Services/Products.service';
import { Request, Response } from 'express';

const addProductController = async (req: Request, res: Response) => {
  const newProduct = req.body;
  const result = await addProductService(newProduct);

  res.status(result.status).json(result.message);
};

const getAllProductsController = async (req: Request, res: Response) => {
  const result = await getAllProdutsService();
  
  res.status(result.status).json(result.message)
};

export {
  addProductController,
  getAllProductsController
};