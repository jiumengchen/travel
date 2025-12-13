const express = require('express');
const router = express.Router();
const userController = require('../../controller/userController')
const userValid = require('../../validator/userVaild')

// 登录功能
router.post('/login',userValid.login, userController.login)

// 注册功能
router.post('/register',userValid.register,userController.register)

module.exports = router;