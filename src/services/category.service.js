// import category model
import CategoryModel from "../models/category.model.js";

export const getAllCategories = async () => {
  const responseGet = await CategoryModel.findAll();
  return responseGet;
};

export const getOneCategory = async (id) => {
  const responseGet = await CategoryModel.findOne({
    where: { idcategory: id },
  });
  return responseGet;
};

export const createNewCategory = async (category) => {
  const responseCreate = await CategoryModel.create(category);
  return responseCreate;
};

export const updateOneCategory = async (id, categoryUpdated) => {
  const responseUpdate = await CategoryModel.update(categoryUpdated, {
    where: { idcategory: id },
  });
  return responseUpdate;
};

export const deleteCategory = async (id) => {
  const responseDelete = await CategoryModel.destroy({
    where: { idcategory: id },
  });
  return responseDelete;
};
