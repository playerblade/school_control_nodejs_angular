var express = require('express');
var router = express.Router();
var attendanceController = require('../controllers/attendance.controller');

router.get('/get', attendanceController.get);
router.get('/get/late', attendanceController.getLate);

module.exports = router;
