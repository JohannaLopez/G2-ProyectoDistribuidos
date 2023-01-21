module.exports = (sequelize, DataTypes) => {
    const Area = sequelize.define(
      'Area',
      {       
        nombre: {
            type: DataTypes.STRING,
        },              
        join: {
          type: DataTypes.INTEGER,
        },
        prioridad: {
          type: DataTypes.INTEGER,
        },     
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: 'area',
      },
    );     
    return Area;
  };

 