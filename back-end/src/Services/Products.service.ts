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

export default addProductService;