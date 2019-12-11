const models = require("../models");

function get(req , res) {
	models.Subject.findAll().then( subject =>{
		res.json(subject);
	});
}
function store(req , res){
	models.Subject.create({
		name: req.body.name,
		description: req.body.description
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
	models.Subject.update(newData, {
		where: {id: req.params.id}
	}).then(subject =>{
		res.status(200).json({message: "Updated"});
	}).catch(function (error) {
		res.status(400).json({message: "Not updated"});
	});
}
function destroy(req, res ){
	models.Subject.destroy({
		where: {id: req.params.id}
	}).then(user => {
		res.status(200).json({message: "Deleted"});
	}).catch(function (error) {
		res.status(400).json({message: "Not deleted"});
	});
}

function getSubjects(req , res){
	models.sequelize.query(
		'SELECT COUNT(sb.id) AS subject\n' +
		'FROM Subjects sb;\n'
	).then(subject =>{
		res.json(subject);
	}).catch(error =>{
		res.status(400).send({
			message: "not get"
		});
	});
}

module.exports = {get,store,update,destroy, getSubjects};
