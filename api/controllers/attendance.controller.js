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

function getAttendance(req, res) {
	models.sequelize.query('' +
		'SELECT CONCAT_WS(\' \',s.firstName , s.lastName) AS student , sb.name AS subject , a.attendance\n' +
		'FROM Students s JOIN Attendances a ON s.id = a.studentId\n' +
		'JOIN Subjects sb ON a.subjectId = sb.id\n' +
		'AND a.attendance = \'F\';'
	).then(attendance => {
		res.json(attendance);
	}).catch(error => {
		res.status(400).send({
			message: "Not get"
		});
	});
}

function getPresented(req , res){
	models.sequelize.query('' +
		'SELECT COUNT(a.attendance) AS totalPresented\n' +
		'FROM Students s JOIN Attendances a ON s.id = a.studentId\n' +
		'JOIN Subjects sb ON a.subjectId = sb.id\n' +
		'WHERE a.attendance = \'P\'\n' +
		'GROUP BY MONTH(a.createdAt);\n'
	).then(attendance => {
		res.json(attendance);
	}).catch(error => {
		res.status(400).send({
			message: "Not get"
		});
	});
}

function getLack(req , res){
	models.sequelize.query(
		'SELECT COUNT(a.attendance) AS totalLack\n' +
		'FROM Students s JOIN Attendances a ON s.id = a.studentId\n' +
		'JOIN Subjects sb ON a.subjectId = sb.id\n' +
		'WHERE a.attendance = \'F\'\n' +
		'GROUP BY MONTH(a.createdAt);\n'
	).then(attendance => {
		res.json(attendance);
	}).catch(error => {
		res.status(400).send({
			message: "Not get"
		});
	});
}

module.exports = {get , getAttendance , getPresented , getLack};

