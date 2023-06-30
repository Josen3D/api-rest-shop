// import product model
import EmployeeModel from "../models/employee.model.js";

export const getAllEmployees = async () => {
  const responseGet = await EmployeeModel.findAll();
  return responseGet;
};

export const getOneEmployee = async (id) => {
  const responseGet = await EmployeeModel.findOne({
    where: { idkey: id },
  });
  return responseGet;
};

export const createNewEmployee = async (employee) => {
  const responseCreate = await EmployeeModel.create(employee);
  return responseCreate;
};

export const updateOneEmployee = async (id, employeeUpdated) => {
  const responseUpdate = await EmployeeModel.update(employeeUpdated, {
    where: { idkey: id },
  });
  return responseUpdate;
};

export const deleteEmployee = async (id) => {
  const responseDelete = await EmployeeModel.destroy({
    where: { idkey: id },
  });
  return responseDelete;
};
