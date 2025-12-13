const express = require('express');
const router = express.Router();
const aichatValid = require('../../validator/aichatValid');
const aichatController = require('../../controller/aichatController')
router.post('/aichat',aichatValid.aichat,aichatController.aichat)

module.exports = router