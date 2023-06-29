// import matched data from express validator
import { matchedData } from "express-validator";
// import category services
import {
  getAllClients,
  getOneClient,
  createNewClient,
  updateOneClient,
  deleteClient,
} from "../services/client.service.js";

// import httpError handler
import { handleHttpError } from "../utils/httpError.handler.js";

/**
 * Obtiene los registros de la DB
 * @param {*} req
 * @param {*} res
 */
export const getItems = async (req, res) => {
  try {
    const response = await getAllClients();
    res.status(200).json({ data: response });
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEMS: " + error);
  }
};

/**
 * Devuelve un registro de la DB por su id
 * @param {*} req
 * @param {*} res
 */
export const getItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const response = await getOneClient(id);

    if (!response) {
      return handleHttpError(res, "ITEM_NOT_FOUND ", 404);
    }

    res.status(200).json(response);
  } catch (error) {
    handleHttpError(res, "ERROR_GET_ITEM: " + error);
  }
};

/**
 * Crea un nuevo registro en la DB
 * @param {*} req
 * @param {*} res
 */
export const createItem = async (req, res) => {
  try {
    // saves only the clean data that corresponds to the validation done
    const body = matchedData(req);
    const response = await createNewClient(body);
    res.status(201).json(response);
  } catch (error) {
    handleHttpError(res, "ERROR_CREATE_ITEM: " + error);
  }
};

/**
 * Actualiza un registro en la DB
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const updateItem = async (req, res) => {
  try {
    // saves only the clean data that corresponds to the validation done
    const { id, ...body } = matchedData(req);
    const response = await updateOneClient(id, body);

    if (response <= 0) {
      return handleHttpError(res, "ITEM_NOT_FOUND ", 404);
    }

    const item = await getOneClient(id);
    res.status(200).json(item);
  } catch (error) {
    handleHttpError(res, "ERROR_UPDATE_ITEM: " + error);
  }
};

/**
 * Elimina un registro de la DB
 * @param {*} req
 * @param {*} res
 * @returns
 */
export const deleteItem = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    const response = await deleteClient(id);

    if (response <= 0) {
      return handleHttpError(res, "ITEM_NOT_FOUND ", 404);
    }

    res.status(200).json({ message: "item deleted successfully" });
  } catch (error) {
    handleHttpError(res, "ERROR_DELETE_ITEM: " + error);
  }
};
