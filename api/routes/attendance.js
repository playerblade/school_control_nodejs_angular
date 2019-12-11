var express = require('express');
var router = express.Router();
var attendanceController = require('../controllers/attendance.controller');

router.get('/get', attendanceController.get);
router.get('/get/attendance', attendanceController.getAttendance);
router.get('/get/presented' , attendanceController.getPresented);
router.get('/get/lack' , attendanceController.getLack);

module.exports = router;
