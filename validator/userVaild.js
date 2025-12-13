const { body } = require('express-validator');

exports.login = [
    body('email')
    .isString().withMessage('邮箱必须是字符串')
    .notEmpty().withMessage('邮箱不能为空'),
    body('password')
    .isString().withMessage('密码必须是字符串')
    .notEmpty().withMessage('密码不能为空')
]

exports.register = [
    body('email')
    .isString().withMessage('邮箱必须是字符串')
    .notEmpty().withMessage('邮箱不能为空'),
    body('password')
    .isString().withMessage('密码必须是字符串')
    .notEmpty().withMessage('密码不能为空'),
    body('name')
    .isString().withMessage('昵称必须是字符串')
    .notEmpty().withMessage('昵称不能为空'),
    body('phone')
    .isString().withMessage('手机号码必须是字符串')
    .notEmpty().withMessage('手机号码不能为空')  
]