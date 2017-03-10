/**
 * Created by antoine on 09/03/17.
 */
'use strict';

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Student', {
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
            associate: function (models) {
                // associations can be defined here
            }
        }
    });
};
// PARANOID : ne supprime pas la ligne en base, met juste une date de suppression, plus long du coup
// Xcase => underscored case
// Précise que la table s'appelle vraiment Student et n'est pas préfixée