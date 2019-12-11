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

function getAdmins(req , res){
	models.sequelize.query('' +
		'SELECT CONCAT_WS(\' \',u.firstName , u.lastName) AS user, u.email , r.role\n' +
		'FROM Users u JOIN Roles r ON  u.roleId = r.id\n' +
		'WHERE r.id = 1;\n'
	).then(users =>{
		res.json(users);
	}).catch(error =>{
		res.status(400).send({
			message: "not get"
		});
	});
}

function getTeachers(req , res){
	models.sequelize.query(
		'SELECT COUNT(u.id) AS user , r.role\n' +
		'FROM Users u JOIN Roles r ON r.id = u.roleId\n' +
		'WHERE r.role = \'teacher\';\n'
	).then(users =>{
		res.json(users);
	}).catch(error =>{
		res.status(400).send({
			message: "not get"
		});
	});
}

module.exports = {get,store,update,destroy , getAdmins , getTeachers};
