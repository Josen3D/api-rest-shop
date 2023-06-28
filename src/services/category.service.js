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
