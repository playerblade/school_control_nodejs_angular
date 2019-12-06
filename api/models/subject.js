'use strict';
module.exports = (sequelize, DataTypes) => {
  const Subject = sequelize.define('Subject', {
    name: DataTypes.STRING,
    description: DataTypes.STRING
  }, {});
  Subject.associate = function(models) {
    Subject.hasMany(models.Attendance);
  };
  return Subject;
};
