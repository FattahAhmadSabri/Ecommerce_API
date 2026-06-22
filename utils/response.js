const errorResponse = (res, message, statusCode = 500) => {
  return res.status(statusCode).json({
    status: false,
    message,
  });
};

module.exports = errorResponse;


const successResponse = (
  res,
  message,
  data = null,
  statusCode = 200
) => {
  return res.status(statusCode).json({
    status: true,
    message,
    data,
  });
};

module.exports={errorResponse,successResponse}