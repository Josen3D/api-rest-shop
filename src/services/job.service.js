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

export const createNewJob = async (job) => {
  const responseCreate = await JobModel.create(job);
  return responseCreate;
};

export const updateOneJob = async (id, jobUpdated) => {
  const responseUpdate = await JobModel.update(jobUpdated, {
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
