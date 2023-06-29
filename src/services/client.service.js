// import product model
import ClientModel from "../models/client.model.js";

export const getAllClients = async () => {
  const responseGet = await ClientModel.findAll();
  return responseGet;
};

export const getOneClient = async (id) => {
  const responseGet = await ClientModel.findOne({
    where: { rfc: id },
  });
  return responseGet;
};

export const createNewClient = async (client) => {
  const responseCreate = await ClientModel.create(client);
  return responseCreate;
};

export const updateOneClient = async (id, clientUpdated) => {
  const responseUpdate = await ClientModel.update(clientUpdated, {
    where: { rfc: id },
  });
  return responseUpdate;
};

export const deleteClient = async (id) => {
  const responseDelete = await ClientModel.destroy({
    where: { rfc: id },
  });
  return responseDelete;
};
