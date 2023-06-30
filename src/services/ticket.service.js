// import product model
import TicketModel from "../models/ticket.model.js";

export const getAllTickets = async () => {
  const responseGet = await TicketModel.findAll();
  return responseGet;
};

export const getOneTicket = async (id) => {
  const responseGet = await TicketModel.findOne({
    where: { consecutive: id },
  });
  return responseGet;
};

export const createNewTicket = async (ticket) => {
  const responseCreate = await TicketModel.create(ticket);
  return responseCreate;
};

export const updateOneTicket = async (id, ticketUpdated) => {
  const responseUpdate = await TicketModel.update(ticketUpdated, {
    where: { consecutive: id },
  });
  return responseUpdate;
};

export const deleteTicket = async (id) => {
  const responseDelete = await TicketModel.destroy({
    where: { consecutive: id },
  });
  return responseDelete;
};
