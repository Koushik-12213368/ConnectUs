const jwt = require("jsonwebtoken");

// Current implementation (likely this)
module.exports.createSecretToken = (id) => {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: "7d",
  });
};

// CHANGE TO THIS - ensure property name matches what middleware expects
module.exports.createSecretToken = (id) => {
  return jwt.sign({ id: id }, process.env.TOKEN_KEY, {  // Note: { id: id }
    expiresIn: "7d",
  });
};