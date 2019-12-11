var express = require('express');
var router = express.Router();
var userController = require('../controllers/user.controller');

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/get', userController.get);
router.post('/store', userController.store);
router.put('/update/:id',userController.update);
router.delete('/delete/:id',userController.destroy);
router.get('/get/admins', userController.getAdmins);
router.get('/get/teachers', userController.getTeachers);

module.exports = router;
