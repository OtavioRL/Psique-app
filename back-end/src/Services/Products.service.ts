import Product from "../Models/ProductsModel";
import IProduct from "../Interfaces/IProduct";

const addProductService = async (newProduct: IProduct) => {
  try {
    const result = await Product.create<IProduct>(newProduct);

    return {status: 201, message: `Created sucessfully with id ${result._id}`};
  } catch(error: any) {

    return {status:  400, message: error.message};
  }  
};

const getAllProdutsService = async () => {
  try {
    const result = await Product.find();

    return { status: 200, message: result };
  } catch (error: any) {
    return { status: 500, message: error.message };
  }
};

const getProductByIdService = async (id: string) => {
  try {
    const result = await Product.findById(id);
    if (result === null) return { status: 404, message: 'Id not found in the database'}

    return { status: 200, message: result }
  } catch (error: any) {
    return { status: 400, message: error.message }
  }
};

const deleteProductByIdService = async (id: string) => {
  try {
    const result = await Product.deleteOne({ _id: id });

    return { status: 204, message: result }
  } catch (error: any) {
    return { status: 404, message: error.message }
  }
};

export {
  addProductService,
  getAllProdutsService,
  getProductByIdService,
  deleteProductByIdService
};