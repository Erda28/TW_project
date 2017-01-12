module.exports = function(sequelize, DataTypes) {
    
    var locationcategory = sequelize.define('locationcategory', {
      category: {
        type: DataTypes.STRING,
        field: 'category'
      },
      counter: {
        type: DataTypes.integer,
        field: 'counter'
      }
    }, {
      timestamps: false,
      tableName: 'locationcategory'
    });
    
    return locationcategory;
}