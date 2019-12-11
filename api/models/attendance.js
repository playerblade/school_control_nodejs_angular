'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define('Attendance', {
    grade: DataTypes.STRING,
    attendance: DataTypes.STRING
  }, {});
  Attendance.associate = function(models) {
    Attendance.belongsTo(models.Student);
    Attendance.belongsTo(models.Subject);
  };
  return Attendance;
};
