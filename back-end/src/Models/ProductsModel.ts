import { Schema, model } from 'mongoose';
import IProduct from '../Interfaces/IProduct';

const productSchema = new Schema<IProduct>({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  imageUrl: { type: String, required: true }
});

const Product = model<IProduct>('Product', productSchema);

export default Product;