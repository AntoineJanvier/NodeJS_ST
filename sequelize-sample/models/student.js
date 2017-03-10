'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    id: {
      type: DataTypes.BIGINT,
        primaryKey: true,
        autoIncrement: true
    },
      lastname: {
        type : DataTypes.STRING
      }
  }, {
      paranoid: true,
      underscored: true,
      freezeTableName: true,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Student;
};