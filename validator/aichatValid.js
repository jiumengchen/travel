const { body } = require('express-validator');

exports.aichat = [
    body('content')
    .notEmpty().withMessage('不能为空')
    .isString().withMessage('必须是字符串')
]