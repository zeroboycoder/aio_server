const jwt = require("jsonwebtoken");
const SECRET_KEY = "AIO_PROJECT";
const response = require("../utils/response");

exports.generateJwt = (id) => {
  return jwt.sign({ id }, SECRET_KEY);
};

exports.verifyToken = () => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(403).send({
      status: "error",
      msg: "There's no token.",
      data: "",
    });
  }
  const decoded = jwt.verify(token, SECRET_KEY);
  console.log(decoded);
};
