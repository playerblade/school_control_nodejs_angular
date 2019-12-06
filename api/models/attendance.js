'use strict';
module.exports = (sequelize, DataTypes) => {
  const Attendance = sequelize.define('Attendance', {
    grade: DataTypes.STRING,
    presented: DataTypes.STRING,
    late: DataTypes.STRING,
    lack: DataTypes.STRING
  }, {});
  Attendance.associate = function(models) {
    Attendance.belongsTo(models.Student);
    Attendance.belongsTo(models.Subject);
  };
  return Attendance;
};
