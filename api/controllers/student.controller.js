const models = require('../models');

function get(req , res) {
	models.Student.findAll().then(student =>{
		res.json(student);
	}).catch(error => {
		res.status(400).send({
			message: "Not Get"
		});
	});
}

function post(req , res) {
	models.Student.create({
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password
	}).then(function (data) {
		if (data) {
			res.status(200).send({
				message: "Registered"
			});
		}	else {
			res.status(400).send({
				message: "Not Registered"
			});
		}
	});
}

function update(req , res) {
	const newData = req.body;
	models.Student.update(newData, {
		where: {id: req.params.id}
	}).then(student =>{
		return res.status(200).json({
			message: "Updated"
		});
	}).catch(erro =>{
		return res.status(400).json({
			message: "Not updated"
		});
	});
}

function destroy(req , res) {
	models.Student.destroy({
		where: {id: req.params.id}
	}).then(student => {
		return res.status(200).json({
			message: "Deleted"
		});
	}).catch(error => {
		return res.status(400).json({
			message: "Not deleted"
		});
	});
}
module.exports = {get , post ,update , destroy};
