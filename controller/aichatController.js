const { validationResult } = require("express-validator");
const aichatServer = require('../dao/aichatServer')
exports.aichat = (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      code: 400,
      message: errors.errors.map((err) => `${err.path}:${err.msg}`).join(","),
      ok: false,
    });
  }
  const {content} = req.body;
  aichatServer.aichat(content,res)
};
