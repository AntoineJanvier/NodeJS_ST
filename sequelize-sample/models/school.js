/**
* Created by Antoine Janvier on 10/03/17.
*/
'use strict';

module.exports = function(sequelize, DataTypes) {
    let School = sequelize.define('School', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        classMethods: {
            associate: function(models) {

            }
        },
        instanceMethods: {
            responsify: function () {
                let result = {};
                result.id = this.id;
                result.name = this.name;
                return result;
            }
        }
    });
    return School;
};