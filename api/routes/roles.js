var express = require('express');
var router = express.Router();
var roleController = require('../controllers/role.controller');

router.get('/get', roleController.get);
router.post('/store', roleController.store);
router.put('/update/:id', roleController.update);
router.delete('/delete/:id', roleController.destroy);

module.exports = router;
