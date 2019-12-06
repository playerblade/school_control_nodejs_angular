const models = require("../models");

function get(req , res) {
	models.User.findAll().then( user =>{
		res.json(user);
	});
}
function store(req , res){
	models.User.create({
		roleId: req.body.roleId,
		firstName: req.body.firstName,
		lastName: req.body.lastName,
		email: req.body.email,
		password: req.body.password
	}).then(function (data) {
		if (data){
			res.status(200).json({message: "Registered"});
		}else {
			res.status(400).json({message: "Not registered"});
		}
	});
}
function update(req , res){
	// res.status(200).send({ message: req.params.id });
	const newData = req.body;
	models.User.update(newData, {
		where: {id: req.params.id}
	}).then(user =>{
		res.status(200).json({message: "Updated"});
	}).catch(function (error) {
		res.status(400).json({message: "Not updated"});
	});
}
function destroy(req, res ){
	models.User.destroy({
		where: {id: req.params.id}
	}).then(user => {
		res.status(200).json({message: "Deleted"});
	}).catch(function (error) {
		res.status(400).json({message: "Not deleted"});
	});
}
module.exports = {get,store,update,destroy};
