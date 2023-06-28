// handle the http errors and send an error message
export const handleHttpError = (
  res,
  message = "something went wrong",
  code = 403
) => {
  res.status(code);
  res.send(message);
};
