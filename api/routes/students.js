var express = require('express');
var router = express.Router();
var studentController = require('../controllers/student.controller');

router.get('/get', studentController.get);
router.post('/store', studentController.post);
router.put('/update/:id' , studentController.update);
router.delete('/delete/:id', studentController.destroy);
router.get('/get/student' , studentController.getStudent);

module.exports = router;
