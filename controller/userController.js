const { validationResult } = require("express-validator");
const userServer = require("../dao/userServer");
exports.login = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      code: 400,
      message: errors.errors.map((err) => `${err.path}:${err.msg}`).join(","),
      ok: false,
    });
  }
  const data = req.body;
  await userServer.login(data, res);
};

exports.register = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      code: 400,
      message: errors.errors.map((err) => `${err.path}:${err.msg}`).join(","),
      ok: false,
    });
  }
  await userServer.register(data, res);
};
