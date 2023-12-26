const bcrypt = require("bcrypt");
const { adminModel } = require("../models");
const jwt = require("../middlewares/jwt");
const response = require("../utils/response");

exports.createAdmin = async (req, res) => {
  try {
    const { userCode, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await adminModel.create({
      userCode,
      password: hashedPassword,
    });
    const token = jwt.generateJwt(user._id);
    delete user.password;
    return response.success(res, "", { user, token });
  } catch (error) {
    return response.error(res, error.message, {});
  }
};

exports.adminLogin = async (req, res) => {
  try {
    const { userCode, password } = req.body;
    const user = await adminModel.findOne({
      userCode,
    });
    if (!user) {
      return response.error(res, "User not found", {});
    }
    const result = await bcrypt.compare(password, user.password);
    if (result === false) {
      return response.error(res, "Password isn't valid", {});
    }
    delete user.password;
    const token = jwt.generateJwt(user._id);
    return response.success(res, "", { user, token });
  } catch (error) {
    return response.error(res, error.message, {});
  }
};
