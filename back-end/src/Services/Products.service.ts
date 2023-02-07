import Product from "../Models/ProductsModel";
import IProduct from "../Interfaces/IProduct";

const addProductService = async (newProduct: IProduct) => {
  try {
    const result = await Product.create<IProduct>(newProduct);

    return {status: 200, message: `Created sucessfully with id ${result._id}`};
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

export {
  addProductService,
  getAllProdutsService
};