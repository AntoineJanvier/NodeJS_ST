/**
 * Created by antoine on 10/03/17.
 */
'use strict';

module.exports = function(sequelize, DataTypes) {
    let Project = sequelize.define('Project', {
        id: {
            type: DataTypes.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.STRING
        },
        release_date: {
            type: DataTypes.DATE
        }
    }, {
        paranoid: true,
        underscored: true,
        freezeTableName: true,
        classMethods: {
            associate: function(models) {
                Project.belongsToMany(models.Student, {
                    through: "StudentProject"
                });
            }
        },
        instanceMethods: {
            responsify: function () {
                let result = {};
                result.id = this.id;
                result.title = this.title;
                result.description = this.description;
                result.release_date = this.release_date;
                return result;
            }
        }
    });
    return Project;
};