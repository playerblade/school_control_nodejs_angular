const models = require('../models/');

function get(req , res) {
	models.Role.findAll().then(role => {
		res.json(role);
	}).catch(error => {
		res.status(400).send({
			message: "Not get"
		});
	});
}

function store(req , res) {
	models.Role.create({
		role: req.body.role
	}).then(function (data) {
		if (data){
			res.status(200).send({
				message: "Registered"
			});
		}else {
			res.status(400).send({
				message: "Not registered"
			});
		}
	});
}

function update(req , res) {
	const newData = req.body;
	models.Role.update(newData, {
		where: {id: req.params.id}
	}).then(role => {
		return res.status(200).json({
			message: "Updated"
		});
	}).catch(error =>{
		return res.status(400).json({
			message: "Not updated"
		});
	});
}

function destroy(req , res){
	models.Role.destroy({
		where: {id: req.params.id}
	}).then(role => {
		return res.status(200).json({
			message: "Deleted"
		});
	}).catch(error =>{
		return res.status(400).json({
			message: "Not deleted"
		});
	});
}
module.exports = {get,store,update,destroy};
