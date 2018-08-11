'use strict';

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('dishes', {
		id: {
			type: DataTypes.INTEGER,
			autoIncrement: true,
			primaryKey: true
		},
		image: {
			type: DataTypes.STRING
		},
		title: {
			type: DataTypes.STRING
		},
		description: {
			type: DataTypes.STRING
		},
		price: {
			type: DataTypes.STRING
		}
	});
};
