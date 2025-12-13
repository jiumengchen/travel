const express = require('express');
const router = express.Router();
const usersRouter = require('./api/users');
const aichatRouter = require('./api/aichat');
router.use('/', usersRouter);
router.use('/', aichatRouter);

module.exports = router;