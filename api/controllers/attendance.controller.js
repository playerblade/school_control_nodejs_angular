const models = require('../models/');

function get(req , res) {
	models.Attendance.findAll().then(attendance => {
		res.json(attendance);
	}).catch(error => {
		res.status(400).send({
			message: "Not get"
		});
	});
}

function getLate(req, res) {
	models.sequelize.query('SELECT * FROM Attendances;').then(attendance => {
		res.json(attendance);
	}).catch(error => {
		res.status(400).send({
			message: "Not get"
		});
	});
}
module.exports = {get , getLate};

