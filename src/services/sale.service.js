// import product model
import SaleModel from "../models/sale.model.js";

export const getAllSale = async () => {
  const responseGet = await SaleModel.findAll();
  return responseGet;
};

export const getOneSale = async (id) => {
  const responseGet = await SaleModel.findOne({
    where: { id },
  });
  return responseGet;
};

export const createNewSale = async (sale) => {
  const responseCreate = await SaleModel.create(sale);
  return responseCreate;
};

export const updateOneSale = async (id, saleUpdated) => {
  const responseUpdate = await SaleModel.update(saleUpdated, {
    where: { id },
  });
  return responseUpdate;
};

export const deleteSale = async (id) => {
  const responseDelete = await SaleModel.destroy({
    where: { id },
  });
  return responseDelete;
};
