module.exports = (sequelize, DataTypes) => {
    const Empresa = sequelize.define(
      'Empresa',
      {       
        nombre: {
            type: DataTypes.STRING,
        },                  
        createdAt: {
          type: DataTypes.DATE,
        },
        updatedAt: {
          type: DataTypes.DATE,
        },
      },
      {
        tableName: 'empresa',
      },
    );  
    
    return Empresa;
  };

 