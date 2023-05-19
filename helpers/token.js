const logger = require("./logger");
const jwt = require("jsonwebtoken");

const getAccessToken = (result) => {
  try {
    const token = jwt.sign(
      { user_id: result._id, email: result.email },process.env.ACCESS_SECRET,
      {expiresIn: "1hours",}
      
    );
    return token;
  } catch (err) {
    logger.error(err.message);
    throw Error(err.message);
  }
};

const getRefreshToken = () => {};

module.exports = {getAccessToken,getRefreshToken,};
