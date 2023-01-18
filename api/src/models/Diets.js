const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('diet', {
        id: {
           type: DataTypes.INTEGER,
           autoIncrement: true,
           primaryKey: true
        },

        diet: {
            type: DataTypes.ARRAY(DataTypes.STRING),
            allowNull:true
        }
    })
}
