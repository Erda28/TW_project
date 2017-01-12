module.exports = function(sequelize, DataTypes) {
    
    var locations = sequelize.define('locations', {
      name: {
        type: DataTypes.STRING,
        field: 'name'
      },
      id_type: {
        type: DataTypes.INTEGER,
        field: 'id_type'
      }
    }, {
      timestamps: false,
      tableName: 'locations'
    });
    
    return locations;
}