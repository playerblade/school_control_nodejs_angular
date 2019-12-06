'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    roleId: DataTypes.INTEGER,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    console.log(models);
    User.belongsTo(models.Role, {
      foreignKey: 'roleId',
      // as: 'roles'
    });
  };
  return User;
};
