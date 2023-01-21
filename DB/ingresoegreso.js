module.exports = (sequelize, DataTypes) => {
    const IngresoEgreso = sequelize.define(
      'IngresoEgreso',
      {       
        nombre: {
            type: DataTypes.STRING,
        },  
        tipo: {
          type: DataTypes.STRING,
        },  
        estado: {
          type: DataTypes.BOOLEAN,
        },                
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: 'ingreso_egreso',
      },
    );  
    
    return IngresoEgreso;
  };

 