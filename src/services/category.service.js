// import category model
import CategoryModel from "../models/category.model.js";

export const getAllCategories = async () => {
  try {
    const responseGet = await CategoryModel.findAll();
    return responseGet;
  } catch (error) {
    console.log("Error get service: ", error);
  }
};

export const getOneCategory = async (id) => {
  try {
    const responseGet = await CategoryModel.findOne({
      where: { idcategory: id },
    });
    return responseGet;
  } catch (error) {
    console.log("Error get service: ", error);
  }
};

export const createNewCategory = async (category) => {
  try {
    const responseCreate = await CategoryModel.create(category);
    return responseCreate;
  } catch (error) {
    console.log("Error create service: ", error);
  }
};

export const updateOneCategory = async (id, categoryUpdated) => {
  try {
    const responseUpdate = await CategoryModel.update(categoryUpdated, {
      where: { idcategory: id },
    });
    return responseUpdate;
  } catch (error) {
    console.log("Error update service: ", error);
  }
};

export const deleteCategory = async (id) => {
  try {
    const responseDelete = await CategoryModel.destroy({
      where: { idcategory: id },
    });
    return responseDelete;
  } catch (error) {
    console.log("Error creadeletete service: ", error);
  }
};
