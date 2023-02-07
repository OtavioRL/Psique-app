import addProductService from '../Services/Products.service';
import { Request, Response } from 'express';

const addProductController = async (req: Request, res: Response) => {
  const newProduct = req.body;
  const result = await addProductService(newProduct);

  res.status(result.status).json(result.message);
};

export default addProductController;