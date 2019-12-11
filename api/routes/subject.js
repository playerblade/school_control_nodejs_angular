var express = require('express');
var router = express.Router();
var subjectController = require('../controllers/subject.controller');

router.get('/get', subjectController.get);
router.post('/store', subjectController.store);
router.put('/update/:id',subjectController.update);
router.delete('/delete/:id',subjectController.destroy);
router.get('/get/subject' , subjectController.getSubjects);

module.exports = router;
