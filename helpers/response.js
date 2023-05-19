exports.success = (message, results, statusCode) => {
    return {message,  code: statusCode, results,};
  };

  exports.error = (message, statusCode) => {
  const codes = [200, 201, 400, 401, 404, 403, 422, 500];  // request code

  
  const findCode = codes.find((code) => code == statusCode);// Get matched code

  if (!findCode) statusCode = 500;
  else statusCode = findCode;

  return {
    message,   code: statusCode,  
  };
};

exports.validation = (errors) => {
  return { message: "Validation errors", code: 422, errors,};
};
