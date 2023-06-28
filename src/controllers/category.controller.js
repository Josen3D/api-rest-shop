// import category services
import {
  getAllCategories,
  getOneCategory,
} from "../services/category.service.js";

/**
 * Obtiene los registros de la DB
 * @param {*} req
 * @param {*} res
 */
export const getItems = async (req, res) => {
  try {
    const response = await getAllCategories();
    res.status(200).json({ data: response });
  } catch (error) {
    console.log("Error get items", error);
  }
};

/**
 * Devuelve un registro de la DB por su id
 * @param {*} req
 * @param {*} res
 */
export const getItem = async (req, res) => {
  try {
    const id = req.params.id;
    const response = await getOneCategory(id);
    res.status(200).json({ data: response });
  } catch (error) {
    console.log("Error get items", error);
  }
};
