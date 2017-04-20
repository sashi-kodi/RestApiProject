var express = require('express');
var router = express.Router();
var studentsRouter = require('./studentsRouter');
router.use('/students', studentsRouter);
module.exports  = router;