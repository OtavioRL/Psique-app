import { addProductService, getAllProdutsService, getProductByIdService, deleteProductByIdService, updateProductByIdService } from '../Services/Products.service';
import { Request, Response } from 'express';

const addProductController = async (req: Request, res: Response) => {
  const newProduct = req.body;
  const result = await addProductService(newProduct);

  res.status(result.status).json(result.message);
};

const getAllProductsController = async (_req: Request, res: Response) => {
  const result = await getAllProdutsService();
  
  res.status(result.status).json(result.message);
};

const getProductByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await getProductByIdService(id);
  
  res.status(result.status).json(result.message);
};

const deleteProductByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await deleteProductByIdService(id);
  
  res.status(result.status).json(result.message);
};

const updateProductByIdController = async (req: Request, res: Response) => {
  const { id } = req.params;
  const newProduct = req.body;
  const result = await updateProductByIdService(id, newProduct);
  
  res.status(result.status).json(result.message);
};

export {
  addProductController,
  getAllProductsController,
  getProductByIdController,
  deleteProductByIdController,
  updateProductByIdController
};