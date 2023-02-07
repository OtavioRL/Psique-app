import { addProductService, getAllProdutsService, getProductByIdService } from '../Services/Products.service';
import { Request, Response } from 'express';

const addProductController = async (req: Request, res: Response) => {
  const newProduct = req.body;
  const result = await addProductService(newProduct);

  res.status(result.status).json(result.message);
};

const getAllProductsController = async (_req: Request, res: Response) => {
  const result = await getAllProdutsService();
  
  res.status(result.status).json(result.message)
};

const getProductByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await getProductByIdService(id);
  
  res.status(result.status).json(result.message)
};

export {
  addProductController,
  getAllProductsController,
  getProductByIdController
};