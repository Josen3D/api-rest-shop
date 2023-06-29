// import category model
import JobModel from "../models/job.model.js";

export const getAllJobs = async () => {
  const responseGet = await JobModel.findAll();
  return responseGet;
};

export const getOneJob = async (id) => {
  const responseGet = await JobModel.findOne({
    where: { idjob: id },
  });
  return responseGet;
};

export const createNewJob = async (puesto) => {
  const responseCreate = await JobModel.create(puesto);
  return responseCreate;
};

export const updateOneJob = async (id, categoryUpdated) => {
  const responseUpdate = await JobModel.update(categoryUpdated, {
    where: { idjob: id },
  });
  return responseUpdate;
};

export const deleteJob = async (id) => {
  const responseDelete = await JobModel.destroy({
    where: { idjob: id },
  });
  return responseDelete;
};
