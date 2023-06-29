// import product model
import ProductModel from "../models/product.model.js";

export const getAllProducts = async () => {
  const responseGet = await ProductModel.findAll();
  return responseGet;
};

export const getOneProduct = async (id) => {
  const responseGet = await ProductModel.findOne({
    where: { code: id },
  });
  return responseGet;
};

export const createNewProduct = async (product) => {
  const responseCreate = await ProductModel.create(product);
  return responseCreate;
};

export const updateOneProduct = async (id, productUpdated) => {
  const responseUpdate = await ProductModel.update(productUpdated, {
    where: { code: id },
  });
  return responseUpdate;
};

export const deleteProduct = async (id) => {
  const responseDelete = await ProductModel.destroy({
    where: { code: id },
  });
  return responseDelete;
};
